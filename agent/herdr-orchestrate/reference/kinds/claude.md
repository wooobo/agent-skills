# 워커 kind: claude (Claude Code)

근거: herdr claude 감지 매니페스트(`src/detect/manifests/claude.toml`).
실제 관측으로 검증되지 않은 항목은 "미검증"으로 표시했다.

스폰 플래그와 뷰어 탈출 키는 `scripts/orchestrate.mjs`의 `KINDS.claude`가 소유한다.
이 문서는 판단이 필요한 것만 다룬다.

## 언제 claude 워커가 정당한가

오케스트레이터 자신이 Claude Code일 때, 워커로 또 claude를 쓰는 것은 대체로 낭비다.
같은 저장소 안의 조사·리뷰라면 herdr 워커 대신 **내장 subagent**가 더 싸고 빠르다.
정당한 경우는 셋뿐이다:

- 수십 분 이상 걸리는 장시간 작업을 백그라운드로 돌릴 때
- 사용자가 중간에 눈으로 보고 직접 개입해야 할 때
- 다른 저장소에서 독립적으로 오래 돌아야 할 때

## 브리핑이 codex보다 짧아도 되는 이유

워커 claude는 `--cwd`로 지정된 디렉토리의 `CLAUDE.md`와 `.claude/skills/`를 **스스로
읽는다.** 프로젝트 지침을 인라인으로 다 넣을 필요가 없으니, 브리핑은 작업 내용과
범위 제한에 집중한다.

단, 대상이 독립 git root이고 그 안에 `CLAUDE.md`가 없으면 상위 저장소의 것을 못 읽는다.
그 경우는 codex와 동일하게 취급해 지침을 인라인으로 넣는다.

## 상태 판정

| 상태 | 근거 |
|---|---|
| `working` | 터미널 타이틀의 브라유 스피너 문자 |
| `blocked` | `esc to cancel` + (`enter to confirm` 또는 `enter to select` + 방향키 안내) |
| `idle` | 프롬프트 박스 `❯` |
| `unknown` | transcript 뷰어 (`showing detailed transcript`) |

## blocked 대응

```bash
herdr agent read <이름> --source recent-unwrapped --lines 80
```

| 화면 문구 | 조작 |
|---|---|
| `enter to confirm` + `esc to cancel` | 승인 `enter` / 거부 `esc` |
| `enter to select` + `↑/↓ to navigate` | 화살표로 선택 후 `enter` |
| `run a dynamic workflow?` | **거부(`esc`).** 워커가 자체 워크플로를 팬아웃하면 통제를 잃는다 |

승인 전 확인 항목은 codex와 같다: 작업 경로 밖인가, 커밋/푸시인가, 새 의존성인가.

## 함정

**transcript 뷰어 (`unknown` + 상태 갱신 정지)**

`showing detailed transcript` 가 보이면 뷰어 모드다. 매니페스트가 `skip_state_update = true`라
herdr가 상태 갱신을 멈추고 `agent wait`가 안 풀린다.
대응: `orchestrate.mjs unstick` (내부적으로 `ctrl+o` 토글, 미검증 — 안 되면 `esc` 후 화면 재확인).

**alternate screen — 결과 읽기 실패**

Claude Code는 transcript를 alternate screen에 렌더링해서 herdr host scrollback에 남지 않는다.
`agent read --lines`를 늘려도 과거 응답을 못 가져오는 경우가 있다.
**결과 파일 회수 계약이 선택이 아니라 필수인 이유가 이것이다.**

또 `agent read --lines N`이 alternate screen 히스토리를 필요로 하는데 워커가 working/blocked면
`agent_not_idle`이 반환된다. idle을 기다렸다 재시도하거나 `--source visible`을 쓴다.

**중첩 오케스트레이션 금지**

claude 워커에게 "다른 에이전트를 띄워라"라고 시키지 마라. 워커가 `herdr-orchestrate`를 다시 호출하면
pane이 기하급수로 늘고 누가 무엇을 소유하는지 추적 불가능해진다.
브리핑에 명시한다: "다른 에이전트를 스폰하지 마라. 배정된 작업만 직접 수행해라."
