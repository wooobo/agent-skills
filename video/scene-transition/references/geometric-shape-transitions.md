# 기하학·도형 기반 전환 (Geometric & Shape-Driven Transitions)

모션그래픽·타이틀 디자인·프레젠테이션에서 흔히 쓰는 기하학적 도형·마스크 기반 전환 장치(와이프/슬라이드/3D 변환/폴드/타이포)를 다룬다.

> 각 항목 구성: **시그널**(전환 시그니처) / **앵커**(짧은 영어 태그) / **의도**(무드 단어) / **전환 블록**(영어, 바로 붙여쓰기) / **페어링**(어울리는 다른 전환·요소) / **주의**.
>
> 전환 블록은 [샷A 전체 스택] ↔ [샷B 전체 스택] 사이의 "경계"를 묘사하는 문단이다. 샷A 지시문의 꼬리 / 샷B 지시문의 머리에 붙이거나, 지속시간이 있는 전환은 별도의 짧은 "전환 전용 클립"으로 생성해 둘 사이에 끼운다. 사용법·삽입 방식·안 통하는 것은 SKILL.md 참고.

## 와이프 — 방향·블록·아이리스

### 리니어(방향) 와이프 / Linear Wipe · Directional Wipe

- **시그널**: 직선 경계선이 좌우·상하·대각선 방향으로 프레임을 가로지르며 다음 장면을 드러내는 가장 기본형 와이프.
- **앵커**: `linear wipe, directional wipe` · **의도**: clean, graphic, brisk
- **전환 블록**:
  ```
  A hard-edged straight line sweeps across the frame from one side to the other, the boundary staying perfectly vertical (or horizontal, or diagonal) as it travels at a constant speed; the outgoing scene recedes behind the line while the incoming scene is revealed in its wake, the edge remaining crisp and unwavering for the entire pass until it exits the far side and only the new scene remains.
  ```
- **페어링**: 몽타주 시퀀스, 그래픽한 타이틀 시퀀스, 상품·뉴스 익스플레이너 톤.
- **주의**: AI 영상 모델은 완벽히 직선인 하드에지 마스크보다 살짝 유기적인 경계를 더 자연스럽게 그린다 — 방향과 "constant speed"를 명시해도 경계가 흔들리면, 정밀한 직선 와이프는 후반 합성으로 보완하는 편이 안전하다.

### 블록·모자이크 와이프 / Block Wipe · Mosaic Wipe

- **시그널**: 화면이 체크판·랜덤·지그재그·나선 등의 순서로 블록 단위로 사라지며 전환되는 모자이크형 와이프.
- **앵커**: `block wipe, mosaic wipe` · **의도**: playful, digital, rhythmic
- **전환 블록**:
  ```
  The frame fractures into a grid of even rectangular tiles, each tile abruptly cutting from the outgoing scene to the incoming scene in a rippling checkerboard cascade — some tiles flipping earlier, others later, the pattern spreading diagonally across the grid — until every tile shows the new scene and the mosaic resolves back into one clean, unbroken image.
  ```
- **페어링**: 경쾌한 몽타주, 다중 화면 하이라이트 릴, 스포츠·게임 하이라이트 톤.
- **주의**: AI 영상 모델은 격자 전체를 프레임 단위로 정확히 동기화하는 걸 어려워한다 — 타일 개수를 세밀하게(10x10 이상) 요구하지 말고 6~8개 굵직한 블록으로 단순화해야 결과가 덜 뭉개진다; 정교한 그리드가 필요하면 포스트 합성으로.

### 베네시안 블라인드 와이프 / Venetian Blinds Wipe

- **시그널**: 가로 또는 세로 줄무늬가 블라인드처럼 열리며 그 틈으로 다음 장면이 드러나는 와이프.
- **앵커**: `Venetian blinds wipe` · **의도**: mechanical, retro, segmented
- **전환 블록**:
  ```
  A series of even parallel slats — horizontal or vertical — cover the outgoing frame like closed blinds, then rotate or slide open in unison, each slat peeling back to reveal a strip of the incoming scene beneath it; the revealed strips widen uniformly until the slats fully part and the new scene fills the frame edge to edge.
  ```
- **페어링**: 레트로 브로드캐스트 톤, 프레젠테이션·인포그래픽 컷, 리듬감 있는 비트 몽타주.
- **주의**: 슬랫 개수를 과하게 요청하면(가는 줄 수십 개) AI가 스트라이프를 지저분하게 그린다 — 6~10개 굵은 슬랫으로 단순화; 정밀한 반복 패턴이 필요하면 후반 합성을 권한다.

### 아이리스 와이프 (서클/셰이프) / Iris Wipe (Circle/Shape)

- **시그널**: 원형이나 커스텀 도형이 중심(또는 모서리)에서 확장·축소되며 다음 장면을 드러내는 조리개형 와이프.
- **앵커**: `iris wipe, circle wipe` · **의도**: classic, nostalgic, focusing
- **전환 블록**:
  ```
  A perfectly circular aperture opens from a single point — center frame or a corner — the dark surround receding as the circle expands outward like a camera iris; the incoming scene is visible only inside the growing circle until it swallows the entire frame and the outgoing shot vanishes past its edge.
  ```
- **페어링**: 올드무비·실라이언트필름 오프닝, 회상 시퀀스, 코믹한 구식 전환.
- **주의**: 원형 경계가 완벽히 매끈하길 기대하면 실망할 수 있다 — 살짝 불규칙한 원이라도 "expanding circular aperture" 방향성이 읽히면 충분하고, 완벽한 기하학적 원이 꼭 필요하면 포스트 마스크로 보완한다.

### 클록 와이프 (레디얼 스윕) / Clock Wipe (Radial Sweep)

- **시그널**: 한 점을 축으로 방사형 선이나 쐐기꼴이 시계바늘처럼 회전 스윕하며 다음 장면을 드러내는 와이프.
- **앵커**: `clock wipe, radial sweep` · **의도**: mechanical, precise, retro
- **전환 블록**:
  ```
  A radial line sweeps around a fixed center point like the hand of a clock, the wedge it traces steadily widening to reveal the incoming scene beneath the outgoing frame, the boundary rotating cleanly until the full circle completes and only the new scene remains.
  ```
- **페어링**: 시간 경과, 레트로·다큐 톤, 지리적 이동을 표시하는 지도 컷.
- **주의**: 회전 속도가 일정해야 기계적으로 정확해 보인다; 너무 빠르면 스트로빙, 너무 느리면 지루함.

### 셔터 와이프 (반도어) / Shutter Wipe (Barn Doors)

- **시그널**: 카메라 조리개 블레이드나 여닫이문처럼 화면이 조여들었다 열리며 전환되는 기계식 와이프.
- **앵커**: `shutter wipe, barn doors` · **의도**: mechanical, punchy, theatrical
- **전환 블록**:
  ```
  Two solid panels close in from the left and right (or top and bottom) edges like barn doors, squeezing the outgoing scene into a shrinking sliver at center; the panels then reverse and pull back apart, opening onto the incoming scene which fills the widening gap until the doors have fully retreated off-frame.
  ```
- **페어링**: 극장식 오프닝·클로징, 코미디 비트, 프레젠테이션 챕터 전환.
- **주의**: AI 모델에게 "두 개의 딱딱한 패널"의 직선 에지를 정확히 유지시키긴 어렵다 — 패널을 어두운 단색으로("solid black panels") 지정하면 경계가 덜 뭉개진다.

### 그라디언트 와이프 / Gradient Wipe

- **시그널**: 그레이스케일 그라디언트 맵의 밝기 순서를 따라 불규칙하고 유기적인 경계로 전환되는 와이프.
- **앵커**: `gradient wipe, luma wipe` · **의도**: organic, painterly, seamless
- **전환 블록**:
  ```
  The incoming scene bleeds through the outgoing frame following an uneven, cloud-like tonal gradient — the brightest patches of the transition dissolving first, darker regions holding the old image longest — so the boundary between the two scenes reads as a soft, organic wash rather than a hard edge, spreading unevenly until the new scene fully replaces the old.
  ```
- **페어링**: 자연·구름·수면 등 유기적 소재의 컷, 다큐멘터리 부드러운 전환, 컬러 매치 와이프와 결합.
- **주의**: 이 와이프는 AI 생성 모델이 가장 잘 다루는 종류다 — 불규칙하고 유기적인 경계는 딱 떨어지는 기하학보다 훨씬 자연스럽게 렌더링되므로, 정밀한 룩이 필요 없다면 이 목록에서 가장 먼저 시도해볼 만하다.

## 슬라이드·스플릿·3D 변환

### 푸시 전환 / Push Transition

- **시그널**: 이전 샷이 밀려나가며 그 자리를 다음 샷이 같은 방향으로 밀고 들어오는 전환.
- **앵커**: `push transition` · **의도**: brisk, directional, connective
- **전환 블록**:
  ```
  The outgoing scene slides bodily off one edge of the frame as if pushed by an invisible force, while the incoming scene enters in perfect lockstep from the opposite edge; both images move at the same speed so the shared boundary line travels cleanly across the frame until the new scene occupies the full picture.
  ```
- **페어링**: 나란한 장소·시간 이동, 리스트형 몽타주, 스와이프하는 슬라이드쇼 톤.
- **주의**: 두 장면이 서로 다른 속도로 미끄러지면 어색해진다 — "same speed, locked together" 같은 동기화 지시를 명확히 넣을 것; 완벽 동기가 안 나오면 전환 전용 짧은 클립으로 별도 생성.

### 슬라이드(커버) 전환 / Slide Transition (Cover)

- **시그널**: 다음 샷이 고정된 이전 샷 위로 슬라이드해 들어와 덮거나, 이전 샷이 빠져나가며 다음 샷이 드러나는 전환.
- **앵커**: `slide transition, cover` · **의도**: smooth, layered, modern
- **전환 블록**:
  ```
  The incoming scene glides in as a solid panel from off-frame, sliding directly over the outgoing scene which stays still beneath it, its leading edge sweeping across until it fully covers and replaces the old frame — or, in reverse, the outgoing scene itself slides away to uncover the new scene waiting fixed underneath.
  ```
- **페어링**: 앱·UI 스타일 프레젠테이션, 제품 카탈로그 컷, 슬라이드쇼형 몽타주.
- **주의**: "덮는(cover)" 쪽과 "드러나는(reveal)" 쪽 중 어느 것인지 명확히 지정해야 한다 — 안 그러면 AI가 푸시 전환과 혼동해 두 장면을 같이 밀어버릴 수 있다.

### 스플릿 스크린 전환 / Split Screen Transition

- **시그널**: 화면이 중앙이나 여러 띠로 갈라져 각 조각이 반대 방향으로 슬라이드하며 다음 장면을 드러내는 전환.
- **앵커**: `split screen transition` · **의도**: dynamic, structured, energetic
- **전환 블록**:
  ```
  The frame splits along a central line, or several parallel bands, into separate panels, each panel then sliding apart in opposite directions — outward toward the edges or off-frame entirely — pulling the outgoing scene apart like sliding doors to reveal the incoming scene filling the gap that opens between them.
  ```
- **페어링**: 액션·스포츠 하이라이트, 동시다발적 사건 병치, 빠른 비트 몽타주.
- **주의**: 조각 수가 많을수록(4분할 이상) 각 패널의 이동 동기화가 무너지기 쉽다 — 2~3분할로 단순화해서 요청하는 편이 결과가 안정적이다.

### 스왑 전환 / Swap Transition

- **시그널**: 두 장면이 3D 공간에서 서로 위치를 교환하듯 앞뒤로 스왑되며 전환되는 방식.
- **앵커**: `swap transition, 3D swap` · **의도**: playful, spatial, dimensional
- **전환 블록**:
  ```
  The outgoing scene tilts back and recedes into depth as if pivoting away in 3D space, while the incoming scene simultaneously rises up from behind it and swings forward to take the frontmost position; the two planes cross past each other in a brief parallax swap until the new scene settles flat and fills the frame.
  ```
- **페어링**: 제품 비교 컷, 비포·애프터 리빌, 경쾌한 브랜드 몽타주.
- **주의**: AI 영상 모델에게 진짜 3D 원근 교차는 까다로운 과제다 — 두 장면이 서로 관통하거나 왜곡될 수 있으니, 실패하면 단순 크로스 디졸브나 큐브 스핀으로 대체하거나 후반 합성으로 보완한다.

### 큐브 스핀 전환 / Cube Spin Transition

- **시그널**: 화면이 3D 큐브의 한 면처럼 옆으로 회전해 넘어가며 인접 면에 다음 장면이 나타나는 전환.
- **앵커**: `cube spin transition` · **의도**: mechanical, dimensional, techy
- **전환 블록**:
  ```
  The current frame behaves like one face of a rotating cube, pivoting away along a vertical (or horizontal) axis as if the whole image were mounted on a turning block, its surface foreshortening into the depth of the turn; the adjacent cube face carrying the incoming scene rotates into view from the opposite side and squares back up to fill the frame once the rotation completes.
  ```
- **페어링**: 프레젠테이션·슬라이드 챕터 전환, 제품 라인업 소개, 테크 브랜드 톤.
- **주의**: 완벽한 큐브 기하학과 그림자 원근을 AI가 정확히 재현하긴 어렵다 — 지나치게 딱 떨어지는 큐브 전환은 다음 장면과의 경계가 뭉개질 수 있으니, 실패하면 후반 합성으로 보완하는 것도 방법.

### 플립 오버 전환 / Flip Over Transition

- **시그널**: 화면이 카드처럼 수평·수직 축으로 뒤집히며 뒷면에 다음 장면이 나타나는 전환.
- **앵커**: `flip over transition` · **의도**: snappy, card-like, playful
- **전환 블록**:
  ```
  The frame rotates around a central horizontal or vertical axis like a card flipping over, the outgoing scene foreshortening into a thin edge-on sliver at the midpoint of the turn; the reverse side carrying the incoming scene then rotates into view and widens back out to full frame as the flip completes.
  ```
- **페어링**: 카드형 갤러리·룩북 전환, 경쾌한 광고 비트, 비포·애프터 컷.
- **주의**: 중간 지점(90도 회전)에서 화면이 완전히 얇아지는 순간을 AI가 부자연스럽게 처리할 수 있다 — 회전 속도를 빠르게 지정해 그 순간을 짧게 스치듯 지나가게 하면 어색함이 덜하다.

## 폴드·프래그먼트·타이포 와이프

### 카드 와이프/플립 전환 / Card Wipe · Flip Transition

- **시그널**: 화면이 여러 장의 카드 조각으로 쪼개져 순차적으로 뒤집히거나 날아가며 다음 장면을 드러내는 전환.
- **앵커**: `card wipe, flip transition` · **의도**: playful, staggered, kinetic
- **전환 블록**:
  ```
  The frame divides into a grid of rectangular card-like panels, each one flipping over or flying off in a staggered cascade rather than all at once — a diagonal or rippling sequence — the underside of each departing card revealing a piece of the incoming scene, until every card has turned or flown away and the new scene is fully assembled.
  ```
- **페어링**: 포트폴리오·룩북 몽타주, 리듬감 있는 브랜드 비트, 다중 컷 하이라이트 릴.
- **주의**: 카드 개수가 많을수록(3x3 이상) 개별 카드의 타이밍과 원근이 뭉개지기 쉽다 — 4~6장 정도로 단순화하고, "staggered diagonal sequence"처럼 순서를 명시할 것.

### 페이지 필/턴 전환 / Page Peel · Turn Transition

- **시그널**: 화면 모서리가 책장처럼 말려 올라가거나 페이지 전체가 회전하며 넘어가 다음 장면이 드러나는 전환.
- **앵커**: `page peel, page turn` · **의도**: nostalgic, tactile, bookish
- **전환 블록**:
  ```
  A corner of the outgoing frame lifts and curls upward like the page of a book, the curling paper catching a soft highlight along its rolled edge and casting a faint shadow onto the scene beneath it; the peel spreads diagonally across the frame until the whole page has turned over and the incoming scene lies flat and fully revealed underneath.
  ```
- **페어링**: 스크랩북·저널 스타일 몽타주, 레시피·튜토리얼 챕터 전환, 노스탤직 톤.
- **주의**: 종이의 곡률과 그림자를 AI가 사실적으로 그리려면 재질감("thin paper, soft curl, subtle shadow")을 구체적으로 적어야 한다 — 안 그러면 그냥 흐릿한 곡선 마스크로 뭉개진다.

### 폴드(아코디언) 와이프 / Fold Wipe · Accordion Fold

- **시그널**: 화면이 종이처럼 한 번 또는 아코디언처럼 여러 겹으로 접히며 다음 장면으로 전환되는 방식.
- **앵커**: `fold wipe, accordion fold` · **의도**: geometric, tactile, rhythmic
- **전환 블록**:
  ```
  The frame creases into a series of parallel vertical (or horizontal) folds like an accordion or a folded map, each panel compressing and rotating into shadow as the pleats concertina shut, collapsing the outgoing scene into a thin folded strip; the pleats then reverse and unfold, each panel opening to reveal a slice of the incoming scene until the surface lies flat again with the new scene whole.
  ```
- **페어링**: 지도·여정 컷, 다큐 챕터 구분, 페이퍼 크래프트·스톱모션 톤.
- **주의**: 접히는 주름 개수를 과하게 요청하면(10겹 이상) AI가 패턴을 흐트러뜨린다 — 3~5겹으로 단순화하는 편이 안정적; 정교한 아코디언 접힘이 꼭 필요하면 포스트 합성을 권한다.

### 카이도스코프 전환 / Kaleidoscope Transition

- **시그널**: 화면이 대칭으로 반사되는 만화경 패턴이나 삼각형 조각으로 파편화되며 다음 장면으로 재조합되는 전환.
- **앵커**: `kaleidoscope transition` · **의도**: hypnotic, fractal, trippy
- **전환 블록**:
  ```
  The outgoing scene shatters into a radiating pattern of mirrored triangular fragments spinning around a central point, each shard reflecting and repeating like a kaleidoscope; as the fragments rotate and multiply, slivers of the incoming scene begin appearing within the mirrored shards, gradually dominating the pattern until the fragments collapse back into a single unbroken image of the new scene.
  ```
- **페어링**: 음악비디오·사이키델릭 톤, 클럽·페스티벌 몽타주, 꿈·환각 시퀀스.
- **주의**: 이 전환은 이 목록에서 가장 난이도가 높다 — 완벽한 대칭 반사와 다중 삼각 조각을 AI 영상 모델이 정확히 유지하기 매우 어려우므로, 결과가 뭉개지면 생성 단계에서 완결하려 하지 말고 후반 합성(카이도스코프 필터)으로 만드는 게 현실적이다.

### 텍스트 마스크/키네틱 타이포 와이프 / Text Mask · Kinetic Typography Wipe

- **시그널**: 애니메이션 텍스트나 로고, 문자 형태 자체가 마스크가 되어 그 안으로 다음 장면이 드러나는 전환.
- **앵커**: `text mask wipe, kinetic typography` · **의도**: bold, branded, graphic
- **전환 블록**:
  ```
  Bold animated letterforms or a logo shape scale up to fill the frame, their thick silhouette acting as a window cut into the outgoing scene; the incoming scene appears to live inside the negative space of the type, visible only through the letter shapes, which then expand — or the camera pushes through them — until the letter edges pass beyond the frame and the incoming scene fills the full picture.
  ```
- **페어링**: 타이틀 카드, 브랜드 로고 리빌, 예고편 텍스트 인트로.
- **주의**: 글자 안에 다른 장면이 정확히 마스킹되어 보이는 효과는 AI 생성 모델이 안정적으로 재현하기 어렵다 — 텍스트 실루엣이 두껍고 단순한 서체일수록 성공률이 높고, 정밀한 결과가 필요하면 텍스트 마스크는 후반 합성으로 얹는 게 안전하다.

## VFX 링크 (링크 전용, 🔗)

### 글리치 와이프 / Glitch Wipe 🔗

- **시그널**: 디지털 글리치 아티팩트가 화면을 가로지르며 전환되는 와이프.
- **링크**: 새로 쓰지 않는다 — `vfx/references/optical-light-glitch.md`의 "글리치 와이프 전환" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: vfx 블록을 컷포인트 정확히 그 순간에만 짧게(수 프레임~1초) 걸어 화면 전체를 훑고 지나가게 하면 하드컷 대신 쓸 수 있는 디지털 전환이 된다.
- **주의**: 너무 길게 끌면 디지털 오류처럼 읽혀 의도가 불분명해진다 — 짧고 강하게.

### 홀로그램 플리커 / Hologram Flicker 🔗

- **시그널**: 반투명 홀로그램 영상이 스캔라인과 함께 깜빡이다 다음 장면으로 넘어가는 전환.
- **링크**: 새로 쓰지 않는다 — `vfx/references/optical-light-glitch.md`의 "홀로그램 플리커" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 홀로그램이 깜빡이다 완전히 꺼지거나 다른 이미지로 전환되는 순간을 컷포인트에 맞춰, 꺼짐과 동시에 다음 장면이 시작되게 걸면 SF·테크 톤의 화면전환으로 쓸 수 있다.
- **주의**: 홀로그램·스크린·UI가 이미 등장하는 장면 전환에만 쓸 것 — 맥락 없는 장면에 억지로 쓰면 어색해진다.
