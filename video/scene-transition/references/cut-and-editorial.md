# 컷 구조 & 내러티브 에디팅 (Cut Structure & Narrative Editorial)

고전 영화편집 이론(컨티뉴이티 에디팅·몽타주 이론)의 관점에서, 컷 포인트 자체의 구조 — 언제·어떻게 끊고 다음 샷과 무엇을 이어 붙이는가 — 를 다룬다. 여기 실린 항목은 와이프·모프 같은 시각효과 장치가 아니라, "어떤 종류의 컷을 어디에 놓을 것인가"라는 편집 판단에 관한 것이다.

> 각 항목 구성: **시그널**(전환 시그니처) / **앵커**(짧은 영어 태그) / **의도**(무드 단어) / **전환 블록**(영어, 바로 붙여쓰기) / **페어링**(어울리는 다른 전환·요소) / **주의**.
>
> 전환 블록은 [샷A 전체 스택] ↔ [샷B 전체 스택] 사이의 "경계"를 묘사하는 문단이다. 샷A 지시문의 꼬리 / 샷B 지시문의 머리에 붙이거나, 지속시간이 있는 전환은 별도의 짧은 "전환 전용 클립"으로 생성해 둘 사이에 끼운다. 사용법·삽입 방식·안 통하는 것은 SKILL.md 참고.



## 기본 컷 구조

### 하드컷 / Hard Cut

- **시그널**: 트랜지션 효과 전혀 없이 한 프레임에서 다음 프레임으로 즉시 전환되는, 모든 편집의 기본값이 되는 가장 단순한 컷.
- **앵커**: `hard cut, instant` · **의도**: abrupt, neutral, direct
- **전환 블록**:
  ```
  The frame cuts instantly with no transitional effect whatsoever — one complete image is replaced by the next within a single frame, with no dissolve, no motion blur, and no fade bridging the two; the change registers immediately and cleanly, as if a page were turned in zero time.
  ```
- **페어링**: 대화 씬의 숏/리버스숏, 액션 시퀀스, 다큐멘터리 톤.
- **주의**: 두 샷의 밝기·구도가 극단적으로 다르면 의도치 않게 눈이 튀는 느낌이 날 수 있음 — 의도적 강조가 아니라면 톤을 어느 정도 맞출 것; 지속시간이 있는 전환과 혼동해 "부드러운 하드컷" 같은 모순된 지시를 주지 말 것.

### 컷어웨이 / Cutaway

- **시그널**: 메인 액션에서 벗어나 관련된 다른 대상(반응자·환경 디테일·연관 사물)으로 잠시 이동했다가 원래 액션으로 되돌아오는 삽입 컷.
- **앵커**: `cutaway shot insert` · **의도**: contextual, expansive
- **전환 블록**:
  ```
  The frame cuts away from the main action to a related but separate subject — a bystander, an environmental detail, an object connected to the scene — holding on it briefly before cutting back to find the original action continuing as if it never paused; the detour supplies context or texture without breaking the sense of ongoing time.
  ```
- **페어링**: 리액션 컷, 인서트컷, 대화 장면의 공간감 확장.
- **주의**: 컷어웨이 대상이 메인 액션과 시각적으로 너무 동떨어지면 왜 보여주는지 불분명해짐; 되돌아왔을 때 메인 액션의 위치·자세 연속성을 지켜야 자연스러움.

### 인서트컷 / Insert Shot

- **시그널**: 손, 시계, 문자메시지 화면 등 디테일을 클로즈업으로 끼워 넣어 정보나 감정을 보강하는 짧은 컷.
- **앵커**: `close-up insert shot` · **의도**: informative, emphatic
- **전환 블록**:
  ```
  The frame cuts tight into an extreme close-up of a small but significant detail — a hand, a wristwatch, a phone screen, a note — isolating it from the wider scene for a beat, before cutting back out to the original framing; the insert supplies a piece of information or emphasis the wide shot alone could not deliver.
  ```
- **페어링**: 서스펜스 비트, 정보 전달(시계·문서), 감정 클로즈업.
- **주의**: 인서트 대상이 화면 밖 맥락과 연결되게(같은 인물의 손·시계 등) 지시해야 붕 뜨지 않음; 너무 자주 쓰면 리듬이 뚝뚝 끊김.

### 리액션 컷 / Reaction Cut

- **시그널**: 사건이나 대사에 대한 인물의 표정·제스처 반응으로 넘어가는 컷.
- **앵커**: `reaction cut to face` · **의도**: emotional, responsive
- **전환 블록**:
  ```
  The frame cuts away from the triggering action or line of dialogue to a close or medium shot of another person's face, catching the immediate flicker of their reaction — a widened eye, a tightened jaw, a suppressed smile — before the scene either lingers there or cuts back to the original subject.
  ```
- **페어링**: 대화 씬 숏/리버스숏, 클로즈업, 코미디·드라마 비트.
- **주의**: 반응이 사건 직후 타이밍에 붙어야 인과관계가 읽힘 — 너무 늦게 자르면 반응의 의미가 흐려짐.

### 컷 온 액션 (매치 온 액션) / Cut on Action · Match-on-Action

- **시그널**: 동작이 진행되는 도중에 끊어 다음 샷에서 같은 동작을 이어 붙이는 컷 — 카메라 무브가 아니라 피사체의 동작 자체를 맞춘다.
- **앵커**: `cut on action, match motion` · **의도**: fluid, continuous
- **전환 블록**:
  ```
  The cut lands in the middle of a physical action — a hand reaching, a door swinging, a body turning — and the next shot picks up that same motion from a different angle or distance at the identical point of movement, so the gesture appears to continue unbroken across the edit even though the camera position has changed.
  ```
- **페어링**: 컨티뉴이티 편집, 앵글 변경이 필요한 대화·동작 시퀀스, 문 통과·앉기/일어서기 같은 동작.
- **주의**: 두 샷의 동작 속도·위치·신체 각도가 거의 일치해야 함 — 어긋나면 눈에 띄는 점프처럼 보임; 동작의 정점이 아니라 중간 지점에서 끊는 게 자연스러움.

### 인비저블 컷 (컨티뉴이티 컷) / Invisible Cut · Continuity Cut

- **시그널**: 시선과 동작의 흐름, 스크린 방향을 맞춰 관객이 편집점 자체를 의식하지 못하게 만드는 이음매 — 컷온액션보다 넓은 개념으로 아이라인·180도 규칙까지 포함한다.
- **앵커**: `seamless continuity cut` · **의도**: invisible, unbroken
- **전환 블록**:
  ```
  The cut is placed so precisely on movement, eyeline, and screen direction that the transition disappears — the subject's gaze, the direction of travel, and the spatial relationship between elements all carry across the edit without interruption, so the two shots read as one continuous moment even though the camera angle has changed.
  ```
- **페어링**: 대화 씬 180도 규칙, 워크-앤-토크, 표준 내러티브 편집 전체.
- **주의**: 아이라인과 스크린 방향(좌→우 vs 우→좌)이 두 샷에서 일관되어야 함 — 뒤집히면 관객이 공간 방향 감각을 잃음(180도 룰 위반).



## 시간축 조작 컷

### 점프컷 / Jump Cut

- **시그널**: 같은 프레임·피사체 안에서 시간을 건너뛰어 의도적인 불연속을 드러내는 컷.
- **앵커**: `jarring jump cut` · **의도**: disruptive, energetic
- **전환 블록**:
  ```
  The frame cuts within the same shot setup and subject, but time has visibly skipped forward — the subject's pose, position, or expression noticeably shifts between one frame and the next with no smooth transition bridging the gap, creating a deliberate, jarring discontinuity that draws attention to the edit itself.
  ```
- **페어링**: 브이로그·다큐 톤, 몽타주 도입부, 초조·시간 압박 비트.
- **주의**: 프레임·구도가 너무 비슷하면 실수처럼 보임 — 의도적 불연속임을 살리려면 포즈·표정 변화를 뚜렷하게; 클래식 내러티브 톤과는 충돌.

### 몽타주 시퀀스 / Montage Sequence

- **시그널**: 짧은 컷을 연속으로 이어 붙여 시간의 경과나 과정을 압축해 보여주는 시퀀스.
- **앵커**: `rapid montage sequence` · **의도**: compressive, propulsive
- **전환 블록**:
  ```
  A rapid succession of short shots cuts one after another, each holding for only a moment before hard-cutting to the next, stringing together fragments of an activity or the passage of time into a single compressed rhythm; individually brief, the shots accumulate into a sense of progress or change happening across a span the audience never sees in full.
  ```
- **페어링**: 트레이닝·준비 시퀀스, 시간 경과, 음악과 강하게 결합.
- **주의**: 각 컷의 길이를 일정한 리듬으로 유지해야 몽타주 특유의 박자가 삼; 컷 수가 너무 적으면 몽타주로 안 읽히고 그냥 컷어웨이 나열처럼 보임.

### 플래시백 컷 / Flashback Cut

- **시그널**: 과거 사건으로 급전환했다가 다시 현재로 되돌아오는 회상 컷.
- **앵커**: `sudden flashback cut` · **의도**: memory-triggered, disorienting
- **전환 블록**:
  ```
  The current frame cuts abruptly into a scene from an earlier moment in time — often triggered by a glance, sound, or object — rendered with a distinct visual texture that marks it as memory rather than present action, before cutting back to the original moment exactly where it left off.
  ```
- **페어링**: 색감·질감 차이(`color-grade`의 빈티지·블리치 바이패스 톤과 결합), 회상 트리거 클로즈업, 감정적 폭로 비트.
- **주의**: 과거 파트를 현재와 시각적으로 구분(색감·그레인·조도 차이)해야 관객이 시점을 놓치지 않음; 돌아올 때 현재 시점의 정확한 지점을 다시 잡아야 함.

### 엘립시스 컷 / Ellipsis Cut

- **시그널**: 불필요한 경과 시간을 생략하고 다음 요점 순간으로 곧장 건너뛰는 컷.
- **앵커**: `time-skipping ellipsis cut` · **의도**: efficient, forward-moving
- **전환 블록**:
  ```
  The frame cuts past an uneventful stretch of time entirely, jumping from one meaningful moment directly to the next relevant one — the routine or transitional action in between is simply omitted, so the narrative advances briskly without ever showing the gap.
  ```
- **페어링**: 내러티브 페이싱 전반, 여정·준비 과정 압축, 몽타주와 유사하나 단일 컷.
- **주의**: 생략된 구간이 관객에게 혼란을 주지 않도록 두 샷 사이에 최소한의 맥락 단서(장소·시간대 변화)를 남길 것.

### 프리즈 프레임 / Freeze Frame

- **시그널**: 흐르던 영상을 한 프레임에 정지시켜 강조하거나 장면을 맺는 컷.
- **앵커**: `freeze frame hold` · **의도**: emphatic, conclusive
- **전환 블록**:
  ```
  The motion in the frame suddenly halts and holds completely still on a single instant, the image locking in place like a photograph while everything that was moving stops mid-gesture; the freeze lingers for a beat, stamping the moment with finality or emphasis before the sequence resumes or the scene ends.
  ```
- **페어링**: 시퀀스·에피소드의 엔딩 비트, 코믹한 강조, 캐릭터 소개.
- **주의**: 프리즈 시점의 구도·표정이 명확하고 읽기 좋아야 함(멈췄을 때 어색한 중간 동작이면 실패); 너무 자주 쓰면 장치가 진부해짐.



## 사운드-병치 구조 컷

### J컷 / J-Cut

- **시그널**: 다음 장면의 소리(또는 시각적 예고)가 이미지보다 먼저 들어와 전환을 예고하는 컷. 원래는 오디오 편집 기법이라, 오디오를 생성하지 않는 모델에서는 시각적으로만 근사할 수 있다.
- **앵커**: `J-cut lead-in` · **의도**: anticipatory, seamless
- **전환 블록**:
  ```
  Just before the cut, a faint visual hint of the next scene — a sliver of light, a blurred silhouette, a glimpse through a gap — bleeds into the edge of the current frame, priming the eye for what is about to arrive; the moment the cut lands, that hinted element is already the anchor of the new shot. (오디오 생성이 가능한 모델이면: the next scene's ambient sound begins under the current image a beat before the visual cut.)
  ```
- **페어링**: 대화 장면 전환, 몽타주 도입부.
- **주의**: 본질적으로 사운드 편집 개념 — 오디오를 못 다루는 순수 T2V 모델에서는 위 시각적 근사만 가능하고 효과가 약할 수 있음을 사용자에게 알릴 것; 오디오 지원 모델이면 실제 사운드로 구현하는 게 정석.

### L컷 / L-Cut

- **시그널**: 이전 장면의 흐름이 다음 장면 이미지 위로 잔상처럼 이어져 남는 컷. 원래는 오디오 편집 기법이라, 오디오를 생성하지 않는 모델에서는 시각적으로만 근사할 수 있다.
- **앵커**: `L-cut trailing overlap` · **의도**: lingering, connective
- **전환 블록**:
  ```
  The image cuts to the new scene, but a visual trace of the departing moment briefly lingers over it — a fading afterimage, a soft ghost of the previous frame's light or color bleeding across the edge, or the outgoing subject's motion trailing into the new frame — before it fully clears and the new scene stands on its own. (오디오 생성이 가능한 모델이면: the previous scene's dialogue or ambient sound continues to play over the new image for a beat after the cut.)
  ```
- **페어링**: 대화 장면 전환, 회상에서 현재로 복귀, 감정적 여운이 필요한 컷.
- **주의**: 본질적으로 사운드 편집 개념 — 오디오를 못 다루는 순수 T2V 모델에서는 위 시각적 근사만 가능하고 효과가 약할 수 있음을 사용자에게 알릴 것; 오디오 지원 모델이면 실제 사운드로 구현하는 게 정석.

### 사운드 브릿지 / Sound Bridge

- **시그널**: 음악이나 효과음이 두 장면에 걸쳐 끊기지 않고 이어지며 전환을 매끄럽게 만드는 컷. 원래는 오디오 편집 기법이라, 오디오를 생성하지 않는 모델에서는 시각적 리듬의 연속성으로만 근사할 수 있다.
- **앵커**: `sound bridge continuity` · **의도**: seamless, unifying
- **전환 블록**:
  ```
  The cut between the two scenes is timed to a continuous rhythmic or visual pulse — a repeating motion, a flashing light, a beat of movement — that carries unbroken across the edit so the change of location or time feels stitched together by that shared cadence rather than interrupted by it. (오디오 생성이 가능한 모델이면: a single piece of music or a continuous sound effect plays unbroken underneath both shots, bridging the cut.)
  ```
- **페어링**: 몽타주 연결부, 여러 장소를 잇는 시퀀스, 음악 중심 시퀀스.
- **주의**: 본질적으로 사운드 편집 개념 — 오디오를 못 다루는 순수 T2V 모델에서는 위 시각적 근사(리듬 매칭)만 가능하고 효과가 약할 수 있음을 사용자에게 알릴 것; 오디오 지원 모델이면 실제 음악·효과음으로 구현하는 게 정석.

### 크로스커팅 (평행편집) / Cross-Cutting · Parallel Editing

- **시그널**: 서로 다른 공간에서 동시에 벌어지는 사건을 번갈아 교차시켜 긴장을 쌓는 편집 — 시각적 병치 구조라 오디오 없이도 완전히 재현 가능하다.
- **앵커**: `parallel cross-cutting` · **의도**: tense, simultaneous
- **전환 블록**:
  ```
  The sequence alternates repeatedly between two separate locations, cutting back and forth between one unfolding event and another happening at the same time elsewhere; each return arrives slightly further along in its own timeline, and the growing frequency of the alternation builds mounting tension between the two threads until they converge or collide.
  ```
- **페어링**: 추격·구조 시퀀스, 대비되는 두 인물의 동시 행동, 클라이맥스 빌드업.
- **주의**: 두 라인이 명확히 구분되는 장소·색감·구도를 가져야 관객이 혼동하지 않음(`color-grade`로 톤 분리 추천); 교차 빈도를 점점 빠르게 해야 긴장이 쌓임.

### 쿨레쇼프 컷 (병치 컷) / Kuleshov Cut · Juxtaposition Cut

- **시그널**: 서로 무관한 두 쇼트를 나란히 이어 붙여 그 사이의 관계를 관객이 스스로 추론하게 만드는 편집.
- **앵커**: `Kuleshov juxtaposition cut` · **의도**: suggestive, inferential
- **전환 블록**:
  ```
  Two shots with no inherent narrative connection are cut directly one after another — a face, then an unrelated image — with nothing explaining the link between them; the meaning of the pairing exists only in the gap between the cuts, left for the viewer to construct from the juxtaposition itself.
  ```
- **페어링**: 심리적 암시, 은유적 연결, 실험적·예술영화 톤.
- **주의**: 두 쇼트 사이에 아무 설명적 요소(자막·내레이션)도 넣지 않아야 추론의 여지가 삼; 조합이 너무 뜬금없으면 관계 자체가 안 읽힐 수 있음.



## 구두점 & 설정 컷

### 설정 샷 전환 / Establishing Shot Transition

- **시그널**: 새로운 장소로 넘어갈 때 넓은 와이드샷을 먼저 배치해 공간감을 부여하는 관습적 전환.
- **앵커**: `establishing shot transition` · **의도**: orienting, grounding
- **전환 블록**:
  ```
  The cut arrives on a wide establishing view of the new location — the full exterior, skyline, or expansive interior — held long enough to orient the viewer in space before any subsequent cut moves closer into the scene's action; the wide view functions as a spatial anchor for everything that follows.
  ```
- **페어링**: 익스트림 와이드/와이드 구도, 새 장소·새 시퀀스의 오프닝, 여행·이동 시퀀스.
- **주의**: 설정 샷이 너무 짧으면 공간 정보가 각인되지 않음 — 최소한의 길이는 유지; 이미 익숙한 장소로 복귀할 때마다 반복하면 지루해짐.

### 스매시컷 / Smash Cut

- **시그널**: 예고 없이 톤이나 상황이 완전히 다른 장면으로 급격히 끊어치는 컷.
- **앵커**: `jarring smash cut` · **의도**: shocking, tonal-whiplash
- **전환 블록**:
  ```
  The frame cuts with zero warning from one scene to another that is tonally, sonically, or visually its polar opposite — a quiet, calm image slammed straight into something loud, violent, or absurd (or the reverse) — with no transitional buffer, the abruptness itself delivering the shock or the joke.
  ```
- **페어링**: 코미디 펀치라인, 공포 장르 충격 비트, 톤 전환이 필요한 시퀀스.
- **주의**: 대비가 극단적일수록 효과가 큼 — 어중간한 대비는 그냥 하드컷처럼 느껴짐; 남용하면 매번의 충격 효과가 무뎌짐.

### 스팅어 컷 (오디오 스팅) / Stinger Cut · Audio Sting Cut

- **시그널**: 강한 음향 충격(스팅어)과 정확히 동시에 끊어내 전환에 임팩트를 주는 컷. 원래는 오디오 편집 기법(음악·효과음의 스팅어와 컷포인트를 정확히 일치시키는 것)이라, 오디오를 생성하지 않는 모델에서는 시각적 충격으로만 근사할 수 있다.
- **앵커**: `stinger-cut impact` · **의도**: jolting, punctuated
- **전환 블록**:
  ```
  The cut lands with a sudden visual jolt precisely on the beat — a hard flash of light, an abrupt snap-zoom, or a violent whip of motion that hits the frame at the exact instant of the cut — so the transition itself reads as a single sharp punctuation mark rather than a smooth edit. (오디오 생성이 가능한 모델이면: a sharp musical or sound-effect stinger hits in perfect sync with the frame of the cut.)
  ```
- **페어링**: 리빌·반전 비트, 공포 장르 점프스케어, 트레일러식 편집.
- **주의**: 본질적으로 사운드 편집 개념 — 오디오를 못 다루는 순수 T2V 모델에서는 위 시각적 근사만 가능하고 효과가 약할 수 있음을 사용자에게 알릴 것; 오디오 지원 모델이면 스팅어 사운드와 프레임을 정확히 동기화하는 게 정석.



## 카메라 무브 기반 전환 (링크 전용, 🔗)

### 휩팬 전환 / Whip Pan Transition 🔗

- **시그널**: 초고속 팬으로 프레임이 블러되며 다음 장면으로 전환되는 카메라 무브.
- **링크**: 새로 쓰지 않는다 — `camera-motion/references/dynamic-and-rig.md`의 "휩팬 전환" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 샷A의 마지막 순간에 팬이 시작되어 블러로 프레임이 흐려지는 지점에서 끊고, 샷B는 이미 팬이 감속하며 새 피사체에 안착하는 지점에서 시작하도록 앞뒤를 나눠 배치한다 — 하나의 연속된 무브를 컷포인트로 쪼개 쓰는 것이다.
- **주의**: `camera-motion` SKILL.md 기준, 전·후 프레임 둘 다 명확히 정해야 하고 한 컷포인트에 한 번만 — 연속으로 휩팬을 걸면 어지러움.

### 스위시 리프레임 / Swish Reframe 🔗

- **시그널**: 빠르게 휙 돌려 같은 공간 안 다른 대상으로 재구도하는 짧은 비트.
- **링크**: 새로 쓰지 않는다 — `camera-motion/references/dynamic-and-rig.md`의 "스위시 리프레임" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 휩팬 전환보다 짧고 좁은 범위의 재구도이므로, 같은 씬 안에서 리액션 컷이나 인서트컷을 대체하는 "컷 없는 컷"으로 쓴다 — 실제로는 한 샷 안의 무브지만 컷포인트처럼 기능하도록 배치한다.
- **주의**: 같은 공간 안이라는 전제가 깨지면(전혀 다른 장소로 넘어가면) 어색함 — 휩팬 전환과 혼동하지 말 것; 너무 잦으면 산만해짐(`camera-motion` SKILL.md 기준).

### 매치컷 모션 / Match-Cut Move 🔗

- **시그널**: 앞 샷의 움직임·형태를 다음 샷이 이어받아 매끄럽게 전환되는 모티베이티드 무브.
- **링크**: 새로 쓰지 않는다 — `camera-motion/references/aerial-special-time.md`의 "매치컷 모션" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 샷A 끝의 무브 방향·속도·형태(회전, 낙하, 스핀 등)를 샷B 시작의 무브가 정확히 이어받도록 두 샷의 모션 벡터를 맞춰 지정한다 — 컷 자체는 하드컷이어도 무브의 연속성 때문에 이음매가 느껴지지 않는다.
- **주의**: `camera-motion` SKILL.md 기준, 전·후 샷의 무브 방향·속도가 어긋나면 매치가 성립하지 않고 그냥 어색한 하드컷이 됨 — 전환 지점을 사전에 설계할 것.
