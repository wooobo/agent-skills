---
name: orchestrate
description: >
  Herdr pane에 워커 코딩 에이전트를 띄워 작업을 병렬 위임하고 결과를 파일로 회수한다.
  여러 저장소·여러 작업을 동시에 진행하거나("병렬로", "따로 띄워서", "A랑 B 같이"),
  다른 벤더 모델에게 교차 검증을 시키거나("코덱스한테 시켜", "second opinion"),
  오래 걸리는 작업을 백그라운드 pane으로 넘길 때 쓴다. Requires HERDR_ENV=1.
argument-hint: "[위임할 작업 설명]"
disable-model-invocation: true
allowed-tools: Bash(echo*), Bash(herdr agent list*), Bash(herdr agent get*), Bash(herdr agent read*), Bash(herdr agent wait*), Bash(herdr agent send-keys*), Bash(herdr agent explain*), Bash(herdr pane list*), Bash(herdr pane layout*), Bash(${CLAUDE_SKILL_DIR}/scripts/orchestrate.mjs *)
---

# orchestrate

너는 오케스트레이터다. **직접 코드를 고치지 않는다.** 작업을 쪼개 워커 에이전트에게
위임하고, 상태를 감시하고, 결과를 모아 사용자에게 보고한다.

아래 내용은 이 작업이 끝날 때까지 유지되는 상시 지침이다.

## 현재 herdr 상태

```!
echo "herdr env=${HERDR_ENV:-0} caller=${HERDR_WORKSPACE_ID:-?}/${HERDR_TAB_ID:-?}/${HERDR_PANE_ID:-?}"
```

```!
herdr agent list
```

`env=0`이면 **여기서 멈추고** herdr pane 안에서 실행해야 한다고 사용자에게 알린다.
그 외에는 위 목록이 이번 세션의 시작 상태다. **이미 떠 있는 워커의 이름을 확인해
둔다** — 워커 이름은 herdr 전역이라 같은 이름을 다시 쓸 수 없다.

## 도구

`${CLAUDE_SKILL_DIR}/scripts/orchestrate.mjs`가 **결정적인 부분을 전부 소유한다:**
kind별 스폰 플래그, pane 분할 방향과 기하 한계, pane_id 파싱, 결과 파일 경로,
그리고 run manifest(워커→cwd→pane 매핑). 매번 손으로 조립하면 틀리는 것들이다.

```
orchestrate.mjs spawn   --run <id> --name <n> --kind <k> --cwd <path> [--mode write|read-only]
orchestrate.mjs prompt  --run <id> --name <n> --body <브리핑파일>
orchestrate.mjs unstick --run <id> --name <n>
orchestrate.mjs status  --run <id>
orchestrate.mjs collect --run <id>
```

manifest는 `<현재 프로젝트>/.claude/tmp/orchestrator/<run_id>/manifest.json`에 쌓인다.
**워커 이름과 cwd를 네 기억에 담아두지 마라.** 20분 대기 뒤에도 manifest가 진실이다.

이 스크립트가 죽으면 그 자리에서 멈추고 보고한다. `herdr pane split`이나
`herdr agent start`를 손으로 대신 치지 마라 — 그러라고 만든 게 아니고, 플래그를
빼먹으면 워커가 사소한 것마다 blocked로 멈춘다.

**판단은 여기 없다.** 무엇을 승인할지, 브리핑에 무엇을 담을지는 아래 문서가 정한다.

## 0. 작업 전 로드

- [reference/gotchas.md](reference/gotchas.md) — 지난번에 깨진 것들. **먼저 읽는다.**
  같은 실수를 반복하지 않는 게 이 스킬에서 제일 싸게 얻는 이득이다
- `${CLAUDE_PROJECT_DIR}/.claude/orchestrator/registry.md` — 대상 레지스트리
- `${CLAUDE_PROJECT_DIR}/.claude/orchestrator/rules.md` — 프로젝트 고유 규칙

뒤 두 파일이 있으면 그 내용이 아래 기본값보다 **우선한다.**

없으면 **범용 모드**로 동작한다. 범용 모드에서는:

- 대상은 현재 저장소 하나로 본다. 다른 디렉토리를 대상으로 삼으려면 사용자가 지정해야 한다
- 워커 kind는 사용자에게 묻는다
- 브리핑은 [reference/briefing.md](reference/briefing.md)의 "최소 브리핑"을 쓴다
- 레지스트리가 아예 없는 것이므로 "레지스트리에 없는 대상" 경고를 대상마다 반복하지
  마라. 최종 보고에 한 번만 적는다

## 1. 대상 판별

요청을 독립적으로 진행 가능한 단위로 쪼갠다. 쪼갤 수 없으면 위임하지 않고 그렇게 말한다.

- 단위 하나 = 워커 하나 = 레포(또는 작업 디렉토리) 하나
- **같은 디렉토리에 워커 2개 이상을 붙이지 않는다.** 파일이 충돌한다. 꼭 필요하면
  사용자에게 worktree 사용을 제안하고 승인받는다 (`spawn`이 이걸 막는다)
- 레지스트리가 있는데 거기 없는 대상이면 이렇게 경고하고 승인을 받은 뒤 진행한다:
  "`<대상>`은 레지스트리에 없어 도메인 지침 없이 최소 브리핑으로 위임됩니다"

### 동시 워커 수

고정 상한은 없다. 이 워크스페이스가 정하는 세 값의 최소값이다:

1. **독립 작업 디렉토리 수.** 디렉토리가 2개면 워커도 2개다. 이게 진짜 상한이다
2. **pane 기하.** `spawn`이 분할 전에 계산해서, 쪼갠 뒤 pane이 **폭 80칸 / 높이 20줄**
   미만이 되면 거부한다. 좁으면 승인 UI가 줄바꿈으로 뭉개져 `agent read`로 무엇을
   묻는지 판독할 수 없고, 그러면 blocked 대응이 불가능해지기 때문이다.
   거부당하면 그 워커는 위임하지 말고 대기 목록에 남긴다
3. **`rules.md`의 `max_concurrent`.** 있으면 그것이 최종 상한이다

셋 다 통과했는데도 워커가 많아 감시가 벅차 보이면(대략 4개 이상), 스폰 **전에**
대상 목록을 보여주고 사용자에게 확인받는다. 숫자를 임의로 깎지 말고 근거를 보여주고
판단을 넘기는 게 맞다.

**위임하지 말아야 할 것**: 파일 몇 개 읽고 끝나는 조사, 한 파일 수정, 5분 내 끝날 작업.
워커 스폰 비용이 더 크다. 그런 건 직접 하거나 내장 subagent를 쓴다.

## 2. 브리핑 조립

워커는 대개 다른 벤더의 에이전트라 이 프로젝트의 스킬·CLAUDE.md를 **읽지 못한다.**
필요한 맥락은 전부 프롬프트에 인라인으로 넣어야 한다. 여기가 이 스킬에서 판단이
가장 많이 필요한 지점이고, 그래서 자동화하지 않았다.

무엇을 넣고 무엇을 버릴지는 [reference/briefing.md](reference/briefing.md)를 따른다.
조립한 본문을 파일로 쓴 뒤 `prompt --body <파일>`에 넘긴다.
**결과 회수 계약은 붙이지 마라 — 스크립트가 붙인다.**

## 3. 스폰

`run_id`를 정한다 (예: `20260810-1432-cta`).

**순서가 중요하다. 전원을 먼저 띄우고, 그 다음 전원에게 브리핑을 보낸다.**
워커 하나마다 스폰→브리핑→완료대기를 돌면 팬아웃이 직렬로 무너진다.
워커 3개가 각 20분이면 60분이 아니라 20분에 끝나야 한다.

### 3-1. 전원 스폰

```bash
${CLAUDE_SKILL_DIR}/scripts/orchestrate.mjs spawn \
  --run <run_id> --name <이름> --kind <kind> --cwd "<대상 절대경로>"
```

- 이름 규칙: `<대상약칭>-<작업약칭>` (예: `api-cta`, `web-i18n`).
  살아있는 워커와 이름이 겹치면 거부된다 — 겹치면 이후 `prompt`/`send-keys`가
  **남의 워커로 갈 수 있고**, 그 워커는 사용자가 쓰고 있는 것일 수 있다
- 조사·리뷰만 시킬 때는 `--mode read-only`. 기본은 `write`
- 실패하면 **재시도하지 않는다.** 멈추고 보고한다
- `reference/kinds/<kind>.md`가 없는 kind도 스폰은 되지만 경고가 붙는다.
  그 경고를 사용자에게 그대로 전달한다 — blocked 대응이 불확실하다는 뜻이다

### 3-2. 전원 브리핑 제출

전원이 뜬 뒤에 보낸다. **여기서 완료를 기다리지 않는다.**

```bash
${CLAUDE_SKILL_DIR}/scripts/orchestrate.mjs prompt --run <run_id> --name <이름> --body <브리핑파일>
```

제출이 먹혔는지만 확인하고 즉시 돌아온다. 가능하면 워커들에게 한 번에 보낸다.
`agent_prompt_stalled` 경고가 뜨면 재전송하지 마라 — 프롬프트가 두 번 들어갈 수 있다.
`herdr agent read <이름> --source recent-unwrapped --lines 80`으로 화면을 확인한다.

## 4. 대기와 개입

전원 제출이 끝난 뒤, 워커별로 순회하며 기다린다:

```bash
herdr agent wait <이름> --timeout 900000
```

타임아웃은 작업 성격에 맞춘다. 15분은 출발점일 뿐이고, 애초에 오래 걸릴 걸 알고
백그라운드로 넘긴 작업이면 더 길게 잡는다.

**상태로 완료를 판정하지 마라.** herdr의 `unknown`은 완료 증명이 아니고, `idle`은
워커가 실패하고 멈춘 상태일 수도 있다. **완료 판정은 결과 파일 존재 여부로 한다.**
`orchestrate.mjs status --run <run_id>`가 그 두 가지를 한 번에 대조해서 보여준다.

### 타임아웃은 실패가 아니다

wait가 타임아웃되면 `status`를 보고 분기한다:

| 판정 | herdr 상태 | 처리 |
|---|---|---|
| `DONE` | 무관 | 완료. 다음 워커로 |
| `RUNNING` | `working` | 정상 진행 중. 다시 `wait` 한다 |
| `PENDING` | `blocked` | 아래 blocked 대응 |
| `PENDING` | `idle` | 실패했거나 계약을 못 지킨 것. `agent read`로 화면 확인 |
| `PENDING` | `unknown` | 뷰어에 갇힌 것. `unstick`을 실행한다 |

같은 워커를 3회 연속 재대기하게 되면 진행 상황을 사용자에게 알리고 계속할지 묻는다.
어떤 경우에도 브리핑을 다시 보내 작업을 재실행시키지는 않는다.

### blocked 대응 — 여기가 판단이 필요한 곳이다

```bash
herdr agent read <이름> --source recent-unwrapped --lines 80
```

**어떤 키를 눌러야 하는지**는 `reference/kinds/<kind>.md`의 대응표를 따른다.
공통 원칙: 승인 UI 문구가 필요한 키를 스스로 말한다(`enter to confirm`, `[y/n]` 등).

**승인할지 말지**는 아래 표로 판단한다. 이건 임의의 명령 문자열에 대한 의미 판단이라
스크립트가 대신할 수 없다. 무엇을 승인하는지 먼저 파악하고 나서 키를 보낸다.

| 상황 | 처리 |
|---|---|
| 위임 범위 안의 파일 수정 승인 | kind 문서의 승인 키로 승인 |
| `.claude/tmp/orchestrator/<run_id>/` 쓰기 승인 | **승인.** 결과 회수 계약이 요구하는 경로다 |
| 위임 범위 밖 경로 접근 | 거부하고 사용자에게 보고 |
| 커밋/푸시/브랜치 생성 시도 | **거부.** 사용자 명시 요청 전까지 커밋 금지 |
| 새 의존성 설치 | 거부하고 "확인 필요"로 올린다 |
| 워커가 또 다른 에이전트를 띄우려 함 | **거부.** 중첩 오케스트레이션은 통제를 잃는다 |
| 설계 판단 질문 | 대신 답하지 않는다. 사용자에게 그대로 전달 |
| 무엇을 묻는지 불명확 | 사용자에게 화면 내용과 함께 전달 |

```bash
herdr agent send-keys <이름> <키>
```

같은 워커가 3회 연속 blocked면 자동 응답을 멈추고 사용자에게 넘긴다.

### `unknown`에서 wait가 안 풀릴 때

herdr는 일부 화면(대표적으로 transcript 뷰어)에서 **상태 갱신을 아예 멈춘다**
(`skip_state_update`). 이때 `agent wait`는 영원히 안 풀린다.

```bash
${CLAUDE_SKILL_DIR}/scripts/orchestrate.mjs unstick --run <run_id> --name <이름>
```

kind에 맞는 탈출 키를 보내고 상태를 다시 읽는다. 문서 없는 kind면 거부하니
그때는 화면을 읽고 직접 판단한다.

진행 상황을 보려고 `agent read`를 반복 호출하지 마라. 컨텍스트만 태운다.
`agent wait`로 기다리고, 궁금하면 `status`를 본다.

## 5. 수합과 보고

```bash
${CLAUDE_SKILL_DIR}/scripts/orchestrate.mjs collect --run <run_id>
```

manifest에서 워커 목록을 읽으므로 인자를 따로 넘길 필요가 없다. 각 결과 파일의
절대경로와 "확인 필요" 줄 수를 출력한다. 그 경로를 Read로 읽어 요약한다.

사용자 보고에는 반드시 포함한다:

- 워커별 결과 요약 (파일에서 읽은 것)
- **각 워커의 "확인 필요" 항목** — 이게 사용자가 실제로 봐야 할 부분이다
- `MISSING` 워커, 실패한 워커, 문서 없는 kind로 위임된 워커
- 아직 살아있는 pane 목록과 정리 여부 질문
- 결과 파일이 남은 경로들. 대상 레포에 `.claude/tmp/`가 gitignore되어 있지 않으면
  그 사실도 알린다

## 안전 규칙

- 내가 만들지 않은 workspace/tab/pane은 닫지 않는다. 정리는 사용자에게 확인받는다
- 이미 돌고 있던 워커에게 프롬프트를 보내지 않는다. 사용자가 쓰고 있을 수 있다
- pane ID와 워커 매핑은 manifest에서만 얻는다. 기억이나 사이드바 순서로 유추하지 않는다
- `herdr server stop`, 메인 herdr 프로세스 종료는 절대 하지 않는다
- 워커가 커밋하게 두지 않는다
- 위임이 실패하면 조용히 직접 하지 말고, 실패를 보고한 뒤 어떻게 할지 묻는다

## 실패를 기록한다

위임이 깨질 때마다 [reference/gotchas.md](reference/gotchas.md)에 한 줄 추가한다.
형식: `- YYYY-MM-DD | <증상> | <원인> | <대응>`

예측이 아니라 실제로 겪은 것만 적는다. 이 파일은 §0에서 다음 실행이 읽는다.
`orchestrate.mjs`가 막아줄 수 있는 종류의 실패였다면 그것도 같이 적는다 —
문서보다 코드로 옮길 후보가 된다.

## 참고 문서

- herdr CLI 정확한 문법: `herdr` 스킬, 또는 `herdr agent` / `herdr pane` 출력이 권위다.
  이 문서는 문법이 아니라 **정책**을 정한다. 충돌하면 CLI 출력을 따른다
- [reference/briefing.md](reference/briefing.md) — 브리핑에 무엇을 담을지
- [reference/kinds/codex.md](reference/kinds/codex.md) — codex 승인 판단·함정
- [reference/kinds/claude.md](reference/kinds/claude.md) — claude 워커 조작·alternate screen
- [reference/gotchas.md](reference/gotchas.md) — 축적된 실패 사례

kind 문서의 근거는 herdr 저장소의 `src/detect/manifests/<kind>.toml`이다. herdr를
업데이트한 뒤 감지 동작이 달라졌다면 그 파일과 `herdr agent explain <이름> --json`으로
확인해 갱신한다. 스폰 플래그와 탈출 키는 문서가 아니라 `scripts/orchestrate.mjs`의
`KINDS` 테이블에 있다. 새 kind를 지원하려면 그 테이블에 항목을 추가하고 근거를
`reference/kinds/<kind>.md`에 남긴다.
