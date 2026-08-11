---
name: orchestrate
description: >
  Herdr pane에 워커 코딩 에이전트를 띄워 작업을 병렬 위임하고 결과를 파일로 회수한다.
  여러 저장소·여러 작업을 동시에 진행하거나("병렬로", "따로 띄워서", "A랑 B 같이"),
  다른 벤더 모델에게 교차 검증을 시키거나("코덱스한테 시켜", "second opinion"),
  오래 걸리는 작업을 백그라운드 pane으로 넘길 때 쓴다. Requires HERDR_ENV=1.
argument-hint: "[위임할 작업 설명]"
disable-model-invocation: true
allowed-tools: Bash(echo*), Bash(herdr agent list*), Bash(herdr agent get*), Bash(herdr agent read*), Bash(herdr agent wait*), Bash(herdr agent start*), Bash(herdr agent prompt*), Bash(herdr agent send-keys*), Bash(herdr agent explain*), Bash(herdr pane list*), Bash(herdr pane layout*), Bash(herdr pane split*), Bash(mkdir -p *), Bash(${CLAUDE_SKILL_DIR}/scripts/collect.sh *)
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

```!
herdr pane layout --pane "${HERDR_PANE_ID:-}"
```

`env=0`이거나 세 블록이 전부 실패했으면 **여기서 멈추고** herdr pane 안에서 실행해야
한다고 사용자에게 알린다. 그 외에는 위 출력이 이번 세션의 시작 상태다.

`agent list`는 이미 떠 있는 워커를, `pane layout`의 `rect`는 pane을 몇 개까지 쪼갤 수
있는지를 알려준다. 둘 다 아래에서 쓴다.

## 0. 작업 전 로드

작업을 판별하기 전에 세 가지를 읽는다:

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
  사용자에게 worktree 사용을 제안하고 승인받는다
- 레지스트리가 있는데 거기 없는 대상이면 이렇게 경고하고 승인을 받은 뒤 진행한다:
  "`<대상>`은 레지스트리에 없어 도메인 지침 없이 최소 브리핑으로 위임됩니다"

### 동시 워커 수

고정 상한은 없다. 상한은 아래 셋의 **최소값**이고, 셋 다 이 워크스페이스가 정한다:

1. **독립 작업 디렉토리 수.** 위 규칙에서 바로 나온다. 디렉토리가 2개면 워커도 2개다.
   이게 진짜 상한이고 나머지는 그보다 작아질 수만 있다
2. **pane 기하.** 위 `pane layout` 출력의 `rect`를 본다. 현재 pane을 N개로 쪼갰을 때
   각 pane이 **폭 80칸 또는 높이 20줄 미만**이 되면 거기서 멈춘다. 그보다 좁으면
   승인 UI가 줄바꿈으로 뭉개져서 `agent read`로 무엇을 묻는지 판독할 수 없고,
   그러면 blocked 대응이 불가능해진다. 이미 떠 있는 워커도 자리를 차지하고 있다
3. **`rules.md`의 `max_concurrent`.** 있으면 그것이 최종 상한이다

셋 다 통과했는데도 워커가 많아 감시가 벅차 보이면(대략 4개 이상), 스폰 **전에**
대상 목록과 pane 폭 계산을 보여주고 사용자에게 확인받는다. 숫자를 임의로 깎지 말고,
왜 그 수가 나왔는지 근거를 보여주고 판단을 넘기는 게 맞다.

단위가 상한을 넘으면 넘치는 것은 위임하지 않고 대기 목록으로 남긴다. 앞선 워커가
끝나면 그 pane을 재사용한다.

**위임하지 말아야 할 것**: 파일 몇 개 읽고 끝나는 조사, 한 파일 수정, 5분 내 끝날 작업.
워커 스폰 비용이 더 크다. 그런 건 직접 하거나 내장 subagent를 쓴다.

## 2. 브리핑 조립

워커는 대개 다른 벤더의 에이전트라 이 프로젝트의 스킬·CLAUDE.md를 **읽지 못한다.**
필요한 맥락은 전부 프롬프트에 인라인으로 넣어야 한다.

조립 방법은 [reference/briefing.md](reference/briefing.md)를 따른다. 요약하면:

1. 레지스트리가 가리키는 대상 스킬 파일을 읽는다 (없으면 최소 브리핑)
2. 작업 경로 / 기술 스택 / 금지사항 / 자주 쓰는 명령만 추린다 (전문을 붙이지 않는다)
3. 프로젝트 `rules.md`의 규칙을 덧붙인다
4. 사용자 요청을 그 대상에 맞게 구체화해 덧붙인다
5. **결과 회수 계약을 반드시 마지막에 붙인다** (아래)

## 3. 스폰

`run_id`를 정한다 (예: `20260810-1432-cta`).

**순서가 중요하다. 전원을 먼저 띄우고, 그 다음 전원에게 브리핑을 보낸다.**
워커 하나마다 스폰→브리핑→완료대기를 돌면 팬아웃이 직렬로 무너져서 병렬 위임의 의미가
사라진다. 워커 3개가 각 20분이면 60분이 아니라 20분에 끝나야 한다.

### 3-1. 전원 스폰

워커마다 (여기서는 아직 브리핑을 보내지 않는다):

```bash
herdr pane split --current --direction <right|down> --cwd "<대상 절대경로>" --no-focus
```

- 방향: 현재 pane이 넓으면 `right`, 좁거나 길면 `down`. 같은 방향 반복 분할로
  §1의 폭 80 / 높이 20 하한을 깨지 않는다
- 새 pane ID는 응답 JSON `.result.pane.pane_id`에서 **파싱한다.** 절대 추측하지 않는다

```bash
herdr agent start <이름> --kind <kind> --pane <pane_id> -- <kind별 플래그>
```

- **스폰 전에 `reference/kinds/<kind>.md`를 읽는다.** 승인 정책·샌드박스 플래그를 빼먹으면
  워커가 사소한 것마다 `blocked`로 멈춰서 오케스트레이션이 성립하지 않는다
- 해당 문서가 없는 kind는 플래그 없이 스폰하되, 사용자에게 "이 kind의 조작 지침이 없어
  blocked 대응이 불확실합니다"라고 알린다
- 이름 규칙: `<대상약칭>-<작업약칭>`, `[a-z][a-z0-9_-]{0,31}` (예: `api-cta`, `web-i18n`)
- 스폰 실패 시 재시도하지 않는다. 멈추고 보고한다

결과 디렉토리는 **워커 작업 디렉토리 안**에 만든다:

```bash
mkdir -p "<대상 절대경로>/.claude/tmp/orchestrator/<run_id>"
```

### 3-2. 전원 브리핑 제출

전원이 뜬 뒤에 보낸다. **여기서 완료를 기다리지 마라.**

```bash
herdr agent prompt <이름> "<브리핑>" --wait --until working --until blocked --timeout 30000
```

`--until working`은 "제출이 먹혔다"만 확인하고 즉시 돌아온다. 완료 대기가 아니다.
가능하면 워커들에게 한 번에(병렬로) 보낸다.

`agent_prompt_stalled`가 나오면 재전송하지 마라. 프롬프트가 두 번 들어갈 수 있다.
`agent read`로 화면을 확인하고 판단한다.

### 결과 회수 계약 (모든 브리핑 필수 말미)

```
완료되면 전체 결과를 아래 경로에 마크다운으로 작성해라.
이 경로는 네 작업 경로 안이므로 써도 되는 곳이다:

<대상 절대경로>/.claude/tmp/orchestrator/<run_id>/<워커이름>.md

형식:
## 요약        (3줄 이내)
## 변경한 파일  (경로 목록, 각 한 줄 설명)
## 확인 필요    (판단이 갈렸거나 사용자 결정이 필요한 것 — 없으면 "없음")
## 남은 작업    (없으면 "없음")

파일을 쓴 뒤, 마지막 응답은 그 파일 경로 한 줄만 출력해라. 다른 말을 덧붙이지 마라.
```

이 경로가 워커 cwd **밖**이면 안 된다. 워커는 샌드박스(codex `workspace-write`)와
브리핑의 "작업 경로 밖 금지" 규칙 양쪽에 막혀 계약을 이행할 수 없고, 승인을 요청해도
§4의 표가 그걸 거부하게 되어 있다. 수합은 오케스트레이터가 여러 경로에서 읽어 모은다.

## 4. 대기와 개입

전원 제출이 끝난 뒤, 워커별로 순회하며 기다린다:

```bash
herdr agent wait <이름> --timeout 900000
```

타임아웃은 작업 성격에 맞춘다. 15분은 출발점일 뿐이고, 애초에 오래 걸릴 걸 알고
백그라운드로 넘긴 작업이면 더 길게 잡는다.

**상태로 완료를 판정하지 마라.** herdr의 `unknown`은 완료 증명이 아니고, `idle`은
워커가 실패하고 멈춘 상태일 수도 있다. **완료 판정은 결과 파일 존재 여부로 한다.**

### 타임아웃은 실패가 아니다

wait가 타임아웃되면 결과 파일부터 확인하고 분기한다:

| 파일 | 상태 | 처리 |
|---|---|---|
| 있음 | 무관 | 완료. 다음 워커로 |
| 없음 | `working` | 정상 진행 중. 다시 `wait` 한다 |
| 없음 | `blocked` | 아래 blocked 대응 |
| 없음 | `idle` | 실패했거나 계약을 못 지킨 것. `agent read`로 화면 확인 |
| 없음 | `unknown` | 뷰어에 갇힌 것. kind 문서의 "함정" 절을 따른다 |

같은 워커를 3회 연속 재대기하게 되면 진행 상황을 사용자에게 알리고 계속할지 묻는다.
어떤 경우에도 브리핑을 다시 보내 작업을 재실행시키지는 않는다.

### blocked 대응

```bash
herdr agent read <이름> --source recent-unwrapped --lines 80
```

**어떤 키를 눌러야 하는지는 kind마다 다르다. `reference/kinds/<kind>.md`의 대응표를 따른다.**
공통 원칙: 승인 UI 문구가 필요한 키를 스스로 말한다(`enter to confirm`, `[y/n]` 등).
화면을 읽고 그 지시를 따르되, 무엇을 승인하는지 먼저 파악한다.

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

같은 워커가 3회 연속 blocked면 자동 응답을 멈추고 사용자에게 넘긴다.

### `unknown`에서 wait가 안 풀릴 때

herdr는 일부 화면(대표적으로 transcript 뷰어)에서 **상태 갱신을 아예 멈춘다**
(`skip_state_update`). 이때 `agent wait`는 영원히 안 풀린다. 타임아웃이 났는데 워커가
살아 있어 보이면 화면을 읽고 kind 문서의 "함정" 절에 따라 뷰어에서 빠져나온다.

진행 상황을 보려고 `agent read`를 반복 호출하지 마라. 컨텍스트만 태운다.
`agent wait`로 기다리고 결과는 파일로 읽는다.

## 5. 수합과 보고

인자는 `<워커 cwd>:<워커이름>` 쌍이다. 스폰한 워커를 **전부** 넘겨야 미완료가 잡힌다.

```bash
${CLAUDE_SKILL_DIR}/scripts/collect.sh <run_id> "/path/to/api:api-cta" "/path/to/web:web-i18n"
```

`MISSING`으로 표시된 워커는 그 사실을 숨기지 말고 보고에 포함한다.
스크립트는 각 결과 파일의 절대경로를 출력한다. 그걸 Read로 읽어 요약한다.

사용자 보고에는 반드시 포함한다:

- 워커별 결과 요약 (파일에서 읽은 것)
- **각 워커의 "확인 필요" 항목** — 이게 사용자가 실제로 봐야 할 부분이다
- 미완료·실패·경고 없이 위임된 대상
- 아직 살아있는 pane 목록과 정리 여부 질문
- 결과 파일이 남은 경로들 (`<대상>/.claude/tmp/orchestrator/<run_id>/`).
  대상 레포에 `.claude/tmp/`가 gitignore되어 있지 않으면 그 사실도 알린다

## 안전 규칙

- 내가 만들지 않은 workspace/tab/pane은 닫지 않는다. 정리는 사용자에게 확인받는다
- 이미 돌고 있던 워커에게 프롬프트를 보내지 않는다. 사용자가 쓰고 있을 수 있다
- `--no-focus`를 항상 쓴다. 사용자 포커스를 뺏지 않는다
- pane ID는 JSON 응답에서만 얻는다. 사이드바 순서나 예시에서 유추하지 않는다
- `herdr server stop`, 메인 herdr 프로세스 종료는 절대 하지 않는다
- 워커가 커밋하게 두지 않는다
- 위임이 실패하면 조용히 직접 하지 말고, 실패를 보고한 뒤 어떻게 할지 묻는다

## 실패를 기록한다

위임이 깨질 때마다 [reference/gotchas.md](reference/gotchas.md)에 한 줄 추가한다.
형식: `- YYYY-MM-DD | <증상> | <원인> | <대응>`

예측이 아니라 실제로 겪은 것만 적는다. 이 파일은 §0에서 다음 실행이 읽는다.

## 참고 문서

- herdr CLI 정확한 문법: `herdr` 스킬, 또는 `herdr agent` / `herdr pane` 출력이 권위다.
  이 문서는 문법이 아니라 **정책**을 정한다. 충돌하면 CLI 출력을 따른다
- [reference/briefing.md](reference/briefing.md) — 브리핑 조립 템플릿
- [reference/kinds/codex.md](reference/kinds/codex.md) — codex 스폰 플래그, blocked 대응, 함정
- [reference/kinds/claude.md](reference/kinds/claude.md) — claude 워커 조작 및 alternate screen 문제
- [reference/gotchas.md](reference/gotchas.md) — 축적된 실패 사례

kind 문서의 근거는 herdr 저장소의 `src/detect/manifests/<kind>.toml`이다. herdr를 업데이트한
뒤 감지 동작이 달라졌다면 그 파일과 `herdr agent explain <이름> --json`으로 확인해 갱신한다.
문서가 없는 kind로 위임해야 하면 `herdr agent explain`으로 상태 근거를 먼저 확인하고,
그 관측을 새 `reference/kinds/<kind>.md`로 남긴다.
