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

<!-- 여기에 추가 -->
