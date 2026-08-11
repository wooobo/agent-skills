#!/bin/bash
# 오케스트레이션 실행 결과를 수합한다.
# usage: collect.sh <run-id> <cwd>:<worker> [<cwd>:<worker> ...]
#
# 결과 파일은 각 워커의 작업 디렉토리 안에 있다 (워커 샌드박스 밖으로는 못 쓴다):
#   <cwd>/.claude/tmp/orchestrator/<run-id>/<worker>.md
#
# 넘긴 워커 중 파일이 없는 것은 MISSING 으로 표시한다. 스폰한 워커를 전부 넘겨야
# 미완료가 잡힌다.
#
# example:
#   collect.sh 20260810-1432-cta "/Users/me/api:api-cta" "/Users/me/web:web-i18n"

set -uo pipefail

run_id="${1:-}"
if [ -z "$run_id" ] || [ "$#" -lt 2 ]; then
  echo "usage: collect.sh <run-id> <cwd>:<worker> [<cwd>:<worker> ...]" >&2
  exit 2
fi
shift

echo "run: $run_id"
echo

done_n=0
missing_n=0

for spec in "$@"; do
  case "$spec" in
    *:*) ;;
    *)
      printf 'BADARG   %-24s "<cwd>:<worker>" 형식이 아니다\n' "$spec"
      missing_n=$((missing_n + 1))
      continue
      ;;
  esac

  # 워커 이름에는 ':' 가 없으므로 마지막 ':' 로 자른다
  worker="${spec##*:}"
  cwd="${spec%:*}"
  f="$cwd/.claude/tmp/orchestrator/$run_id/$worker.md"

  if [ ! -f "$f" ]; then
    missing_n=$((missing_n + 1))
    printf 'MISSING  %-24s %s\n' "$worker" "$f"
    continue
  fi

  done_n=$((done_n + 1))
  lines=$(wc -l < "$f" | tr -d ' ')

  # "확인 필요" 섹션에 실제 내용이 있는지 본다.
  # "없음" 류의 플레이스홀더는 세지 않는다 — 안 그러면 전부 ⚠ 가 붙어 신호가 죽는다.
  needs=$(awk '
    /^##[[:space:]]*확인 필요/ { inblk = 1; next }
    /^##/                      { inblk = 0 }
    inblk {
      line = $0
      sub(/^[[:space:]]*[-*+][[:space:]]*/, "", line)
      gsub(/[[:space:]]/, "", line)
      if (line != "" \
          && line != "없음" && line != "없습니다" \
          && line != "none" && line != "None" && line != "N/A" && line != "n/a" \
          && line != "-") n++
    }
    END { print n + 0 }
  ' "$f")

  flag=""
  [ "$needs" -gt 0 ] && flag="  ⚠ 확인필요 ${needs}줄"
  printf 'DONE     %-24s %4s lines%s\n' "$worker" "$lines" "$flag"
  printf '         %s\n' "$f"
done

echo
echo "완료 ${done_n}건 / 미완료 ${missing_n}건."
if [ "$done_n" -gt 0 ]; then
  echo "각 파일을 읽고 '확인 필요' 섹션을 사용자 보고에 올릴 것."
fi
if [ "$missing_n" -gt 0 ]; then
  echo "MISSING 은 아직 작업 중이거나 회수 계약을 못 지킨 것이다. 보고에서 빼지 말 것."
fi
