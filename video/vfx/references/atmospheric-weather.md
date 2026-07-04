# 대기·날씨 FX (atmospheric-weather)

비·눈·번개·안개·바람 — 장면 전체를 감싸는 대기 레이어. 한 컷에 주연 날씨 하나, 밀도는 그라데이션으로(피사체 가림 금지). 입자는 모션블러·원근 위계 필수.

> 각 항목 구성: **시그널**(언제 쓰는지) / **앵커**(키워드) · **무드** · **강도**(히어로=주연 / 양념=저밀도 보조) · **타이밍**(🔁연속=루프 / ⚡원샷=순간) / **VFX 블록**(영어, 바로 붙여쓰기) / **영상 추가** / **페어링**(어울리는 구도·무브·색감) / **주의**.

> VFX 블록은 **피사체·동작 묘사 뒤, 카메라무브·색감 앞**에 둔다. 한 컷에 히어로 효과는 하나만. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.


## 강수 · 폭풍설 (Rain, Snow & Storm)


### 가랑비 / 이슬비 (Light Drizzle)

- **시그널**: 분위기는 적시되 피사체는 절대 가리지 않는 가장 약한 비. 서정적이거나 우울한 창가·도심 무드, 비를 '느끼게'만 하고 싶을 때 집는다.
- **앵커**: `fine light drizzle` · **무드**: wistful · damp · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A faint, fine drizzle hangs in the air as sparse barely-there threads and a soft suspended mist, the streaks thin and short and easy to miss except where they drift through a pocket of backlight and flash pale silver-grey. It falls slowly with a gentle lateral sway, beading into tiny droplets that settle on the subject's hair, eyelashes, and jacket and gather along an umbrella brim before sliding off. Surfaces take on only a faint damp sheen and darken slightly as the drizzle wets them, soft reflections just beginning to form on the pavement, the whole scene hushed and lightly veiled rather than streaked with rain.
  ```
- **영상 추가**: Drizzle drifts down slowly with a faint lateral sway while the odd bead swells and slides off a brim or strand of hair; loops continuously, kept whisper-light so it reads as mist-fine threads, not visible streaks.
- **페어링**: 구도는 창가 클로즈업·미디엄, 얕은 심도. 카메라는 느린 푸시인이나 가벼운 핸드헬드. 색감은 저채도 블루-그레이 도시 무드와 잘 맞는다.
- **주의**: 가랑비를 폭우처럼 굵고 긴 빗줄기로 그리면 정체성이 깨진다 — 짧고 성긴 미세 threads로만. 반대로 너무 촘촘하면 안개와 구분이 안 되고, 표면의 미세한 젖은 기색(비드·옅은 반사)이 빠지면 비가 아예 안 보인다.

### 보통 비 / 줄기비 (Steady Rain)

- **시그널**: 폭우만큼 극적이진 않지만 분명히 보이는, '제대로 오는' 일상적인 비. 젖은 거리와 우산, 차분한 멜랑콜리 무드에 기본값으로 쓴다.
- **앵커**: `steady falling rain` · **무드**: melancholic · grounded · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Steady medium rain falls in even, mostly vertical streaks at a moderate density, sparser across the foreground and stacking thicker through the mid-ground so the air clearly reads as wet without burying the scene. The streaks are cool grey-silver, brightening into pale threads wherever they cross a light source and darkening against shadowed background. They fall at a consistent slight angle with clean motion blur, pattering on surfaces and dimpling puddles, water running off the brim of a hat, off hair, and off umbrella edges in thin drips while the ground turns slick and reflective beneath the subject.
  ```
- **영상 추가**: Streaks fall continuously at a constant slight angle while ripples tick and spread across puddles and drips run off edges; loops, keep the fall rate even so streaks stay motion-blurred lines rather than frozen dots.
- **페어링**: 구도는 와이드~미디엄의 젖은 거리 풍경. 카메라는 느린 트래킹이나 돌리. 색감은 틸-그레이 시네마틱, 저채도 우중 톤이 어울린다.
- **주의**: 빗줄기가 전부 같은 길이로 복붙되면 가짜로 보인다 — 원근별로 길이·밀도를 차등하고 앞쪽은 성기게. 비가 오는데 바닥과 옷이 안 젖어 번들거림·반사가 없으면 합성 티가 난다.

### 폭우 / 역광 빗줄기 (Heavy Backlit Downpour)

- **시그널**: 화면을 가득 채운 굵은 빗줄기가 역광에 은백색으로 빛나며 비스듬히 쏟아지고, 바닥과 어깨에 부딪혀 물보라로 튀는 폭우. 모든 표면이 젖어 번들거린다.
- **앵커**: `torrential backlit rain` · **무드**: drenching · cinematic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Dense torrential rain falls in long diagonal silver streaks that catch the backlight as bright glistening threads against the darker background, the heaviest near the light source where each drop flares; the downpour hammers the ground and the subject's shoulders, kicking up a fine misting spray and bursting micro-splashes wherever it lands, with wet highlights running down skin, hair, and every surface as the whole frame turns slick and reflective.
  ```
- **영상 추가**: Rain streaks fall continuously at a steady wind-blown angle while droplet splashes tick and ring across puddles and a soft drifting spray-haze rolls through the light; keep the fall rate constant so streaks read as motion-blurred lines, not frozen dots.
- **페어링**: 구도는 역광 실루엣의 미디엄~와이드. 카메라는 느린 푸시인이나 핸드헬드. 색감은 저채도 한기에 하이라이트만 은백으로 살리는 그레이드가 좋다.
- **주의**: 빗줄기가 정지된 흰 점·선으로 굳거나(모션블러 없는 정전 빗방울) 너무 촘촘해 피사체를 가리는 게 최대 함정 — 밀도는 역광 구간만 진하게, 앞쪽은 성기게 둔다. 빗방울이 전부 같은 길이로 복붙되면 가짜로 보이고, 비가 오는데 바닥·옷이 안 젖어 있으면 합성 티가 난다.

### 호우 / 물벼락 (Torrential Rain / Cloudburst)

- **시그널**: 양동이로 퍼붓는 듯 시야가 비에 잠기는 극한 강수. 배경이 물안개로 녹고 물이 줄줄 흘러내리는 재난적 호우 무드에.
- **앵커**: `torrential cloudburst rain` · **무드**: overwhelming · chaotic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Rain comes down in dense overlapping sheets so thick that the background dissolves into a grey watery veil, distant shapes blurring away behind the falling water; near streaks are long and fast while the mid-distance churns into a curtain of spray. The tones stay cold and desaturated, grey-green with brief silver where light cuts through. The downpour drums and sheets off every surface, water cascading from edges and overflowing gutters, exploding into a low fog of bounce-spray at ground level, plastering and flattening the subject's hair and clothes with water streaming off chin and fingertips — keep the foreground over the face thinner so the subject isn't swallowed by the deluge.
  ```
- **영상 추가**: Rain sheets down fast and relentless while bounce-spray haze churns at ground level and water sluices off surfaces in ropes; loops, keep the rate punishing but vary streak speed by depth so the wall of water never flattens into uniform noise.
- **페어링**: 구도는 미디엄~와이드, 배경이 비에 잠긴 레이어. 카메라는 핸드헬드나 약한 셰이크로 재난감을 더한다. 색감은 폭풍 저채도 한기, 그린-그레이 톤.
- **주의**: 호우는 밀도가 핵심이지만 화면 전체를 균일 노이즈로 덮으면 피사체가 소실된다 — 얼굴 앞은 비우고 배경만 물안개로 녹인다. 바닥 바운스 스프레이와 줄줄 흘러내리는 물줄기가 없으면 그냥 빽빽한 비일 뿐이다.

### 비바람 / 사선 빗줄기 (Windblown Slanted Rain)

- **시그널**: 강풍에 휩쓸려 거의 수평으로 내리치는 비. 우산이 뒤집히고 옷·머리가 한쪽으로 펄럭이는 폭풍 속 한 컷에.
- **앵커**: `wind-driven slanting rain` · **무드**: turbulent · harsh · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Rain drives across the frame at a steep, near-horizontal slant, the streaks long and raked in one strong consistent direction with gusty waves where denser sheets sweep through. The tones are cold silver-grey, brightening along the windward edge of the subject where the rain catches the light. The wind whips the rain so it lashes one side of the subject — plastering hair and clothing flat against that side and throwing spray off shoulders and umbrella rims — while the leeward side stays slightly sheltered and drier; surfaces facing the wind glisten and stream sideways, and the slant stays unified so it reads as one driving gust rather than crossing directions.
  ```
- **영상 추가**: Streaks rake across in one direction with pulsing gusts that surge and ease while the subject's hair and clothing flag in the same wind; loops, hold a single dominant wind angle so the rain never appears to blow two ways at once.
- **페어링**: 구도는 미디엄, 바람을 맞는 측면 위주. 카메라는 핸드헬드나 카메라 셰이크. 색감은 폭풍 저채도 블루-그레이.
- **주의**: 빗줄기 각도가 제각각이면 바람 방향이 무너져 가짜가 된다 — 한 방향으로 통일. 비는 사선인데 머리·옷이 안 날리면 바람이 안 느껴지므로, 피사체와의 상호작용(한쪽만 젖고 펄럭임)을 반드시 넣는다.

### 렌즈에 맺힌 비 / 젖은 렌즈 (Rain on Lens (Wet Lens))

- **시그널**: 카메라 렌즈나 유리에 빗방울이 맺혀 전경을 굴절·왜곡시키는 효과. 다큐·POV·창밖 응시처럼 '보는 행위'를 강조하는 친밀한 무드에.
- **앵커**: `raindrops on the lens` · **무드**: intimate · voyeuristic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Scattered water droplets cling to the lens (or a pane of glass) right in the foreground, sitting out of focus as soft refractive blobs that bend and invert tiny upside-down images of the scene behind them, clustered thickest at the frame edges and thinning toward the center so the subject stays readable. They glint cool where light catches their curved tops and smear bright background lights into soft bokeh streaks, with the occasional bead swelling and sliding down to leave a wet trailing streak. The droplets stay locked to the lens plane — drifting with the camera rather than the world — separating a crisp subject behind a beaded, rain-flecked glass layer.
  ```
- **영상 추가**: Droplets sit static on the glass while occasional beads swell and run down in slow streaks and fresh specks tick on; loops, and crucially the drops move with the camera frame, never parallaxing with the scene behind them.
- **페어링**: 구도는 얕은 심도의 프레임 인 프레임·창밖. 카메라는 핸드헬드 POV나 느린 푸시. 색감은 도시 네온 보케나 저채도 우중 톤.
- **주의**: 물방울이 장면(월드)과 함께 패럴랙스로 움직이면 렌즈에 붙은 게 아니라 공중에 뜬 구슬로 보인다 — 반드시 카메라 프레임에 고정. 방울이 전부 또렷이 초점이 맞으면 가짜이므로, 굴절하는 아웃포커스 블롭으로 처리한다.

### 빗방울 착지 / 물튀김 (Rain Impact Splashes)

- **시그널**: 빗방울이 표면에 부딪혀 튀어 오르는 순간의 왕관 모양 물보라와 미세 스플래시. 바닥·웅덩이·피부 디테일을 클로즈업으로 보여줄 때.
- **앵커**: `raindrop impact splashes` · **무드**: kinetic · tactile · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Where the rain lands it bursts into tiny crown-shaped splashes — each drop kicking up a ring of fine droplets and a momentary rebound jet — densest across the wet ground, the skin of a puddle, and the subject's shoulders and forearms. The splashes read as bright cool-silver flecks against the darker wet surface, throwing up a low shimmering mist of bounce-spray that hangs just above the impact zone. Concentric ripples spread from each strike and overlap into a restless stippled texture, the wet surface mirroring the dim sky between bursts; keep the impacts crisp but motion-blurred at their edges and scattered unevenly rather than dropped on a regular grid.
  ```
- **영상 추가**: Splashes pop and rebound in fast staccato ticks across the surface while ripples expand and fade and the bounce-mist drifts; loops, and randomize impact timing and position so the splashes never pulse in unison.
- **페어링**: 구도는 매크로·클로즈업으로 바닥·웅덩이 디테일을 크게. 카메라는 고정 락오프나 미세 푸시. 색감은 저채도 한기에 하이라이트만 은색.
- **주의**: 스플래시가 규칙적 격자로 동시에 터지면 가짜다 — 불규칙한 타이밍·위치가 필수. 왕관 물보라가 정지 조각처럼 굳으면 안 되고 가장자리 모션블러로 순간성을 줘야 하며, 바닥이 안 젖어 있으면 튀길 물이 없어 모순이 된다.

### 웅덩이 물결 · 반사 (Puddle Ripples & Reflections)

- **시그널**: 빗물이 고인 웅덩이가 불빛·하늘·피사체를 거울처럼 반사하고, 빗방울·발걸음에 물결이 번지는 효과. 반사 대칭 구도나 도시 야경에.
- **앵커**: `rippling puddle reflections` · **무드**: reflective · moody · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A rain puddle becomes a dark mirror across the ground, doubling the subject, the sky, and the surrounding lights as a slightly wavering inverted reflection below them, the reflected colors sitting deeper and dimmer than the real ones while neon and lamplight smear into soft vertical ribbons on the water. Raindrops and footsteps stipple the surface with concentric ripples that spread, overlap, and gently warp the reflection, breaking the mirror into shifting bands of light. Keep the reflection anchored directly beneath each light source and the subject so it lines up convincingly, the water reading wet and glassy in the calm patches between ripples.
  ```
- **영상 추가**: Ripples expand and interfere across the surface while the reflection wobbles and re-settles between drops; loops, and keep the mirror image aligned under its source even as the water trembles.
- **페어링**: 구도는 대칭·반사 구도, 로우앵글로 지면을 크게. 카메라는 로우 트래킹이나 페데스탈. 색감은 네온 사이버펑크나 저채도 야경 톤.
- **주의**: 반사가 실물과 어긋나거나(광원 바로 아래로 정렬 안 됨) 반사 색이 실물만큼 밝으면 가짜다 — 반사는 항상 더 어둡고 흐리게. 물결이 동심원이 아니라 일률적 무늬로 깔리면 깊이가 사라진다.

### 뇌우 / 폭풍 돌풍 (Thunderstorm Squall)

- **시그널**: 강풍·비·번개가 한꺼번에 몰려오는 뇌우 돌풍. 어두워진 하늘에 사선 비가 휘몰아치고 간헐적 번개가 장면을 때리는 격렬한 폭풍 한 컷에.
- **앵커**: `driving thunderstorm squall` · **무드**: violent · ominous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A wall of storm sweeps in — wind-driven rain slants hard across a darkened, bruised blue-grey sky while ragged low clouds race overhead and the whole frame drops into stormy half-light. The rain rakes through in gusting sheets and the wind flags the subject's hair and clothing sideways, cold desaturated tones dominating until an occasional lightning flash punches in from one side, momentarily blowing the sky white, rimming the subject and the rain streaks in hard blue-white light and stamping a brief sharp shadow before snapping back to gloom. Keep the rain and wind continuous and the lightning rare, so each strobe reads as a punctuating shock against the steady driving storm.
  ```
- **영상 추가**: Rain and wind drive continuously in one slanting direction with surging gusts, while a lightning flash fires once every several seconds as a one-frame white strobe that blooms and drops back; the squall loops but the strobes hit at irregular intervals — never a steady pulse.
- **페어링**: 구도는 와이드, 어두운 하늘의 비중을 크게. 카메라는 핸드헬드나 카메라 셰이크. 색감은 폭풍 저채도 블루-그레이, 번쩍이는 순간만 한기 스파이크.
- **주의**: 번개가 형광등처럼 계속 켜져 있으면 안 된다 — 비·바람은 연속 드리프트, 번개는 드문 순간 스트로브로 분리한다. 번개가 번쩍일 때 장면 전체 라이팅(림·그림자)이 같이 안 바뀌면 합성 스티커처럼 떠 보이고, 비와 번개를 둘 다 세게 쌓으면 노이즈로 피사체가 묻힌다.

### 함박눈 / 내리는 눈 (Gentle Falling Snow)

- **시그널**: 크고 작은 눈송이가 부드럽게 흩날려 어깨·머리·속눈썹에 내려앉고, 먼 배경 송이는 보케로 흐려져 깊이를 만드는 강설. 고요하고 서정적인 겨울 무드에.
- **앵커**: `soft falling snowflakes` · **무드**: serene · wintry · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Soft snowflakes drift down at varied sizes and speeds, the near ones large and crisp and tumbling as they fall while the distant ones blur into a field of gentle out-of-focus white specks, giving real depth; they settle and dust the subject's hair, shoulders, and lashes, catch the light as tiny glints, and where they fall through a beam they brighten against the cooler blue-grey air, the whole scene hushed and powdery.
  ```
- **영상 추가**: Flakes fall slowly with a light lateral drift and a faint tumbling wobble, foreground flakes crossing fast and soft while background ones float lazily; vary speed and size by depth so it never looks like a single flat sheet of identical dots sliding straight down.
- **페어링**: 구도는 클로즈업·미디엄, 얕은 심도 보케. 카메라는 느린 푸시인이나 슬로우모션. 색감은 차가운 블루-그레이 윈터 톤에 따뜻한 키 라이트.
- **주의**: 모든 눈송이가 같은 크기·속도로 일직선으로 떨어지는 '디지털 점박이'가 최대 함정 — 원근별로 크기·속도·초점을 다르게, 앞송이는 크고 흐리게 둔다. 너무 빽빽하면 TV 노이즈처럼 보여 피사체를 덮고, 송이가 또렷한 육각결정 모양으로 그려지면 CG 티가 난다.

### 폭설 / 많은 눈 (Heavy Snowfall)

- **시그널**: 함박눈보다 훨씬 빽빽하게 쏟아져 시야가 흐려지고 배경이 하얗게 묻히는 많은 눈. 아직 휘몰아치진 않지만 거리가 눈에 잠기는 강설에.
- **앵커**: `heavy dense snowfall` · **무드**: hushed · wintry · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thick snow pours down in dense overlapping flakes that nearly fill the frame, the near flakes large, fast, and tumbling while the mid and far layers stack into a soft white haze that swallows the background into pale, flat depth. The fall is mostly downward with a gentle drift, cold blue-grey in shadow and brightening to clean white where light catches it. It accumulates visibly — capping the subject's shoulders, hat, and the ground in a thickening soft layer, breath fogging in the chilled air, every distant edge blurred and muffled — and the foreground over the face is kept a touch thinner so the subject doesn't dissolve into the curtain.
  ```
- **영상 추가**: Flakes pour down densely with varied speeds by depth and a soft lateral drift while accumulation creeps up on surfaces; loops, and vary size and speed across layers so it never flattens into one sliding sheet.
- **페어링**: 구도는 미디엄~와이드, 전경-배경 레이어로 깊이를. 카메라는 느린 돌리나 락오프. 색감은 윈터 블루-그레이에 살짝 따뜻한 하이라이트.
- **주의**: 모든 송이가 같은 크기·속도로 일직선이면 TV 노이즈가 된다 — 원근별 크기·속도·초점을 차등. 너무 빽빽해 얼굴까지 덮으면 피사체가 소실되고, 눈이 오는데 쌓임·입김이 없으면 가짜다.

### 눈보라 / 화이트아웃 (Blizzard / Whiteout)

- **시그널**: 강풍에 눈이 거의 수평으로 휘몰아쳐 시야가 하얗게 지워지는 극한 폭풍설. 생존·고립·극지 무드에.
- **앵커**: `blinding blizzard whiteout` · **무드**: brutal · disorienting · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Snow tears across the frame nearly horizontal, driven by howling wind into dense streaking ribbons and churning gusts that erase the background into a featureless blue-white void. The whole scene flattens into a high-key cold whiteout where distant shapes dissolve and only the nearest of the subject survives the haze; snow plasters and crusts onto the windward side of the subject, clothing and hair flagging hard sideways while fine spindrift snakes off every edge. Keep the chaos raked in one driving direction with surging waves of denser whiteout, the subject reduced to a dim silhouette fighting through a moving wall of white.
  ```
- **영상 추가**: Snow rakes sideways in one violent direction with pulsing gusts that surge into near-total whiteout then thin slightly, spindrift whipping off edges; loops, hold one dominant wind direction and let density breathe in waves.
- **페어링**: 구도는 와이드, 피사체를 작게 실루엣으로. 카메라는 핸드헬드나 카메라 셰이크. 색감은 하이키 한기 화이트, 저채도.
- **주의**: 눈 방향이 제각각이면 바람이 무너진다 — 한 방향으로 통일. 화이트아웃인데 피사체가 또렷이 다 보이면 모순이므로 가장자리부터 하얗게 묻혀야 하고, 눈이 휘몰아치는데 머리·옷이 안 날리면 가짜다.

### 흩날리는 눈 / 소용돌이 눈발 (Swirling Snow Flurry)

- **시그널**: 바람에 휘말려 위아래로 소용돌이치며 떠도는 가벼운 눈발. 땅에서 다시 들려 올라가는 스핀드리프트와 회오리 같은 변덕스러운 무드에.
- **앵커**: `swirling snow flurry` · **무드**: playful · restless · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Light dry snow swirls in loose spiraling eddies rather than falling straight, caught by gusts that lift it up off the ground, curl it across the frame, let it settle, then whip it up again, with ground-snow spindrift snaking up to join the dance. The flakes are small and bright, cool white against the colder blue-grey air, drifting in restless looping arcs at varied depths. Where the wind funnels around the subject the snow eddies and wraps past their legs and shoulders in little vortices, catching the light as flickering specks; keep the motion turbulent and curling, swept by an unseen gusting wind rather than a steady downfall.
  ```
- **영상 추가**: Snow swirls and loops in turbulent spiraling gusts that lift, curl, and settle before surging again, eddying around the subject; loops, keep the curling motion organic and wind-driven, never a straight fall.
- **페어링**: 구도는 미디엄, 피사체 주변에 여백을 둬 눈이 휘감길 공간을. 카메라는 느린 오빗이나 핸드헬드. 색감은 차가운 블루 윈터, 클린 화이트.
- **주의**: 눈발이 그냥 똑바로 떨어지면 '소용돌이'가 아니다 — 위로 들리고 휘감기는 난류 궤적이 필수. 입자가 균일 속도로 떠다니면 가짜이므로, 원근·속도 차등과 지면 스핀드리프트로 살린다.

### 우박 / 우박 폭풍 (Hailstorm)

- **시그널**: 얼음 알갱이가 빠르게 쏟아져 표면에 딱딱하게 튕기고 굴러다니는 우박 폭풍. 단단한 충격·바운스와 쌓이는 얼음 알갱이가 핵심인 컷에.
- **앵커**: `bouncing hailstorm` · **무드**: harsh · percussive · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Hard pellets of ice hammer down fast and nearly straight, larger and heavier than rain, ripping short bright streaks through the air before they smack surfaces and ricochet — bouncing, skittering, and rolling rather than splashing. They read as translucent icy white catching cold highlights, often laced with streaks of rain, and they pile up as a scatter of little white stones collecting in gutters, on the ground, and across the subject's shoulders. Each impact kicks up a tiny burst and a flick of bounce on the wet, pocked surfaces; keep the fall fast and the bounces sharp and erratic so the ice reads hard, never soft like snow or liquid like rain.
  ```
- **영상 추가**: Hail drives down fast and ricochets off surfaces in sharp erratic bounces, pellets skittering and accumulating with the occasional bigger stone cracking down; loops, keep the bounce snappy and irregular so it reads as hard ice, not falling snow.
- **페어링**: 구도는 미디엄~클로즈업으로 바닥 바운스가 보이게. 카메라는 락오프나 미세 셰이크. 색감은 폭풍 저채도 한기에 얼음 하이라이트.
- **주의**: 우박이 빗방울처럼 부드럽게 튀거나(물 스플래시) 눈처럼 사뿐히 쌓이면 정체성이 깨진다 — 딱딱한 바운스·스키터와 얼음 알갱이 쌓임이 필수. 모션블러 없이 공중에 얼어붙은 알갱이도 가짜다.

## 번개 · 전기 (Lightning & Electricity)


### 가지친 번개 / 낙뢰 (Forked Lightning Bolt)

- **시그널**: 구름에서 땅으로 내리꽂는 푸른-백색의 갈래진 번개가 한순간 하늘과 장면 전체를 번쩍 밝히는 낙뢰. 코어는 새하얗고 가장자리에 보랏빛 글로우가 돈다.
- **앵커**: `forked cloud-to-ground lightning` · **무드**: violent · electric · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A jagged blue-white lightning bolt forks down from the storm clouds in one searing main branch with smaller crooked tendrils splitting off, its core blindingly white and rimmed with an electric violet-blue glow; the strike throws a hard instantaneous flash across the entire scene, blowing out the sky, lighting the clouds from within, and casting stark hard-edged shadows and a cold blue sheen over the subject and the wet ground for a single frozen instant.
  ```
- **영상 추가**: The bolt snaps into existence for one or two frames with a violent flicker, the whole frame flash-blooming white then dropping back to dark as the branches stutter and the afterglow fades; never let it linger or pulse slowly — lightning is an instant strobe, not a steady beam.
- **페어링**: 로우앵글 와이드샷에 고정 또는 살짝 크래시 줌이 잘 맞고, color-grade는 폭풍우 저채도 스톰 블루 한기로 깔면 번쩍임이 더 차갑게 박힌다.
- **주의**: 번개가 형광등처럼 계속 켜져 있거나 가지가 나무뿌리처럼 사방으로 균일하게 퍼지면 가짜 — 한 줄기 메인 + 비대칭 잔가지, 그리고 '순간 번쩍'으로 끝나야 한다. 번개 위치에서 장면 전체로 빛이 퍼지는 순간 라이팅(번쩍임)이 빠지면 합성 스티커처럼 떠 보인다.

### 낙뢰 착탄 / 지면 강타 (Cloud-to-Ground Strike Impact)

- **시그널**: 번개가 실제로 땅·수면·금속에 꽂히는 바로 그 접점에서 폭발하듯 터지는 섬광과 파편, 지면을 타고 번지는 전류. 낙뢰의 '착탄 순간' 자체를 강조할 때.
- **앵커**: `lightning ground strike impact` · **무드**: explosive · blinding · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Where the bolt slams into the ground, the contact point detonates in a blinding white-hot bloom that throws a radial burst of sparks, scorched grit, and a low shockwave of dust off the impact spot, while jagged tendrils of current race outward across the wet pavement before snapping dark; the searing core reads pure white, fringed with electric blue and a thin orange ember-glow at the scorched footprint. The flash floods the scene from below, rim-lighting the subject's legs and underside with a hard cold blue, hurling long radial shadows away from the strike, and mirroring as a brilliant vertical streak down every puddle and slick surface.
  ```
- **영상 추가**: The impact detonates on a single frame — the core blooming white then collapsing to scattered sparks and settling dust over a few frames as the ground tendrils flicker out fast; fire it once as a hard strobe, never a sustained burn.
- **페어링**: 지면 강타라 약간 하이앵글이나 아이레벨 와이드가 방사형 그림자·반사를 다 담고, 카메라 셰이크 한 번이 충격을 살린다. color-grade는 어두운 폭풍 톤에 차가운 아크 한기.
- **주의**: 충격점이 그냥 밝은 동그라미로 뭉개지거나(코어·스파크·파편 레이어 없이), 착탄인데 지면에 방사형 그림자·반사·그을음이 안 생기면 가짜 — 빛이 아래에서 위로 퍼지는 하방 라이팅이 핵심. 스파크가 계속 타오르면 안 되고 한 프레임 번쩍 후 흩어져야 한다.

### 면 번개 / 구름 섬광 (Sheet Lightning Flash)

- **시그널**: 또렷한 줄기 없이 구름 속·뒤에서 터져 하늘 전체가 한순간 환해지는 면(面) 번개. 줄기 없이 폭풍 분위기만 은은하게 깔거나 장면을 한 번 통째로 플래시할 때.
- **앵커**: `diffuse sheet lightning flash` · **무드**: ominous · diffuse · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  With no visible bolt, the discharge blooms deep inside the cloud bank, lighting entire cloud masses from within as soft luminous patches that flush from slate-grey to glowing blue-white, brightest at the hidden core and feathering off into the surrounding storm murk; the flash washes the whole scene in a flat cold ambient lift for an instant, throwing the horizon and the subject into soft cold backlit silhouette with no hard-edged shadows since the source is broad and diffuse, then everything sinks back into the dark before a second fainter pulse follows.
  ```
- **영상 추가**: The cloud glows up in a quick irregular double-pulse — a fast bloom, a near-instant dropoff, then a softer second flicker — firing once rather than looping; keep it soft and shadowless, a diffuse area flash, never a focused beam or a sharp bolt.
- **페어링**: 와이드 익스트림 와이드로 하늘을 넓게 잡고 고정 또는 아주 느린 푸시인; color-grade는 한밤 저채도 블루로 깔아 구름 발광만 떠오르게 한다.
- **주의**: 면 번개인데 또렷한 가지 번개를 그려 넣거나, 구름 전체가 균일하게 켜져 깊이가 사라지는 게 함정 — 빛은 발광 코어에서 멀어질수록 어두워지는 그라데이션이어야 하고, 광원이 넓어 하드 섀도가 생기면 안 된다(부드러운 실루엣만). 계속 켜져 있지 말고 한 번 번쩍하고 꺼져야 한다.

### 먼 번개 / 지평선 깜빡임 (Distant Lightning Flicker)

- **시그널**: 지평선 멀리서 소리 없이 깜빡이는 폭풍 — 화면 한쪽 하늘만 간헐적으로 번쩍이며 긴장감을 깔아주는 보조 효과. 피사체는 그대로 두고 먼 폭풍의 분위기만 더할 때.
- **앵커**: `distant horizon lightning flicker` · **무드**: moody · distant · **강도**: 양념 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Far off on the horizon a distant storm pulses silently, small contained flashes blooming low behind a faraway cloud ridge — now and then a thin hairline branch too distant to fully resolve — each flicker a localized cool blue-white glow confined to one quadrant of the sky and reflecting faintly off the underside of low cloud; the flares are gentle and irregular, adding only a whisper of cold fill to the subject's far side and a faint sheen on distant water or wet rooftops, never strong enough to throw a real shadow, so the foreground keeps reading by its own nearer light.
  ```
- **영상 추가**: The horizon glows up in soft irregular flickers — quick uneven pulses spaced apart with the odd faint hairline branch — looping as ambient background storm activity; keep it low and far, never letting a flash dominate the foreground exposure.
- **페어링**: 와이드/익스트림 와이드에서 지평선을 낮게 깔고 피사체를 전경에 둔 레이어 구도와 잘 맞고, 카메라는 고정. color-grade는 차분한 블루아워 한기에 맡긴다.
- **주의**: 먼 번개인데 너무 크고 밝게 그려 전경 노출을 잡아먹거나 또렷한 가지로 가까워 보이면 스케일이 깨진다 — 한쪽 하늘 구석에만 작게, 그림자 없이 은은한 콜드 필 수준으로. 규칙적인 박자로 깜빡이면 가짜이고 불규칙해야 한다.

### 갈래진 플라즈마 아크 (Branching Plasma Arc)

- **시그널**: 두 지점(전극·금속·손가락) 사이를 잇는 갈래진 보랏빛-흰색 플라즈마 아크가 지직거리며 살아 움직이는 지속 방전. 야곱의 사다리·고압 방전·SF 장비 느낌을 줄 때.
- **앵커**: `branching plasma electric arc` · **무드**: crackling · high-voltage · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A writhing arc of plasma leaps between two contact points — electrodes, fingertips, or torn cable ends — its blinding white-hot core splitting into restless secondary branches that whip out, snap to new paths, and reconnect, sheathed in electric violet and cyan and bleeding into a faint pink corona in the ionized air around it; the arc casts a flickering cold blue-violet light across nearby surfaces and the subject, rimming edges and glinting hard off metal while jittering shadows dance with every stutter, leaving a faint scorch and a heat-shimmer wherever a branch licks a surface.
  ```
- **영상 추가**: The arc crackles and crawls continuously, branches whipping out and snapping back in a fast restless loop with the cast light flickering in sync; keep it alive and erratic rather than a steady glowing line, and let the branch pattern keep rewriting itself.
- **페어링**: 클로즈업/매크로에 얕은 심도, 고정 또는 미세한 핸드헬드가 잘 맞고, color-grade는 다크 배경에 네온 보랏빛 하이라이트로 코어를 띄운다.
- **주의**: 아크가 매끈한 네온 튜브처럼 고정된 한 줄로 그려지거나(살아 움직이는 가지·재연결 없이), 빛이 주변에 안 번져 스티커처럼 떠 보이는 게 함정 — 코어는 흰색, 가장자리만 보라/시안 그라데이션이어야 하고, 깜빡임에 맞춰 주변 그림자도 같이 흔들려야 한다.

### 테슬라 코일 방전 (Tesla Arc Crackle)

- **시그널**: 테슬라 코일 꼭대기에서 사방으로 뻗는 수십 갈래의 가느다란 보랏빛 번개가 허공으로 춤추듯 방전되는 효과. 매드 사이언티스트 랩·고압 실험·전기 쇼 분위기.
- **앵커**: `tesla coil corona discharge` · **무드**: theatrical · electric · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  From the toroid of a Tesla coil — or any over-charged dome — dozens of thin sinuous streamers fan out into the open air, each fraying into feathery fingertips that grope outward and dissolve before the next salvo, hot white at their roots and bleeding up through lavender-violet to pale magenta tips that glow hard against the dark; the streamers flicker, reach, and retract in constant restless motion as they hunt for ground, bathing the surrounding scene and the subject in a pulsing violet wash, edge-lighting them in cold magenta and throwing flickering shadows across the walls while faint reflections crawl over nearby metal and glass.
  ```
- **영상 추가**: The streamers crackle outward and snap back in a continuous flickering loop, the whole corona pulsing and reshaping every instant with the ambient violet light strobing softly in time; keep it busy and erratic, never a static spray of fixed lines.
- **페어링**: 미디엄~와이드에 코일 전체를 담고 고정 또는 아주 느린 오빗; color-grade는 저조도 다크룸에 보랏빛 글로우를 살린 톤이 어울린다.
- **주의**: 줄기가 좌우 대칭으로 균일하게 퍼지거나 매번 같은 모양으로 반복되면 가짜 — 비대칭으로 뻗고 매 순간 패턴이 바뀌어야 한다. 코어(흰색)와 가장자리(보라/마젠타) 색 분리가 없으면 그냥 보라색 실이 되고, 주변에 보랏빛 글로우가 안 깔리면 합성 티가 난다.

### 정전기 스파크 / 방전 (Static Sparks / Discharge)

- **시그널**: 마찰·접촉 순간 손끝·금속·옷감 사이에서 톡 튀는 작고 푸른 정전기 스파크. 건조한 겨울 공기나 미세한 디테일의 긴장감을 더하는 보조 효과.
- **앵커**: `tiny static spark discharge` · **무드**: crisp · snappy · **강도**: 양념 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A quick fork of tiny blue-white sparks snaps across the narrow gap between two nearly-touching surfaces — a fingertip and a metal doorknob, two dry fabric edges, hair lifting toward a comb — flaring bright white-blue at the jump and leaving a faint cyan afterglow; it fires in an instant, here and gone, throwing a pinprick glint off the metal and a brief micro-highlight onto the skin, with a faint static halo lifting nearby hairs and fibers, the discharge far too small to light the wider scene yet sharp and electric in close-up.
  ```
- **영상 추가**: The spark snaps once in a single crisp frame and vanishes, maybe followed by one or two smaller stray ticks; fire it as a momentary pop, never a sustained glow, and keep it confined to the contact gap.
- **페어링**: 익스트림 클로즈업/매크로에 고정 카메라로 접점을 크게 잡고, color-grade는 차가운 겨울 톤 저채도로 푸른 스파크를 또렷하게 한다.
- **주의**: 작은 정전기인데 번개처럼 크고 길게 그려지거나 계속 켜져 있는 게 함정 — 접점 사이 좁은 갭에만 톡 튀고 한 프레임에 사라져야 한다. 스파크가 장면 전체를 밝히면 스케일이 깨진다(미세 글린트 수준).

### 구 번개 / 플라즈마 구체 (Ball Lightning / Plasma Orb)

- **시그널**: 허공에 떠 천천히 흐르며 지직거리는 발광 플라즈마 구체. 초자연·SF·마법 에너지의 핵심 소품으로, 손바닥 위나 공간 한가운데 떠 있는 에너지 덩어리를 연출할 때.
- **앵커**: `floating plasma energy orb` · **무드**: uncanny · luminous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A self-contained sphere of glowing plasma hovers in mid-air — cupped above an open palm or drifting slowly through the room — its roiling shell wrapped in tendrils of current that curl around a hot white-yellow heart and lick outward, the core bleeding through electric blue and a faint orange into a soft luminous corona; the orb bobs and drifts gently while its inner filaments churn and crackle, casting its own travelling pool of light that throws soft shifting shadows outward, rim-lights the subject's face and hands, and burns as a bright hotspot in their eyes and across nearby surfaces, with the odd stray arc reaching out to the closest object.
  ```
- **영상 추가**: The orb hovers and drifts slowly with a gentle bob while its surface tendrils churn and crackle in a continuous loop, its cast light and reflections sliding across the scene as it moves; keep the drift slow and the core stable, never a flat unmoving disc.
- **페어링**: 미디엄 클로즈업에 얕은 심도, 천천히 오빗하거나 부드러운 푸시인이 잘 맞고, color-grade는 다크 배경에 따뜻-차가운 글로우 대비로 구체를 광원처럼 띄운다.
- **주의**: 구체가 빛 안 나는 평평한 원반이나 속이 안 도는 죽은 공처럼 보이거나, 주변에 빛(그림자·눈동자 반사·림라이트)을 안 뿌리는 게 함정 — 표면 텐드릴이 계속 꿈틀대고 스스로 광원이 되어 주변을 비춰야 진짜로 떠 보인다.

### 피사체를 기는 전류 (Electricity Crawling over Subject)

- **시그널**: 피사체의 표면(몸·갑옷·금속 물체)을 따라 거미줄처럼 기어다니며 윤곽을 훑는 전류. 캐릭터의 충전·각성·과부하 순간이나 초능력/마법 발현을 표현할 때.
- **앵커**: `electricity crawling over surface` · **무드**: charged · supernatural · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thin filaments of current crawl across the contours of the subject — tracing the length of an arm, skittering over armor plating, webbing between the fingers — forking and dying as fresh arcs spawn from the contact points, white-blue where they hug the surface and pooling into a cool blue ambient glow in the recesses with faint violet at the branch tips; the arcs skitter and crawl continuously along every edge and seam, each one dragging a small travelling highlight over the skin or metal, rim-lighting the silhouette in electric blue, glinting off sweat and steel, and flicking tiny shadows through the folds so the subject is lit by their own crawling current.
  ```
- **영상 추가**: The arcs crawl and skitter over the surface in a continuous restless loop, new filaments spawning at the extremities and racing along the contours before fizzling out; keep them clinging to the form rather than floating free, and let the rim-glow pulse softly with the crawl.
- **페어링**: 미디엄~클로즈업에 천천히 오빗 또는 푸시인으로 윤곽을 훑는 전류를 따라가고, color-grade는 저채도 어두운 배경에 일렉트릭 블루 하이라이트를 살린다.
- **주의**: 전류가 표면에서 떠서 허공에 그려지거나(윤곽을 안 따라감), 한자리에 고정돼 안 움직이는 게 함정 — 반드시 몸·물체의 굴곡·이음새를 타고 기어다녀야 하고, 닿는 자리마다 작은 하이라이트와 림글로우가 따라와야 표면에 붙은 전기로 보인다. 너무 빽빽이 덮으면 피사체 디테일이 묻힌다.

### 과부하 / 전기 합선 불꽃 (Power Surge Overload Sparks)

- **시그널**: 전기 장비·콘센트·분전반·노출 배선이 과부하로 터지며 사방으로 불꽃을 쏟아내는 순간. 정전·고장·사고·파괴 장면에 충격 비트를 넣을 때.
- **앵커**: `electrical overload spark burst` · **무드**: violent · industrial · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A violent shower of sparks bursts from the overloaded socket — or breaker panel, or severed cable end — a white-blue arc-flash cracking at the source and spraying a hot fan of molten orange spark-streaks that arc outward, rain down, and bounce skittering off the floor as they cool from yellow to red, threaded with curling grey smoke; the arc-flash strobes the scene with a hard cold blue at the source while the cascading sparks scatter warm flickering light and tiny travelling highlights across the walls, the equipment, and the subject's startled face, throwing sharp jittering shadows and glinting as embers in every reflective surface.
  ```
- **영상 추가**: The surge cracks once with a blue arc-flash, then throws a cascading fountain of sparks that arc out and rain down bouncing before dying to glowing embers and smoke; fire it as a single violent burst with a quick falloff, not a continuous sustained spray.
- **페어링**: 미디엄 클로즈업에 살짝 핸드헬드나 카메라 셰이크 한 번으로 충격을 살리고, color-grade는 어두운 배경에 차가운 아크 플래시 대 따뜻한 불똥의 대비로 간다.
- **주의**: 스파크가 중력 없이 사방으로 똑같이 퍼지거나(낙하·바운스 없이), 한 색(주황)으로만 균일하면 가짜 — 소스의 차가운 아크 플래시와 떨어지며 식는 따뜻한 불똥의 색·궤적 분리가 핵심. 계속 분수처럼 뿜지 말고 한 번 터진 뒤 잦아들어야 하고, 불똥이 바닥에 닿아 튀는 연속성이 있어야 한다.

## 안개 · 헤이즈 · 빛내림 (Fog, Haze & Light Shafts)


### 바닥 안개 / 낮게 깔린 물안개 (Low Rolling Ground Fog)

- **시그널**: 무릎 높이로 지면을 따라 깔려 천천히 굴러다니는 물안개가 피사체의 다리를 감싸고 배경을 레이어로 분리해 깊이감을 만드는 대기 효과. 으스스하거나 몽환적인 무드를 깔 때.
- **앵커**: `low rolling ground mist` · **무드**: eerie · moody · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A low blanket of soft ground fog hugs the floor and curls in slow rolling tendrils around the subject's feet and legs, thinning as it rises so the upper body stays clear; it reads as a pale blue-grey veil in shadow and glows warmly wherever light rakes through it, softening the background into layered depth and catching every beam as a visible wash, its edges feathered and constantly drifting rather than sharply defined.
  ```
- **영상 추가**: The fog drifts slowly and unevenly across the ground, curling and dispersing as the subject moves through it and leaving lazy wakes and swirls behind them; keep it heavy and slow — low-lying and ground-bound, not rising like smoke or churning like a cloud.
- **페어링**: 로우앵글·풀샷으로 다리부터 안개에 잠긴 실루엣을 잡고, 슬로우 트래킹/스테디캠으로 안개를 가르며 전진. 색감은 저채도 블루아워 한기, 혹은 갓레이 웜골드와 분업해 빛 닿는 구간만 데운다.
- **주의**: 안개가 바닥에 붙어 있지 않고 연기처럼 위로 피어오르거나, 농도가 균일한 '회색 커튼'으로 깔려 깊이가 사라지는 게 함정 — 아래는 짙고 위로 옅게(그라데이션), 가장자리는 뭉치지 말고 풀어지게 한다. 너무 짙으면 발·바닥이 사라져 피사체가 공중에 떠 보인다.

### 짙은 안개 / 우윳빛 안개 (Thick Pea-Soup Fog)

- **시그널**: 가시거리가 몇 미터로 뚝 떨어져 모든 것을 삼키는 짙은 안개. 배경이 통째로 흰 무(無)로 사라지고 가로등·헤드라이트가 흐릿한 빛무리로만 남는, 고립감·미스터리를 극대화할 때.
- **앵커**: `dense pea-soup fog` · **무드**: oppressive · isolating · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thick suffocating wall of fog swallows the scene, dropping visibility to a few feet so everything past the subject dissolves into a featureless pale void and even nearby shapes fade to dim grey ghosts; the air glows a luminous off-white in open light and cools to a denser blue-grey in shadow, with any light source — a lamp, a headlight, a window — bleeding into a soft halo rather than a sharp point. It presses right up to the subject, wrapping their outline in a faint veiling glow and washing the contrast off their far side, beading the finest mist onto hair and fabric while the ground vanishes into white only a stride ahead of them.
  ```
- **영상 추가**: The fog hangs near-still and heavy, breathing in slow almost imperceptible swells with faint curls drifting through the light halos; let shapes emerge and dissolve again as the camera or subject moves, never clearing — keep it one dense continuous body, not thin drifting wisps.
- **페어링**: 미디엄·풀샷에 네거티브 스페이스를 크게 비워 흰 공백에 피사체만 띄우고, 느린 돌리인/푸시인으로 형체가 안개에서 배어나오게. 색감은 저채도·저대비 한기 톤이 정석.
- **주의**: 함정은 '균일한 회색 평면'으로 깔려 깊이가 0이 되는 것 — 같은 짙은 안개라도 광원 주변은 밝게 피어오르고 그늘은 차갑게, 가까운 형체는 어렴풋이 비치게 원근을 남긴다. 피사체 얼굴 위까지 덮어 이목구비를 지우면 안 되고, 광원이 글로우 없는 또렷한 점으로 남으면 안개가 안 먹은 티가 난다.

### 아침 물안개 / 새벽 미스트 (Morning Mist)

- **시그널**: 이른 아침 들판·수면·숲에 옅게 깔린 보드라운 물안개. 낮은 햇살을 받아 은은히 빛나고 이슬·서늘함을 머금은, 평온하고 서정적인 분위기를 만들 때.
- **앵커**: `soft dewy morning mist` · **무드**: serene · tranquil · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A delicate veil of morning mist lies thin and low over the ground, pooling deeper in hollows and around the subject's feet while thinning to near-transparent at eye level; it glows a pale luminous gold where the low sun catches it and settles into a soft cool blue-grey in the shaded distance, layering trees and far shapes into receding tonal bands. The mist lifts and softens the background contrast, throws a gentle hazy bloom around the rising light, and leaves a faint dewy sheen and cool damp halo clinging to the subject, drifting in slow lazy sheets that the early light rakes through.
  ```
- **영상 추가**: The mist drifts and lifts in slow lazy sheets, gradually thinning as if warming in the first sun, with faint wisps curling up off the ground; keep it gentle and continuous — a soft breathing veil, never billowing or rolling fast.
- **페어링**: 와이드·롱샷으로 들판/수면의 레이어드 깊이를 살리고, 역광 골든아워에 두면 미스트가 빛난다. 느린 크레인 업이나 푸시인과 궁합. 색감은 웜 골든아워 + 약한 리프티드 블랙.
- **주의**: 아침 미스트는 짙은 안개가 아니라 '비치는 옅은 베일' — 너무 두껍게 깔아 배경을 지우면 페아수프 안개가 되어버린다. 광원(낮은 해) 방향과 미스트가 밝아지는 쪽이 어긋나면 가짜고, 따뜻한 빛인데 미스트가 차갑게만 깔리면 서정성이 죽는다.

### 밀려오는 안개 둑 (Rolling Fog Bank)

- **시그널**: 바다·언덕·거리를 향해 수평으로 밀려오는 안개 둑(뱅크). 선두 가장자리가 굴러 넘어오며 배경을 차례로 삼키는, 다가오는 위협감·스케일을 보여줄 때.
- **앵커**: `advancing rolling fog bank` · **무드**: ominous · sweeping · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A towering bank of fog rolls in as a single advancing wall, its leading edge tumbling and curling over itself like slow surf as it swallows the landscape behind the subject layer by layer; the body reads dense pale grey-white, brightening along the top where open light hits the crest and deepening to a bruised blue-grey in its shadowed underbelly. The front consumes distant shapes into soft dissolving silhouettes as it advances, dimming and cooling everything it overtakes, and where it reaches the subject it rakes past them in long horizontal streamers, lifting their contrast and wrapping their windward edge in a cold creeping haze.
  ```
- **영상 추가**: The whole bank advances steadily in one direction, its leading edge boiling and rolling over itself while streamers peel off the front and progressively erase the background; keep one dominant horizontal sweep — a continuous incoming tide of fog, not random puffs.
- **페어링**: 와이드/익스트림 와이드로 안개 둑의 스케일과 전진을 담고, 고정 락오프나 역방향 트래킹으로 다가옴을 강조. 색감은 저채도 한기 스톰 톤. 푸시인보다 정적 구도가 전진감을 더 살린다.
- **주의**: 선두 가장자리가 '굴러 넘어오는' 입체 운동이 핵심 — 이게 없으면 그냥 화면에 깐 회색 평면이 된다. 안개 둑은 위로 솟는 게 아니라 수평으로 밀려와야 하고, 크레스트(윗면)는 밝고 아랫배는 어둡게 명암을 줘야 부피가 산다. 너무 빨리 화면을 다 덮으면 연기 폭발처럼 보인다.

### 운해 / 구름바다 (운무 역전) (Low Cloud / Cloud Inversion)

- **시그널**: 산봉우리·전망대 아래 계곡을 가득 메운 구름바다(운해). 피사체가 구름 위로 솟아 떠 있는 듯한 장엄한 고도감·초월감을 연출할 때.
- **앵커**: `sea of cloud inversion` · **무드**: majestic · sublime · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A vast sea of low cloud fills the valley below the subject in a soft rolling ocean of white, its surface dimpled with slow swells and broken only by the darker tips of ridges and peaks that pierce through like islands; it glows warm and golden along its sunlit crests and falls into cool lilac-grey in the troughs, stacking into luminous layered depth toward the horizon. The cloud sea laps and curls against the base of the foreground, its top surface catching the low light as a gentle sheen, while the clean air above keeps the subject sharp and rim-lit against the bright billowing expanse, the farthest peaks fading into pale atmospheric haze.
  ```
- **영상 추가**: The cloud sea undulates and flows in extreme slow motion, vast swells drifting and spilling over low saddles while ridge tips hold steady; keep the motion glacial and continuous — a breathing ocean of cloud, not fast-scudding mist.
- **페어링**: 익스트림 와이드/하이앵글·버즈아이로 운해 스케일을 담고, 드론 상승이나 느린 크레인으로 고도감을 강조. 역광 골든아워/블루아워 색감과 최상의 궁합. 인물은 실루엣·뒷모습이 정석.
- **주의**: 운해는 '아래에 깔린' 구름이라 피사체·봉우리는 그 위로 또렷이 솟아야 한다 — 안개가 피사체까지 덮으면 운해감이 사라진다. 표면에 느린 굴곡(swell)과 봉우리 섬이 없으면 그냥 흰 바닥이 되고, 균일한 흰색이면 깊이가 죽는다. 광원 방향 따라 크레스트만 밝게.

### 볼류메트릭 대기 헤이즈 (Volumetric Atmospheric Haze)

- **시그널**: 공기 중에 고르게 옅게 깔려 빛을 '부피'로 만들고 공간의 레이어를 분리하는 대기 헤이즈. 갓레이·역광·네온을 또렷이 살리고 장면에 시네마틱한 공기감을 더하는 받침 레이어로.
- **앵커**: `volumetric atmospheric haze` · **무드**: atmospheric · cinematic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A fine even haze hangs suspended through the air, thin enough to keep the subject clear but dense enough to give light real volume — every beam, shaft, and backlight becomes a visible glowing cone, and each plane of the scene separates into softly receding tonal layers with distance. It carries the local color of whatever light passes through it, warming to amber near a lamp and cooling to blue in the shadows, lifting the blacks slightly and haloing bright sources with a gentle bloom. Around the subject it wraps a delicate luminous rim where light grazes the haze behind them, settling the figure into atmospheric depth instead of a flat cut-out.
  ```
- **영상 추가**: The haze hangs nearly still, breathing in slow faint currents and curling only where a beam or moving subject stirs it; keep it a steady continuous wash — barely-moving air made visible, not drifting smoke.
- **페어링**: 거의 모든 구도·무브의 받침으로 깔 수 있다 — 특히 역광·네온·갓레이 샷에서 빛을 부피로 살린다. 효과 블록엔 국소 색만, 전체 룩은 color-grade에 맡겨 이중 그레이딩 회피. 얕은 심도와 궁합.
- **주의**: 헤이즈는 '받침'이라 가중치를 낮게 — 너무 진하면 피사체 대비가 죽어 뿌연 사진이 된다. 광원이 없는데 헤이즈만 깔면 빔이 안 생겨 그냥 안개가 되니 반드시 역광/측광 등 빛과 함께. 전체 화면에 균일하게만 깔면 공간 분리(레이어)가 사라진다.

### 갓레이 / 빛내림 (크레퍼스큘러 광선) (God Rays / Crepuscular Shafts)

- **시그널**: 구름 틈·창문·나뭇잎 사이로 쏟아지는 또렷한 빛기둥들이 공기 중에 떠다니는 안개·먼지 입자에 걸려 보이는 볼류메트릭 광선. 빔 속에서 먼지가 반짝인다.
- **앵커**: `volumetric crepuscular god rays` · **무드**: divine · atmospheric · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Distinct parallel shafts of light break through a gap in the clouds (or a window / canopy) and fan downward as solid-looking volumetric beams, made visible by the fine haze and dust suspended in the air; the rays glow warm gold where they pass, separated by cooler shadowed bands, and where they land on the subject they wrap them in a soft luminous rim and a gentle bloom, with motes of dust drifting and sparkling inside the brightest beams.
  ```
- **영상 추가**: The shafts hold steady while dust motes drift slowly up and across inside them and the beams subtly breathe and shift as cloud or foliage moves over the source; keep the rays anchored to one believable off-screen light direction, drifting gently rather than flickering or sweeping like searchlights.
- **페어링**: 로우앵글·실루엣 구도로 빛기둥을 세로로 세우고, 느린 푸시인이나 틸트업으로 빛내림을 따라가면 신성함이 산다. 옅은 헤이즈와 반드시 함께. 색감은 웜 골드 빛 vs 쿨 그림자 대비.
- **주의**: 광선은 렌즈 글로우가 아니라 공기 중 입자에 걸려 보이는 것이라 헤이즈가 없으면 빔도 성립 안 됨 — 반드시 옅은 안개를 함께 깐다. 빔이 너무 많고 균일하면 그래픽처럼 떠 보이고, 광원 방향이 그림자와 어긋나면 가짜다. 빔 사이 간격을 둬 피사체가 완전히 묻히지 않게 한다.

### 창문 빛기둥 (실내) (Window Light Shafts (Interior))

- **시그널**: 창문·블라인드 틈으로 들어온 빛이 실내 먼지에 걸려 또렷한 빛기둥으로 바닥·벽을 가르는 인테리어 광선. 정적인 방에 시간대·드라마·먼지 머금은 공기를 넣을 때.
- **앵커**: `interior window light shafts` · **무드**: intimate · moody · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Hard shafts of light pour through the window and slice across the interior as crisp angled beams, made solid by the fine dust hanging in the still room, throwing bright geometric pools and slatted blind-stripes onto the floor, the wall, and across the subject. The light runs warm amber-gold through the beams and leaves the rest of the room in cool deep shadow, the contrast steep so the figure is half-carved in light and half-lost to dark; where a beam crosses the subject it rims an edge and lights the drifting dust, and the cast stripe pattern bends and breaks over their form and the furniture, anchoring the light firmly to the real window direction.
  ```
- **영상 추가**: The shafts hold steady and angled while dust motes swirl and drift slowly inside them and the blind-stripes creep almost imperceptibly with the sun; keep the beams locked to the window direction — a still continuous pour of light, not flickering or sweeping.
- **페어링**: 실내 미디엄·클로즈업에 측광/역광으로 빛기둥을 가로지르게 하고, 느린 돌리나 랙포커스로 빔 속 먼지를 살린다. 색감은 웜 윈도 라이트 vs 쿨 섀도, 누아르·빈티지 톤과 궁합.
- **주의**: 빔이 창문 방향·그림자와 일치해야 한다 — 빛기둥 각도와 바닥 광패턴, 피사체 그림자가 어긋나면 가짜. 실내 먼지(헤이즈)가 없으면 빔이 안 보이고, 블라인드 줄무늬가 바닥 굴곡·피사체를 따라 꺾이지 않고 평평하게 복붙되면 스티커처럼 뜬다. 빔을 방 전체로 균일하게 깔지 말 것.

### 빛 속 먼지 입자 (Floating Dust Motes in Light)

- **시그널**: 빛줄기 속에 떠다니며 반짝이는 미세한 먼지 입자들. 정적인 공간에 살아있는 공기감·시간의 정지·노스탤지어를 더하는 섬세한 받침 효과로.
- **앵커**: `floating dust motes in light` · **무드**: delicate · nostalgic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Countless tiny dust motes hang and drift in the path of a light beam, flaring into bright pin-point sparkles where the light catches them and vanishing into invisibility the instant they cross into shadow, so the particles only exist inside the lit volume. They glow warm white-gold against the darker background, scattered at every depth so near motes read large and soft-focused while far ones shrink to crisp glints, giving the air real dimension. Around the subject they swirl gently in the eddies of the light, settling onto a sunlit shoulder or sleeve and lifting off again, turning the still air between figure and lens into something visible and alive.
  ```
- **영상 추가**: The motes drift and tumble in slow random float, rising and circling lazily in the beam and twinkling as they catch and lose the light; keep it gentle and continuous, the particles stirring faster only where the subject's movement disturbs the air.
- **페어링**: 클로즈업·미디엄에 얕은 심도로 두면 앞 먼지가 보케 글린트가 된다. 윈도 라이트 샤프트나 갓레이와 한 세트로. 느린 랙포커스·미세 핸드헬드와 궁합, 색감은 웜 백라이트 톤.
- **주의**: 먼지는 '빛 속에서만' 보이고 그림자로 들어가면 사라져야 한다 — 화면 전체에 균일하게 깔린 흰 점은 TV 노이즈/눈처럼 보여 가짜. 원근별로 크기·초점이 달라야 하고(앞은 크고 흐리게), 모든 점이 같은 속도로 직선 이동하면 죽은 입자다. 너무 많으면 눈발이 되니 성기게.

### 대기 원근 헤이즈 (Aerial Perspective Haze)

- **시그널**: 먼 산·풍경이 거리에 따라 옅은 푸른빛으로 흐려지며 겹겹이 물러나는 대기원근. 광활한 스케일·깊이감·아득함을 만들고 배경을 레이어로 분리할 때.
- **앵커**: `aerial perspective depth haze` · **무드**: expansive · dreamy · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Layers of distant landscape recede into progressively paler, bluer haze, each ridgeline or plane behind the subject washing lighter and lower in contrast than the one in front of it until the farthest fades almost to the tone of the sky, stacking the depth into clean overlapping silhouettes. The near subject holds full saturation and crisp detail while distance steadily leaches the color toward a cool desaturated blue-grey and softens every edge, the horizon dissolving into luminous pale atmosphere. The effect throws the foreground subject sharply forward against the dreamy receding background, reading as real miles of air rather than a flat painted backdrop.
  ```
- **영상 추가**: The haze body itself barely stirs while the layered planes separate in slow parallax as the camera drifts or pushes in, far ridgelines sliding apart and the most distant haze shimmering faintly; keep it a steady continuous atmosphere, the depth carried by stillness rather than motion.
- **페어링**: 익스트림 와이드/롱샷, 망원 압축으로 겹친 능선 레이어를 압착하면 대기원근이 극대화. 드론 플라이오버·느린 푸시인의 패럴랙스와 궁합. 색감은 차가운 디새추레이션이 거리로 갈수록 강해지게.
- **주의**: 핵심은 '거리에 비례한 그라데이션' — 가까운 건 진하고 또렷하게, 멀수록 옅고 푸르고 대비 낮게. 모든 레이어가 같은 농도면 깊이가 죽고, 앞 피사체까지 푸르게 흐리면 그냥 안개가 된다. 가까운 그림자가 멀리만큼 푸르면 대기원근이 깨진다.

## 바람 · 모래먼지 · 수증기 (Wind, Dust & Vapor)


### 돌풍 / 보이는 바람 (Visible Wind Gust)

- **시그널**: 바람 자체는 안 보이니, 바람이 실어 나르는 것(헤이즈·잔입자·머리카락·천 펄럭임·풀결)으로 '한 줄기 강풍이 훑고 지나가는' 순간을 보여줄 때. 인물의 옷·머리가 한쪽으로 쏠리는 드라마틱한 컷에 쓴다.
- **앵커**: `a sweeping gust of wind` · **무드**: forceful · kinetic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  An invisible gust reveals itself only through what it carries — a fast-moving veil of fine haze and stray grit streaks through the air in one clear direction while every loose thing on the subject snaps the same way, hair lifting and streaming sideways, clothing rippling and pressing flat to the body, grass and foliage all bowing in unison along the gust's path; the airborne haze stays a thin neutral grey-white, warming where the key light rakes across it and cooling in the sheltered lee behind the subject. It arrives as a single directional shove that swells, peaks, then releases, the streaking haze catching the light as soft travelling streaks and throwing faint moving shadows across the ground, rimming the windward edge of the subject as their silhouette is sculpted by the pressure.
  ```
- **영상 추가**: Fire it once as a swell — the gust ramps in over a beat, peaks as hair and fabric stream hardest and the haze rips through, then eases off and everything settles back; keep one dominant cross-frame (or toward-camera) push, not a constant looping wind.
- **페어링**: 미디엄~카우보이샷에 인물 측면 실루엣 구도, 카메라는 거의 고정하거나 살짝 푸시인해 바람의 압력을 받게 한다. 색감은 폭풍 전 저채도 한기나 누런 톤.
- **주의**: 바람은 '실어 나르는 것'으로만 보인다 — 머리카락·옷·풀이 다 같은 방향으로 안 쏠리거나 일부만 날리고 나머지는 정지해 있으면 가짜. 헤이즈·입자에 모션블러가 없어 공중에 얼어붙으면 죽은 화면이고, 돌풍인데 옷·머리가 안 흔들리면 효과가 성립 안 한다.

### 흩날리는 낙엽 / 잔해 (Blowing Leaves & Debris)

- **시그널**: 가을 바람에 낙엽과 작은 잔해(꽃잎·종이·먼지)가 떼지어 굴러 날아오르며 화면을 가로질러 흐르는, 바람의 방향과 세기를 눈에 보이게 만드는 효과. 인물 주위를 휘감으며 운동감과 계절감을 줄 때 쓴다.
- **앵커**: `swirling leaves and debris` · **무드**: autumnal · restless · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A loose stream of dry leaves, petals, paper scraps and fine grit lifts off the ground and tumbles through the air on the wind, denser low near the surface and thinning as it rises, some pieces skittering along the pavement while others spiral up past the subject's torso and head; up close they read in warm ambers, rusts and browns, desaturating into pale out-of-focus flecks in the distance for depth. Each piece flutters at its own rate — flat scraps planing and flipping, leaves cartwheeling — all carried along one shared diagonal drift, the near ones catching the light as bright flaring edges and casting small flickering shadows as they pass, the swarm curling into the eddy around the subject's body and trailing coat and a few pieces ticking off their shoulders before whirling on.
  ```
- **영상 추가**: Loop continuously — leaves stream and tumble along one diagonal, foreground pieces crossing fast and soft while distant ones drift lazily, curling into eddies as they pass the subject; vary tumble rate, size and focus by depth so it never reads as one flat sheet of identical sprites.
- **페어링**: 풀샷~미디엄에 인물이 걷거나 멈춰선 구도, 카메라는 트래킹/팔로우나 슬로우 푸시인이 잘 맞는다. 색감은 가을 웜·골든아워이되, 낙엽 자체가 웜이라 LUT까지 과하게 웜으로 밀면 이중 그레이딩이 된다.
- **주의**: 낙엽이 전부 같은 크기·모양·속도로 복붙돼 '균일 입자 필드(낙엽판 TV 스노우)'가 되는 게 함정 — 원근별 크기·초점·회전속도를 다르게 한다. 잎이 평면 스티커처럼 미끄러지지 말고 뒤집히고 planing해야 하며, 너무 빽빽하면 피사체를 덮으니 앞쪽·얼굴 위는 비운다.

### 모래폭풍 / 흙벽 (하부브) (Sandstorm / Dust Storm Wall)

- **시그널**: 지평선을 가득 메운 거대한 흙먼지 벽(하부브)이 굴러오며 하늘과 빛을 집어삼키는 압도적 컷. 종말적·재난적 스케일과 임박한 위협을 보여줄 때 쓴다.
- **앵커**: `towering wall of dust` · **무드**: apocalyptic · ominous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A colossal rolling wall of dust and sand towers from the ground to the sky and advances across the landscape, its leading edge churning in great cauliflower billows that curl over themselves, dense and opaque at the base and feathering into ragged tendrils at the crest; it reads as a layered ochre-to-brown gradient, sickly tan and amber where the sun still rakes its front face and deepening to a bruised grey-brown murk in its shadowed core. The whole mass boils and tumbles forward, the top edge unfurling while loose curtains of dust peel off and race ahead low across the ground, the sun dimming to a hazy disc as the wall blots it out and the light going flat and orange-brown, the subject thrown into a dimming wash with their long shadow swallowed and a fine grit-haze beginning to streak past and erode their outline at the frame edge.
  ```
- **영상 추가**: Loop continuously as a slow churning advance — the wall boils and rolls forward, billows curling over the leading edge while low dust curtains race ahead and the light dims as it nears; keep it a heavy tumbling three-dimensional mass, not a flat scrim sliding in.
- **페어링**: 익스트림 와이드/와이드에 로우앵글로 벽의 높이를 강조하고, 작은 피사체(차·사람)를 전경에 두어 스케일을 대비한다. 카메라는 고정 또는 느린 풀백으로 위압감. 색감은 더스트 오렌지·세피아 한기.
- **주의**: 벽이 굴러오는 입체적 빌로우 없이 '균일한 갈색 커튼'이 평면으로 미끄러지면 가짜 — 선단부는 자기 위로 말려드는 컬리플라워 덩어리, 바닥은 짙고 위는 너덜너덜하게 푼다. 햇빛이 그대로 쨍하면 안 되고 벽이 다가올수록 광량이 죽어야 한다.

### 회오리 먼지 / 흙회오리 (Dust Devil / Whirlwind)

- **시그널**: 맑은 날 지면에서 솟아오른 가느다란 먼지 기둥이 빠르게 회전하며 들판을 가로질러 떠도는 효과. 황량함·불길한 전조·초자연적 분위기를 줄 때 쓴다.
- **앵커**: `spinning column of dust` · **무드**: restless · uncanny · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A slender twisting column of dust spins up from a scuffed patch of ground, narrow and ropey at its base where loose debris is sucked in and flaring wider and more diffuse as it climbs, leaning and wobbling as it wanders across the terrain; it glows a warm tan-and-grey, brightest and most opaque in its dense lower coil and dissolving to a translucent dusty haze at the top. The whole column rotates fast around its own axis while drifting laterally, flinging grit and scraps outward from its spinning skirt, and backlit it turns translucent amber with a bright sunlit edge and a darker shadowed side, casting a faint moving shadow across the ground and trailing a low skirt of kicked-up dust around the subject's feet as it sweeps past.
  ```
- **영상 추가**: Loop continuously — the column spins fast on its own axis while wandering laterally and wobbling, its base sucking in grit and its skirt flinging debris outward; keep one coherent rotating funnel that leans and drifts, not a static cone or a smoke plume rising straight up.
- **페어링**: 와이드~풀샷에 지평선을 낮게 두고 회오리를 삼분할 한쪽에 세워 황량한 여백을 강조한다. 카메라는 고정 또는 느린 팬으로 이동을 따라간다. 색감은 건조한 더스트 톤·바랜 옐로.
- **주의**: 회전 없이 솟기만 하는 연기 기둥이 되거나 위로 균일하게 퍼지면 가짜 — 바닥은 가늘고 단단히 꼬여 빨려들고 위로 넓고 흐리게, 축을 중심으로 도는 나선이 보여야 한다. 너무 두껍고 똑바르면 토네이도지 더스트데빌이 아니다.

### 지면 모래날림 / 낮게 흐르는 모래 (Ground-Level Blowing Sand)

- **시그널**: 강풍이 사막 표면의 모래를 무릎 아래 높이로 깎아 시트처럼 흘려보내, 피사체의 발목·종아리를 감싸며 지나가는 효과. 사막의 거친 바람과 고립감을 깔 때 쓴다.
- **앵커**: `low streaming sheets of sand` · **무드**: harsh · desolate · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thin streaming sheets of sand skim low across the dune surface, hugging the ground and rarely rising above the knee, threading in long sinuous ribbons that snake over the crests and pour down the lee slopes; they read as a pale gold-and-tan veil near the surface, brightest where they lift into the light and dissolving into a soft dusty haze that mutes the middle distance. The sand races in fast parallel streaks, ribbons hissing over the ridgelines and curling into little eddies wherever the ground breaks the flow, low sun raking through so the sheet glows warm and grainy and casts long rippling shadows across the dunes, the flow splitting and wrapping around the subject's ankles and calves and blurring their feet into the moving veil while their upper body stays clear above it.
  ```
- **영상 추가**: Loop continuously — sand streams low and fast along one direction, ribbons snaking over the crests and eddying around obstacles while staying ground-bound below the knee; thin the flow near the subject's feet so they aren't erased, and never let it billow up into a full storm.
- **페어링**: 와이드~미디엄에 로우앵글로 지면 흐름을 눈높이에서 잡고, 인물은 상반신만 또렷하게 둔다. 카메라는 고정 또는 측면 트럭. 색감은 따뜻한 사막 골드 또는 바랜 카키.
- **주의**: 모래가 무릎 위로 솟아 전면 모래폭풍이 되거나, 바닥에 안 붙고 균일하게 떠 있으면 함정 — 아래는 짙고 빠르게 흐르고 위는 비운다(그라데이션). 발이 완전히 묻혀 사라지면 피사체가 떠 보이니 발목 주변은 적당히 비춘다.

### 능선 스핀드리프트 / 휘날리는 설연 (Snow Spindrift (Wind off Ridges))

- **시그널**: 강풍이 능선·설벽 마루에서 쌓인 눈을 깎아 깃발처럼 길게 흩날려 보내는 고산 효과. 혹한·고도·험준함과 등반의 고됨을 보여줄 때 쓴다.
- **앵커**: `snow streaming off a ridgeline` · **무드**: frigid · wild · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The wind tears loose powder off the sharp crest of a snow ridge and streams it downwind in long feathering banners, dense and fast where it peels off the lip and fraying into delicate translucent veils as it trails out into the air; it reads cold blue-white in shadow and flares to brilliant sunlit white where the plume crosses the light, the deep shadowed snowpack behind it throwing the streaming crystals into sharp relief. The spindrift rips off the ridge in pulsing gusts, the banner snapping and undulating as it streams and fine crystals racing along the crest, and backlit it glows luminous and glittering with sparkling ice motes, casting soft moving shadows down the slope and rimming the climber's windward shoulder and hood in driven snow and a cold sheen as it whips past, breath and frost reading on their face.
  ```
- **영상 추가**: Loop continuously — powder peels off the crest in pulsing gusts and streams downwind in undulating banners that fray and re-form, crystals racing along the ridge; keep one dominant downwind direction, snapping and breathing rather than a steady frozen ribbon.
- **페어링**: 와이드~미디엄 롱샷에 능선을 사선 리딩라인으로 두고, 작은 등반가를 마루에 세워 스케일을 만든다. 카메라는 고정 또는 느린 틸트업/푸시인. 색감은 한랭 블루-화이트, 고채도를 피하고 하이라이트를 살린다.
- **주의**: 설연이 능선 마루에서 '깎여 떨어져' 흩날려야지, 허공에서 균일하게 눈 내리듯 깔리면 가짜 — 마루에서 한 방향으로 길게 뻗는 깃발 형태, 끝으로 갈수록 옅게 푼다. 펄럭임·맥동 없이 고정된 흰 띠가 되면 죽은 화면이다.

### 입김 / 하얀 숨 (Cold Breath Vapor)

- **시그널**: 추운 공기 속에서 인물이 내쉰 숨이 하얗게 응결돼 얼굴 앞에 피어올랐다 흩어지는 효과. 혹한·새벽·긴장된 호흡 등 추위와 생동감을 클로즈업으로 전할 때 쓴다.
- **앵커**: `visible breath condensing in cold air` · **무드**: frosty · intimate · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A soft plume of condensed breath blooms from the subject's nose and mouth, dense and bright right at the lips and expanding into a loose feathery cloud that stretches forward and curls apart as it cools and thins; it reads as a pale blue-white wisp, picking up a little warmth only where light catches it and staying coolest in the shadowed air around the face. It puffs out in rhythm with each exhale, surging forward then slowing and swirling into soft eddies before dissipating ahead of the next breath, and side- or backlit it glows bright and translucent against the darker background, scattering the light into a faint halo near the lips and drifting up across the cheek and lashes, with frost and a cold flush on the skin to sell the chill.
  ```
- **영상 추가**: Loop continuously in breathing rhythm — each exhale puffs a plume forward that surges, slows, swirls and dissipates before the next, with a faint lateral drift; keep the bloom soft and anchored to the mouth, not a steady stream of fog.
- **페어링**: 클로즈업~익스트림 클로즈업 인물 측광/역광 구도, 어두운 배경에 입김을 띄운다. 카메라는 거의 고정하거나 미세 푸시인. 색감은 한랭 블루 또는 새벽 저채도.
- **주의**: 입김이 입에서 안 나오고 얼굴 옆에 둥둥 떠 있거나, 호흡과 무관하게 계속 뿜어져 나오면 가짜 — 입술에서 진하게 시작해 앞으로 퍼지며 옅어지고, 들숨/날숨 리듬에 맞춰 끊겨야 한다. 배경이 밝으면 입김이 안 보이니 어두운 배경+역광이 필수다.

### 피어오르는 김 / 수증기 (Rising Steam)

- **시그널**: 뜨거운 표면(커피·국물·온천·젖은 아스팔트·맨홀)에서 수증기가 가닥가닥 위로 피어올라 공기 중에 풀리는 효과. 따뜻함·갓 조리된 느낌·도시 밤거리의 분위기를 줄 때 쓴다.
- **앵커**: `steam rising from a hot surface` · **무드**: warm · languid · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thin ribbons of steam lift straight off the hot surface in slender wavering threads, rising fast and coherent just above the source then loosening, swelling and curling apart into soft diffuse wisps as they cool and climb; they read near-white and faintly warm where backlight catches them, fading to a translucent grey haze that dissolves into the air a short way up. The threads waver and snake upward with gentle turbulence, accelerating off the heat and slowing as they spread and leaning apart in any faint draft, and strongly back- or side-lit the steam glows luminous against the darker background, scattering the light into a soft bloom and throwing a faint drifting shadow as it rises past the subject's hands and face cradling the source and warms the nearby surfaces with its glow.
  ```
- **영상 추가**: Loop continuously — ribbons waver and snake upward off the heat, accelerating then loosening into wisps that lean and dissolve, with gentle turbulent eddies; keep it rising and column-bound from the source, not drifting sideways like fog or puffing like smoke.
- **페어링**: 클로즈업~미디엄에 따뜻한 음식/컵을 전경에 두고, 어두운 배경+역광으로 김을 살린다. 카메라는 고정 또는 미세 푸시인. 색감은 웜 앰버·텅스텐, 야경이면 네온 반사를 얹는다.
- **주의**: 김이 표면에서 안 올라오고 화면 중간에서 시작하거나, 연기처럼 짙고 균일하게 뭉치면 가짜 — 발원부는 가늘고 또렷하게 빠르게 솟다가 위로 풀어지며 옅어진다. 밝은 배경에선 안 보이니 역광·어두운 배경이 필수이고, 옆으로 누워 흐르면 안개지 김이 아니다.

### 아지랑이 / 열기 일렁임 (Heat Haze / Heat Shimmer)

- **시그널**: 뜨겁게 달궈진 표면(아스팔트·사막·엔진·모닥불) 위 공기가 굴절돼 배경이 흐물흐물 일렁이는 효과. 폭염·열기·사막의 지글거림을 거리감 있게 전할 때 쓴다.
- **앵커**: `rippling heat shimmer` · **무드**: sweltering · hazy · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The air just above a sun-baked surface warps into a band of rippling, wavering distortion that smears and bends everything seen through it, strongest in a layer hugging the hot ground and easing as it rises; it carries almost no color of its own, adding only a faint pale shimmer and a thin desaturating haze so the background reads as a wobbling, slightly mirage-silvered version of itself rather than a tinted overlay. The distortion churns and undulates with rising convection, the edges of distant objects squirming, doubling and dissolving as the heat boils upward and the horizon pools into false silvery water, while the subject standing in it stays sharp up close and only the ground and background behind their legs ripple and melt with the rising heat.
  ```
- **영상 추가**: Loop continuously — the air churns and undulates with rising convection, distant edges squirming and doubling without ever freezing; keep the distortion to a band above the hot surface and leave the foreground subject crisp so only what's seen through the heat warps.
- **페어링**: 망원 압축 와이드/롱샷이 일렁임을 극대화한다(원거리 피사체일수록 더 흐물거림). 카메라는 고정, 색감은 폭염 옐로·바랜 하이키 또는 사막 세피아.
- **주의**: 아지랑이는 '자기 색'이 거의 없고 배경을 굴절시키는 것 — 전체에 균일한 블러나 색 오버레이를 깔면 가짜다. 뜨거운 표면 바로 위 띠에서만 일렁이고 위로 옅어져야 하며 앞쪽 피사체는 또렷해야 하고, 일렁임이 멈춰 정지하면 효과가 죽는다.

### 파도 물보라 / 바다 물안개 (Sea Spray / Mist)

- **시그널**: 파도가 바위·방파제에 부딪혀 흰 물보라로 폭발하듯 솟구치고, 부서진 미세 물방울이 바람에 안개처럼 흩날리는 해안 효과. 거친 바다·짠 공기·역동적 해안의 생동을 줄 때 쓴다.
- **앵커**: `sea spray bursting off rocks` · **무드**: briny · dynamic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A wave slams into the rocks and erupts upward in a ragged fan of white spray, a dense churning column of foam bursting at the point of impact and breaking apart into a fine drifting mist that the wind shears sideways and carries downwind; the bursting foam is brilliant sunlit white, cooling to a pale blue-grey haze in the drift, with the dark wet rock and deep blue-green sea behind throwing the spray into stark relief. The column explodes up fast off the impact, hangs for a beat at its peak, then collapses and atomizes into a horizontal streaming drift, and backlit it glows translucent with a fringe of rainbow where the sun catches the mist, scattering into a soft salt-haze over the scene while the finest droplets settle on the subject at the rail with a wet sheen and beaded spray on their jacket and face.
  ```
- **영상 추가**: Loop continuously as repeating wave strikes — each burst explodes up off the impact, hangs at its peak, then collapses and shears sideways into drifting mist before the next set rolls in; keep one dominant upward-then-downwind motion per strike, not a constant white curtain.
- **페어링**: 와이드~미디엄에 바위/방파제를 전경에 두고 인물을 측면에 세워 스케일을 만든다. 카메라는 고정 또는 살짝 핸드헬드로 바다의 거침을 살린다. 색감은 한랭 블루 시네마틱 또는 바랜 코스탈 톤.
- **주의**: 물보라가 부딪힘 지점에서 '솟구쳐' 부서져야지, 허공에서 균일한 흰 안개로 깔리면 가짜 — 충돌점에서 폭발해 정점에서 멎었다 옆으로 흩날리는 단계가 보여야 한다. 솟구치는 포말이 모션블러·디테일 없이 솜뭉치처럼 굳으면 CG 티가 나고, 물보라가 닿는데 인물·바위가 안 젖어 있으면 합성 티가 난다.
