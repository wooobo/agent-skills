#!/usr/bin/env node
// orchestrate — herdr 워커 스폰/브리핑/복구/수합의 결정적 부분.
//
// 이 스크립트가 소유하는 것은 "매번 똑같고 틀리면 안 되는 것"뿐이다:
//   - kind별 스폰 플래그 (빼먹으면 워커가 사소한 것마다 blocked 된다)
//   - pane 분할 방향과 기하 한계 (좁으면 승인 UI 판독이 불가능해진다)
//   - pane_id 파싱 (추측하면 엉뚱한 pane을 조작한다)
//   - 결과 파일 경로 (워커 cwd 밖이면 샌드박스에 막힌다)
//   - run manifest (워커→cwd→pane 매핑이 모델 컨텍스트에서 증발하는 것을 막는다)
//
// 판단이 필요한 것은 여기 없다. 무엇을 승인할지, 브리핑에 무엇을 담을지는
// SKILL.md 와 reference/ 가 정한다.
//
// usage:
//   orchestrate.mjs spawn   --run <id> --name <n> --kind <k> --cwd <path> [--mode write|read-only] --total <N> [--extra "<flags>"]
//   orchestrate.mjs prompt  --run <id> --name <n> --body <file> [--timeout <ms>]
//   orchestrate.mjs unstick --run <id> --name <n>
//   orchestrate.mjs status  --run <id>
//   orchestrate.mjs collect --run <id>
//
// 공통: --root <path>  manifest 를 둘 곳 (기본 cwd = 오케스트레이터 프로젝트)

import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync, existsSync, realpathSync } from 'node:fs'
import { join, dirname } from 'node:path'

// ─── kind 테이블 ────────────────────────────────────────────────────────────
//
// 근거는 reference/kinds/<kind>.md 에 있다. 값을 바꾸기 전에 거기부터 읽을 것.
// 여기 없는 kind 도 스폰은 되지만 documented:false 로 기록되고 경고가 붙는다.

const KINDS = {
  codex: {
    // -a never 는 쓰지 않는다. blocked 신호가 사라져서 herdr 로 감시할 수 없게 된다.
    write: ['-s', 'workspace-write', '-a', 'on-request'],
    'read-only': ['-s', 'read-only', '-a', 'untrusted'],
    unstick: ['q'], // transcript 뷰어 탈출
    unstickNote: 'transcript 뷰어(↑/↓ to scroll, q to quit)에서 q 로 빠져나온다',
    // 첫 실행/업데이트 안내 게이트. 이걸 안 닫고 브리핑을 보내면 게이트가 텍스트를
    // 통째로 삼키고 Enter 로 닫힌다 — herdr 상태는 working→done 으로 정상처럼 보인다.
    gates: [/press enter to continue/i],
  },
  claude: {
    // claude 워커는 cwd 의 CLAUDE.md / .claude/skills 를 스스로 읽는다. 플래그 불필요.
    write: [],
    'read-only': [],
    unstick: ['ctrl+o'], // showing detailed transcript 토글 (미검증)
    unstickNote: 'showing detailed transcript 를 ctrl+o 로 토글한다 (미검증 — 실패 시 esc)',
    gates: [/press enter to continue/i, /do you trust the files in this folder/i],
  },
}

// pane 이 이보다 좁으면 승인 UI 가 줄바꿈으로 뭉개져 agent read 로 판독할 수 없다.
// 판독이 안 되면 blocked 대응이 불가능하므로 스폰을 거부하는 편이 낫다.
const MIN_COLS = 80
const MIN_ROWS = 20

// 워커 탭 하나에 담는 슬롯 수. 이보다 많아지면 새 탭을 연다.
// 6 은 감시 가능한 상한에서 온 숫자다 — 284x79 탭이면 3x2 로 95x40 씩 나온다.
const TAB_CAPACITY = 6
const TAB_GRID_COLS = 3

const RESULT_SUBPATH = '.claude/tmp/orchestrator'

// ─── herdr 호출 ─────────────────────────────────────────────────────────────

function herdr(args, { allowFail = false } = {}) {
  try {
    return execFileSync('herdr', args, { encoding: 'utf8', maxBuffer: 16 << 20 })
  } catch (err) {
    if (allowFail) return err.stdout ?? ''
    const detail = (err.stderr || err.stdout || err.message).trim()
    die(`herdr ${args.join(' ')} 실패:\n${detail}`)
  }
}

function herdrJson(args, opts) {
  const raw = herdr(args, opts)
  try {
    return JSON.parse(raw)
  } catch {
    die(`herdr ${args.join(' ')} 출력이 JSON 이 아니다:\n${raw.slice(0, 400)}`)
  }
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

// ─── pane 준비 대기 ─────────────────────────────────────────────────────────
//
// pane split 직후 herdr 는 pane 을 즉시 돌려주지만 셸은 아직 뜨지 않았거나
// 프롬프트를 다 그리지 않았다. 이 상태에서 agent start 를 부르면 두 가지로 깨진다:
//   - agent_pane_busy: 셸 프로세스 자체가 아직 없다
//   - 선두 문자 유실: 프롬프트가 리드로되는 중에 명령이 타이핑돼서
//     `codex ...` 가 `odex ...` 가 되고, "command not found" 뒤 startup 타임아웃
// 후자가 더 나쁘다 — 성공한 것처럼 보이는 경로로 들어갔다가 30초를 버린다.
// 그래서 셸 프로세스 + 화면 출력 두 가지가 다 관측될 때까지 기다린 뒤 잠깐 더 쉰다.

const SHELLS = new Set(['zsh', 'bash', 'fish', 'sh', 'dash', 'ksh', 'nu', 'pwsh'])

function paneForeground(paneId) {
  const info = herdrJson(['pane', 'process-info', '--pane', paneId], { allowFail: true })
  return info?.result?.process_info?.foreground_processes?.[0] ?? null
}

function paneIsShell(paneId) {
  const fg = paneForeground(paneId)
  return Boolean(fg && SHELLS.has(fg.name))
}

function paneVisible(paneId) {
  return herdr(['pane', 'read', paneId, '--source', 'visible'], { allowFail: true }).trim()
}

function waitPaneReady(paneId, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    if (paneIsShell(paneId) && paneVisible(paneId).length > 0) {
      sleep(500) // 프롬프트 리드로가 끝나도록 한 박자 쉰다
      return true
    }
    sleep(250)
  }
  return false
}

// ─── 첫 실행 게이트 닫기 ────────────────────────────────────────────────────
//
// 실측에서 나온 것. codex 를 새로 띄우면 `Press enter to continue` 안내 화면이
// 떠 있을 수 있다. 이 상태에서 브리핑을 제출하면 게이트가 텍스트를 통째로 삼키고
// 끝의 Enter 로 닫힌다. 워커는 빈 composer 로 돌아가고 아무 일도 하지 않는데,
// herdr 상태는 working → done 으로 흘러서 **정상 완료처럼 보인다.**
// 결과 파일이 없다는 것 말고는 탐지할 방법이 없었다. 그래서 스폰 직후에 닫는다.

function clearGates(name, paneId, spec, rounds = 4) {
  const gates = spec?.gates ?? []
  if (gates.length === 0) return 0
  let cleared = 0
  for (let i = 0; i < rounds; i++) {
    const screen = paneVisible(paneId)
    if (!gates.some((re) => re.test(screen))) break
    herdr(['agent', 'send-keys', name, 'enter'], { allowFail: true })
    cleared++
    sleep(700)
  }
  return cleared
}

// ─── manifest ───────────────────────────────────────────────────────────────
//
// 워커→cwd→pane_id 매핑을 디스크에 둔다. 20분 대기 후 컨텍스트가 눌려도
// 이 파일이 살아 있으면 수합이 가능하다.

function manifestPath(root, runId) {
  return join(root, RESULT_SUBPATH, runId, 'manifest.json')
}

function loadManifest(root, runId) {
  const p = manifestPath(root, runId)
  if (!existsSync(p)) die(`manifest 없음: ${p}\n먼저 spawn 을 실행했는지 확인할 것.`)
  return JSON.parse(readFileSync(p, 'utf8'))
}

function saveManifest(root, runId, m) {
  const p = manifestPath(root, runId)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, JSON.stringify(m, null, 2) + '\n')
}

function findWorker(m, name) {
  const w = m.workers.find((x) => x.name === name)
  if (!w) {
    const known = m.workers.map((x) => x.name).join(', ') || '(없음)'
    die(`manifest 에 워커 '${name}' 없음. 등록된 워커: ${known}`)
  }
  return w
}

function resultPath(worker, runId) {
  return join(worker.cwd, RESULT_SUBPATH, runId, `${worker.name}.md`)
}

// ─── 배치: 워커 전용 탭과 격자 ───────────────────────────────────────────────
//
// 오케스트레이터는 **자기 pane 만** 쪼갤 수 있다. 그래서 반복 분할의 결과는 격자가
// 아니라 계단이고, 계단은 격자 용량에 도달하지 못한다. 284x79 창의 이론상 격자
// 용량은 floor(284/80)*floor(79/20)=9 칸이지만 계단으로는 3개가 한계다.
// --ratio 로 워커마다 정확히 80칸씩 잘라도 284 = 80*3 + 44 라 역시 3개다.
// **기하를 아무리 잘 계산해도 pane 분할로는 3을 못 넘는다.**
//
// 새 탭의 root pane 은 항상 전체 크기라 이 제약이 통째로 사라진다. 잃는 것은
// 곁눈질뿐이고, 이 스킬의 감시는 어차피 시각이 아니라 agent read / status 다.
// 그래서 기하가 허용하는 동안은 pane 을 쪼개 나란히 보여주고, 하한에 걸리면
// 조용히 탭으로 넘어간다.

function tabPanes(anyPaneId) {
  return herdrJson(['pane', 'layout', '--pane', anyPaneId]).result.layout.panes
}

function rectOf(paneId) {
  return tabPanes(paneId).find((p) => p.pane_id === paneId)?.rect
}

// 워커 탭 하나를 만들고 격자를 **미리 다 쪼개 둔다.**
//
// 미리 쪼개는 이유: 나중에 슬롯이 필요할 때마다 쪼개면 이미 돌고 있는 워커의 pane 을
// 쪼개게 된다. 그러면 그 워커가 승인 다이얼로그를 띄운 순간 리사이즈로 화면이 다시
// 그려질 수 있고, 하필 그때가 우리가 화면을 읽어야 하는 때다. 에이전트가 하나도
// 없을 때 전부 쪼개 두면 그 위험이 통째로 사라진다.
//
// 격자는 균등하게 만든다. "가장 큰 pane 을 반씩" 그리디로 6칸을 만들면 284x79 에서
// 142x20 이 네 개 나오는데, 하한을 겨우 지키는 크기다. 열을 먼저 ratio 로 나누면
// 95x40 균일이 나온다. ratio 는 원본이 **유지**하는 비율이다.
function buildWorkerTab(label, cwd, slotCount) {
  const args = ['tab', 'create', '--cwd', cwd, '--label', label, '--no-focus']
  const ws = process.env.HERDR_WORKSPACE_ID
  if (ws) args.push('--workspace', ws)
  const res = herdrJson(args)
  const root = res?.result?.root_pane?.pane_id
  const tabId = res?.result?.tab?.tab_id ?? null
  if (!root) {
    die(`tab create 응답에서 root_pane.pane_id 를 못 찾았다:\n${JSON.stringify(res).slice(0, 400)}`)
  }

  const area = rectOf(root)
  const plan = fitPlan(area, slotCount)

  const split = (paneId, direction, keep) =>
    herdrJson([
      'pane', 'split', paneId,
      '--direction', direction,
      '--ratio', String(keep),
      '--cwd', cwd,
      '--no-focus',
    ]).result.pane.pane_id

  // 열 만들기. i 번째 분할 시점에 cur 는 (cols-i) 칸 분량을 갖고 있으므로
  // 1칸만 남기고 나머지를 새 pane 으로 넘긴다. ratio 는 원본이 유지하는 비율이다.
  const columns = [root]
  let cur = root
  for (let i = 1; i < plan.cols; i++) {
    cur = split(cur, 'right', 1 / (plan.cols - i + 1))
    columns.push(cur)
  }

  // 각 열을 계획된 행 수로 나눈다.
  const slots = []
  columns.forEach((col, i) => {
    const rows = plan.rowsPerCol[i]
    let p = col
    slots.push(p)
    for (let r = 1; r < rows; r++) {
      p = split(p, 'down', 1 / (rows - r + 1))
      slots.push(p)
    }
  })

  return { tabId, slots, plan }
}

// 워커 수별 배치. 2~3개는 한 줄에 세로 분할, 4개부터는 열마다 2행씩 채우고
// 마지막 열이 나머지를 갖는다: 4→2x2, 5→2/2/1, 6→3x2.
function gridPlan(n) {
  const cols = n <= 3 ? n : Math.ceil(n / 2)
  const rowsPerCol = []
  let left = n
  for (let i = 0; i < cols; i++) {
    const take = Math.ceil(left / (cols - i))
    rowsPerCol.push(take)
    left -= take
  }
  return { cols, rowsPerCol, slots: n }
}

// 계획대로 나눴을 때 모든 칸이 하한을 지키는지 본다. 창이 작으면 지킬 수 없으므로
// 이 탭에 넣을 개수를 줄인다. 남는 워커는 호출부가 다음 탭으로 보낸다.
// 하한을 깨느니 탭을 하나 더 여는 게 낫다 — 판독 불가능한 pane 은 감시 불가능한 워커다.
function fitPlan(area, want) {
  for (let n = Math.min(want, TAB_CAPACITY); n >= 1; n--) {
    const plan = gridPlan(n)
    const cellW = Math.floor(area.width / plan.cols)
    const worstRows = Math.max(...plan.rowsPerCol)
    const cellH = Math.floor(area.height / worstRows)
    if (cellW >= MIN_COLS && cellH >= MIN_ROWS) return plan
  }
  die(
    `탭 영역(${area.width}x${area.height})이 하한 ${MIN_COLS}x${MIN_ROWS} 짜리 칸 하나도 못 담는다.\n` +
      `사용자에게 창을 키워달라고 요청할 것.`,
  )
}

// 미리 만든 슬롯은 탭 생성 시점의 cwd 를 물려받는다. 워커마다 대상이 다르므로
// 에이전트를 띄우기 전에 그 pane 을 목적지로 옮기고, **옮겨졌는지 확인한다.**
// 확인 없이 진행하면 워커가 엉뚱한 저장소에서 작업한다 — 조용히 틀리는 부류다.
function movePaneTo(paneId, cwd) {
  if (!waitPaneReady(paneId)) return false
  herdr(['pane', 'send-text', paneId, `cd ${JSON.stringify(cwd)}`], { allowFail: true })
  herdr(['pane', 'send-keys', paneId, 'enter'], { allowFail: true })

  const deadline = Date.now() + 8000
  while (Date.now() < deadline) {
    sleep(300)
    const fg = paneForeground(paneId)
    if (fg && realpath(fg.cwd) === realpath(cwd)) return true
  }
  return false
}

function realpath(p) {
  try {
    return realpathSync(p)
  } catch {
    return p
  }
}

// ─── 명령: spawn ────────────────────────────────────────────────────────────

function cmdSpawn(opts) {
  const { root, run: runId, name, kind, cwd } = requireOpts(opts, ['run', 'name', 'kind', 'cwd'])
  const mode = opts.mode ?? 'write'

  if (!/^[a-z][a-z0-9_-]{0,31}$/.test(name)) {
    die(`워커 이름 '${name}' 이 규칙에 안 맞는다: [a-z][a-z0-9_-]{0,31}`)
  }
  if (!['write', 'read-only'].includes(mode)) die(`--mode 는 write 또는 read-only`)
  if (!existsSync(cwd)) die(`작업 디렉토리가 없다: ${cwd}`)

  const m = existsSync(manifestPath(root, runId))
    ? loadManifest(root, runId)
    : { run_id: runId, root, workers: [] }

  if (m.workers.some((w) => w.name === name)) die(`워커 '${name}' 은 이미 이 run 에 있다`)
  const clash = m.workers.find((w) => w.cwd === cwd)
  if (clash) {
    die(
      `'${cwd}' 에는 이미 워커 '${clash.name}' 이 붙어 있다.\n` +
        `한 디렉토리에 워커 둘은 파일이 충돌한다. worktree 를 쓸지 사용자에게 확인할 것.`,
    )
  }

  // 워커 이름은 herdr 전역이라 지난 run 의 워커와 충돌할 수 있다. manifest 는 이 run
  // 안에서만 막아주므로 살아있는 목록을 직접 본다. 같은 이름으로 스폰하면 이후의
  // prompt/read/send-keys 가 남의 워커로 갈 수 있다 — 사용자가 쓰고 있을 수도 있는 워커로.
  const alive = liveStatuses()
  if (alive.has(name)) {
    die(
      `'${name}' 이라는 워커가 이미 herdr 에 살아 있다 (상태: ${alive.get(name)}).\n` +
        `지난 run 의 잔여일 수 있다. 다른 이름을 쓰거나, 그 워커를 정리할지 사용자에게 확인할 것.\n` +
        `확인: herdr agent get ${name}`,
    )
  }

  const spec = KINDS[kind]
  const documented = Boolean(spec)
  // --extra 는 KINDS 의 검증된 플래그 뒤에 덧붙는다. 모델/추론 강도처럼 kind 별
  // 기본값이 아니라 이번 run 에서만 바꾸고 싶은 것에 쓴다. 샌드박스/승인 플래그를
  // 여기서 덮어쓰면 blocked 감시가 깨지므로 그런 용도로는 쓰지 마라.
  const extraArgs = opts.extra ? opts.extra.trim().split(/\s+/) : []
  const agentArgs = [...(documented ? spec[mode] : []), ...extraArgs]

  // ── 슬롯 할당 ──
  //
  // 호출자(오케스트레이터)의 pane 은 절대 쪼개지 않는다. 워커는 전용 탭에만 들어간다.
  // 오케스트레이터는 전체 폭을 유지해야 승인 화면을 읽고 결과를 정리할 수 있고,
  // 자기 pane 을 쪼개면 워커가 늘수록 자기 시야가 좁아지는 이상한 구조가 된다.
  //
  // --total 은 이번 run 의 워커 총수다. 첫 스폰 때 그 수만큼 격자를 **미리** 다 쪼갠다.
  // 필요할 때마다 쪼개면 이미 돌고 있는 워커의 pane 을 쪼개게 되는데, 하필 그 워커가
  // 승인 다이얼로그를 띄운 순간이면 리사이즈로 화면이 다시 그려져 판독이 깨진다.
  const total = Math.max(1, parseInt(opts.total ?? '1', 10) || 1)

  m.tabs ??= []
  const takenPanes = new Set(m.workers.map((w) => w.pane_id))
  let slot = null
  for (const t of m.tabs) {
    const free = t.slots.find((p) => !takenPanes.has(p))
    if (free) { slot = { paneId: free, tabId: t.tab_id }; break }
  }

  if (!slot) {
    const placed = m.workers.length
    const want = Math.max(1, Math.min(total - placed, TAB_CAPACITY))
    const label = `workers-${runId}${m.tabs.length ? `-${m.tabs.length + 1}` : ''}`
    const built = buildWorkerTab(label, cwd, want)
    m.tabs.push({ tab_id: built.tabId, slots: built.slots, plan: built.plan })
    saveManifest(root, runId, m)
    slot = { paneId: built.slots[0], tabId: built.tabId }
    console.log(
      `tab      ${built.tabId}  ${built.plan.cols}열 [${built.plan.rowsPerCol.join('/')}] ` +
        `= 슬롯 ${built.slots.length}개`,
    )
  }

  const paneId = slot.paneId
  const tabId = slot.tabId
  const placement = 'tab'

  // 미리 만든 슬롯은 탭 생성 시점의 cwd 를 갖고 있다. 이 워커의 대상으로 옮기고
  // 옮겨졌는지 확인한다 — 확인 없이 띄우면 워커가 엉뚱한 저장소에서 작업한다.
  if (!movePaneTo(paneId, cwd)) {
    m.workers.push({ name, kind, mode, cwd, pane_id: paneId, tab_id: tabId, placement, documented, status: 'cd_failed' })
    saveManifest(root, runId, m)
    die(
      `슬롯 ${paneId} 를 ${cwd} 로 옮기지 못했다.\n` +
        `그대로 띄우면 워커가 엉뚱한 디렉토리에서 작업한다. 멈추고 보고할 것.\n` +
        `확인: herdr pane read ${paneId} --source visible`,
    )
  }

  const startArgs = ['agent', 'start', name, '--kind', kind, '--pane', paneId]
  if (agentArgs.length) startArgs.push('--', ...agentArgs)

  // 재시도는 딱 한 번, 그것도 "명령이 셸에 안 먹은 경우"에만 한다.
  // 포그라운드가 아직 셸이면 타이핑이 유실된 것이므로 줄을 비우고 다시 친다.
  // 포그라운드가 셸이 아니면 에이전트는 이미 떠 있고 herdr 가 감지를 못 한 것이라,
  // 다시 치면 돌고 있는 에이전트에 쓰레기 입력이 들어간다. 그때는 멈추고 보고한다.
  let lastErr = null
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      execFileSync('herdr', startArgs, { encoding: 'utf8' })
      lastErr = null
      break
    } catch (err) {
      lastErr = (err.stderr || err.stdout || err.message).trim()
      if (attempt === 2) break
      if (!paneIsShell(paneId)) break
      herdr(['pane', 'send-keys', paneId, 'ctrl+c'], { allowFail: true })
      herdr(['pane', 'send-keys', paneId, 'ctrl+u'], { allowFail: true })
      waitPaneReady(paneId, 8000)
    }
  }

  if (lastErr) {
    m.workers.push({ name, kind, mode, cwd, pane_id: paneId, tab_id: tabId, placement, documented, status: 'start_failed' })
    saveManifest(root, runId, m)
    die(
      `agent start 실패 (pane ${paneId} 는 살아 있다):\n${lastErr}\n` +
        `준비 대기 후 1회 재시도까지 했다. 더 재시도하지 말 것.\n` +
        `herdr pane read ${paneId} --source visible 로 화면을 확인하고 사용자에게 보고할 것.`,
    )
  }

  const gatesCleared = clearGates(name, paneId, spec)

  mkdirSync(join(cwd, RESULT_SUBPATH, runId), { recursive: true })

  // 분할 시점의 기하 검사는 스냅샷이다. 사용자가 그 사이에 창을 줄이면 하한을 밑도는
  // pane 이 나올 수 있다. 되돌릴 수는 없으니 실측치를 알려서 판단을 넘긴다.
  // 탭 배치는 항상 전체 크기라 이 검사가 필요 없다.
  const after = herdrJson(['pane', 'layout', '--pane', paneId], { allowFail: true })
  const got = after?.result?.layout?.panes?.find((p) => p.pane_id === paneId)?.rect
  const tooSmall = placement === 'pane' && got && (got.width < MIN_COLS || got.height < MIN_ROWS)

  m.workers.push({ name, kind, mode, cwd, pane_id: paneId, tab_id: tabId, placement, documented, status: 'spawned' })
  saveManifest(root, runId, m)

  console.log(`spawned  ${name}  kind=${kind} mode=${mode} tab=${tabId} pane=${paneId}`)
  console.log(`  cwd    ${cwd}`)
  console.log(`  result ${join(cwd, RESULT_SUBPATH, runId, `${name}.md`)}`)
  if (gatesCleared > 0) console.log(`  첫 실행 안내 게이트 ${gatesCleared}개를 닫았다`)
  if (tooSmall) {
    console.log(
      `  ⚠ 분할 결과가 ${got.width}x${got.height} 로 하한(${MIN_COLS}x${MIN_ROWS})을 밑돈다.\n` +
        `    분할 전 검사는 통과했으니 그 사이 창이 줄어든 것이다. 승인 UI 판독이\n` +
        `    어려울 수 있다. 사용자에게 창을 키워달라고 요청할지 물을 것.`,
    )
  }
  if (!documented) {
    console.log(
      `  ⚠ '${kind}' 는 reference/kinds/ 에 문서가 없다. 플래그 없이 스폰했다.\n` +
        `    blocked 대응과 뷰어 탈출이 불확실하니 사용자에게 알릴 것.`,
    )
  }
}

// ─── 명령: prompt ───────────────────────────────────────────────────────────
//
// 브리핑 본문은 모델이 판단해서 파일로 쓴다. 이 명령은 거기에 결과 회수 계약을
// 붙여서 제출한다. 계약과 경로를 스크립트가 소유하는 이유는, 그게 손으로 조립될
// 때마다 워커 cwd 밖을 가리켜서 샌드박스에 막히는 사고가 났기 때문이다.

function contractFor(worker, runId) {
  const path = resultPath(worker, runId)
  return `
[완료 시]
완료되면 전체 결과를 아래 경로에 마크다운으로 작성해라.
이 경로는 네 작업 경로 안이므로 써도 되는 곳이다:

${path}

형식:
## 요약        (3줄 이내)
## 변경한 파일  (경로 목록, 각 한 줄 설명)
## 확인 필요    (판단이 갈렸거나 사용자 결정이 필요한 것 — 없으면 "없음")
## 남은 작업    (없으면 "없음")

파일을 쓴 뒤, 마지막 응답은 그 파일 경로 한 줄만 출력해라. 다른 말을 덧붙이지 마라.
`.trimStart()
}

function cmdPrompt(opts) {
  const { root, run: runId, name, body } = requireOpts(opts, ['run', 'name', 'body'])
  if (!existsSync(body)) die(`브리핑 본문 파일이 없다: ${body}`)

  const m = loadManifest(root, runId)
  const worker = findWorker(m, name)
  const text = readFileSync(body, 'utf8').trimEnd() + '\n\n' + contractFor(worker, runId)

  // --until working|blocked 는 "제출이 먹혔다"만 확인하고 즉시 돌아온다.
  // 완료 대기가 아니다 — 전원에게 제출한 뒤 따로 wait 해야 팬아웃이 직렬로 무너지지 않는다.
  const timeout = opts.timeout ?? '30000'
  const out = herdr(
    ['agent', 'prompt', name, text, '--wait', '--until', 'working', '--until', 'blocked', '--timeout', timeout],
    { allowFail: true },
  )

  worker.status = 'briefed'
  worker.briefed_bytes = text.length
  saveManifest(root, runId, m)

  console.log(`briefed  ${name}  ${text.length} bytes`)
  const trimmed = out.trim()
  if (/agent_prompt_stalled/.test(trimmed)) {
    console.log(
      `  ⚠ agent_prompt_stalled — 재전송하지 말 것. 프롬프트가 두 번 들어갈 수 있다.\n` +
        `    herdr agent read ${name} --source recent-unwrapped --lines 80 으로 화면을 확인할 것.`,
    )
    return
  }

  // 제출이 "성공"해도 텍스트가 워커에게 안 갔을 수 있다 — 안내 게이트가 삼키면
  // herdr 상태는 working → done 으로 정상처럼 흐르고, 워커는 아무 일도 하지 않는다.
  // 실측에서 실제로 겪었고, 결과 파일이 없다는 것 말고는 탐지가 안 됐다.
  // run_id 는 계약에 박혀 있으니 화면에 그게 보이면 텍스트가 도달한 것이다.
  let landed = false
  for (let i = 0; i < 6; i++) {
    sleep(1000)
    if (herdr(['agent', 'read', name, '--source', 'recent-unwrapped', '--lines', '200'], {
      allowFail: true,
    }).includes(runId)) {
      landed = true
      break
    }
  }

  if (landed) {
    console.log(`  제출 확인됨 (화면에서 run_id 관측)`)
  } else {
    console.log(
      `  ⚠ 브리핑이 워커 화면에 나타나지 않는다. 안내 게이트가 삼켰을 수 있다.\n` +
        `    herdr agent read ${name} --source visible --lines 20 으로 확인할 것.\n` +
        `    빈 composer 라면 게이트를 닫고(enter) 이 명령을 한 번 더 실행해도 된다 —\n` +
        `    텍스트가 도달하지 않았으므로 중복 실행이 아니다.`,
    )
  }
}

// ─── 명령: unstick ──────────────────────────────────────────────────────────

function cmdUnstick(opts) {
  const { root, run: runId, name } = requireOpts(opts, ['run', 'name'])
  const worker = findWorker(loadManifest(root, runId), name)
  const spec = KINDS[worker.kind]

  if (!spec) {
    die(
      `'${worker.kind}' 는 문서화된 kind 가 아니라 탈출 키를 모른다.\n` +
        `herdr agent read ${name} --source visible 로 화면을 읽고 직접 판단할 것.`,
    )
  }

  herdr(['agent', 'send-keys', name, ...spec.unstick])
  console.log(`unstick  ${name}  keys=${spec.unstick.join(' ')}  (${spec.unstickNote})`)
  console.log(herdr(['agent', 'get', name], { allowFail: true }).trim())
}

// ─── 명령: status / collect ─────────────────────────────────────────────────

function liveStatuses() {
  const out = herdr(['agent', 'list'], { allowFail: true })
  try {
    const map = new Map()
    for (const a of JSON.parse(out).result.agents) {
      if (a.name) map.set(a.name, a.agent_status)
      map.set(a.pane_id, a.agent_status)
    }
    return map
  } catch {
    return new Map()
  }
}

function cmdStatus(opts) {
  const { root, run: runId } = requireOpts(opts, ['run'])
  const m = loadManifest(root, runId)
  const live = liveStatuses()

  console.log(`run: ${runId}   manifest: ${manifestPath(root, runId)}\n`)
  for (const w of m.workers) {
    const file = resultPath(w, runId)
    const done = existsSync(file)
    const state = live.get(w.name) ?? live.get(w.pane_id) ?? 'gone'
    // 완료 판정은 상태가 아니라 파일이다. idle 은 실패하고 멈춘 것일 수도 있다.
    const verdict = done ? 'DONE' : state === 'working' ? 'RUNNING' : 'PENDING'
    console.log(
      `${verdict.padEnd(8)} ${w.name.padEnd(24)} kind=${w.kind} pane=${w.pane_id} herdr=${state}`,
    )
    if (!done) console.log(`         결과 없음: ${file}`)
  }
  console.log(`\n완료 판정은 herdr 상태가 아니라 결과 파일 존재로 한다.`)
}

const PLACEHOLDERS = new Set(['없음', '없습니다', 'none', 'n/a', 'na', '-', '해당없음'])

function countNeedsReview(text) {
  let inBlock = false
  let n = 0
  for (const raw of text.split('\n')) {
    if (/^##\s*확인\s*필요/.test(raw)) { inBlock = true; continue }
    if (/^##/.test(raw)) { inBlock = false; continue }
    if (!inBlock) continue
    const line = raw.replace(/^\s*[-*+]\s*/, '').replace(/\s+/g, '')
    if (line && !PLACEHOLDERS.has(line.toLowerCase())) n++
  }
  return n
}

function cmdCollect(opts) {
  const { root, run: runId } = requireOpts(opts, ['run'])
  const m = loadManifest(root, runId)

  console.log(`run: ${runId}\n`)
  let done = 0
  let missing = 0
  const undocumented = []

  for (const w of m.workers) {
    const file = resultPath(w, runId)
    if (!w.documented) undocumented.push(w)
    if (!existsSync(file)) {
      missing++
      console.log(`MISSING  ${w.name.padEnd(24)} ${file}`)
      continue
    }
    done++
    const text = readFileSync(file, 'utf8')
    const needs = countNeedsReview(text)
    const flag = needs > 0 ? `  ⚠ 확인필요 ${needs}줄` : ''
    console.log(`DONE     ${w.name.padEnd(24)} ${text.split('\n').length} lines${flag}`)
    console.log(`         ${file}`)
  }

  console.log(`\n완료 ${done}건 / 미완료 ${missing}건.`)
  if (done > 0) console.log(`각 파일을 읽고 '확인 필요' 섹션을 사용자 보고에 올릴 것.`)
  if (missing > 0) {
    console.log(`MISSING 은 아직 작업 중이거나 회수 계약을 못 지킨 것이다. 보고에서 빼지 말 것.`)
  }
  if (undocumented.length > 0) {
    console.log(
      `문서 없는 kind 로 위임된 워커: ${undocumented.map((w) => `${w.name}(${w.kind})`).join(', ')}\n` +
        `보고에 남기고, 겪은 것을 reference/kinds/ 에 기록할 후보로 삼을 것.`,
    )
  }
  const panes = m.workers.filter((w) => w.placement !== 'tab')
  const tabs = m.workers.filter((w) => w.placement === 'tab')
  if (panes.length) console.log(`\n살아있는 pane: ${panes.map((w) => w.pane_id).join(', ')}`)
  if (tabs.length) {
    console.log(
      `${panes.length ? '' : '\n'}이 run 이 만든 탭: ` +
        `${tabs.map((w) => `${w.tab_id ?? '?'}(${w.name})`).join(', ')}\n` +
        `탭 워커는 화면에 안 보이니 정리를 잊기 쉽다. 보고에 반드시 포함할 것.`,
    )
  }
  console.log(`정리 여부는 사용자에게 확인할 것. 내가 만들지 않은 pane·탭은 닫지 않는다.`)
}

// ─── 진입점 ─────────────────────────────────────────────────────────────────

function die(msg) {
  console.error(`orchestrate: ${msg}`)
  process.exit(1)
}

function requireOpts(opts, keys) {
  for (const k of keys) if (!opts[k]) die(`--${k} 가 필요하다`)
  return opts
}

function parseArgs(argv) {
  const opts = { root: process.cwd() }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (!a.startsWith('--')) die(`알 수 없는 인자: ${a}`)
    const key = a.slice(2)
    const val = argv[++i]
    if (val === undefined) die(`--${key} 에 값이 없다`)
    opts[key] = val
  }
  return opts
}

const USAGE = `usage:
  orchestrate.mjs spawn   --run <id> --name <n> --kind <k> --cwd <path> [--mode write|read-only] --total <N> [--extra "<flags>"]
  orchestrate.mjs prompt  --run <id> --name <n> --body <briefing-file> [--timeout <ms>]
  orchestrate.mjs unstick --run <id> --name <n>
  orchestrate.mjs status  --run <id>
  orchestrate.mjs collect --run <id>

공통: --root <path>   manifest 위치 (기본: 현재 디렉토리)
--total 은 이번 run 의 워커 총수. 첫 스폰 때 그 수만큼 격자를 미리 만든다
(2→세로2, 3→세로3, 4→2x2, 5→2/2/1, 6→3x2). 6 을 넘으면 새 탭을 연다.
호출자 pane 은 쪼개지 않는다 — 워커는 전용 탭에만 들어간다.
--extra 는 kind 기본 플래그 뒤에 덧붙는다 (예: --extra "-m gpt-5.6-luna").
샌드박스·승인 플래그를 여기서 덮어쓰지 마라. blocked 감시가 깨진다.
문서화된 kind: ${Object.keys(KINDS).join(', ')}`

const [cmd, ...rest] = process.argv.slice(2)
const COMMANDS = { spawn: cmdSpawn, prompt: cmdPrompt, unstick: cmdUnstick, status: cmdStatus, collect: cmdCollect }

if (!cmd || cmd === '--help' || cmd === '-h') {
  console.log(USAGE)
  process.exit(cmd ? 0 : 2)
}
if (!COMMANDS[cmd]) die(`알 수 없는 명령 '${cmd}'\n\n${USAGE}`)
if (!process.env.HERDR_ENV) die(`herdr pane 밖이다 (HERDR_ENV 없음). herdr pane 안에서 실행할 것.`)

COMMANDS[cmd](parseArgs(rest))
