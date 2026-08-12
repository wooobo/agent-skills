# 워커 kind: codex

근거: herdr codex 감지 매니페스트(`src/detect/manifests/codex.toml`, version 2026.07.18.1),
`codex --help`. 실제 관측으로 검증되지 않은 항목은 "미검증"으로 표시했다.

스폰 플래그와 뷰어 탈출 키는 `scripts/orchestrate.mjs`의 `KINDS.codex`가 소유한다.
이 문서는 **판단이 필요한 것**만 다룬다: 무엇을 승인할지, 화면이 이상할 때 무슨 일이
벌어진 건지.

이 프로젝트의 **기본 kind** 다. 오케스트레이터가 대개 Claude Code 라서, 같은 벤더로
또 위임하면 교차 검증 가치가 없고 내장 subagent 보다 비싸기만 하기 때문이다.

## 모델과 추론강도

`spawn` 이 `-m gpt-5.6-luna -c model_reasoning_effort="max"` 를 붙인다.
codex 에는 effort 전용 플래그가 없어서 config 오버라이드를 쓴다.

이 값은 `~/.codex/config.toml` 의 설정을 **덮어쓴다.** 위임한 작업은 대화보다 무겁게
간다는 판단이다. 이번 run 만 다르게 하려면 `--extra` 로 뒤에 덧붙이면 되고, 뒤에 온
플래그가 이긴다. 영구히 바꾸려면 `orchestrate.mjs` 의 `KINDS.codex.model` 을 고친다.

## 왜 그 샌드박스·승인 플래그인가

`spawn`이 `-s workspace-write -a on-request`로 띄운다. 사용자가 바꿔달라고 하면
이 트레이드오프를 먼저 설명한다.

| 승인 정책 | 동작 | 오케스트레이션에서 |
|---|---|---|
| `untrusted` | 신뢰 목록(ls, cat 등) 외 전부 승인 요청 | `--mode read-only`가 이걸 쓴다 |
| `on-request` | 모델이 필요할 때만 승인 요청 | 기본값 |
| `never` | 승인을 묻지 않고 실패를 모델에 반환 | **쓰면 안 된다.** `blocked` 신호가 사라져서 herdr로 감시하는 의미 자체가 없어진다 |

| 샌드박스 | 오케스트레이션에서 |
|---|---|
| `read-only` | 조사·분석 전용 |
| `workspace-write` | 구현 기본값. 작업 디렉토리 안에서만 쓰기 |
| `danger-full-access` | 쓰지 않는다 |

`--dangerously-bypass-approvals-and-sandbox`는 어떤 경우에도 쓰지 않는다.

두 가지가 여기서 따라 나온다:

- `workspace-write`는 cwd 밖 쓰기를 막는다. 그래서 **결과 회수 파일은 반드시 워커 cwd
  안**이다. 스크립트가 그 경로를 계산해 계약에 박아 넣으므로 손으로 바꾸지 마라
- `workspace-write`는 작업 디렉토리 안이면 `git commit`도 막지 않는다.
  **커밋 금지는 샌드박스가 아니라 브리핑 문구와 blocked 시 거부로 강제한다**

## 상태 판정

herdr가 codex를 이렇게 읽는다:

| 상태 | 근거 |
|---|---|
| `working` | 터미널 타이틀의 스피너 문자, 또는 화면의 `• Working (esc to interrupt)` |
| `blocked` | 터미널 타이틀 `Action Required`, 또는 아래 승인 UI 문자열 |
| `idle` | 타이틀에 스피너도 `Action Required`도 없음 |
| `unknown` | transcript 뷰어 (아래 참조) |

## blocked 대응

**원칙: codex의 blocker 문구는 필요한 키를 스스로 말한다.** 화면을 읽고 그 문구를 따른다.
아래 표는 매니페스트가 인식하는 알려진 패턴이며, 여기 없는 문구가 나오면 화면 지시를
따르되 판단이 안 서면 사용자에게 넘긴다.

```bash
herdr agent read <이름> --source recent-unwrapped --lines 80
```

| 화면 문구 | 조작 | 비고 |
|---|---|---|
| `press enter to confirm or esc to cancel` | 승인 `enter` / 거부 `esc` | |
| `allow command?` | 실행하려는 명령을 **먼저 읽는다** | 범위 밖 경로·git commit·push면 `esc` |
| `enter to submit answer` | 답을 `prompt`로 보낸다 | 질문 내용 판단 필요 |
| `enter to submit all` | `enter` | 미검증 |
| `[y/n]` | `y` 또는 `n` | |
| `do you want to ...` + `❯` | 화살표로 선택 후 `enter` | `send-keys <이름> down`, `up`, `enter` |

승인 전 반드시 확인할 것:

- 수정 대상이 배정된 작업 경로 **안**인가
- `git commit` / `git push` / `git checkout -b` 가 아닌가 → 맞으면 `esc`로 거부하고 보고
- 새 패키지 설치가 아닌가 → 맞으면 거부하고 "확인 필요"로 올린다

## 함정

**transcript 뷰어 (`unknown` + 상태 갱신 정지)**

화면에 `↑/↓ to scroll`, `pgup/pgdn to`, `q to quit` 이 보이면 codex가 transcript 뷰어에
들어간 것이다. 이때 매니페스트는 `skip_state_update = true`라 **herdr가 상태 갱신을 멈춘다.**
`agent wait`가 영원히 안 풀린다.

대응: `orchestrate.mjs unstick` (내부적으로 `q`를 보낸다).

**`unknown`을 완료로 읽지 않기**

`unknown`은 에이전트는 있는데 herdr가 분류를 못 한 상태다. 완료 증명이 아니다.
완료 판정은 결과 파일 존재로 한다.

**작업 중단**

`• Working (esc to interrupt)` 상태에서 `esc`가 인터럽트다. 워커를 멈춰야 할 때만 쓴다.
인터럽트 후에는 `■ Conversation interrupted` 가 남는다.

## codex의 "session"과 herdr의 "agent"

codex는 자기 대화 이력을 session이라 부르고 `codex resume` / `fork` / `archive`로 다룬다.
herdr의 `session`은 herdr 서버 세션이라 다른 것이다. 워커를 가리킬 때는 항상 **agent**를 쓴다.

herdr는 codex의 session id를 추적할 수 있다(`pane report-agent --agent-session-id`).
중단된 워커를 이어가야 하면 이 값이 단서가 되지만, 오케스트레이터는 기본적으로
**이어가지 않고 새로 스폰한다.** 이어가기가 필요하면 사용자에게 확인받는다.
