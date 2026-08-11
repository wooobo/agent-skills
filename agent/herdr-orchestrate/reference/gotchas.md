# gotchas

위임이 깨질 때마다 한 줄 추가한다. 예측이 아니라 **실제로 겪은 것만** 적는다.

형식: `- YYYY-MM-DD | 증상 | 원인 | 대응`

## 알려진 것 (herdr 문서 기반, 미검증)

- herdr `unknown` 상태 | 에이전트는 있지만 herdr가 분류 못 함 | 완료로 해석하지 말 것. 결과 파일로 판정
- 풀스크린 에이전트(claude, opencode) 히스토리 읽기 실패 | alternate screen에 렌더링돼 host scrollback에 안 남음 | `--lines`를 늘려도 안 됨. 파일 회수 계약을 쓸 것
- `agent read --lines N`이 `agent_not_idle` 반환 | 워커가 working/blocked 중 | idle 대기 후 재시도하거나 `--source visible`
- `pane move` 후 pane ID 무효 | 워크스페이스 이동 시 ID가 새로 발급됨 | `.result.move_result.pane.pane_id`로 갱신. 이름으로 부르는 게 안전
- `agent_prompt_stalled` | 프롬프트 후 5초 내 상태 변화 관측 안 됨 | 재시도 말고 `agent read`로 화면 확인

## 실제 겪은 것

- 2026-08-11 | `agent start` 가 `agent_pane_busy` | `pane split` 직후 셸이 아직 안 뜸 | `spawn` 이 셸 프로세스 관측까지 대기하도록 고침
- 2026-08-11 | `codex` 가 `odex` 로 타이핑돼 `command not found` 후 startup 타임아웃 | 무거운 zsh 프롬프트가 리드로되는 중에 명령이 들어가 선두 문자가 유실 | 화면 출력 관측 + 500ms 정착 대기 후 start. 실패 시 `ctrl+c`/`ctrl+u` 로 줄을 비우고 1회만 재시도
- 2026-08-11 | **브리핑 제출이 성공하고 상태도 `working`→`done` 인데 워커가 아무 작업도 안 함** | codex 첫 실행 `Press enter to continue` 게이트가 브리핑 텍스트를 통째로 삼키고 끝의 Enter 로 닫힘. 워커는 빈 composer 로 복귀 | 결과 파일 부재 말고는 탐지 수단이 없었다. `spawn` 이 게이트를 먼저 닫고, `prompt` 가 화면에서 run_id 를 확인한다. **"상태로 완료를 판정하지 마라"가 이론이 아니라는 증거**
- 2026-08-11 | 기하 가드를 통과했는데 실제 pane 이 65칸 | 분할 전 검사는 스냅샷인데 그 사이 사용자가 창을 줄임 | 분할 후 실측치를 재확인해 경고. 되돌릴 수는 없으니 판단은 사용자에게 넘긴다
- 2026-08-11 | 워커 이름 `api-cta` 로 스폰 거부 | herdr 워커 이름은 전역이라 지난 run 의 잔여와 충돌 | 정상 동작. 겹친 채로 진행했으면 `prompt`/`send-keys` 가 사용자가 쓰던 워커로 갔을 것
- 2026-08-11 | `spawn` 이 `{"error":{"code":"timeout"}}` 를 찍고도 `spawned` 로 성공 | 1회차 `agent start` 가 startup 타임아웃, 2회차 재시도가 성공. 실패한 1회차 stderr 가 그대로 새어 나온다 | 동작은 정상. **에러 줄만 보고 실패로 판정하지 마라.** `herdr agent get <이름>` 으로 확인. 재시도 stderr 를 삼키는 게 `orchestrate.mjs` 쪽 개선 후보
- 2026-08-11 | codex 워커가 `node --test` 에서 6/6 전부 실패 후 blocked | `-s workspace-write` 샌드박스가 `server.listen(0)` 의 로컬 포트 바인딩을 EPERM 으로 막는다. 코드 오류가 아니다 | 워커가 "샌드박스 밖 재실행" 승인을 요청한다. 위임 범위 안의 검증 명령이면 `enter` 로 승인. **서버를 띄우는 테스트가 있는 브리핑은 이 blocked 가 워커당 최소 1회 온다고 보고 대기 계획을 세울 것**
- 2026-08-11 | 워커 `blocked` 를 처리한 직후 `agent wait` 가 즉시 리턴 | send-keys 반영 전 옛 상태(`blocked`)를 그대로 돌려줌. 타이틀은 이미 스피너였다 | 재대기하면 풀린다. `status` 로 대조할 것
