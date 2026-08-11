# 워커 kind: codex

근거: `herdr` codex 감지 매니페스트(`src/detect/manifests/codex.toml`, version 2026.07.18.1),
`codex --help`. 실제 관측으로 검증되지 않은 항목은 "미검증"으로 표시했다.

## 스폰

```bash
herdr agent start <이름> --kind codex --pane <pane_id> -- -s workspace-write -a on-request
```

`--` 뒤는 codex에 그대로 전달된다. 작업 디렉토리는 `pane split --cwd`로 이미 정해지므로
`-C/--cd`를 쓰지 않는다.

### 승인 정책 (`-a, --ask-for-approval`)

| 값 | 동작 | 오케스트레이션에서 |
|---|---|---|
| `untrusted` | 신뢰 목록(ls, cat 등) 외에는 전부 승인 요청 | 조사·리뷰 등 읽기 위주 작업에 |
| `on-request` | 모델이 필요할 때만 승인 요청 | **기본값으로 쓴다** |
| `never` | 승인을 묻지 않음. 실행 실패는 모델에 반환 | 쓰지 마라. `blocked` 신호가 사라져서 herdr로 감시하는 의미가 없어진다 |

### 샌드박스 (`-s, --sandbox`)

| 값 | 오케스트레이션에서 |
|---|---|
| `read-only` | 조사·분석만 위임할 때 |
| `workspace-write` | **구현 작업 기본값.** 작업 디렉토리 안에서만 쓰기 |
| `danger-full-access` | 쓰지 마라 |

`--dangerously-bypass-approvals-and-sandbox`는 어떤 경우에도 쓰지 마라.

`workspace-write`는 작업 디렉토리 안이면 `git commit`도 막지 않는다. 커밋 금지는
샌드박스가 아니라 **브리핑 문구와 blocked 시 거부로 강제한다.**

`workspace-write`는 cwd 밖 쓰기를 막는다. 그래서 **결과 회수 파일은 반드시 워커 cwd 안**
(`<cwd>/.claude/tmp/orchestrator/<run_id>/<이름>.md`)이어야 한다. 오케스트레이터 쪽
디렉토리로 쓰게 하면 샌드박스에 막혀 계약이 이행되지 않는다.

기타: `-m <model>` 모델 지정, `--add-dir <DIR>` 추가 쓰기 경로. 결과 경로를 cwd 안에
두면 `--add-dir`이 필요할 일이 없다. 범위가 넓어지므로 기본 사용 안 함.

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
아래 표는 매니페스트가 인식하는 알려진 패턴이며, 여기 없는 문구가 나오면 화면 지시를 따르되
판단이 안 서면 사용자에게 넘긴다.

```bash
herdr agent read <이름> --source recent-unwrapped --lines 80
```

| 화면 문구 | 조작 | 비고 |
|---|---|---|
| `press enter to confirm or esc to cancel` | 승인 `enter` / 거부 `esc` | |
| `allow command?` | 실행하려는 명령을 **먼저 읽는다** | 범위 밖 경로·git commit·push면 `esc` |
| `enter to submit answer` | 답을 `agent prompt`로 보낸다 | 질문 내용 판단 필요 |
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

대응: `herdr agent send-keys <이름> q` 로 빠져나온 뒤 상태를 다시 본다.

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
