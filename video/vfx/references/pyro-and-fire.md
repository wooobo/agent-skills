# 파이로·화염 FX (pyro-and-fire)

불·폭발·연기·불티 — 파이로의 핵심은 "불은 광원"이다. 모든 블록은 형태·색층(흰 코어→주황→검은 연기)·움직임(위로 솟음)·피사체에 입히는 캐스트 라이트를 함께 적는다.

> 각 항목 구성: **시그널**(언제 쓰는지) / **앵커**(키워드) · **무드** · **강도**(히어로=주연 / 양념=저밀도 보조) · **타이밍**(🔁연속=루프 / ⚡원샷=순간) / **VFX 블록**(영어, 바로 붙여쓰기) / **영상 추가** / **페어링**(어울리는 구도·무브·색감) / **주의**.

> VFX 블록은 **피사체·동작 묘사 뒤, 카메라무브·색감 앞**에 둔다. 한 컷에 히어로 효과는 하나만. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.


## 불꽃 & 연소 (Flames & Burning)


### 화염벽 / 타오르는 불길 (Roaring Wall of Flame)

- **시그널**: 피사체 뒤·측면으로 솟구치는 거대한 불길의 벽이 필요할 때. 두꺼운 화염 혀가 위로 말려 올라가며 끝이 연기로 흩어지는 본격 연소, 압도적 위력의 한 컷에 쓴다.
- **앵커**: `towering wall of roaring fire` · **무드**: ferocious · primal · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A towering wall of roaring fire rises behind the subject, thick tongues of flame curling and snapping upward from a white-hot orange base, deepening through amber to smoke-tipped crests whose edges feather into black soot; the blaze throbs with turbulent upward motion, casting a flickering warm-orange glow and dancing rim light across the subject's near side while throwing long, shifting shadows behind them.
  ```
- **영상 추가**: Flames roil and surge upward in continuous turbulent motion, individual tongues licking and snapping while the warm glow on the subject pulses in sync with the fire's flicker and the crests shear off into rising smoke; loops.
- **페어링**: 백라이트 실루엣을 살리는 미디엄~와이드 구도, 느린 푸시인이나 핸드헬드 무브와 잘 맞고, 색감은 teal-orange나 따뜻한 텅스텐 룩으로 불빛 글로우를 살린다.
- **주의**: 불꽃이 위로 흐르지 않고 멈춰 있거나 좌우로 뭉개지면 가짜 티가 난다 — 화염은 항상 위로 솟구치고 끝이 연기로 흩어져야 한다. 큰 불은 피사체 뒤·측면에 두어 얼굴·실루엣을 살리고, 무엇보다 불빛(캐스트 라이트·림라이트)을 피사체에 꼭 입힐 것. 불은 활활인데 인물이 안 밝아지면 합성처럼 보인다.

### 날름거리는 불꽃 혀 (Licking Flame Tongues)

- **시그널**: 거대한 화염벽까지는 아니고, 사물의 모서리·표면을 따라 작은 불꽃 혀들이 핥듯이 기어오르는 중간 규모 연소가 필요할 때. 막 붙기 시작한 불, 장작·문틈을 타고 번지는 불에 쓴다.
- **앵커**: `tongues of flame licking upward` · **무드**: hungry · restless · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Restless tongues of flame lick upward from the charring edge of the object, rooted in a thin blue-hot line of combustion that flares into bright orange teardrop tongues, each curling and snapping where its tip shears off into thin grey smoke; they climb in quick, hungry pulses, throwing a dancing warm glow and flickering rim light across the surface they crawl over and casting jittering shadows just beyond the advancing burn line.
  ```
- **영상 추가**: Individual tongues lick and dart upward in quick, irregular pulses, the burn line creeping along the edge while tips curl over and pinch off into wisps of smoke; loops continuously.
- **페어링**: 불붙는 모서리를 잡는 타이트한 미디엄~클로즈업 구도, 느린 푸시인이나 살짝 핸드헬드, 색감은 따뜻한 앰버·teal-orange로 불꽃 채도를 살린다.
- **주의**: 불꽃 혀가 위로 솟지 않고 표면에 납작 붙어 좌우로 미끄러지면 가짜다 — 각 혀는 위로 핥듯 솟구쳐 끝이 연기로 끊어져야 한다. 표면 전체를 균일한 주황 막으로 덮지 말고 듬성듬성한 혀들이 모서리를 따라 번지게 하고, 핥는 곳마다 표면에 일렁이는 불빛이 입혀져야 진짜 같다.

### 촛불 일렁임 (Candle Flame Flicker)

- **시그널**: 어둠 속 단 하나의 작은 광원, 친밀하고 고요한 분위기가 필요할 때. 촛불·생일초·제단 무드, 작은 따뜻한 빛 웅덩이를 만들 때 쓴다.
- **앵커**: `single teardrop candle flame` · **무드**: intimate · tranquil · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A single teardrop flame stands on the candle's wick, a small blue collar at its root rising into a translucent orange-yellow body that tapers to a soft, smoke-thin tip; it sways and flickers gently with unseen air currents, occasionally guttering and stretching before it recovers, casting a small warm pool of light that licks across the wax and nearby surfaces, glinting in caustic highlights and throwing soft, wavering shadows into the surrounding dark.
  ```
- **영상 추가**: The flame breathes in a slow, gentle flicker — leaning, narrowing and recovering with faint air movement, the warm glow on nearby surfaces pulsing in step; loops, kept calm and unhurried.
- **페어링**: 어두운 배경의 클로즈업~매크로 구도, 카메라는 고정이나 아주 느린 푸시인, 색감은 따뜻한 텅스텐·앰버 로우키로 작은 빛 웅덩이를 강조한다.
- **주의**: 촛불은 작아서 영상에서 빠르게 떨거나 횃불처럼 펄럭이면 가짜다 — 모션은 '느린 플리커'로, 가끔 한 번씩 흔들리다 되돌아오게 한다. 밑동의 푸른 칼라와 끝의 옅은 연기 층을 빼먹지 말고, 무엇보다 주변에 작은 따뜻한 빛 웅덩이가 깔려야 떠 보이지 않는다.

### 횃불 불꽃 (Torch Flame)

- **시그널**: 인물이 손에 든 불(횃불·관솔불)로 얼굴을 아래에서 밝히고 싶을 때. 동굴 탐험·중세·제의 분위기, 들고 움직이며 펄럭이는 불꽃에 쓴다.
- **앵커**: `flame streaming off a torch head` · **무드**: flickering · adventurous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A ragged flame streams up off the torch head in the subject's hand, a bright yellow-white core at the soaked wrapping feeding into orange tongues that flare and gutter, their tips smearing back into oily black smoke and shedding a few sparks; the flame leans and trails as the torch moves, throwing a strong, restless warm glow that underlights the bearer's face and chest, rim-lighting one side and casting large, dancing shadows across the walls behind.
  ```
- **영상 추가**: The flame flares, gutters and streams back as the torch is carried or swung, smoke trailing off the tips and stray embers peeling away, the warm underlight on the face flickering with it; loops continuously.
- **페어링**: 얼굴을 아래에서 받는 미디엄~클로즈업 로우키 구도, 핸드헬드나 트래킹/팔로우 무브와 잘 맞고, 색감은 따뜻한 앰버·캔들라이트 톤으로 어둠과 대비를 살린다.
- **주의**: 횃불은 들고 움직이는 불이라 정지하면 가짜다 — 움직임 방향 반대로 불꽃이 누우며 끌리고 끝이 검은 연기로 흩어져야 한다. 코어(밝은 노랑)→주황→그을음 연기 층을 살리고, 얼굴·벽에 일렁이는 불빛과 큰 그림자를 꼭 입혀야 손에 든 광원처럼 보인다.

### 모닥불 / 캠프파이어 불길 (Bonfire / Campfire Flames)

- **시그널**: 사람들이 둘러앉은 모닥불, 아늑하고 탁탁 튀는 야영 분위기가 필요할 때. 장작 위로 춤추듯 솟는 불꽃과 따뜻한 얼굴 조명에 쓴다.
- **앵커**: `campfire flames rising from logs` · **무드**: cozy · crackling · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Flames dance up from a bed of glowing logs in the foreground, a white-hot coal base feeding weaving orange-yellow tongues that twist around each other and pinch off into thin smoke and spiraling embers; the fire flickers and breathes irregularly, popping sparks that drift upward on the heat, and throws a warm, pulsing pool of light that underlights the faces gathered around it and casts long, restless shadows fanning outward into the night.
  ```
- **영상 추가**: Flames weave and dance in continuous, irregular flicker, embers popping and spiraling up while the warm glow on the surrounding faces pulses and wavers with the fire; loops.
- **페어링**: 불을 둘러싼 인물들을 담는 미디엄~와이드 로우키 구도, 고정이나 느린 오빗 무브와 잘 맞고, 색감은 따뜻한 앰버·골든 톤으로 얼굴의 불빛을 살린다.
- **주의**: 모닥불은 여러 불꽃 혀가 서로 꼬이며 춤춰야 하는데 한 덩어리로 뭉치거나 멈추면 가짜다 — 밑동의 새빨간 잉걸불, 솟는 주황 혀, 튀어오르는 불티의 층을 살린다. 둘러앉은 얼굴에 아래에서 받는 따뜻한 불빛과 흔들리는 그림자가 없으면 합성처럼 떠 보인다.

### 화염에 휩싸인 사물 (Object Engulfed in Flames)

- **시그널**: 사물 하나가 통째로 불에 휩싸여 타들어가는 모습이 필요할 때. 불붙음→전소→숯의 변화를 보여주거나 파괴·종말의 상징으로 쓴다.
- **앵커**: `object fully sheeted in fire` · **무드**: consuming · destructive · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Flames sheet up and wrap around the entire object, rooted in blue-hot lines where fire meets material and flaring into orange tongues that envelop every face, the surface blistering and blackening to char as oily smoke pours off the top; the flames climb and curl restlessly, peeling at edges that crumble and glow, while the burning object becomes its own light source — radiating a flickering warm glow onto the floor and walls, hot-rimming nearby surfaces and casting wavering shadows around it.
  ```
- **영상 추가**: Fire spreads and climbs over the object as the surface chars and curls, smoke thickening off the top and flames flickering continuously; reads as a slow consuming progression rather than a single burst.
- **페어링**: 사물 전체가 들어오는 미디엄 구도, 고정이나 느린 푸시인/오빗, 색감은 따뜻한 오렌지로 불꽃을 살리되 배경은 어둡게 떨어뜨려 발광체 대비를 키운다.
- **주의**: 불이 표면에 납작한 주황 막처럼 붙고 형태 변화가 없으면 가짜다 — 모서리부터 그을려 검게 변하고 숯으로 부서지는 변화를 줘야 한다. 접촉면의 푸른 불꽃→주황 혀→검은 연기 층을 살리고, 타는 사물이 광원이 되어 바닥·주변에 일렁이는 빛을 던져야 떠 보이지 않는다.

### 불꽃 궤적 / 화염 트레일 (Streaking Fire Trail)

- **시그널**: 빠르게 날아가는 물체 뒤로 길게 끌리는 불꽃 꼬리가 필요할 때. 불화살·운석·화염병처럼 궤적 자체가 주인공인 컷에 쓴다.
- **앵커**: `ribbon of fire trailing behind` · **무드**: kinetic · blazing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A ribbon of fire streaks behind the hurtling object, a blinding white-yellow head of flame at the leading point stretching into a tapering orange-red tail that frays into sparks and thin smoke as it cools and dissipates; the trail rips across the frame in a motion-blurred arc, embers shedding off its length and spiraling in its wake, painting a streak of warm light that flares across every surface it passes and leaving a fading glow and reflection behind it.
  ```
- **영상 추가**: The flaming object tears across the frame along one clean arc, the trail stretching and dissipating into sparks and smoke behind it before impact; fires once, not a loop.
- **페어링**: 궤적을 길게 담는 와이드 구도, 트래킹/팔로우나 휩 팬으로 물체를 쫓고, 색감은 따뜻한 오렌지 하이라이트와 어두운 배경 대비로 빛 궤적을 살린다.
- **주의**: 꼬리가 균일한 두께로 뻣뻣하게 붙어 있으면 가짜다 — 머리는 밝고 굵게, 꼬리로 갈수록 가늘어지며 불티·연기로 흩어져야 한다. 직선으로 뚝 끊기지 말고 진행 방향으로 모션 블러가 끌리게 하고, 지나가는 표면마다 순간적으로 따뜻한 빛이 스쳐야 진짜 같다.

### 파란 가스불 / 버너 불꽃 (Blue Gas-Burner Flame)

- **시그널**: 주방 가스불·버너처럼 깨끗하게 완전연소하는 파란 불꽃이 필요할 때. 요리·실험실 분위기, 차가운 푸른 빛 조명에 쓴다.
- **앵커**: `ring of blue gas-burner flame` · **무드**: clean · hissing · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A ring of crisp blue flame jets up from the burner beneath the pot, each cone rooted in deep violet-blue at the ports and softening to a paler blue tip with the faintest orange flicker where it licks the metal; the jets hiss and tremble in steady, tight little dances, almost smokeless, and cast a cool blue glow up onto the underside of the pot and the stovetop, glinting in hard blue reflections on the steel and pooling a low, cold light around the burner.
  ```
- **영상 추가**: The blue jets hiss and quiver in place with a tight, steady flicker, occasional tips wavering, the cool blue underlight on the pot holding steady; loops continuously.
- **페어링**: 버너를 위·옆에서 잡는 클로즈업 구도, 고정이나 느린 푸시인, 색감은 차가운 블루-틴트나 중립 톤으로 푸른 불꽃을 살린다(따뜻한 룩은 피한다).
- **주의**: 가스불은 푸른색·거의 무연이라 AI가 주황 불꽃이나 검은 연기를 붙이면 틀린다 — 색은 깊은 보라-파랑에서 옅은 파랑으로, 연기는 거의 없게. 약한 광원이라 캐스트 라이트도 '파란' 빛이어야 하고, 따뜻한 주황 글로우를 깔면 가스불처럼 안 보인다.

### 전신 화염 / 몸이 불타는 (Full-Body Fire / Body Ablaze)

- **시그널**: 인물이 전신에 불이 붙은 충격적 장면이 필요할 때. 스턴트 화상 연기·지옥/악몽·강렬한 액션에 쓰며, 몸을 휘감고 솟는 불꽃에 쓴다.
- **앵커**: `figure sheeted in body-clinging fire` · **무드**: agonizing · hellish · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Flames sheet up and cling to the figure's whole body, rooted in blue-hot lines at the fabric and flaring into orange tongues that hug the contours of the torso and limbs before streaming off the shoulders and head into trailing black smoke; the fire licks upward and rakes backward as the figure staggers and runs, peeling sparks off the silhouette, while the burning body becomes the scene's light source — throwing a moving warm glow and a long shadow across the floor and hot-rimming everything around it.
  ```
- **영상 추가**: Flames stream up and trail backward off the body as the figure moves, hugging the silhouette and shedding sparks, the cast glow on the surroundings sweeping with it; loops continuously.
- **페어링**: 전신 실루엣을 담는 풀샷~와이드 구도, 트래킹/팔로우나 핸드헬드로 움직임을 쫓고, 색감은 따뜻한 오렌지에 어두운 배경 대비로 불타는 형체를 살린다.
- **주의**: 불꽃이 몸 윤곽을 따라 붙지 않고 인물 주위에 균일한 주황 후광처럼 떠 있으면 합성 티가 난다 — 불은 몸을 휘감고 움직임 반대로 끌리며 솟아야 한다. 실루엣을 살려 형체가 읽히게 하고, 타는 몸이 광원이 되어 바닥·주변에 움직이는 빛과 긴 그림자를 던져야 진짜 같다.

### 산불 화염 전선 (Wildfire Flame Front)

- **시그널**: 마른 들·숲을 휩쓸며 번지는 산불의 화염 전선이 필요할 때. 재난·종말 규모의 와이드 풍경, 지면을 따라 전진하는 불의 벽에 쓴다.
- **앵커**: `advancing wildfire flame front` · **무드**: relentless · apocalyptic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A ragged front of wildfire sweeps low across the dry terrain, a continuous line of orange-yellow flame leaning hard with the wind, white-hot at the fuel and tearing into brown-grey smoke that hangs in a choking haze above the blackened, glowing ground it leaves behind; the front advances and flares unevenly, spotting embers ahead of itself, and floods the landscape with a smoky orange ambient light that silhouettes trees and figures against it and stains the smoke-filled sky.
  ```
- **영상 추가**: The flame front creeps and surges forward across the terrain, flames leaning with the wind and embers showering ahead to spot new fire, smoke rolling up behind; loops as a continuous advance.
- **페어링**: 전선을 길게 담는 와이드~익스트림 와이드 풍경 구도, 느린 드론/크레인이나 트래킹과 잘 맞고, 색감은 스모키 오렌지·세피아 톤으로 연무 낀 하늘을 살린다.
- **주의**: 산불은 지면을 따라 낮게 전진하는 선이라 공중에 뜬 불덩어리로 그리면 틀린다 — 불은 바람 방향으로 눕고, 전선 뒤는 검게 탄 땅, 앞쪽은 불티가 튀어 번져야 한다. 화염 위로 갈색-회색 연무가 깔리고 그 빛이 풍경·하늘 전체를 주황으로 물들여야 규모감이 산다.

### 백드래프트 / 천장을 구르는 불길 (Backdraft Rolling Flames)

- **시그널**: 갇혀 있던 불이 산소를 만나 폭발적으로 부풀며 천장·출입구로 굴러 쏟아지는 백드래프트 순간이 필요할 때. 소방·재난 액션의 절정 한 컷에 쓴다.
- **앵커**: `rolling wave of flame surging out` · **무드**: explosive · engulfing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A rolling wave of fire bursts from the opening and surges across the ceiling overhead, orange-red lobes curling forward like a breaking wave with a blue-tinged leading edge, black smoke chasing and folding into its underside as it billows; it erupts in one fast outward surge and rolls over itself before drawing back, flooding the space with a sudden hard blast of warm light that hot-rims every surface and the silhouetted figure below, then dimming as the flame collapses into smoke.
  ```
- **영상 추가**: Flame erupts and rolls outward across the ceiling in one fast surging wave, curling over and then pulling back as smoke takes over, with a single flooding flash of cast light; fires once, not a loop.
- **페어링**: 출입구·천장이 보이는 와이드~미디엄 구도, 로우앵글과 살짝 핸드헬드로 압박감을 주고, 색감은 따뜻한 오렌지에 검은 연기 대비로 굴러오는 불길을 살린다.
- **주의**: 백드래프트는 '한 번의 빠른 팽창'이라 둥근 주황 얼룩이 멈춰 있으면 망한다 — 불이 파도처럼 말려 굴러 나오다 연기로 꺼지는 전개를 박아야 한다. 안쪽 밝은 코어·앞쪽 푸른 가장자리·뒤따르는 검은 연기 층을 살리고, 부풀 때 공간 전체에 단발 플래시 캐스트 라이트가 깔려야 위력이 산다.

### 파이어 토네이도 / 불기둥 회오리 (Fire Whirl / Fire Tornado)

- **시그널**: 불길이 회오리처럼 수직으로 빨려 올라가며 회전하는 불기둥이 필요할 때. 대형 화재·재난의 압도적 스펙터클, 빙글빙글 도는 화염 토네이도에 쓴다.
- **앵커**: `spinning vortex of fire` · **무드**: violent · mesmerizing · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A towering vortex of fire spins up from the burning ground, a twisting white-hot core wrapped in spiraling sheets of orange flame that snake and writhe as the column rotates, tearing embers and ragged smoke off its surface and flinging them outward in the spin; the whirl snakes and leans as it climbs, throwing a rotating warm glow that sweeps across the scorched ground and surrounding smoke, hot-rimming nearby surfaces and pooling intense firelight at its churning base.
  ```
- **영상 추가**: The fire column rotates and snakes upward in continuous spiraling motion, embers flung outward and smoke torn off the surface, the cast glow sweeping around as it turns; loops.
- **페어링**: 기둥 전체를 담는 세로 와이드 구도(로우앵글이면 위압감↑), 느린 오빗이나 페데스탈 업과 잘 맞고, 색감은 따뜻한 오렌지에 검은 연기 대비로 회전을 살린다.
- **주의**: 파이어 토네이도는 '회전'이 핵심이라 좌우로 흔들리기만 하고 안 돌면 가짜다 — 나선형 화염 면이 기둥을 감고 돌며 불티가 원심력으로 바깥으로 튀어야 한다. 흰 코어→주황 나선→흩어지는 연기·재 층을 살리고, 회전하는 불빛이 바닥·연기를 쓸며 비춰야 입체감이 산다.

## 폭발 & 블라스트 (Explosions & Blasts)


### 연료 화구 / 액션 폭발 (Fuel-Air Fireball)

- **시그널**: 한순간 부풀어 오르는 주황 화구가 검은 연기를 토하며 위로 말려 올라가는 전형적 블록버스터 폭발. 액션 임팩트가 필요한 컷에 1순위.
- **앵커**: `billowing orange fuel-air fireball` · **무드**: explosive · violent · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A massive orange fuel-air fireball blooms outward and rolls upward in churning mushroom-like lobes beside the subject, a blinding white-yellow core feeding into roiling red-orange flame that tears into thick black smoke at its boiling edges; debris and sparks fling outward on the leading shock as the burst throws a hard, momentary blast of warm light across the subject and the ground, hot-rimming every surface that faces it and stamping sharp shadows that snap away as the flame dies into rising smoke.
  ```
- **영상 추가**: expands explosively from a bright core in the first frames, lobes mushrooming and curling upward as black smoke overtakes the dying flame, with a fast outward debris spray and one bright flash of cast light that punches the whole scene before it settles.
- **페어링**: 와이드·로우앵글 액션 구도에 한 발 빠른 푸시인이나 가벼운 카메라 셰이크가 잘 맞고, 슬로우모션 램프와도 궁합이 좋다. 색감은 주황을 살리는 teal-orange 따뜻한 룩.
- **주의**: 화구가 부풀지 않고 둥근 주황 얼룩으로 멈춰 있거나, 불·연기·파편이 한 덩어리로 뭉개지면 망한다 — 안쪽은 밝은 코어, 바깥은 검은 연기로 층이 갈려야 한다. 폭발 순간의 강한 빛이 피사체·바닥에 안 깔리면 스티커처럼 떠 보이고, 파티클·파편을 과하게 넣으면 지저분해진다.

### 롤링 네이팜 폭발 (Rolling Napalm Explosion)

- **시그널**: 지면을 따라 낮게 깔려 앞으로 굴러 퍼지는 끈적한 소이탄 화염 — 한 점에서 터져 좌우로 굴러가는 정글·참호 네이팜 룩. 전진하는 불의 벽이 필요할 때.
- **앵커**: `rolling carpet of napalm fire` · **무드**: incendiary · engulfing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A rolling carpet of sticky napalm fire erupts along the ground in front of the subject and surges outward in low, tumbling lobes, a searing white-orange leading edge dragging clinging gobs of flame that blacken into oily smoke as they sprawl and climb; the wall of fire churns forward and folds over itself, throwing a hot sheet of orange light low across the subject's legs and the dirt, rim-lighting kicked-up debris and laying long racing shadows behind everything it overtakes.
  ```
- **영상 추가**: fires ignite in a fast leading front and roll forward along the ground in tumbling waves, sticky flame lobes folding over and trailing black smoke, the low orange glow sweeping across the scene in one surging pass before settling into scattered burning patches.
- **페어링**: 측면 트래킹·팔로우나 로우앵글 와이드와 잘 맞고, 굴러오는 불을 따라가는 느린 트럭 무브가 좋다. teal-orange로 주황은 살리되 그림자는 차갑게 떨어뜨린다.
- **주의**: 네이팜은 '지면을 따라 굴러 퍼지는' 화염이라 위로만 솟는 일반 폭발과 다르다 — 낮게 깔려 앞으로 굴러야 하고, 끈적하게 달라붙어 타는 느낌이 없으면 그냥 산불처럼 보인다. 좌우로 균일하게 멈춰 퍼지면 가짜. 앞쪽은 흰 코어, 뒤는 검은 기름연기로 층을 낼 것.

### 버섯 화염 기둥 (Mushroom Fireball Plume)

- **시그널**: 대형 폭발 직후 버섯 모양으로 부풀어 하늘로 치솟는 거대한 화염·연기 기둥 — 정유소·탄약고급 대규모 재난 스케일을 보여줄 때.
- **앵커**: `towering mushroom fireball plume` · **무드**: cataclysmic · towering · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A colossal mushroom plume boils up from the blast site behind the subject, a fat stalk of fire and smoke punching skyward before mushrooming into a slow-rolling cap, its underside still glowing furnace-orange where fresh flame feeds it and fading upward through brown-grey soot into a ragged, wind-torn crown; the whole column churns and overturns as it rises, dumping a vast warm underglow onto the subject and the landscape and silhouetting them against the rising mass while debris rains back down through the firelight.
  ```
- **영상 추가**: the plume rises and mushrooms in continuous slow convection, the glowing stalk feeding the overturning cap as it climbs and broadens, underlit orange at the base and tearing into drifting smoke at the crown — fastest in the first seconds, then billowing more slowly.
- **페어링**: 로우앵글 와이드나 익스트림 와이드로 스케일을 살리고, 느린 페데스탈 업·크레인 상승으로 기둥을 따라 올라가는 무브가 좋다. 황혼 톤 + teal-orange.
- **주의**: 버섯 기둥은 '솟아오르는 수직 운동'이 핵심 — 멈춰 있거나 옆으로 퍼지면 죽는다. 밑동은 불빛으로 뜨겁게 빛나고 위로 갈수록 회갈색 연기로 옅어지는 농도 층이 없으면 단색 덩어리가 된다. 머리(캡)가 칼처럼 또렷하면 안 되고 너덜너덜 말려 넘어가야 한다.

### 스퀴브 / 탄착 스파크 (Pyrotechnic Squib Burst)

- **시그널**: 총탄이 박히듯 벽·바닥·금속에 톡톡 튀는 소형 화약 폭발 — 불꽃·먼지·파편이 작게 터지는 스턴트용 탄착 효과. 총격전 임팩트에.
- **앵커**: `pinpoint squib spark burst` · **무드**: punchy · staccato · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A tight squib burst pops where the round strikes the wall beside the subject, a hard white-orange spark flash erupting in a brief star of sparks, dust, and shattered fragments that spit toward camera before falling away, leaving a thin curl of grey smoke and a black scorch bloom behind; each hit throws a quick stab of warm light that flickers across the subject's face and the surface, with tiny embers winking out and a faint dust haze hanging where the impact tore through.
  ```
- **영상 추가**: each squib fires as a single sharp pop — an instantaneous spark flash, an outward spit of debris and dust, then a fast settle — staccato hits landing in quick succession rather than one sustained burn.
- **페어링**: 핸드헬드나 가벼운 카메라 셰이크로 임팩트를 더하고, 미디엄~클로즈업으로 튀는 파편을 살린다. 살짝 차가운 데이라이트에 주황 스파크가 또렷하게 대비되도록.
- **주의**: 스퀴브는 '작고 빠른 단발 펑'이지 큰 화구가 아니다 — 화염을 크게 그리면 틀린다. 불꽃·먼지·파편이 한 점에서 튀고 곧 사라져야 하며, 균일하게 쫙 깔면 폭죽처럼 보인다. 각 히트는 점광원이라 순간 빛이 피사체에 깜빡 비쳐야 진짜 같다.

### 가스 폭발 / 실내 점화 (Gas Explosion Blast)

- **시그널**: 실내 가스 누출이 점화되며 창·문으로 압력 화염이 한순간 뿜어 나오고 유리·잔해를 토하는 건물 폭발. 개구부에서 터져 나오는 방향성이 포인트.
- **앵커**: `bursting interior gas blast` · **무드**: concussive · blinding · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A gas blast detonates inside the structure and vents explosively through the windows beside the subject, a brief blue-white ignition flashing into a swelling orange pressure-flame that punches out through every opening, blowing glass and door frames outward on a fast pressure front edged with grey smoke; the burst floods the street with a hard momentary orange wash, blasting hot light across the subject and pavement, rim-lighting flying glass and stamping sharp racing shadows before the flame sucks back inward and smoke pours from the openings.
  ```
- **영상 추가**: ignites in a split-second blue-white flash, then a single violent outward vent of orange flame and glass through the windows, the cast light punching the scene once before the flame collapses back inward and smoke streams out.
- **페어링**: 와이드 정면 구도에 빠른 푸시인 또는 강한 카메라 셰이크. 야간 톤에서 주황 플래시가 강하게 튀도록 따뜻하게 잡는다.
- **주의**: 가스 폭발은 '안에서 밖으로 압력으로 뿜어 나오는' 방향성이 핵심 — 화구가 건물 앞에 둥실 떠 있으면 가짜다. 창·문 같은 개구부에서 화염·유리가 터져 나오고, 순간 점화(푸르스름)→주황 팽창→흡입 후 연기 순서를 지킬 것. 빛이 거리·피사체에 한 번 강하게 깔려야 한다.

### 분진 / 밀가루 폭발 (Dust / Flour Explosion)

- **시그널**: 공중에 흩날린 분진·밀가루가 한순간 점화되어 확 번지는 부드러운 화염 — 제분소·곡물 사일로식 분진 폭발, 혹은 불씨에 닿은 밀가루 구름.
- **앵커**: `igniting dust-cloud fireball` · **무드**: flash-igniting · billowing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A suspended cloud of fine flour ignites all at once around the subject, a fast flame front racing through the dust in a rolling orange-yellow bloom that flares brilliant where the particles catch and gutters into dark drifting smoke where it has burned through; the deflagration balloons outward in soft tumbling lobes rather than a hard shock, throwing a warm flickering glow that lights the subject from within the cloud, backlighting the swirling unburnt dust into glowing veils and casting soft moving shadows as the fire chases the powder.
  ```
- **영상 추가**: the flame front sweeps through the dust cloud in a fast rolling bloom — particles flashing alight in a wave, the fireball ballooning out soft and round, then collapsing into rising smoke as the powder burns up; one quick spreading ignition, not a sharp bang.
- **페어링**: 측광·백라이트가 살아나는 구도, 미디엄 클로즈업에 얕은 심도로 빛나는 가루 베일을 살린다. 따뜻한 텅스텐 톤과 궁합.
- **주의**: 분진 폭발은 '가루 구름을 타고 번지는 부드러운 화염 파동'이지 단단한 화구가 아니다 — 매끈한 공 모양으로 그리면 틀린다. 입자가 차례로 불붙는 결, 타고 남은 자리의 연기, 안 탄 가루가 빛에 비치는 베일이 보여야 한다. 너무 단단하고 매끈하면 가스 폭발처럼 보인다.

### 충격파 링 (Concussion Shockwave Ring)

- **시그널**: 폭심에서 사방으로 퍼져 나가는 압력파 고리 — 공기 굴절과 먼지·물보라가 원형으로 밀려나가는 충격파. 폭발의 '힘'을 시각화할 때.
- **앵커**: `expanding concussion shockwave ring` · **무드**: forceful · rippling · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A concussion shockwave rips outward from the blast point in a fast-expanding ring, a near-invisible wall of compressed air that refracts and warps the scene as it passes, kicking up a low circular skirt of dust and vapor that races along the ground away from the subject; the ring distorts light like a lens as it sweeps through, flattening grass and spray outward, a faint condensation halo flickering at its crest while the warm blast-glow behind it backlights the churning dust into a rolling rim.
  ```
- **영상 추가**: the ring expands outward fast and even in the first frames, a refractive shock distorting everything it crosses and dragging a low dust skirt with it, decelerating and fading as it widens — one single outward pulse, not a loop.
- **페어링**: 약간 하이앵글 와이드나 버즈아이로 고리의 원형을 살리고, 한 발 빠른 푸시인이나 셰이크를 곁들인다. 색감은 먼지 톤에 따뜻한 폭발 글로우를 섞는다.
- **주의**: 충격파는 '색'이 아니라 '굴절 + 밀려나는 먼지 고리'다 — 흰 링이나 네온 도넛으로 그리면 SF 만화가 된다. 굴절 왜곡이 사방으로 균일하게 팽창하고 바닥엔 먼지·물보라가 원형으로 밀려나야 한다. 고리가 멈춰 있거나 한쪽만 퍼지면 가짜.

### 화염방사기 제트 (Flamethrower Jet Burst)

- **시그널**: 노즐에서 앞으로 길게 뿜어 나가는 거센 화염 분사 — 뿌리는 푸른 코어, 끝은 검은 연기로 갈라지며 뻗는 방향성 있는 화염 스트림.
- **앵커**: `projected flamethrower fire jet` · **무드**: roaring · aggressive · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A roaring jet of fire blasts forward from the nozzle in the subject's hands, a tight blue-white root at the muzzle stretching into a long turbulent tongue of orange flame that fattens, frays, and tears into rolling black smoke at its far reach; the stream pulses and snakes with the pressure, throwing a strong moving wall of warm light across the subject's arms and face and the ground ahead, rim-lighting the smoke and casting their long shadow back as unburnt fuel droplets streak and flare along the jet.
  ```
- **영상 추가**: the jet roars forward in a continuous projected stream, the flame tongue whipping and pulsing with pressure surges and trailing black smoke at the tip, the warm light on the operator flickering in sync — sustained and loopable, not a single burst.
- **페어링**: 측면 트래킹·팔로우나 로우앵글로 분사 길이를 살리고, 핸드헬드로 압력감을 더한다. 어두운 배경에 주황 글로우가 강하게 깔리는 룩.
- **주의**: 화염 제트는 '노즐에서 앞으로 쏘는 방향성 스트림'이다 — 모닥불처럼 위로만 솟으면 틀린다. 뿌리는 푸른 코어, 중간은 주황, 끝은 검은 연기로 길게 갈라지고 압력으로 출렁여야 한다. 분사가 멈춰 굳어 있으면 가짜. 빛이 사수에게 강하게 입혀져야 한다.

### 차량 폭발 (Vehicle Explosion)

- **시그널**: 차량이 한순간 터지며 차체에서 화구가 솟고 문짝·유리·파편이 사방으로 날아가는 전형적 카 익스플로전. 액션 클라이맥스에.
- **앵커**: `erupting vehicle fireball` · **무드**: destructive · fiery · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The vehicle beside the subject erupts in a hard blast, a white-hot core blowing the hood and doors outward as a billowing orange fireball mushrooms up from the cabin, churning into greasy black smoke while panels, glass, and burning debris fling out on the shock front; the detonation hurls a brutal flash of warm light across the subject and the road, hot-rimming the wreck's torn metal and flying fragments, throwing hard shadows and leaving the chassis burning with flame-glow reflected in the wet asphalt.
  ```
- **영상 추가**: the car blows in one violent frame — fireball mushrooming up from the cabin, panels and glass flung outward, smoke overtaking the flame — with a single bright flash of cast light before it settles into a burning wreck wreathed in rising smoke.
- **페어링**: 와이드·로우앵글 액션 구도에 빠른 푸시인이나 강한 카메라 셰이크, 슬로우모션 램프와도 잘 맞는다. 야간 + teal-orange로 젖은 노면 반사를 살린다.
- **주의**: 차량 폭발은 화구가 '차체에서' 솟아야 한다 — 차 위에 둥근 불덩이만 얹혀 있으면 합성 티. 코어는 흰 열, 바깥은 검은 연기, 문짝·유리 파편이 충격파로 날아가는 층이 필요하다. 폭발 빛이 젖은 노면·피사체에 강하게 반사되지 않으면 스티커처럼 떠 보인다.

### 연료 드럼 폭발 (Fuel Barrel Detonation)

- **시그널**: 연료 드럼통이 터지며 위로 좁고 높게 화염 기둥을 뿜고 뚜껑·파편이 솟구치는 폭발 — 수직으로 치솟는 배럴 블라스트.
- **앵커**: `erupting fuel barrel blast` · **무드**: violent · spewing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A fuel barrel beside the subject detonates and spews a tight column of fire straight up, a blinding white-orange jet ripping out of the bursting drum, its lid and shrapnel rocketing skyward on the blast as the flame fattens into rolling amber and shears into black smoke overhead; the eruption flares a hard pillar of warm light up the subject's side and the surrounding walls, rim-lighting the tumbling debris and the drum's split metal while flame-glow pools and reflects on the ground around its base.
  ```
- **영상 추가**: the drum bursts and jets a fast column of fire upward in the first frames, lid and shrapnel launched skyward, the flame pillar fattening and tearing into smoke as it climbs, with one bright upward flash of cast light before it settles into a burning, smoking barrel.
- **페어링**: 로우앵글 세로감 있는 구도에 페데스탈 업이나 약한 셰이크. 황혼 톤에서 화염 기둥이 또렷하게 떨어지도록.
- **주의**: 배럴 폭발은 '드럼에서 위로 좁게 솟는 화염 기둥'이 특징 — 사방 둥근 화구로 그리면 일반 폭발과 구별이 안 된다. 뚜껑·파편이 위로 솟고, 코어는 흰 열, 위로 갈수록 주황→검은 연기 층. 빛이 드럼 옆면과 바닥에 세로로 깔려야 한다.

### 총구 화염 / 머즐 플래시 (Muzzle Flash Bloom)

- **시그널**: 총구에서 한 프레임 번쩍이는 별 모양 화염 — 발사 순간의 짧고 강한 섬광과 연기·불티. 총격 임팩트의 핵심 효과.
- **앵커**: `star-shaped muzzle flash bloom` · **무드**: explosive · split-second · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A muzzle flash blooms from the barrel in the subject's hands in a single split-second burst, a blinding white-yellow star of fire petaling outward at the muzzle, edged in orange and spitting tiny sparks and a quick puff of grey smoke that lingers after it dies; the flash strobes a hard stab of warm light across the subject's face, hands, and the near wall, rim-lighting the slide and casting a sharp instantaneous shadow that snaps away as fast as it appeared, a hot glint catching on the metal of the gun.
  ```
- **영상 추가**: fires as a single one-frame strobe — the star bloom flaring instantly at the muzzle then vanishing, leaving a drifting wisp of smoke — one hard flash of cast light per shot, never a sustained glow.
- **페어링**: 클로즈업·미디엄 클로즈업으로 총구를 잡고, 핸드헬드나 가벼운 셰이크를 곁들인다. 어두운 야간 톤에 섬광이 강하게 튀도록 대비를 살린다.
- **주의**: 머즐 플래시는 '한 프레임 번쩍'이다 — 모닥불처럼 지속해 타면 틀린다. 총구에서 별·꽃잎 모양으로 확 피었다 사라지고, 그 순간 빛이 손·얼굴에 깜빡 깔려야 한다. 흐리멍덩하게 오래 빛나거나 빛이 피사체에 안 닿으면 가짜. 발사 후엔 연기 한 줄기만 남는다.

### 연쇄 폭발 (Secondary Detonation Chain)

- **시그널**: 첫 폭발 뒤 시차를 두고 화면 곳곳에서 줄줄이 터지는 2차 폭발들 — 위치를 옮겨가며 연달아 부풀어 오르는 화구들. 대형 재난·전장 스케일.
- **앵커**: `staggered chain of detonations` · **무드**: cascading · relentless · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A chain of secondary detonations rips across the scene behind the subject, fresh fireballs blooming one after another in staggered bursts along the line of fuel and ordnance, each a white-hot core swelling into rolling orange flame and black smoke before the next erupts further down; the cascade strobes the subject and the ground with overlapping pulses of warm light from shifting directions, rim-lighting drifting smoke and flying debris as successive flashes stamp fresh racing shadows and the whole horizon flickers with rolling blast-glow.
  ```
- **영상 추가**: explosions fire in a staggered chain — one blooming, then another further along, then another — each a quick bloom-and-smoke, the cast light pulsing across the scene from different directions in overlapping flashes rather than one single burst.
- **페어링**: 익스트림 와이드나 와이드로 연쇄의 길이를 담고, 느린 트럭·팬으로 줄줄이 터지는 라인을 훑는다. 야간 톤에 폭발 글로우가 방향을 바꿔가며 깜빡이게.
- **주의**: 연쇄 폭발은 '시차를 둔 여러 발'이다 — 한꺼번에 같이 터지면 그냥 큰 폭발 하나가 된다. 화구들이 위치를 옮겨가며 차례로 부풀고, 빛도 방향을 바꿔가며 깜빡여야 한다. 모든 화구가 똑같은 크기·타이밍이면 가짜 — 크기·간격을 제각각으로.

## 연기 & 재 (Smoke & Ash)


### 검은 연기 기둥 (Black Billowing Smoke Column)

- **시그널**: 화재·폭발 뒤 두껍게 솟아오르며 뭉게뭉게 말려 올라가는 짙은 검은 연기 기둥. 재난의 규모와 불길한 분위기를 한 컷에 박을 때.
- **앵커**: `thick billowing black smoke column` · **무드**: ominous · churning · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thick column of greasy black smoke billows upward behind the subject in slow cauliflowering rolls, dense and opaque at the sooty base where it glows faintly with underlit orange firelight, thinning into ragged grey wisps that shear and drift as they climb; it churns with internal turbulence, swallowing light and silhouetting the subject against its dark mass while a dirty haze bleeds into the surrounding air and a dull warm reflection licks the ground at the column's foot.
  ```
- **영상 추가**: the column boils upward in continuous rolling convection, lobes folding over themselves, the base lit by flickering fire glow while the top tears into drifting tendrils carried by the wind — a steady loop.
- **페어링**: 와이드~익스트림 와이드로 연기 기둥 전체를 담고 피사체는 실루엣으로. 느린 푸시인이나 크레인 상승과 잘 맞고, teal-orange나 따뜻한 스모키 그레이드로 밑동 불빛을 살린다.
- **주의**: 연기가 솜뭉치처럼 멈춰 있거나 가장자리가 칼처럼 또렷하면 가짜다 — 끝은 항상 너덜너덜 흩어지고 안쪽은 계속 말려 올라가야 한다. 새까만 단색 덩어리면 깊이가 죽으니 밑은 불빛으로 따뜻하게, 위는 회색으로 옅어지는 농도 그라데이션을 줄 것. 피사체를 통째로 가리지 않게 한다.

### 기름 화재 연기 (Greasy Oil-Fire Smoke)

- **시그널**: 타이어·기름·석유처럼 그을음 많은 연료가 탈 때 나오는, 거의 액체처럼 짙고 기름진 갈검색 연기. 독성·산업 재난 현장의 묵직함을 줄 때.
- **앵커**: `dense greasy oil-fire smoke` · **무드**: toxic · suffocating · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Dense, oily black smoke pours off the burning surface beside the subject in thick brown-black billows so soot-saturated they look almost liquid, the underbelly stained sickly amber and red where flame still licks beneath while the rolling crowns smear to filthy charcoal-grey; it boils upward and outward in heavy, sluggish curls that cling and spread low rather than fully rise, smearing the air with a tarry haze, dimming the light around the subject and casting a murky warm underglow up into the smoke's churning base.
  ```
- **영상 추가**: the greasy smoke rolls and folds upward in slow heavy convection, thick lobes turning over themselves and struggling to rise, the orange firelight beneath pulsing through the soot as the crowns smear sideways on the wind — a continuous loop.
- **페어링**: 미디엄~와이드에 로우앵글로 묵직함을 강조. 느린 트럭·핸드헬드와 어울리고, 채도를 약간 죽인 더티한 틸-오렌지 그레이드로 기름진 갈검색을 살린다.
- **주의**: 그을음이 적은 '깨끗한 회색' 연기처럼 그리면 기름 화재 느낌이 안 산다 — 갈검색으로 짙고 무겁게, 거의 액체처럼 끈적이며 낮게 퍼지게 할 것. 단색 새까만 덩어리면 깊이가 죽으니 밑동에 호박색·붉은 불빛 underglow를 꼭 넣고, 가볍게 솜처럼 떠오르지 않게 한다.

### 가는 흰 연기 (Wispy White Smoke)

- **시그널**: 촛불을 막 끈 자리, 향, 잔불처럼 가늘고 투명하게 피어오르는 흰 연기 리본. 정적·섬세함·여운을 줄 때 약하게 곁들인다.
- **앵커**: `delicate wisps of white smoke` · **무드**: delicate · ethereal · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thin ribbons of pale white smoke curl up from the smoldering point beside the subject, translucent and feathery, twisting into slow lazy spirals that catch a sidelight and glow softly before dissolving into nothing a short distance up; they grade from a slightly denser milky base to gossamer near-invisible tips, drifting on the faintest air current, laminar at first then breaking into delicate turbulence, the light passing straight through so they read luminous against the darker background and barely cast a shadow on the subject.
  ```
- **영상 추가**: the wisps rise in slow laminar threads that wobble and braid, breaking into gentle eddies as they climb and thinning to nothing, swaying with the lightest air movement — a soft continuous loop.
- **페어링**: 클로즈업·매크로에 어두운 배경 + 사이드/백라이트. 카메라는 거의 고정(슬로우 푸시), 색감은 차분한 저채도나 따뜻한 캔들 톤으로 가는 연기를 빛나게.
- **주의**: 불투명한 흰 덩어리나 수증기·안개처럼 그리면 틀린다 — 빛이 통과해 빛나는 반투명 리본으로, 듬성듬성 가늘게. 너무 많이 깔면 김·포그처럼 보이니 한두 가닥만, 밑은 살짝 진하게 끝은 사라지는 농도 결을 주고 라미나→난류로 풀어준다.

### 끌리는 잔불 연기 (Smoldering Trailing Smoke)

- **시그널**: 막 쏜 총구, 꺼진 성냥, 잔불 남은 물체에서 가늘게 끌리며 피어오르는 연기 한 줄. 긴장의 여운이나 '방금 무슨 일이 있었다'를 줄 때.
- **앵커**: `thin trailing smoke ribbon` · **무드**: lingering · tense · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thin ribbon of smoke peels off the smoldering object in a single wavering streamer, pale grey shading to a faintly ember-lit base, its edges fraying into soft turbulence as it lags behind and curls into the wake; it threads upward and back in a lazy serpentine drift, lit from within near the source by a dull orange smolder, drawing a soft hazy line across the frame that catches a thin sidelight and casts almost no shadow on the subject.
  ```
- **영상 추가**: the streamer peels continuously off the source and trails into its wake, undulating in a slow serpentine ripple and fraying at the tail, the ember glow at its root pulsing faintly — a continuous loop that lags any subject motion.
- **페어링**: 타이트 클로즈업이나 미디엄에 얕은 심도. 느린 푸시인이나 살짝의 핸드헬드, 누아르풍 저키·차가운 그레이드와 잘 맞는다.
- **주의**: 두꺼운 기둥이 되거나 발생원에서 끊겨 떠 있으면 망한다 — 발생점에서 한 줄로 가늘게 새어 나와 뒤로 끌리며 꼬여야 하고, 뿌리에는 잔불 주황 글로우가 비쳐야 한다. 뻣뻣하게 일직선으로 떠 있으면 가짜 티가 나니 사행(蛇行)으로 흐트러지게 할 것.

### 바닥 연무 (Low Ground Smoke Haze)

- **시그널**: 발밑·바닥을 따라 낮게 깔려 옆으로 흐르는 연무. 전장·무대·공포 분위기의 바닥 레이어로 깔 때. 무릎 아래에 한정해 분위기만 더한다.
- **앵커**: `low-rolling ground smoke` · **무드**: eerie · atmospheric · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A low blanket of smoke hugs the ground around the subject's feet, pooling and rolling horizontally in soft grey-white sheets that thin to transparency by knee height, denser and faintly underlit where it gathers in hollows; it creeps and curls outward in slow lateral drift, parting and swirling around the subject's legs and any obstacle, diffusing the light into a soft glow near the floor, lifting the black levels and laying a hazy veil over everything below the waistline.
  ```
- **영상 추가**: the ground smoke rolls and creeps sideways in slow lateral drift, curling around the subject's legs and swirling in their wake, billowing thicker then thinning in soft waves — a continuous loop that stays low and never rises far.
- **페어링**: 로우앵글 와이드로 바닥 레이어를 강조. 느린 트래킹·달리와 어울리고, 차갑고 푸르스름한 무드 그레이드로 으스스함을 키운다.
- **주의**: 기둥처럼 솟거나 화면 전체를 메우면 바닥 연무로 안 읽힌다 — 무릎 아래에 한정해 옆으로 흐르고, 다리·장애물 주위로 갈라지며 휘감겨야 한다. 균일하게 깔린 흰 막이면 그냥 안개처럼 보이니 농도에 결을 주고 바닥 가까이만 부드럽게 underlit으로.

### 화재운(불구름) 기둥 (Pyrocumulus Smoke Plume)

- **시그널**: 산불·대형 화재가 만드는 거대한 대류 연기 구름(불구름). 지평선 위로 버섯처럼 부풀어 오르며 윗부분은 햇빛에 금빛, 아래는 그을음 갈색. 종말적 스케일·재난 규모를 줄 때.
- **앵커**: `towering pyrocumulus fire-cloud plume` · **무드**: apocalyptic · monumental · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A monumental pyrocumulus plume towers over the distant horizon behind the subject, its dark soot-brown base anchored to a glowing band of fire along the ground, ballooning upward into a vast cauliflowering cloud whose sunlit crowns blaze creamy gold and ochre while the shadowed undersides stay bruised brown-grey; it builds and boils skyward in immense slow convection, the whole mass churning over itself, tinting the sky a sickly amber and casting a hazy, diffused orange daylight across the entire scene and onto the subject.
  ```
- **영상 추가**: the plume billows and builds upward in vast slow-motion convection, crowns swelling and folding while the base flickers with fire glow, the whole cloud climbing and spreading against the sky — a continuous loop at monumental scale.
- **페어링**: 익스트림 와이드에 피사체를 작게 실루엣으로. 느린 드론 상승·푸시인과 잘 맞고, 연기로 흐려진 따뜻한 앰버 데이라이트 그레이드.
- **주의**: 스케일이 대기 규모로 읽혀야 한다 — 햇빛 받는 금빛 윗부분 vs 그을음 갈색 밑동의 대비, 그리고 하늘·빛 전체를 앰버로 물들이는 영향이 핵심. 균일한 회색이거나 작은 기둥처럼 가까이 붙으면 산불 불구름의 거대함이 죽으니 밑동의 불빛 밴드를 꼭 살린다.

### 화쇄류 재 구름 (Pyroclastic Ash Cloud)

- **시그널**: 화산 분화의 화쇄류처럼, 땅을 따라 무섭게 굴러 다가와 모든 걸 삼키는 회갈색 재 구름의 벽. 종말적 재난이 '덮쳐오는' 순간을 줄 때.
- **앵커**: `advancing pyroclastic ash surge` · **무드**: cataclysmic · engulfing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A roiling wall of pyroclastic ash surges toward the subject, a boiling avalanche of grey-brown billows that hug the ground and tumble forward faster than they rise, leading lobes blooming and overturning in cauliflower rolls shot through with darker dust and the faint internal orange flush of trapped heat; it advances and swallows everything in its path, dimming the light to a choking ochre murk, backlighting and then erasing the subject's silhouette as the front rolls over them while a gritty haze races out ahead across the ground.
  ```
- **영상 추가**: the ash wall boils forward and downhill in churning lobes that overturn as they advance, the front racing toward camera and engulfing the frame in one accelerating surge — fires once, accelerating from a distant billow to a total grey whiteout.
- **페어링**: 와이드에 정면 푸시인(혹은 고정)으로 다가오는 벽을 강조. 채도 빠진 잿빛 그레이드와 잘 맞고, 3패널로 접근→삼킴을 보여준다.
- **주의**: 정지한 회색 구름이면 화쇄류가 아니다 — 땅을 따라 앞으로(카메라 쪽으로) 굴러 내려오며 솟기보다 빠르게 전진해 피사체를 삼켜야 한다. 안쪽 열기 주황빛과 앞서 달려가는 모래 먼지 결이 필요하고, 깨끗한 흰 안개처럼 보이지 않게 거칠고 더티하게.

### 내리는 재 (Falling Ashfall)

- **시그널**: 화재·분화 뒤 잿빛 눈처럼 천천히 내려앉는 재. 황량함·상실·재난 이후의 정적을 줄 때 약하게 깔며, 피사체 어깨·바닥에 쌓이게 한다.
- **앵커**: `drifting grey ashfall` · **무드**: desolate · mournful · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Soft grey ash drifts down through the air around the subject like dirty snow, irregular pale flecks and feathery flakes tumbling and seesawing on slow downdrafts, a few still glowing faintly warm where an ember hasn't died, settling into a dusty film on the subject's shoulders and the surfaces below; the falling motes scatter the light into a hazy desaturated veil, knocking back contrast and laying a soft monochrome pall over the whole scene, foreground flakes drifting past close to camera in soft focus.
  ```
- **영상 추가**: the ash sifts down in a slow, uneven drift, flakes tumbling and seesawing rather than falling straight, varying in size and speed and settling on every surface — a continuous gentle loop, foreground motes wafting past in shallow focus.
- **페어링**: 미디엄~와이드, 얕은 심도로 전경 재를 흩뿌린다. 카메라는 느린 트래킹, 저채도 모노톤 그레이드로 황량함을 살린다.
- **주의**: 재가 일직선으로 떨어지거나 눈송이처럼 균일하면 비·눈처럼 보인다 — 크기·속도 제각각으로 펄럭이며 흔들려 내려와 표면에 쌓여야 한다. 군데군데 희미한 잔불 불씨를 섞고 전체를 채도 빠진 잿빛으로, 너무 빽빽하게 깔지 말 것.

### 그을음 자국 · 그을린 줄무늬 (Soot Staining & Char Streaks)

- **시그널**: 불·열원 위 벽·표면에 부채꼴로 번지며 타고 올라가는 검은 그을음과 그을린 자국. 화재의 '흔적'이나 표면이 타들어가는 변화를 보여줄 때.
- **앵커**: `creeping soot stains and char streaks` · **무드**: scorched · grimy · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Black soot blooms and streaks up the surface above the heat source, fanning from the flame's contact point in feathered teardrop stains, deepening from a brown scorched halo at the edges to dense matte char at the core where the material has blistered and cracked; the staining creeps and climbs as the heat works, dull and light-absorbing against the clean surface around it, a faint warm glow pulsing where embers still crawl in the cracks and a thin haze of smoke peeling off the freshest char.
  ```
- **영상 추가**: the soot stain spreads and climbs upward from the contact point in feathered tongues, the char darkening and creeping outward as embers crawl along the edges — fires once, progressing from a clean surface to a fully blackened scorch.
- **페어링**: 클로즈업·디테일로 표면 질감을 잡는다. 카메라 고정, 3패널로 변화를 보여준다. 깨끗한 표면과 대비를 위해 중립~약간 따뜻한 그레이드.
- **주의**: 납작한 페인트 얼룩처럼 새까맣게만 칠하면 틀린다 — 발생점에서 위로 번지는 부채꼴 눈물 자국에, 가장자리 갈색 그슬림 → 중심 매트 블랙으로 농도 결이 가야 한다. 주변에 깨끗한 표면을 남겨 대비를 주고, 갈라진 틈의 잔불 불씨가 사실감을 살린다.

### 역광 연기 빛줄기(갓레이) (Backlit Smoke God-Rays)

- **시그널**: 연기·연무를 뚫고 들어오는 빛줄기(크레퍼스큘러 레이, 갓레이). 연기를 광원으로 입체화해 신성하고 분위기 있는 백라이트를 줄 때.
- **앵커**: `god-rays piercing backlit smoke` · **무드**: divine · atmospheric · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Hard shafts of light slice through the drifting smoke behind and beside the subject, the haze rendering each beam as a solid volumetric blade of pale gold that brightens where the smoke thickens and gaps where it thins; the smoke itself glows luminous grey-white where the light grazes it and falls to shadow in the lee, swirling slowly through the beams so the rays seem to flicker and breathe, throwing long soft light-and-dark stripes across the floor and rim-lighting the subject's silhouette against the bright murk.
  ```
- **영상 추가**: the god-rays hold steady while the smoke drifts through them, the beams shimmering and pulsing as denser wisps cross and break the light, dust and smoke curling slowly within each shaft — a continuous atmospheric loop.
- **페어링**: 백라이트 실루엣 구도, 프레임 인 프레임(문·창). 느린 드리프트·랙포커스와 잘 맞고, 차가운 그림자 vs 따뜻한 빛줄기 대비를 살리는 그레이드.
- **주의**: 빛줄기가 납작한 흰 줄무늬처럼 그려지거나 균일하게 멈춰 있으면 스크린 오버레이처럼 보인다 — 연기가 짙은 곳에서 밝아지고 옅은 곳에서 끊기는 입체 광선이어야 하며, 연기가 빛에 닿는 면은 빛나고 뒤편은 그림자로 떨어져야 한다. 연기가 빔 속을 천천히 가로지르며 빛이 명멸하게 할 것.

## 불티 · 스파크 · 잔열 (Embers, Sparks & Heat)


### 떠다니는 불티 / 잉걸불 (Drifting Embers)

- **시그널**: 화면을 가로질러 느리게 떠오르고 흩날리는 작은 주황빛 불티들 — 열기와 분위기를 더하는 대기 입자가 필요할 때. 장면에 '방금까지 무언가 타고 있었다'는 잔열의 여운을 깔고 싶을 때 쓴다.
- **앵커**: `floating glowing embers` · **무드**: atmospheric · smoldering · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Sparse glowing embers drift through the air around the subject, tiny points of warm orange light rising lazily on heat updrafts from somewhere below frame, twisting and dimming through deep amber to ash-grey as they cool, a few sailing past close to camera in soft focus; they add a faint warm bloom and a sense of lingering heat without overpowering the frame, each ember a tiny point-source that catches softly on the subject's skin and nearby surfaces with a weak orange glint.
  ```
- **영상 추가**: embers rise and swirl slowly on convection currents in a continuous loop, drifting unevenly with gentle turbulence, individual sparks pulsing and winking out while foreground ones streak past in shallow focus.
- **페어링**: 미디엄~클로즈업 구도에 얕은 심도(보케)로 전경 불티를 살리면 좋다. 카메라는 느린 푸시인이나 미세한 핸드헬드, 색감은 따뜻한 앰버·teal-orange 계열로 불티 글로우를 받쳐준다.
- **주의**: 불티를 너무 많이·균일하게 깔면 눈송이나 먼지처럼 보인다 — 듬성듬성, 크기·밝기 제각각, 열기로 위로 떠오르게 할 것. 직선으로 떨어지면 재가 아니라 비처럼 보이니 소용돌이치며 상승하게 하고, 각 불티는 점광원이라 주변에 약한 글로우가 있어야 진짜 같다.

### 불티 샤워 / 스파크 폭포 (Ember Shower / Spark Cascade)

- **시그널**: 무언가를 내리치거나 무너뜨릴 때 한꺼번에 쏟아져 내리며 튀어 흩어지는 진한 불티 다발 — 단순한 대기 불티보다 강한, 분출형 스파크가 필요할 때. 모닥불을 차거나 타다 만 기둥이 무너지는 순간에 어울린다.
- **앵커**: `cascading shower of embers` · **무드**: dramatic · fiery · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A dense shower of embers bursts from the point of impact and cascades down and outward, a thick gout of white-hot sparks decaying through bright orange to dull red and black flecks as they arc and tumble, the densest stream raining down past the subject while stray sparks ricochet and bounce off surfaces below; the cascade throws a pulsing orange light up onto the subject's face and underside, hot-rimming the impact edge and scattering quick dancing reflections across the ground.
  ```
- **영상 추가**: the spark cascade erupts in a fast initial gout then rains down in arcing streaks, decelerating as embers cool mid-air and bounce off lower surfaces, with the cast light flaring bright at the burst and quickly fading; fires once.
- **페어링**: 임팩트 지점을 잡는 미디엄샷이나 로우앵글이 좋다. 카메라는 충격에 맞춰 짧은 셰이크나 빠른 푸시인, 색감은 주황을 강하게 살리는 따뜻한 룩으로 스파크 트레일을 또렷하게.
- **주의**: 불티가 균일한 폭으로 직선 낙하하면 폭포수나 비처럼 보인다 — 충격점에서 부채꼴로 터져 나와 호를 그리며 식어야 한다. 코어는 백열, 끝은 검은 재로 색이 갈리게 하고, 분출 순간의 강한 빛을 피사체·바닥에 꼭 입혀야 떠 보이지 않는다.

### 잉걸불 화로 / 달궈진 숯 (Glowing Coal Bed)

- **시그널**: 타오르는 불꽃 없이 속에서부터 붉게 달아오른 숯·잉걸불 무더기 — 잔열의 따뜻한 베이스 광원이 필요할 때. 모닥불이 사그라든 뒤, 화로·바비큐·대장간 화덕의 은근한 열기를 표현할 때 쓴다.
- **앵커**: `bed of glowing coals` · **무드**: smoldering · radiant · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Beneath the subject spreads a bed of glowing coals, lumps of charcoal pulsing from within with deep blood-orange heat that brightens to molten yellow in the hottest cracks and crusts over into powdery grey ash on top; the embers breathe slowly, hotter patches flaring and dimming as faint heat ripples lift off the surface, and the whole bed casts a soft uplight that warms the subject from below, underlighting their face and chin and pooling a low amber glow across the surrounding ground.
  ```
- **영상 추가**: the coals pulse and breathe in a slow continuous loop, individual lumps brightening and fading as airflow stirs them, ash flaking and a faint shimmer of heat rising; the uplight on the subject flickers gently in sync.
- **페어링**: 로우앵글 또는 오버헤드(버즈아이)로 숯 베드 전체를 깔고, 인물은 그 위 언더라이트를 받게. 카메라는 거의 정지하거나 느린 푸시인, 색감은 따뜻한 앰버·딥 오렌지로 잔열의 밑광을 살린다.
- **주의**: 숯이 균일한 빨강 한 색으로 평평하면 LED 매트처럼 보인다 — 갈라진 틈은 노랗게 더 뜨겁고 표면은 회색 재로 덮여 농담이 갈려야 한다. 위로 솟는 큰 불꽃을 넣지 말 것(그건 잔열이 아니다). 핵심은 아래에서 위로 깔리는 은은한 언더라이트.

### 그라인더 불꽃 / 금속 연삭 스파크 (Metal-Grinding Spark Spray)

- **시그널**: 그라인더·연삭기가 금속을 갈 때 접촉점에서 부채꼴로 길게 뻗어 나가는 가늘고 빠른 흰 불꽃 줄기 — 산업·공방·용접 작업의 날카로운 스파크가 필요할 때. 가장 빠르고 직선적인 스파크 형태.
- **앵커**: `fan of grinding sparks` · **무드**: industrial · energetic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A long fan of grinding sparks jets from the contact point where wheel meets metal, fine white-hot streaks shooting out in a tight cone, each spark a bright needle that flares yellow-orange and forks into tiny branching starbursts before snuffing out into thin smoke; the spray sprays low and arcs to the ground where it bounces and scatters, throwing a harsh flickering white-blue light up onto the worker's face, mask and forearms and casting jittering hard-edged shadows behind them.
  ```
- **영상 추가**: the spark fan jets continuously in a fast fluttering stream, individual sparks streaking outward and forking into starbursts before dying, the cast light strobing and flickering on the worker; loops as long as the grinder stays in contact.
- **페어링**: 접촉점을 클로즈업이나 미디엄으로 잡고, 스파크 콘이 프레임을 가로지르게 사선 구도. 카메라는 고정 또는 미세 핸드헬드, 색감은 차갑고 대비 높은 산업 톤에 백열 스파크가 튀게.
- **주의**: 스파크가 굵고 느린 곡선으로 휘면 그라인더가 아니라 폭죽처럼 보인다 — 가늘고 빠르고 직선적이며 끝에서 별 모양으로 갈라져 터져야 한다. 색은 거의 흰빛~노랑(주황보다 뜨겁다). 접촉점의 깜빡이는 강한 빛을 작업자 얼굴·마스크에 꼭 입힐 것.

### 용접 불꽃 / 전기 스파크 버스트 (Welding / Electrical Spark Burst)

- **시그널**: 용접 아크나 합선된 전선에서 한순간 강하게 터지는 새파란 백색 섬광과 사방으로 튀는 스파크 — 강렬한 점광원 플래시가 필요할 때. 그라인더 스파크보다 짧고 폭발적이며 푸른빛이 강하다.
- **앵커**: `blinding welding arc burst` · **무드**: electric · blinding · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A blinding blue-white welding arc ignites at the contact point, a searing point of light too bright to look at spitting a violent burst of sparks that rocket outward and rain down in glowing parabolas, the sparks cooling from white through orange to red as they fall and snuff out; the arc strobes the whole scene with a cold hard flash, throwing stark blue-white light and sharp flickering shadows across the subject's face and tools while a faint wisp of smoke curls up from the molten weld pool.
  ```
- **영상 추가**: the arc ignites in a sudden strobing flash and spits sparks in fast outward arcs, the harsh cast light stuttering on and off in rapid bursts as the sparks rain down and die; fires as sharp intermittent strobes rather than a steady glow.
- **페어링**: 클로즈업~미디엄으로 아크 지점을 중심에. 카메라는 고정, 색감은 차가운 블루-화이트 하이라이트와 깊은 그림자가 대비되는 어두운 톤에서 가장 극적. 따뜻한 룩과는 충돌하니 쿨/뉴트럴 그레이드로.
- **주의**: 아크가 따뜻한 주황 하나로 은은하면 용접이 아니라 모닥불처럼 보인다 — 코어는 보다 못할 만큼 새파란 백색이어야 하고 빛이 깜빡깜빡 스트로브로 터져야 한다. 스파크는 흰→주황→빨강으로 식으며 포물선으로 떨어지고, 강한 플래시를 피사체·주변에 꼭 깔 것.

### 열기 아지랑이 / 히트 헤이즈 (Heat Haze Shimmer)

- **시그널**: 뜨거운 공기로 배경이 일렁이며 굴절되는 투명한 아지랑이 왜곡 — 불·열원 위나 달궈진 지면 위에 생긴다. 색이나 연기 없이 '열기 그 자체'를 보이게 하고 싶을 때 쓴다.
- **앵커**: `rippling heat-haze distortion` · **무드**: scorching · sweltering · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Transparent waves of heat haze ripple and shimmer in the air above the heat source, refracting and wobbling whatever is seen through them so distant edges smear and dance, a faint mirage-like blur rising in vertical convection streaks directly off the hot surface; it has no color of its own, only a liquid optical distortion that bends the background and the subject's far outline, telegraphing intense radiant heat in the gap between subject and backdrop while leaving the foreground crisp.
  ```
- **영상 추가**: the distortion ripples and undulates continuously upward in shifting convection bands, edges seen through it wavering and warping, strongest directly over the heat source and fading with height; loops smoothly.
- **페어링**: 망원 압축 구도가 아지랑이를 가장 잘 살린다(원경 압축으로 왜곡 누적). 카메라는 고정 롱샷, 색감은 채도 낮춘 뙤약볕·사막 톤이나 뜨거운 오렌지 햇빛 룩과 잘 맞는다.
- **주의**: 아지랑이는 '색'이 아니라 '굴절'이다 — 뿌연 안개나 흰 김으로 그리면 틀린다. 왜곡은 열원 바로 위에서 위로 갈수록 옅어지는 세로 결을 가져야 하고, 화면 전체에 균일하게 깔면 그냥 렌즈 흐림처럼 보인다. 과하게 주면 피사체까지 녹아 일그러져 언캐니해지니 배경에 한정할 것.

### 그을림 자국 / 탄화 패턴 (Scorch Marks & Char Pattern)

- **시그널**: 불·열이 표면에 남긴 검게 그을린 자국과 탄화 균열 — 움직이는 불티가 아니라 '불이 지나간 흔적'을 입히고 싶을 때. 화재 후, 폭발 잔해, 낙인·번 마크 표현에 쓴다.
- **앵커**: `blackened scorch and char marks` · **무드**: charred · scarred · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Blackened scorch marks spread across the surface around the subject, the burn radiating outward from a charred epicenter through sooty brown halos to faint heat-yellowed staining at the edges, the deepest char crazed into a cracked alligator-skin pattern of glowing red fissures where heat still lingers; a thin film of grey ash and soot dusts the contact zone, the matte black absorbing light and killing reflections so the charred area reads dead and sunken against the unburnt surface around it.
  ```
- **영상 추가**: mostly static as a surface texture, but the deepest cracks pulse faintly with residual orange heat and thin threads of smoke curl up lazily from the smoldering char; a slow continuous smolder rather than active flame.
- **페어링**: 디테일 클로즈업이나 오버헤드 플랫레이로 탄화 텍스처를 보여주면 좋다. 카메라는 느린 푸시인이나 슬라이드, 색감은 대비를 살린 차분한 톤에 균열 속 잔열 주황만 포인트로 살린다.
- **주의**: 그을림이 그냥 균일한 회색·갈색 얼룩이면 더러운 자국처럼 보인다 — 중심은 새까만 탄화, 바깥으로 갈수록 옅어지는 동심원 그라데이션과 악어가죽 같은 균열 패턴이 핵심. 탄 부분은 빛을 먹어 반사가 죽어야 하고, 깊은 틈에만 은은한 잔열 주황을 남길 것. 불꽃을 넣으면 안 된다.

### 용융 금속 / 시뻘건 쇳물 광채 (Molten / Red-Hot Metal Glow)

- **시그널**: 달궈져 속에서부터 빛나는 시뻘건 쇳덩이나 흘러내리는 쇳물 — 금속 자체가 강한 광원이 되는 잔열 표현이 필요할 때. 대장간 모루 위 쇠, 주물 쇳물, 용암처럼 흐르는 금속에 쓴다.
- **앵커**: `incandescent red-hot metal` · **무드**: incandescent · searing · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The metal glows incandescent from within, radiating heat-color that climbs from deep cherry-red at the cooler edges through bright orange to blinding white-yellow at the hottest core, a crusty grey oxide skin flaking off to reveal the molten brilliance beneath; where it pours or sags it stretches in slow viscous ropes, and the glowing mass acts as a fierce light source in its own right, throwing a saturated orange cast across the subject's face and tools, hot-rimming nearby edges and pooling a bright reflection on every surface that faces it.
  ```
- **영상 추가**: the heat-color shifts slowly and continuously as the metal cools, white-hot core creeping toward orange then dull red, a dark oxide skin crawling across the surface while any molten flow sags and drips in thick slow ropes; the cast light dims gradually in sync.
- **페어링**: 클로즈업~미디엄으로 쇳물·쇳덩이를 화면 광원으로. 카메라는 느린 푸시인이나 오빗으로 표면 반사를 굴리고, 색감은 따뜻한 앰버·오렌지를 강하게 살리는 룩으로 백열 그라데이션을 죽이지 않게.
- **주의**: 금속이 균일한 빨강 한 색이면 플라스틱처럼 보인다 — 가장 뜨거운 곳은 흰빛, 식은 가장자리는 짙은 체리레드로 열색 그라데이션이 연속으로 흘러야 한다. 산화막(검은 껍질)이 표면을 기어가며 농담을 줘야 진짜 같고, 무엇보다 이 금속이 강한 광원이므로 캐스트 라이트·림라이트·반사를 주변에 꼭 입힐 것.

### 타들어가는 종이 가장자리 (Burning Paper Edge Curl)

- **시그널**: 종이·사진·천 가장자리가 한쪽에서부터 주황빛 띠를 그리며 타들어가 검게 말려 오그라드는 모습 — 작고 친밀한 연소, '소멸·삭제'의 은유가 필요할 때. 편지·지도·사진이 타는 클로즈업에 쓴다.
- **앵커**: `creeping burning paper edge` · **무드**: delicate · decaying · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A glowing line of fire creeps inward from one edge of the paper, a thin advancing band of incandescent orange embers eating into the sheet, just ahead of it the material browning and blistering while behind it the burnt edge blackens, curls and crumbles into fragile grey ash that flakes away; tiny sparks and wisps of smoke lift off the advancing front, and the live ember line casts a soft moving orange glow onto the unburnt paper and the surface beneath, the curling char tip throwing a small flickering shadow as it shrivels.
  ```
- **영상 추가**: the ember line advances steadily across the sheet in one direction, the edge curling and crumbling to ash just behind the glowing front while flakes peel off and drift up; progresses once from intact to consumed rather than looping.
- **페어링**: 매크로·디테일 클로즈업으로 타들어가는 경계선을 또렷이. 카메라는 거의 고정하거나 아주 느린 푸시인, 색감은 어두운 배경에 잉걸불 주황만 살아나는 따뜻한 로우키 톤이 극적이다.
- **주의**: 종이가 불꽃에 통째로 휩싸이거나 가장자리가 깔끔하게 일직선으로 사라지면 가짜다 — 핵심은 살아있는 주황 잉걸불 띠가 안쪽으로 기어가고 그 바로 뒤가 검게 말려 부서지는 '전이선'. 잉걸불 띠는 점광원이라 주변 종이에 은은한 글로우를 던져야 하고, 재로 변한 부분은 너덜너덜 오그라들어야 한다.

### 불씨 혜성 / 잔광 꼬리 (Cinder Comet Trail)

- **시그널**: 날아가는 불씨·잔불 입자가 그리는 긴 잔광 꼬리 — 휘두르는 횃불, 던져진 폭죽, 솟구치는 불티 하나가 어둠을 가로지르며 빛의 궤적을 남길 때. 단일 입자의 드라마틱한 모션 스트릭이 필요할 때.
- **앵커**: `streaking cinder comet trail` · **무드**: luminous · kinetic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A bright cinder arcs through the dark trailing a long luminous comet tail, a white-hot head spitting tiny sparks and dragging a streak that fades from searing yellow-orange through dim red to a faint smoky afterglow, the tail wavering and shedding stray embers along its curving path; the glowing head acts as a small travelling light source, smearing a moving orange reflection across the subject and surfaces it sweeps past and leaving a brief retinal-streak glow hanging in the air behind it before it dims.
  ```
- **영상 추가**: the cinder streaks across frame in one swift arc, the comet head leading and the glowing tail stretching and fading behind it, shedding sparks as it goes and the cast glow sweeping across nearby surfaces; fires once as a single fast pass.
- **페어링**: 와이드~미디엄 어두운 배경에서 궤적이 프레임을 가로지르게. 카메라는 불씨를 따라가는 팬·트래킹이나 살짝 느린 셔터 느낌의 모션 블러, 색감은 어두운 로우키에 백열 헤드와 주황 트레일이 도드라지는 톤.
- **주의**: 꼬리가 균일한 굵기·밝기로 빳빳하면 네온 막대처럼 보인다 — 머리는 밝고 뜨겁게, 꼬리는 뒤로 갈수록 빨갛게 식으며 가늘어지고 잔불을 흘려야 한다. 직선으로 뻗기보다 살짝 휘는 호를 그리고, 날아가는 헤드가 지나는 표면에 이동하는 반사광을 던져야 공간에 붙는다.
