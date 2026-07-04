# 파괴·입자·변형 FX (destruction-transform)

파괴·디졸브·변형·낙하 입자 — 무게·중력·엣지 종류를 못박는다. 단단한 것은 날카로운 직선 파편, 변형은 한 방향으로 훑는 디졸브/결빙 프런트(start→front→end). 입자는 저밀도 양념.

> 각 항목 구성: **시그널**(언제 쓰는지) / **앵커**(키워드) · **무드** · **강도**(히어로=주연 / 양념=저밀도 보조) · **타이밍**(🔁연속=루프 / ⚡원샷=순간) / **VFX 블록**(영어, 바로 붙여쓰기) / **영상 추가** / **페어링**(어울리는 구도·무브·색감) / **주의**.

> VFX 블록은 **피사체·동작 묘사 뒤, 카메라무브·색감 앞**에 둔다. 한 컷에 히어로 효과는 하나만. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.


## 파괴 · 붕괴 (Shatter & Collapse)


### 유리 파열 / 글래스 샤터 (Shattering Glass Burst)

- **시그널**: 유리·창이 충격점에서 거미줄 균열로 갈라지다 수천 개의 날카로운 파편으로 폭발해 흩어지는 효과. 충격·돌파의 절정 순간을 강렬하게 보여줄 때.
- **앵커**: `exploding shattered glass shards` · **무드**: explosive · crystalline · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A sheet of glass detonates from a single impact point, a web of fractures racing outward before the pane bursts into thousands of jagged crystalline shards that fan through the air; the fragments catch and split the light into hard glints and tiny rainbow refractions, tumbling and spinning on their razor edges with a faint glittering haze of micro-particles trailing behind, the subject framed through the collapsing curtain of broken glass.
  ```
- **영상 추가**: Opens on a hairline crack at the impact; fractures spider outward over a few frames, then the pane blows apart in slow motion as shards arc and rotate toward camera, light flaring off each spinning facet before they fall out of frame. Fires once.
- **페어링**: 유리 너머에 피사체를 둔 프레임 인 프레임이나 정면 미디엄샷, 슬로모션 크래시 줌 또는 살짝 푸시인, 차가운 하이콘트라스트·림라이트 색감과 잘 맞는다.
- **주의**: 파편이 물처럼 흐물거리거나(유리는 단단한 직선 파편이어야 함) 입자가 너무 많아 죽처럼 뭉개지기 쉽다 — 파편 개수를 적당히, 날카로운 직선 엣지·일정 두께를 명시하고 피사체 얼굴을 파편으로 가리지 말 것.

### 거미줄 균열 번짐 (Spiderweb Cracks Spreading)

- **시그널**: 충격점에서 가느다란 균열이 거미줄처럼 가지치며 번지지만 아직 부서지지 않고 표면에 머무는, 긴장·예고용 효과. 곧 무너질 직전의 정적인 위협감을 줄 때.
- **앵커**: `spreading spiderweb fracture lines` · **무드**: tense · fracturing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  From the point where the surface is struck, a network of hairline fractures races outward in branching spiderweb tendrils, the cracks splitting into finer and finer forks as they crawl across the pane while the glass holds together one beat longer; the fracture lines read as bright white stress filaments where they catch the light, a milky crushed-white pulverized zone blooming around the impact against the otherwise clear surface, fine glass dust sifting from the deepest seams. The damage stays contained to the plane, the scene behind it sliced and doubled through the refracting fissures, the subject still sharp beyond the cracked glass.
  ```
- **영상 추가**: Fires once: the impact pops and the crack front sprints outward in branching jolts over a few frames, each new fork snapping into place with a faint shiver, then settling and holding — tense and unbroken rather than collapsing.
- **페어링**: 균열을 정면으로 채운 클로즈업~미디엄 구도, 거의 고정된 카메라에 미세한 핸드헬드 떨림이나 천천한 푸시인, 서늘한 블루·데사트 색감이 긴장감을 살린다.
- **주의**: 균열이 한 충격점에서 가지치며 뻗어야 하는데 화면 전체에 균일한 금이 동시에 깔리면 스티커처럼 보인다 — 분기 트리 구조와 중심부 분쇄 영역을 명시하고, 이 효과는 '아직 안 부서진' 단계이니 파편이 떨어지지 않게 유지할 것.

### 창문 폭발 / 윈도우 블로우아웃 (Window Pane Explosion)

- **시그널**: 건물 창문이 내부 폭압이나 외부 충격으로 프레임째 바깥으로 터져 나가며 유리가 무더기로 쏟아지는 효과. 폭발의 여파나 강제 진입의 충격을 보여줄 때.
- **앵커**: `window blasting outward in glass` · **무드**: violent · concussive · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The window blows out all at once as the pane bursts from its frame, a dense sheet of glass erupting outward and downward in a cone of tumbling shards and a few large hinged sections that snap and break mid-flight; the fragments scatter in cool blue-grey tones with a brief warm flash of the blast venting behind them, glints raking across the spinning faces while a low haze of glass dust and grit fans out. The shards rain and skitter across the ground below the frame, throwing a litter of bright reflections, the subject silhouetted against the gaping emptied window.
  ```
- **영상 추가**: Fires once: a concussive thump punches the pane outward, glass accelerating away from the frame in slow motion, large sections cartwheeling as smaller shards spray ahead, then the whole load drops and clatters down out of frame.
- **페어링**: 건물 외벽을 담는 와이드~미디엄 로우앵글, 충격 순간의 카메라 셰이크나 짧은 푸시인, 폭발의 따뜻함과 유리의 차가움이 부딪치는 틸 앤 오렌지·하이콘트라스트 색감과 어울린다.
- **주의**: 유리가 프레임에서 '바깥으로' 한 방향 폭발해야 하는데 사방으로 똑같이 퍼지거나 파편이 무게 없이 둥둥 뜨기 쉽다 — 바깥·아래로 향하는 원뿔형 분출과 큰 판유리 조각의 낙하 가속, 바닥에 쏟아져 튀는 잔해를 명시할 것.

### 건물 붕괴 / 임플로전 (Building Collapse / Implosion)

- **시그널**: 건물이 자체 무게로 층층이 주저앉으며 거대한 잔해와 먼지 구름을 토해내는 붕괴 효과. 재난·파괴의 스케일을 압도적으로 보여줄 때.
- **앵커**: `building collapsing in a cascade of debris and dust` · **무드**: cataclysmic · thunderous · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A large structure gives way and pancakes floor onto floor, the facade buckling and folding inward as concrete and steel shear apart, heavy slabs and rubble cascading down while a churning grey dust cloud billows outward and rolls along the ground; the plumes swallow the light into a hazy brown-grey murk, debris bouncing and fracturing on impact, the subject dwarfed in the foreground against the falling mass.
  ```
- **영상 추가**: Starts with a structural shudder and the first slab dropping, then a chain-reaction pancaking down the height of the building; dust plumes up and a fast-rolling debris cloud expands toward camera, smaller chunks raining ahead of the main mass. Fires once.
- **페어링**: 피사체를 전경에 둔 와이드~익스트림 와이드 로우앵글, 천천한 풀백이나 크레인 상승으로 스케일을 강조, 먼지에 빛이 먹히는 데사트 브라운그레이 색감과 맞는다.
- **주의**: 잔해가 솜뭉치처럼 가볍게 떠다니거나(무게감·중력 가속이 핵심) 먼지 구름이 단단한 덩어리로 굳어 보이기 쉽다 — 무거운 콘크리트 덩어리의 낙하 가속·충돌 튐과, 그와 별개로 부드럽게 말려 퍼지는 먼지를 분리해 묘사하고 피사체와의 스케일 대비를 명확히 할 것.

### 돌담 붕괴 / 석벽 무너짐 (Crumbling Stone Wall)

- **시그널**: 오래된 석벽·돌담이 모르타르 이음새를 따라 갈라지며 묵직한 돌덩이가 굴러떨어지고 회색 먼지를 토하는 붕괴 효과. 세월·풍화나 충격으로 무너지는 고풍스러운 구조물에.
- **앵커**: `stone wall crumbling apart` · **무드**: ancient · ponderous · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The stone wall fails along its mortar joints, blocks shearing loose and toppling outward from a breach as the masonry sloughs away course by course; the freshly broken faces show pale raw stone against the weathered grey-brown surface, a veil of fine mortar dust and grit puffing from every seam as the heavy blocks tumble and grind. The slabs fall with real weight, bouncing and cracking as they pile at the base, kicking up a low dust haze that catches the light in soft shafts, the subject framed beyond the gap torn open in the wall.
  ```
- **영상 추가**: Fires once: a section bulges and the first blocks tip free, then the breach widens as stone tumbles down in heavy, unhurried arcs, mortar dust jetting from the joints and a settling haze rolling out along the ground.
- **페어링**: 석벽을 측면으로 담는 와이드 구도나 무너지는 틈을 통한 프레임 인 프레임, 살짝 흔들리는 핸드헬드나 천천한 트럭, 따뜻한 어스톤·낮은 채도의 색감과 어울린다.
- **주의**: 돌은 무르게 부스러지지 않고 큰 덩어리로 '쪼개져' 무겁게 떨어져야 하는데 스티로폼처럼 가볍게 튀거나 먼지·돌을 구분 못 하기 쉽다 — 모르타르 이음새를 따라 쪼개지는 큰 블록의 무게·충돌과, 이음새에서 새어 나오는 미세 먼지를 분리해 묘사할 것.

### 콘크리트 파열 / 청크 버스트 (Concrete Chunks Bursting)

- **시그널**: 콘크리트 기둥·바닥·벽이 충격점에서 둔탁한 덩어리로 폭발하듯 터지며 철근과 회색 분진을 드러내는 효과. 강한 타격·관통의 순간에.
- **앵커**: `concrete bursting into chunks` · **무드**: explosive · gritty · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Concrete erupts from the point of impact in a radial burst of blunt grey chunks and angular rubble, a spray of pulverized powder blasting ahead of the heavier fragments while bent steel reinforcing bars whip and twang from the broken core; the fresh breaks reveal a paler aggregate-flecked interior against the stained outer surface, and a cloud of fine cement dust flares pale where the light rakes through it. The chunks arc outward and tumble down with heavy momentum, cracking again where they land and kicking up a gritty haze, the subject braced just beyond the bursting mass.
  ```
- **영상 추가**: Fires once: the impact detonates the slab in slow motion, chunks and dust blasting radially outward as rebar springs free, the heavier pieces decelerating and raining down while the powder cloud expands and drifts.
- **페어링**: 충격점을 정면~3/4로 잡는 미디엄 클로즈업, 짧은 크래시 줌이나 충격 셰이크, 차갑고 거친 데사트·하이콘트라스트 색감과 맞는다.
- **주의**: 콘크리트는 둔탁하고 불규칙한 덩어리로 터져야 하는데 유리처럼 날카로운 결정 파편이 되거나 철근·분진·덩어리를 안 구분하기 쉽다 — 둔각의 회색 청크, 휘어진 철근, 별도로 퍼지는 미세 시멘트 분진을 각각 명시할 것.

### 철거 먼지 붕괴 (Demolition Dust Collapse)

- **시그널**: 철거되는 건물이 가라앉으며 거대한 갈색 먼지 벽이 부풀어 길거리로 굴러오는, 먼지가 주연인 붕괴 효과. 붕괴 자체보다 압도적인 먼지 구름을 보여줄 때.
- **앵커**: `rolling demolition dust cloud` · **무드**: billowing · cataclysmic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the structure drops straight down into its own footprint, a colossal wall of brown-grey demolition dust boils up from the base and barrels outward, the churning plume rolling and curling over itself as it floods along the street and swallows everything in a hazy murk; the cloud glows pale where backlight rakes its leading edge and deepens to a dirty brown in its core, faint debris streaking out ahead of it. The dust devours the light into a flat diffuse glow, dimming the scene and softening every silhouette, the subject engulfed at the foreground edge as the wall of haze sweeps past.
  ```
- **영상 추가**: Fires once: the building sinks and the dust erupts, a fast-rolling wall of haze billowing outward and accelerating toward camera, tumbling over itself before it overruns the frame and everything goes soft and grey.
- **페어링**: 거리 높이의 와이드 구도나 피사체를 전경에 둔 로우앵글, 먼지 벽에서 도망치듯 빠른 풀백이나 핸드헬드, 채도 빠진 더스티 브라운그레이 색감과 어울린다.
- **주의**: 먼지가 단단한 솜덩어리처럼 굳어 보이거나 잔해와 분리되지 않기 쉽다 — 스스로 말려 구르는 부드러운 난류 먼지와 그 앞을 튀어나가는 잔해를 구분하고, 먼지가 빛을 먹어 장면을 평탄하게 흐리는 가독성 저하까지 명시할 것.

### 대지 균열 / 지면 갈라짐 (Cracking Earth Fissure)

- **시그널**: 지진·충격으로 지면이 한 점에서 갈라져 균열이 화면을 가로질러 달려가며 검은 틈이 벌어지는 효과. 대지가 찢어지는 재난·초자연적 힘을 보여줄 때.
- **앵커**: `ground splitting into a fissure` · **무드**: seismic · rupturing · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The ground splits open from a point and a jagged fissure tears across the earth, racing outward in a forked seam that widens into a dark chasm as slabs of soil and rock heave, tilt, and drop away along its edges; dry dust and grit jet up from the opening crack, the raw torn walls falling into shadowed black while the surface around them is webbed with finer splitting cracks. Pebbles and clods skitter into the gap, a low dust haze drifting up to catch the light in soft shafts, the subject thrown off balance at the rim of the widening rupture.
  ```
- **영상 추가**: Fires once: the seam rips across the ground in a fast forking line, the chasm yawning open with a shudder as edges drop and dust jets upward, then slowing as the fissure settles to its full gaping width.
- **페어링**: 균열이 카메라 쪽으로 달려오는 로우앵글이나 갈라짐을 내려다보는 하이앵글, 지면 셰이크와 짧은 푸시인, 메마른 어스톤·데저트 색감과 맞는다.
- **주의**: 균열이 한 점에서 한 방향으로 '달려가며' 벌어져야 하는데 사방에서 동시에 갈라지거나 틈 벽이 흐물거리기 쉽다 — 갈라짐 프런트의 진행 방향과, 단단한 흙·암반이 기울어 떨어지는 무게감, 틈에서 솟는 먼지 제트를 명시할 것.

### 목재 파쇄 / 우드 스플린터 (Splintering Wood Smash)

- **시그널**: 나무 문·널빤지·가구가 결을 따라 길쭉한 가시 파편으로 터지며 부서지는 효과. 강제로 부수고 들어가거나 격렬한 충돌의 순간에.
- **앵커**: `wood smashing into splinters` · **무드**: splintering · violent · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The wood blows apart along its grain as it is struck, bursting into long jagged splinters and fibrous shards that fan out from the breach with raw torn fibers bristling at every ragged end; the freshly split interior flashes pale blond against the darker finished or weathered surface, a scatter of small chips and a haze of sawdust spraying ahead of the larger pieces. The splinters cartwheel out with sharp momentum, their raw edges catching the light, then clatter and bounce across the floor, the subject driving through the broken-open gap.
  ```
- **영상 추가**: Fires once: the impact punches through and the planks explode along the grain in slow motion, long splinters spinning outward as sawdust mists ahead, the heavier shards arcing down and rattling onto the ground.
- **페어링**: 부서지는 지점을 정면~3/4로 잡는 미디엄샷이나 돌파를 따라가는 트래킹, 짧은 푸시인·충격 셰이크, 따뜻한 우디 톤이나 거친 하이콘트라스트 색감과 어울린다.
- **주의**: 나무는 결을 따라 길쭉한 가시 파편으로 찢어져야 하는데 유리처럼 균일한 조각이 되거나 결 방향을 무시하기 쉽다 — 결을 따라 쪼개지는 섬유질 스플린터, 밝은 속살 대 어두운 표면 대비, 앞서 퍼지는 톱밥 분진을 명시할 것.

### 도자기 파쇄 / 세라믹 스매시 (Ceramic / Porcelain Smash)

- **시그널**: 도자기·접시·꽃병이 단단한 유약 표면 그대로 날카로운 곡면 파편으로 산산조각 나는 효과. 떨어뜨림·타격으로 깨지는 정교한 기물에.
- **앵커**: `porcelain shattering into shards` · **무드**: brittle · crisp · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The porcelain shatters the instant it strikes, bursting into sharp curved shards and a spray of fine chips and powder that scatter low across the surface where it lands; the glazed outer skin stays glossy and colored while the fresh fractures expose a matte chalk-white bisque interior, the pieces ringing apart along clean brittle edges. A puff of pale ceramic dust hangs in the air as the shards skitter and spin, their glazed faces flicking back small bright highlights while the crisp broken edges catch a thin rim of light, the subject just behind the bursting object.
  ```
- **영상 추가**: Fires once: the piece cracks on contact and bursts apart in slow motion, curved shards fanning out and tumbling low, a fine dust puffing up before the fragments skitter to rest across the floor.
- **페어링**: 떨어지는 기물을 담는 테이블탑 클로즈업이나 하이앵글, 짧은 슬로모션 푸시인, 깨끗한 하이키나 부드러운 파스텔 색감과 맞는다.
- **주의**: 도자기는 곡면을 유지한 날카로운 조각으로 깨지고 유약 표면과 무광 속살이 대비돼야 하는데 흐물거리거나 균일한 알갱이로 뭉개지기 쉽다 — 곡률 있는 단단한 파편, 광택 유약 대 분필 같은 속살, 그리고 미세 도자 분진을 분리해 명시할 것.

### 빙판 균열 / 아이스 시트 파쇄 (Ice Sheet Fracture)

- **시그널**: 얼어붙은 호수·빙판이 한 점에서 갈라져 균열이 표면을 가로질러 달리고 얼음판이 들썩이며 쪼개지는 효과. 결빙 봉인이 아니라 평평한 빙판이 부서지는 순간에.
- **앵커**: `ice sheet fracturing across` · **무드**: frigid · splintering · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A fracture rips across the frozen sheet from the point of stress, white cracks racing outward in branching seams that fork and spread until plates of ice heave, tilt, and grind against one another; the splitting lines flash opaque bright-white through the clear blue-green ice, trapped bubbles and older fractures lit from within, a spray of pulverized ice crystals and slush kicking up along the seams. The fractured surface refracts and scatters the light into a cold cyan shimmer, dark water welling up through the widening gaps, the subject standing on the buckling, splitting plates.
  ```
- **영상 추가**: Fires once: a crack shoots out from underfoot and sprints across the sheet in forking white lines, plates heaving and tipping with a shudder, ice crystals spraying up before the surface settles into a buckled fractured field.
- **페어링**: 빙판을 내려다보는 하이앵글이나 균열이 달려오는 로우앵글, 지면 셰이크와 천천한 푸시인, 차가운 시안·블루 데사트 색감과 어울린다.
- **주의**: 얼음이 불투명 흰 페인트처럼 갈라지지 않고 맑은 얼음 속 흰 균열·기포가 보여야 하며, 균열이 한 점에서 가지치며 달려야 한다 — 반투명 굴절, 들썩이는 얼음판의 무게, 틈으로 솟는 검은 물을 명시하고 사방 동시 균열을 피할 것.

### 잔해 낙하 / 루블 캐스케이드 (Falling Rubble Cascade)

- **시그널**: 무너진 천장·절벽·구조물에서 돌과 콘크리트 잔해가 위에서 끊임없이 쏟아져 내리는 잔해 폭포 효과. 붕괴 한가운데나 그 직후의 지속되는 위험을 보여줄 때.
- **앵커**: `rubble cascading down` · **무드**: thunderous · tumbling · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A steady cascade of broken rock and concrete rubble pours down from above, chunks of every size tumbling and bouncing off ledges as they fall, the stream accelerating under its own weight and breaking into smaller fragments and grit on each impact; the debris reads in dusty grey-brown tones, every piece trailing a thin streamer of powder so the whole curtain is veiled in a drifting haze. The falling mass throws shifting shadows and kicks up dust that catches the light in soft shafts, the larger blocks slamming and rebounding off the ground in bursts of grit, the subject sheltering at the edge of the raining debris.
  ```
- **영상 추가**: Loops as a continuous pour: rubble streams down and bounces off ledges in an unbroken cascade, larger chunks slamming and rebounding while a steady haze of dust drifts through it — sustained rather than a single burst.
- **페어링**: 위에서 쏟아지는 잔해를 담는 로우앵글 와이드나 피사체를 전경에 둔 미디엄, 거의 고정된 카메라에 미세한 셰이크, 채도 낮은 더스티 어스톤 색감과 맞는다.
- **주의**: 잔해가 무게 없이 둥둥 뜨거나 균일한 크기로 똑같이 쏟아지기 쉽다 — 크고 작은 덩어리의 낙하 가속·튐, 충돌 시 다시 깨짐, 각 조각이 끄는 먼지 꼬리를 명시하고 근/원경 크기 차이를 둘 것.

## 소멸 · 디졸브 (Disintegration / Ash Dissolve)


### 재로 흩어짐 / 디스인티그레이션 (스냅) (Ash Disintegration (Snap))

- **시그널**: 피사체가 가장자리부터 잿가루 입자로 부스러져 바람에 실려 사라지는 '스냅' 소멸 효과. 비장하고 무게 없는 이별·소멸의 순간을 한 컷에 담고 싶을 때.
- **앵커**: `dissolving into drifting ash particles` · **무드**: mournful · weightless · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The subject begins to crumble from one edge into a fine drift of grey-black ash, the dissolving boundary creeping across the body as solid form unravels into countless weightless flecks that lift and curl away on an unseen wind; the disintegrating edge glows faintly warm where it crumbles, particles thinning from dense flakes into a delicate scattering haze, while the still-intact part of the subject stays sharp and grounded, the warm crumble-line throwing a soft ember glow onto the surviving surface.
  ```
- **영상 추가**: The disintegration front sweeps across the subject over a couple of seconds, flakes peeling off and streaming upward in a tapering plume; density falls off so the last wisps dissolve into nothing as the figure is carried away particle by particle — fires once, not a loop.
- **페어링**: 미디엄~풀샷(2:3)으로 디졸브 프런트가 전신을 훑는 과정을 다 담고, 카메라는 느린 푸시인이나 고정 락오프로 효과가 모션을 떠맡게 한다. 색감은 차갑게 데새추된 톤에 소멸 엣지의 따뜻한 글로우가 대비되는 시네마틱 그레이드.
- **주의**: 소멸 경계가 또렷한 '먹어 들어가는 선'으로 진행돼야 하는데 온몸이 동시에 푸석거리면 가짜처럼 보인다 — 디졸브 프런트를 한 방향으로 진행시키고, 남은 신체는 선명하게 유지하며, 입자가 연기처럼 뭉치지 않고 개별 플레이크로 흩날리게 할 것.

### 먼지 입자 분해 / 더스트 디졸브 (Dust-to-Particle Dissolve)

- **시그널**: 피사체가 재보다 곱고 가벼운 미세 먼지 입자로 잘게 부서져 빛 속에 반짝이며 옆으로 흩어져 사라지는 소멸. 비통함보다 신비롭고 정적인 사라짐을 원할 때.
- **앵커**: `dissolving into a cloud of fine dust motes` · **무드**: ethereal · delicate · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Starting where the light first catches it, the subject granulates into a fine cloud of pale dust motes, the solid surface going powdery and sloughing off the form grain by grain as the dissolving zone drifts across the body; the motes layer from a warm beige near the surface into cooler grey as they thin out, sifting sideways and settling slowly rather than billowing upward. Caught in a shaft of light the suspended particles glitter and scatter the beam into soft volumetric haze, casting a faint dappled shadow on the floor beneath, while the intact portion of the subject holds crisp focus and weight.
  ```
- **영상 추가**: The dissolve zone drifts across the subject over a couple of seconds; powder sheets off and sifts down in slow eddies, the densest motes near the body sinking while the finest hang and twinkle in the light beam before fading out — fires once, not a loop.
- **페어링**: 역광·백라이트 구도에 얕은 심도를 걸어 모트가 갓레이에 반짝이게 하고, 카메라는 거의 정지하거나 미세한 슬로 드리프트로. 색감은 따뜻한 골든아워 라이트 빔 톤이 먼지 산란을 살린다.
- **주의**: 입자가 균일한 크기로 화면을 뿌옇게 덮어 안개·연기처럼 보이기 쉽다 — 근경의 굵은 모트와 원경의 미세 입자에 크기·포커스 차를 두고, 옆으로 사뜨며 가라앉는 결을 살리며, 빛 빔 밖에서는 입자가 너무 빽빽하지 않게 할 것.

### 불티 연소 소멸 / 임버 번어웨이 (Ember Burn-Away Dissolve)

- **시그널**: 발광하는 연소 선이 피사체를 한쪽부터 태워 들어가며 그을음·재·연기로 소멸시키는 효과. 종이나 천처럼 타들어가며 사라지는 극적인 소각 연출에.
- **앵커**: `burning away along a glowing ember front` · **무드**: fiery · consuming · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A glowing line of orange embers eats across the subject from one corner, the material charring to black and lifting away in curling flakes just behind the advancing burn front while tiny flames lick along the dissolving edge; the colors stack from a bright amber combustion line into smoldering red and then matte black ash, thin grey smoke peeling upward off the consumed area. The ember front throws a warm flickering glow back onto the intact surface and the ground beneath, sparks winking out as they cool and drift, while the unburned remainder of the subject stays sharp and unlit until the line reaches it.
  ```
- **영상 추가**: The burn line creeps across the subject, accelerating slightly, char flaking off and smoke streaming up behind it; embers flare and fade as the last of the form is consumed and a thin curtain of smoke rises — fires once, not a loop.
- **페어링**: 로우키 어두운 배경의 미디엄샷으로 번 프런트의 발광이 살아나게 하고, 카메라는 고정 또는 슬로 푸시인. 색감은 앰버 하이라이트와 딥 섀도가 부딪치는 따뜻-차가운 대비 그레이드.
- **주의**: 번 프런트 없이 피사체 전체가 동시에 불붙거나 불꽃이 가스불처럼 균일하면 가짜다 — 발광하는 연소 선이 한 방향으로 훑게 하고, 그을림→재로 가는 색 단계와 피어오르는 연기를 분리해 묘사하며 불티는 식으며 꺼지게 할 것.

### 모래 풍화 소멸 / 샌드 이로전 (Sand Erosion Dissolve)

- **시그널**: 피사체가 바람에 풍화되어 모래알로 벗겨지고 흘러내려 사라지는 효과. 석상·사막·세월의 무상함과 마모를 표현할 때.
- **앵커**: `eroding away into streaming sand` · **무드**: arid · weathered · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Driven by a steady wind, the subject's surface abrades away grain by grain, sharp details rounding and softening first before whole sheets of sand peel off the windward face and stream away in tapering ribbons; the sand layers from a warm ochre at the core into pale dusty tan at the trailing edge, the form hollowing and slumping as it loses mass. Low sun rakes across the eroding surface and backlights the streaming grains into glowing amber veils, fine dust hazing the air and dragging a soft drifting shadow downwind, while the sheltered side of the subject still reads solid and detailed.
  ```
- **영상 추가**: Sand sheets strip off the windward side and trail away in ribbons as the form gradually hollows and slumps over a few seconds; the erosion accelerates toward the end until the silhouette dissolves into a streaming dust plume — fires once, not a loop.
- **페어링**: 측면·백라이트 로우선(저각도 태양)의 와이드~미디엄 구도, 카메라는 느린 트럭이나 고정. 색감은 따뜻한 데저트 톤(앰버·탄)에 더스티 콘트라스트를 더한 그레이드.
- **주의**: 모래가 가루처럼 둥둥 뜨거나(중력·바람 방향이 핵심) 표면이 디테일 없이 그냥 녹아내리면 안 된다 — 바람맞이 면부터 시트로 벗겨져 한 방향으로 흐르게 하고, 날카로운 디테일이 먼저 둥글려지는 풍화 단계와 알갱이감을 살릴 것.

### 픽셀·복셀 분해 / 디지털 디스인티그레이션 (Pixel / Voxel Disintegration)

- **시그널**: 피사체가 정육면체 복셀/픽셀로 분해되어 떠오르며 흩어지는 디지털 비물질화. SF·가상현실·디지털 소멸이나 텔레포트 연출에.
- **앵커**: `breaking apart into floating voxel cubes` · **무드**: digital · synthetic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Beginning at one edge, the subject breaks apart into a grid of small cubic voxels that detach and float free, the once-continuous surface resolving into hard-edged blocks that drift outward and tumble as the dissolving boundary marches across the form; the cubes carry the subject's own colors but their facets glow with a thin emissive cyan-white seam along every edge, the leading particles shrinking to tiny pixels as they scatter. The block faces catch crisp specular flecks and cast a faint colored glow into the surrounding air, the still-solid portion of the subject holding sharp while the detached voxels disperse like a slow digital exhale.
  ```
- **영상 추가**: The voxel boundary sweeps across the subject, cubes peeling off and floating outward with a slight upward drift, larger blocks fragmenting into smaller pixels as they recede and blink out — fires once, not a loop.
- **페어링**: 클린한 스튜디오/네거티브 스페이스 구도로 큐브 위계가 읽히게 하고, 카메라는 슬로 오빗이나 락오프. 색감은 차가운 하이테크 톤(시안·클린 화이트)에 약한 글로우를 더한 그레이드.
- **주의**: 큐브가 무게 없이 흐물대거나(딱딱한 직선 큐브 엣지가 핵심) 픽셀이 죽처럼 균일하게 흩어지면 디지털 느낌이 죽는다 — 정육면체의 단단한 엣지와 발광 심을 유지하고, 큰 블록이 작은 픽셀로 쪼개지며 흩어지는 위계와 한 방향 프런트를 둘 것.

### 부스러져 무너짐 / 크럼블 콜랩스 (Crumble-to-Dust Collapse)

- **시그널**: 단단한 석상·구조물이 제 무게로 부스러져 아래로 무너지며 먼지와 잔해 더미로 주저앉는 소멸. 위로 날아가는 재와 반대로 중력으로 붕괴시키고 싶을 때.
- **앵커**: `crumbling and collapsing into dust and rubble` · **무드**: decrepit · weighty · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The subject fractures into brittle chunks and sloughs apart under its own weight, cracks spidering across the surface before sections shear off and tumble straight down into a growing heap of rubble and powder at its base; heavy fragments fall fast and bounce with real weight while a soft grey dust plume billows up and rolls outward from the collapse. The colors go from intact stone-grey to the paler chalky dust of the cloud, the falling chunks catching hard edge-light and throwing tumbling shadows, the dust hazing the air and dimming the light to a chalky murk as the form pancakes down, the last upright remnant still crisply detailed before it gives way.
  ```
- **영상 추가**: Cracks race across the subject, then chunks break free and rain straight down with weight, bouncing as they pile up while a dust cloud puffs and rolls outward; the collapse cascades top to bottom and settles into a rubble heap — fires once, not a loop.
- **페어링**: 풀샷 로우앵글(2:3)로 무너지는 스케일을 강조하고, 카메라는 고정 또는 충돌 순간 미세 셰이크. 색감은 채도 낮은 스토니 그레이와 차가운 더스트 톤의 그레이드.
- **주의**: 잔해가 솜처럼 가볍게 떠오르거나 위로 흩날리면 안 된다(중력으로 아래로 무너지는 게 핵심) — 무거운 덩어리는 빠르게 낙하·튐, 먼지는 따로 부드럽게 말려 오르게 분리하고 발밑에 쌓이는 더미를 명시할 것.

### 종이 타들어감 / 페이퍼 번 엣지 (Paper-Burn Edge Dissolve)

- **시그널**: 오래된 사진·편지·지도가 가장자리부터 주황 엠버 링으로 타들어가며 말려 사라지는 효과. 회상·기억의 소실·과거와의 단절을 표현할 때.
- **앵커**: `burning inward from a charring paper edge` · **무드**: nostalgic · smoldering · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A ring of glowing orange embers advances inward from the burning edge, the paper scorching to brown then blackening and curling as a delicate lace of ash crumbles away just behind the smoldering line; the colors band from the unburned surface through a singed sepia halo into the bright ember rim and finally flaking black char. The ember line glows warm against the curling paper and the translucent sheet lights up briefly where the flame backlights it, a thread of grey smoke rising off the advancing front, the intact center of the surface still legible and sharp as the burn closes in from the edges.
  ```
- **영상 추가**: The ember ring eats inward from the edges, paper curling and ash flaking off behind the glowing line as a wisp of smoke lifts; the burn accelerates as it converges on the center until the whole sheet is consumed — fires once, not a loop.
- **페어링**: 톱다운 플랫레이나 정면 클로즈로 종이 면을 다 담고, 카메라는 고정 또는 느린 푸시인. 색감은 세피아·웜 빈티지 톤이 타들어가는 결을 살린다.
- **주의**: 발광 엠버 링 없이 종이가 그냥 검게 변하거나 불꽃이 과하게 커지면 안 된다 — 안쪽으로 전진하는 주황 엠버 선과 그 뒤의 말려 부서지는 재, 역광에 비치는 반투명 종이, 가느다란 연기를 살리고 중앙의 내용은 끝까지 읽히게 할 것.

### 박리·벗겨짐 / 플레이크 필어웨이 (Flaking Peel-Away)

- **시그널**: 피사체 표면이 오래된 페인트·금박처럼 조각조각 들떠 벗겨지고 떨어져 나가는 박리 소멸. 노화·풍화·세월의 흔적과 켜켜이 벗겨지는 질감을 표현할 때.
- **앵커**: `flaking and peeling away in curling chips` · **무드**: decayed · brittle · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The subject's outer skin lifts and peels away in brittle curling flakes, chips cracking loose at their edges and fluttering off to expose the crumbling layer beneath as the flaking zone spreads across the surface; the flakes show a worn, faded face and a fresher raw underside, the colors layering from the aged surface tone into the paler material at each fresh break. Lifting chips catch a glancing light along their curled edges and cast tiny moving shadows as they detach and spin away, the cleared area dissolving into a fine crumble while the still-attached surface holds its texture and form.
  ```
- **영상 추가**: Flakes lift and curl at their edges then peel free and flutter away one after another, the bare patch spreading and crumbling to dust as the peel front travels across the subject — fires once, not a loop.
- **페어링**: 클로즈업~미디엄으로 플레이크 디테일과 들뜬 엣지의 그림자를 살리고, 카메라는 느린 푸시인이나 슬로 오빗. 색감은 빛바랜 에이지드/뮤트 톤의 그레이드.
- **주의**: 플레이크가 흐물거리거나 표면이 통째로 녹으면 안 된다(딱딱하게 갈라져 말리는 칩이 핵심) — 엣지부터 들뜨고 말려 떨어지는 결, 표면과 뒷면의 색차, 떨어지는 칩의 작은 그림자를 살리고 박리 프런트를 한 방향으로 진행시킬 것.

### 바람에 흩날려 사라짐 / 윈드 스트립트 (Wind-Stripped Dissolve)

- **시그널**: 강한 한 방향 바람이 피사체를 찢어 길게 흐르는 줄기로 흩날려 보내는 소멸. 격렬하고 덧없는 사라짐, 바람에 실려 떠나가는 극적 연출에.
- **앵커**: `stripped away into wind-blown streaks` · **무드**: turbulent · fleeting · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A hard directional gust tears the subject apart from the upwind side, the surface shredding into long streaming wisps and ribbons that rip free and stream off in one direction, the form thinning and trailing into a comet-tail of particles pulled downwind; the streaks blur from the subject's solid color at the source into a translucent smear of fine motes at the tail. The streaming material catches a rim of backlight along the windward edge and motion-blurs into glowing threads, a faint haze and drifting shadow trailing leeward, while the front face of the subject stays briefly intact before it too peels into the flow.
  ```
- **영상 추가**: The subject strips away from the windward edge, material streaming off in blurred ribbons that accelerate downwind into a tapering tail; the dissolve sweeps across in one fast directional gust until nothing is left — fires once, not a loop.
- **페어링**: 와이드(16:9) 측면 실루엣으로 다운윈드 스트릭이 길게 흐르게 하고, 카메라는 고정 또는 바람 반대 방향 슬로 트럭. 색감은 차가운 데새추 톤에 강한 림라이트를 얹은 그레이드.
- **주의**: 입자가 사방으로 흩어지면 가짜다(강한 한 방향 바람이 핵심) — 모든 스트릭이 바람 아래로 한 방향으로 흐르며 모션 블러로 늘어지게 하고, 바람맞이 엣지의 림라이트와 꼬리로 갈수록 옅어지는 위계를 둘 것.

### 급속 부패 / 가속 부패·부식 (Accelerated Decay / Rot)

- **시그널**: 신선한 피사체가 빠르게 변색·곰팡이·시들음으로 부패해 쪼그라들고 주저앉는 타임랩스 부패. 시간의 경과·부패·무상함을 압축해 보여줄 때.
- **앵커**: `rotting and withering in fast-forward` · **무드**: putrid · withering · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Time rushes forward across the subject as fresh surfaces bruise, discolor and sink, blooms of brown and grey-green mottling spreading from a first soft spot while the form shrivels, wrinkles and sags inward losing its turgor; the colors slide from vivid and ripe through dull olive and bruised purple into sunken black, a faint fuzz of mould creeping over the worst patches. The dulling surface loses its sheen and falls into shadow as it caves, juices darkening and edges curling, the decay front radiating outward from the initial blemish while the still-fresh remainder holds its color and firm highlight a moment longer before it too gives in.
  ```
- **영상 추가**: Decay spreads in fast-forward from one blemish outward, the surface discoloring, wrinkling and caving as mould creeps and the form slumps; the rot accelerates until the subject collapses on itself — fires once, not a loop.
- **페어링**: 매크로 클로즈업(1:1)으로 표면 변색·곰팡이 디테일을 살리고, 카메라는 고정 또는 미세 푸시인. 색감은 처음 생생→끝 칙칙으로 가는 데새추 시프트에 그린-브라운 톤의 그레이드.
- **주의**: 변색이 표면에 평면 텍스처처럼 입혀지기만 하고 형태가 안 변하면 가짜다 — 한 점에서 번지는 변색·곰팡이와 함께 쪼그라들고 주저앉는 형태 변화, 광택을 잃고 그늘로 꺼지는 표면을 함께 묘사하고 처음 신선한 부분은 잠시 더 생생하게 둘 것.

## 변형 · 상태변화 (Morph / Melt / Freeze / Materialize)


### 액체 금속 모핑 / 리퀴드 메탈 (Liquid-Metal Morph)

- **시그널**: 피사체가 수은처럼 흐르는 거울 같은 크롬 액체로 녹아 흘렀다가 다시 형체로 솟아오르는 변형. T-1000 같은 미래적·초현실 변신이나 메탈릭 트랜스폼에 쓴다.
- **앵커**: `flowing liquid-chrome morph` · **무드**: fluid · metallic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The subject's surface turns to flowing mirror-bright liquid chrome, the solid form slumping and rippling into a quivering body of mercury before drawing itself back upward and resolving into shape; the metal reads as polished silver skinned with cool blue and warm specular streaks, every ripple smearing a bent reflection of the surrounding room across its skin. Beads pinch off and merge back seamlessly under heavy surface tension, the moving surface throwing sharp wobbling highlights and casting reflected light onto the floor and nearby walls, the reformed figure standing crisp and dense as a last few droplets settle and still.
  ```
- **영상 추가**: The surface liquefies and flows in smooth weighty waves, beads merging and the form melting down then surging back up to reset its shape in a slow seamless loop, reflections sliding and stretching across the metal as it moves. Loops continuously.
- **페어링**: 중앙 대칭·미디엄 풀샷 구도에 느린 오빗이나 푸시인으로 흐르는 반사면을 보여주고, 차가운 틸·은빛 하이키나 네온 반사가 살아나는 톤과 잘 맞는다. 반사를 위해 주변에 색광원을 두면 좋다.
- **주의**: 크롬이 무광 회색 점토처럼 보이거나(거울 반사·주변 환경의 휘어진 반사가 핵심) 흐름이 물처럼 가볍게 출렁이기 쉽다 — 수은 같은 높은 표면장력·묵직한 점성과 선명한 모션 하이라이트, 주변을 휘어 비추는 거울 반사를 명시하고 피사체 형태가 죽처럼 뭉개지지 않게 할 것.

### 왁스 멜트 / 촛농 슬럼프 (Wax Melt / Slump)

- **시그널**: 피사체가 촛농처럼 물러져 흘러내리며 디테일이 뭉개지고 바닥에 고이는 변형. 더위·시간의 부패·녹아내림 표현에 쓴다.
- **앵커**: `melting and slumping like wax` · **무드**: molten · drooping · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Anchored at the base, the subject softens and slumps like warm wax, fine details rounding away as glossy rivulets of melt sag downward and string into drips from the lowest edges, pooling into a spreading glassy puddle on the floor beneath. The waxy color glows where it thins — warm honey and amber deep in the molten runs cooling to a milky opaque skin on the surface — light passing partway into the soft material with a soft subsurface glow, wet highlights sliding down each drip and a slick reflection widening in the puddle below as the upper form keeps sagging and losing its edges.
  ```
- **영상 추가**: Edges round and droop, then heavy glossy runs ooze downward and string into dripping threads that pool below, the whole mass sagging continuously under its own weight with a slow gravity-driven ease. Continuous slow drip.
- **페어링**: 로우~아이레벨 미디엄 샷에 고정 카메라나 아주 느린 푸시인으로 흘러내림을 보여주고, 따뜻한 텅스텐·촛불 톤이나 부패감을 위한 누런 빈티지 그레이드와 잘 어울린다.
- **주의**: 왁스가 물처럼 주르륵 흐르거나(점성 있는 촛농은 느리고 끈적하게 늘어진다) 표면이 완전 불투명해 사탕처럼 보이기 쉽다 — 반투명 서브서피스 글로우·끈적한 점성·중력 방향으로 늘어지는 드립과 바닥에 고이는 웅덩이를 명시하고, 녹는 부위와 아직 단단한 부위를 구분할 것.

### 급속 결빙 / 아이스 인케이스먼트 (Flash-Freeze Encasement)

- **시그널**: 서리와 얼음이 피사체 표면을 빠르게 기어 덮으며 두껍게 얼려 봉인하는 급속 결빙 효과. 빙결 마법·동결·정지 순간 표현에 쓴다.
- **앵커**: `ice crawling over and encasing the subject` · **무드**: frigid · crystalline · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A bloom of white frost races across the subject's surface and thickens into clear blue-white ice, crystalline spurs and feathered rime crawling outward from a starting point until the form is sealed under a glassy frozen shell; the ice refracts and dims the light to a cold cyan cast, trapping a milky network of fractures and bubbles inside, the silhouette still readable but glazed and stiff beneath the crust as a faint vapor of cold air slides off the frozen surface.
  ```
- **영상 추가**: Frost spreads in a creeping front over a second or two, ice plating up in crystalline waves with branching spikes; the subject's last motion locks mid-pose as the shell completes and a thin mist of cold settles off it. Fires once.
- **페어링**: 미디엄~클로즈업 구도에 고정 카메라나 느린 푸시인이 서리의 전진을 잘 살리고, 시안으로 감광된 차가운 블루 그레이드·약한 림광과 어울린다.
- **주의**: 얼음이 불투명한 흰 페인트처럼 발리거나(반투명 굴절·내부 균열이 있어야 얼음다움) 결빙 속도가 균일해 평면적으로 보이기 쉽다 — 서리를 한 점에서 결정 가지로 번지게 하고, 반투명한 두께감·내부 기포·차가운 색온도와 표면을 흘러내리는 냉기 안개를 명시할 것.

### 석화 / 스톤 턴 (Petrification (Stone Turn))

- **시그널**: 피사체가 한 점(보통 접촉부)에서부터 살결이 회색 돌로 굳어 가며 표면이 거칠어지고 정지하는 변형. 메두사 저주·고대 봉인·생명 상실 표현에 쓴다.
- **앵커**: `flesh turning to grey stone` · **무드**: ancient · stony · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Starting from one point of contact, the subject's living surface hardens into pale grey stone, a creeping boundary advancing across the body as color drains and skin coarsens into dry granite pocked with fine cracks and chiselled facets; warm flesh tones bleach to chalky greys streaked with mineral veining at the transition line, the freshly turned stone catching flat diffuse light with a dusty matte surface while the still-living portion stays soft and glossy. Motion locks rigid the instant each part sets, hairline fractures crazing the oldest stone and a faint trickle of dust sifting from the petrifying edge, the figure left a weighty motionless statue grounded hard to its base.
  ```
- **영상 추가**: The stone boundary sweeps across the subject over a second or two, freezing each limb mid-gesture as it sets; a little dust sheds from the advancing line, then the whole form stills into solid rock as the last patch of flesh greys over. Fires once.
- **페어링**: 미디엄 풀샷·로우앵글 구도가 조각상 같은 무게를 살리고, 느린 푸시인이나 고정 샷, 탈색된 저채도·차가운 스톤 그레이와 잘 맞는다.
- **주의**: 돌이 매끈한 회색 플라스틱처럼 보이거나(거친 화강암 질감·균열·먼지가 있어야 돌다움) 온몸이 동시에 굳어 가짜처럼 보이기 쉽다 — 석화 경계를 한 방향으로 진행시키고, 굳은 돌과 살아있는 살결의 질감·광택 차이, 전이선의 광물 결·떨어지는 먼지를 명시할 것.

### 결정화 성장 / 크리스털 그로스 (Crystallization Growth)

- **시그널**: 피사체 표면에서 투명·유색 결정이 가지치며 솟아 자라 덮는 변형. 마법 결정·보석화·이세계 감염 표현에 쓴다.
- **앵커**: `crystals growing over the surface` · **무드**: crystalline · luminous · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Faceted crystals sprout from a seed point on the subject and grow outward in branching clusters, sharp-edged prisms stacking and angling up until they sheath the form in a jagged geode crust; the crystals range from clear glassy tips to deep saturated amethyst and teal cores, light refracting through them into thin internal rainbows and throwing scattered coloured caustics across the subject and the surface beneath. Each facet catches a hard glint along its edges and glows faintly from within, the growth front bristling with new spurs while the untouched surface stays smooth and matte, the clusters reading as heavy, solid and razor-sharp rather than soft.
  ```
- **영상 추가**: Crystals push up and branch outward from the seed in jerky little spurts, each new prism snapping into place and catching light as the cluster thickens and climbs across the form, slowing as it completes. Fires once.
- **페어링**: 클로즈업~매크로 구도에 느린 푸시인이나 랙포커스로 결정 굴절을 살리고, 차가운 보석 톤이나 컬러풀한 캐스틱이 살아나는 고대비 그레이드와 어울린다.
- **주의**: 결정이 둥글둥글한 사탕이나 균일한 가시밭처럼 보이기 쉽다 — 날카로운 직선 패싯·다양한 크기와 각도의 가지, 내부 굴절 무지개와 주변에 흩뿌려지는 컬러 캐스틱을 명시하고, 한 시드에서 가지치며 자라게 하며 피사체 핵심을 결정으로 덮지 말 것.

### 머터리얼라이즈 / 입자 조립 (Materialize / Particle Assemble)

- **시그널**: 흩어진 빛 입자·파편이 허공에서 모여들어 피사체를 조립해 실체화하는 등장 효과. 텔레포트 도착·홀로그램 실체화·조립 등장에 쓴다.
- **앵커**: `particles assembling into form` · **무드**: luminous · emergent · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Streams of tiny glowing particles rush in from the surrounding air and lock together to build the subject from the ground up, a swirling cloud of motes condensing along the forming surface as the figure resolves out of nothing; the particles read as bright warm-white sparks tinged with the subject's own colour, packing denser and dimming to solid matter as each region sets while loose stragglers still trail and orbit the half-built form. The assembling edge glows hot and casts a soft moving light onto the floor and nearby surfaces, leftover sparks winking out as they settle, the completed subject standing crisp and grounded once the last motes snap into place.
  ```
- **영상 추가**: Particles stream inward and swirl into position, the form filling in from the base upward in a quick accelerating rush, then the last motes click into place and the glow fades to reveal solid matter. Fires once.
- **페어링**: 풀샷~미디엄 구도에 느린 푸시인이나 살짝의 오빗, 어두운 배경에서 입자 글로우가 살아나는 저키·하이콘트라스트 그레이드와 잘 맞는다.
- **주의**: 입자가 균일한 반짝이 죽처럼 화면을 덮거나(밀도·포커스 차이로 조립감을 줘야 함) 형체 없이 뭉개지기 쉽다 — 입자가 한 방향으로 모여들어 표면에 '쌓여 굳는' 조립 프런트를 만들고, 굳은 부분은 선명한 실체로·남은 입자만 흩날리게 하며 글로우의 캐스트 라이트를 명시할 것.

### 텔레포트 리어셈블리 / 순간이동 재조립 (Teleport Reassembly)

- **시그널**: 피사체가 슬라이스·블록·빛 줄기로 흩어졌다가 같은 자리에서 순식간에 재조립되며 나타나는 순간이동 도착 효과. SF 트랜스포터·디지털 재구성 등장에 쓴다.
- **앵커**: `body reassembling from teleport` · **무드**: digital · instantaneous · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The subject snaps into existence as horizontal scan-slices and blocky fragments flicker in and stitch together, the body reconstructing in a fast cascade of glitching shards that jitter into alignment and fuse into solid form; bright cyan-white energy seams flare along every reassembling edge before cooling into the subject's natural colour, thin beams and stray voxels stuttering around the silhouette. The seams cast a brief electric glow and hard rim light onto the figure and the ground, a quick flash and a scatter of dissipating sparks marking the moment of arrival as the last fragments lock and the body settles fully resolved.
  ```
- **영상 추가**: Fragments strobe in and snap together from top to bottom in a fast stuttering cascade, energy seams flaring then fading as the form fuses, a final flash leaving the figure standing solid. Fires once.
- **페어링**: 미디엄~풀샷 고정 구도나 살짝의 푸시인이 '도착'을 또렷하게 하고, 차가운 시안·일렉트릭 블루 톤과 약한 글리치·디지털 그레이드와 어울린다.
- **주의**: 재조립이 사방에서 동시에 일어나 죽처럼 뭉개지거나(한 방향 캐스케이드·슬라이스 단위로 짜여야 함) 글리치만 요란하고 형체가 안 잡히기 쉽다 — 조각이 한 방향으로 정렬·융합되는 순서와 에너지 심의 짧은 발광·림광, 마지막에 완전히 선명해지는 실체를 명시하고 얼굴을 글리치로 가리지 말 것.

### 금속 변성 / 미다스의 손 (Metal Transmutation (Midas))

- **시그널**: 접촉점에서부터 피사체가 반짝이는 황금(또는 금속)으로 굳어 가며 디테일이 금속 광택으로 코팅되는 변형. 미다스의 손길·기적이자 저주 표현에 쓴다.
- **앵커**: `turning to gleaming gold` · **무드**: opulent · metallic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  From the point of contact a wave of gleaming gold races across the subject, the living surface stiffening into polished metal as a bright transmutation line sweeps over every fold and detail, freezing them in lustrous relief; the gold deepens from pale champagne highlights through rich yellow to warm bronze in the shadowed crevices, the newly metal surface throwing hot specular glints and bouncing warm reflected light onto whatever sits nearby. The advancing seam glows molten-bright for an instant before cooling to a hard mirror sheen, fine surface texture preserved but locked and motionless, the still-flesh portion soft and matte ahead of the gilding front as the figure stiffens into a heavy golden idol.
  ```
- **영상 추가**: The gold line sweeps across the subject from the contact point in a smooth advancing front, each area flashing molten then settling to a polished metallic sheen, the motion freezing limb by limb until the whole form is solid gold. Fires once.
- **페어링**: 클로즈업(손·접촉부)이나 미디엄 구도에 느린 푸시인·랙포커스가 변성선을 살리고, 따뜻한 골든·하이키 럭셔리 톤이나 고대비 보석 그레이드와 잘 맞는다.
- **주의**: 금이 납작한 노란 페인트처럼 보이거나(강한 정반사 글린트·명암 그라데이션이 있어야 금속다움) 변성이 전신에 동시에 퍼지기 쉽다 — 접촉점에서 한 방향으로 번지는 변성선과 챔페인→옐로→브론즈의 명암 색층, 뜨거운 스펙큘러와 주변에 반사되는 따뜻한 빛을 명시하고 표면 텍스처를 보존할 것.

### 연기에서 실체로 / 스모크 솔리드 (Smoke-to-Solid Form)

- **시그널**: 소용돌이치던 연기·증기가 응축되어 단단한 형체로 굳어 나타나는 변형. 유령·정령의 강림·연기 소환 등장에 쓴다.
- **앵커**: `smoke condensing into solid form` · **무드**: ethereal · emergent · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A churning cloud of smoke swirls into the shape of the subject and condenses inward, the wispy turbulent vapour thickening and settling into opaque solid matter as the form firms up from a translucent haze; the smoke shades from pale grey tendrils at the dissolving outer wisps to dense saturated colour where it has compacted into surface, edges sharpening as the ghostly silhouette gains weight. Light begins to graze and rim the hardening form, a soft glow passing through the still-vaporous parts while the solidified regions catch a clean highlight and cast a real shadow, the last trailing streamers of smoke sucked in and absorbed as the figure stands fully material and grounded.
  ```
- **영상 추가**: Swirling smoke gathers and draws inward, condensing from the core outward as the silhouette sharpens and gains opacity, stray wisps pulled in until the form stands solid; eases from turbulent drift to a settled stillness. Fires once.
- **페어링**: 미디엄~풀샷 구도에 느린 푸시인이나 살짝의 오빗이 응축을 살리고, 어두운 배경의 무디한 저키 톤·약한 백라이트 림광과 잘 어울린다.
- **주의**: 연기가 끝까지 흐물흐물 반투명이라 실체가 안 잡히거나(응축돼 불투명·단단한 표면으로 굳어야 함) 반대로 처음부터 너무 단단해 연기 단계가 사라지기 쉽다 — 가장자리 연기→중심 실체로의 밀도 그라데이션과 굳은 부분의 그림자·하이라이트, 빨려 들어가는 잔연기를 명시하고 변형 방향(바깥→안)을 분명히 할 것.

### 타임랩스 개화 / 꽃 성장 (Time-Lapse Bloom Growth)

- **시그널**: 봉오리가 줄기를 뻗고 잎을 펼치며 꽃잎이 빠르게 벌어지는 시간압축 개화 성장. 생명·재생·계절의 흐름 표현에 쓴다.
- **앵커**: `flower blooming in fast time-lapse` · **무드**: organic · blossoming · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Anchored at the stem, the subject unfurls in fast-forward as buds swell, stems lengthen and lean toward the light, and petals peel open one layer at a time into full bloom; fresh greens deepen while the petals flush from pale tight cores into saturated colour as they spread, dewy surfaces catching soft directional light with a translucent glow through the thinnest petals. The opening flower casts shifting soft shadows as it grows and turns, edges trembling with tiny growth twitches, the motion reading as living and organic — pushing, settling, reaching — rather than mechanically uniform, the bloom finishing wide and turned toward the light.
  ```
- **영상 추가**: Buds swell and stems rise, then petals peel open layer by layer in smooth accelerated growth, the flower leaning and turning toward the light before settling fully open with organic easing and little growth twitches. Fires once as a time-lapse.
- **페어링**: 매크로~클로즈업 구도에 고정 카메라나 아주 느린 푸시인, 타임랩스 무브가 잘 맞고, 따뜻한 자연광·생기 있는 고채도 보태니컬 그레이드와 어울린다.
- **주의**: 개화가 기계적으로 균일·대칭으로 펼쳐지거나(꽃잎은 층층이 시차를 두고 불규칙하게 벌어진다) 줄기·잎 없이 꽃만 커지기 쉽다 — 봉오리→줄기 신장→잎 전개→꽃잎 개화의 순차와 빛을 향한 굴광성(휘어짐), 꽃잎 사이 시차·반투명 투과광·미세한 떨림을 명시할 것.

### 형태변신 모핑 / 셰이프시프트 (Shapeshift Morph)

- **시그널**: 피사체가 살·뼈·표면을 출렁이며 다른 형상으로 늘어나고 재배열돼 변신하는 변형. 늑대인간·변신술·생체 변형 표현에 쓴다.
- **앵커**: `morphing into another form` · **무드**: visceral · transformative · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The subject's body flows and remodels into a new form, surface bulging and stretching as bone and muscle shift beneath rippling skin, limbs elongating and features sliding into their new arrangement in a continuous organic warp; tones blend from the original colouring into the new creature's hues across the morphing zones, taut skin sheening over the parts under most strain while folds bunch and smooth out as proportions resettle. Light slides over the deforming surface and catches the stretched highlights, soft shadows shifting in the deepening creases, the transformation travelling through the body in a wave rather than all at once until the new shape locks in solid and still.
  ```
- **영상 추가**: The change ripples through the body in a travelling wave — surface bulging, limbs stretching and resettling — easing from the start form into the end form in one continuous morph, then locking still. Fires once.
- **페어링**: 미디엄~풀샷 구도에 고정 카메라나 느린 푸시인이 변신의 흐름을 또렷하게 하고, 무디한 시네마틱 톤·강한 측광으로 표면 변형의 음영을 살리는 그레이드와 잘 맞는다.
- **주의**: 변신이 단순 크로스페이드(디졸브)로 두 형상이 겹쳐 흐릿해지거나(살·뼈가 실제로 출렁이며 재배열되는 입체 변형이어야 함) 온몸이 동시에 뭉개지기 쉽다 — 변형이 몸을 한 방향으로 훑고 지나가는 트래블링 웨이브로 진행되게 하고, 늘어나는 표면의 장력 하이라이트·접히는 주름 음영과 시작 형상→끝 형상의 단계를 명시할 것.

## 입자 · 비산 (Floating Particles, Falling Debris & Swarm)


### 낙엽 흩날림 / 가을 낙엽 (Falling Autumn Leaves)

- **시그널**: 야외 인물·풍경에 가을의 정취와 시간의 흐름, 멜랑콜리를 더하고 싶을 때 쓰는 계절 입자 레이어. 단독으로 은은하게 깔거나 다른 효과 아래 배경으로 깔기 좋다.
- **앵커**: `drifting falling autumn leaves` · **무드**: melancholic · atmospheric · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Dry autumn leaves in amber, rust and faded gold tumble and see-saw down through the frame, the larger ones nearest the lens spinning lazily on their stems while distant flecks drift in soft focus; backlit by a low warm sun, each leaf glows translucent at its edges with its veins showing through, scattering a dappled mottled shadow that skitters across the ground around the subject as a few catch in passing eddies of wind and skim past the lens out of focus.
  ```
- **영상 추가**: Leaves descend in an unhurried see-sawing drift with gentle gusts swirling them sideways, near leaves tumbling past and out of focus while distant ones settle slowly; loops as a continuous seasonal fall.
- **페어링**: 와이드·미디엄 풀샷 구도, 느린 트래킹·핸드헬드 무브, 골든아워 웜·오텀 톤 색감과 잘 맞는다.
- **주의**: 모든 잎이 똑같은 크기·속도로 일정하게 떨어지거나 종이처럼 평평하게 미끄러져 회전·뒤집힘이 없으면 가짜처럼 보인다 — 잎마다 회전축·낙하 속도를 달리하고 근·원경 크기 차이를 두며 일부는 바람에 휩쓸려 옆으로 날리게 할 것.

### 벚꽃잎 흩날림 (Drifting Cherry Blossom Petals)

- **시그널**: 봄·로맨스·서정적 장면에 가볍고 부드러운 분홍 꽃잎을 흩날려 낭만을 더할 때. 인물 클로즈업이나 봄 풍경의 은은한 배경 입자로 쓴다.
- **앵커**: `drifting cherry blossom petals` · **무드**: romantic · delicate · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Soft pale-pink cherry blossom petals flutter and spiral down through the air, single petals and loose clusters tumbling end over end with a blush at the tip fading to near-white at the base; they drift weightlessly on the faintest breeze, slowing and lifting before settling, catching the soft spring light so they read almost translucent with a gentle rim glow, a few landing on the subject's shoulders and hair while others sweep past the lens in creamy out-of-focus smears.
  ```
- **영상 추가**: Petals spiral and flutter down in slow, buoyant arcs, lifting on stray gusts before drifting on; near petals streak softly past the lens while distant ones swirl in loose clouds — loops continuously.
- **페어링**: 미디엄·클로즈업 인물 구도나 로우앵글, 느린 푸시인·랙포커스 무브, 파스텔 봄빛 하이키·핑크 톤 색감과 어울린다.
- **주의**: 꽃잎이 눈처럼 너무 빽빽하게 쏟아지거나 회전 없이 곧게 떨어지면 무게가 잘못 읽힌다 — 밀도를 낮추고 꽃잎마다 펄럭임·나선 궤적을 주며 일부만 피사체에 사뿐히 내려앉게 할 것.

### 색종이 폭발 / 컨페티 (Confetti Burst / Rain)

- **시그널**: 축하·승리·파티·클라이맥스 순간을 화려하게 터뜨릴 때. 폭발해 솟구쳤다 펄럭이며 쏟아지는 컬러풀한 종이 입자로, 한 컷의 주연이 될 수 있다.
- **앵커**: `exploding confetti burst` · **무드**: celebratory · festive · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A cannon of confetti detonates from below and showers down over the subject, thousands of small paper rectangles and metallic foil flakes in candy reds, blues, yellows and greens bursting upward in a fountain before fluttering and tumbling back down; the matte paper flips edge over edge while the foil pieces flash and twinkle as they catch the light, throwing tiny specks of colored bounce-light, the densest cloud arcing over the subject's head and thinning as it rains past the lens out of focus.
  ```
- **영상 추가**: Fires once: a sharp upward burst at the trigger, then a slow fluttering rain back down as pieces see-saw and spin and foil flecks twinkle — settles to the ground rather than looping.
- **페어링**: 풀샷·미디엄 구도, 살짝의 슬로모션·푸시인이나 핸드헬드, 채도 높은 비비드 웜 파티 톤 색감과 잘 맞는다.
- **주의**: 모든 조각이 같은 속도로 우수수 떨어지거나 포일과 무광 종이가 똑같이 빛나면 가짜다 — 위로 솟구쳤다 체공 후 펄럭이며 떨어지는 3단계 궤적, 포일만 반짝이게, 근·원경 크기 차이를 줄 것.

### 먼지 입자 / 더스트 모트 (Floating Dust Motes)

- **시그널**: 고요한 실내, 빛줄기 속 미세한 먼지로 정적·깊이·노스탤지어를 더할 때. 갓레이와 짝지어 공기감을 살리는 아주 약한 미세 입자 레이어다.
- **앵커**: `floating dust motes in light` · **무드**: serene · nostalgic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Countless tiny dust motes hang suspended in the still air, drifting in lazy, near-random paths and only flaring into visibility where a shaft of window light cuts across the room; the lit specks glint silver-white and twinkle as they rotate, vanishing into the shadows between the beams, rising and settling on the faintest thermal currents; near motes drift large and soft-focused past the lens while distant ones sparkle as fine pinpricks, seeding quiet depth and atmosphere around the subject without ever crossing into clutter.
  ```
- **영상 추가**: Motes drift in slow, aimless Brownian wander, twinkling as they pass through the light beam and fading into shadow — a continuous, barely-moving ambient loop.
- **페어링**: 실내 미디엄·클로즈업 구도와 갓레이, 고정 샷이나 아주 느린 푸시인, 따뜻한 빈티지 로우키 색감과 어울린다.
- **주의**: 먼지가 빛줄기 밖에서도 균일하게 보이거나 너무 많아 눈발처럼 깔리면 가짜다 — 갓레이 안에서만 또렷이 반짝이게, 밀도를 아주 낮게, 근·원경 포커스 차이를 둘 것.

### 불티·재 흩날림 / 임버 드리프트 (Drifting Embers & Floating Ash)

- **시그널**: 작은 불티와 잿조각이 화면 깊이 전체에 천천히 떠오르고 흩날리게 해 화재·전장·잔불의 분위기와 공기감을 더할 때 쓰는 대기 입자 레이어.
- **앵커**: `floating glowing embers drifting through the air` · **무드**: smoldering · atmospheric · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Tiny glowing embers and flakes of grey ash drift and swirl through the depth of the frame, the brightest sparks pulsing orange-amber then winking out as they cool while larger flecks tumble slowly on lazy thermal currents; the embers read as soft warm points of light rather than casting real shadow, denser near the ground and thinning above, some catching in the air around the subject and drifting past the lens in and out of focus to seed atmosphere and depth.
  ```
- **영상 추가**: Embers rise and meander unhurriedly with gentle turbulence, a few sparks flaring brighter then fading to dark ash; near particles streak softly past and out of focus while distant ones twinkle, giving a continuous slow-moving living haze.
- **페어링**: 미디엄·풀샷 구도와 로우키 야간 조명, 느린 트래킹·핸드헬드, 웜 앰버 대 쿨 섀도의 틸 앤 오렌지 색감과 잘 맞는다.
- **주의**: 입자가 너무 많아 눈보라처럼 화면을 덮거나 모든 불티가 똑같은 크기·밝기로 균일하게 깔리기 쉽다 — 근·원경 크기와 포커스 차이를 두고 밀도를 낮게, 일부만 밝게 명멸하게 하며 피사체 가독성을 해치지 말 것.

### 눈발 흩날림 / 스노우 플러리 (Snow Flurry Particles)

- **시그널**: 겨울·추위·고요 또는 바람에 흩날리는 가벼운 눈발로 계절감과 공기감을 더할 때. 인물·거리 위에 은은하게 깔거나 다른 효과 아래 배경으로 쓴다.
- **앵커**: `drifting snow flurry particles` · **무드**: wintry · hushed · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Loose snowflakes of mixed sizes drift and swirl down through the frame, the nearest fat flakes tumbling soft and out of focus while finer specks stream in the distance, the whole flurry nudged sideways in slow eddies by a light wind; the flakes read crisp white where the light catches them and cool blue-grey in shadow, twinkling faintly as they spin, a few melting against the subject and catching on shoulders and hair while the air takes on a soft hazy depth.
  ```
- **영상 추가**: Flakes drift down and swirl sideways on gentle gusts, near flakes streaking softly past the lens while distant ones shimmer — a continuous looping flurry.
- **페어링**: 미디엄·풀샷 구도, 느린 트래킹·핸드헬드, 쿨 블루 윈터·틸 톤 색감과 어울린다.
- **주의**: 눈송이가 전부 같은 크기로 균일하게 깔리거나 곧장 수직 낙하만 하면 가짜다 — 근·원경 크기·포커스 차이, 바람에 휩쓸리는 측면 흐름, 일부만 피사체에 닿게 하고 폭설로 화면을 덮어 가독성을 해치지 말 것.

### 잿가루 낙하 / 애시 폴 (Ash Fall / Fallout)

- **시그널**: 화산재·핵겨울·재난 이후의 종말적 분위기를 만들 때. 하늘에서 무게 없이 천천히 내려앉아 표면에 회색 막을 쌓는 잿가루 입자다.
- **앵커**: `grey ash falling from the sky` · **무드**: desolate · apocalyptic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A steady fall of soft grey ash flakes sifts down from a hazy sky, weightless soot and pale cinder settling slowly and evenly with almost no wind, the flakes ranging from fine powder to larger charred curls; they read matte and lightless — desaturated charcoal against the gloom — dusting a pale grey film over the subject's shoulders and the ground beneath, the air thick with a muffling diffuse haze that flattens the light and mutes every color toward ash-grey.
  ```
- **영상 추가**: Ash sifts down in a slow, near-vertical weightless drift with only the faintest sideways wander, flakes gradually accumulating on surfaces — a continuous, oppressive loop.
- **페어링**: 와이드·풀샷 구도, 느린 트래킹·돌리, 채도를 뺀 데새추레이티드 그레이·블리치 바이패스 색감과 잘 맞는다.
- **주의**: 잿가루가 불티처럼 빛나거나 너무 빠르게 눈보라처럼 쏟아지면 잘못 읽힌다 — 느리고 무게 없는 낙하, 무광·무광원 회색, 표면에 쌓이는 막을 명시하고 떠다니는 연기와 또렷이 구분할 것.

### 글리터 / 반짝임 시머 (Glitter / Sparkle Shimmer)

- **시그널**: 뷰티·제품·축제 컷에 화려한 반짝임을 더할 때. 공기 중을 떠다니거나 피사체 표면에 붙어 핀포인트로 명멸하는 미세 글리터 입자다.
- **앵커**: `shimmering floating glitter sparkles` · **무드**: glamorous · dazzling · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A fine cloud of glittering flecks hangs and swirls slowly through the air and clings to the subject's skin and surface, each tiny mirror catching the light as a sharp pinpoint flare that twinkles on and off as it rotates; the sparkles shimmer in gold, silver and iridescent rainbow hues, throwing little stars and soft bokeh glints into the out-of-focus background, the brightest flecks pulsing bright then winking out while a dusting of shimmer rims the subject's edges with a glamorous sheen.
  ```
- **영상 추가**: Glitter drifts and twirls slowly, individual flecks flashing and twinkling at random as they catch the light — a continuous shimmering loop; keep the sparkle pulses gentle, never strobing.
- **페어링**: 뷰티 클로즈업·제품 매크로 구도, 느린 랙포커스·푸시인, 하이키 글램이나 웜 골드 톤 색감과 어울린다.
- **주의**: 글리터가 전부 같은 밝기로 동시에 번쩍이거나 너무 빽빽해 피사체를 덮으면 싸구려처럼 보인다 — 일부만 무작위로 명멸하게, 근·원경 크기·포커스 차이를 두고 피사체 핵심(눈·입술·제품 로고)은 가리지 말 것.

### 꽃가루 / 포자 드리프트 (Pollen / Spore Drift)

- **시그널**: 여름 들판·숲속·몽환적 자연 장면에 햇빛 속을 떠다니는 솜털 같은 꽃가루·포자를 더할 때. 백라이트로 후광을 받아 공기감과 꿈결 같은 깊이를 만든다.
- **앵커**: `floating pollen and spores drifting` · **무드**: dreamy · organic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Downy pollen tufts and tiny spores float and hover through the warm air, drifting almost weightlessly on the gentlest current, some sinking slowly while others lift and turn in place; backlit by a low sun they glow soft white-gold with a fuzzy luminous halo, the nearest puffs blooming into large soft bokeh while distant ones twinkle as bright pinpricks, a dreamy living haze hanging in the light around the subject without ever massing into clutter.
  ```
- **영상 추가**: Pollen drifts and hovers in slow, buoyant, almost-suspended motion, occasionally lifting on a soft updraft before sinking again — a continuous gentle loop.
- **페어링**: 와이드·미디엄 구도와 백라이트, 느린 트래킹·랙포커스, 골든아워 웜·소프트 파스텔 색감과 잘 맞는다.
- **주의**: 입자가 또렷한 점으로만 보이거나 너무 빽빽해 눈처럼 깔리면 가짜다 — 솜털과 백라이트 후광, 소프트 보케, 부유하듯 거의 멈춘 움직임, 근·원경 크기 차이를 줄 것.

### 곤충 떼 / 머머레이션 (Insect Swarm / Murmuration)

- **시그널**: 벌레떼·새떼의 군무로 유기적으로 출렁이는 군집을 보여줄 때. 불안·경이·자연의 생동을 자아내는, 한 컷을 지배할 수 있는 살아있는 입자 덩어리다.
- **앵커**: `swirling swarm of insects` · **무드**: organic · ominous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A vast swarm of tiny dark insects churns and ripples through the air as one fluid body, the cloud expanding, twisting and contracting in rolling density waves while individual specks dart on erratic paths within the larger pulsing shape; silhouetted against the bright sky they read as a shifting smoky mass that thickens to near-black where they bunch and thins to a sparse scatter at the edges, a low restless shimmer of motion blur trailing each darting body as the swarm wheels around the subject.
  ```
- **영상 추가**: The swarm flows and morphs in continuous rolling waves, bunching and dispersing with a hypnotic collective motion, edge specks darting off and folding back in — loops as a living, churning mass.
- **페어링**: 와이드·롱샷 구도와 로우앵글 하늘, 느린 페데스탈 상승이나 고정 샷, 황혼 실루엣 무드 색감과 어울린다.
- **주의**: 떼가 균일한 격자처럼 퍼지거나 개체들이 똑같은 방향으로만 움직이면 죽은 입자처럼 보인다 — 군집의 출렁이는 밀도 변화, 개체별 불규칙 궤적, 가장자리에서 흩어졌다 다시 합쳐지는 흐름을 명시할 것.

### 마법 가루 / 매직 더스트 (Magic Dust Particles)

- **시그널**: 마법·판타지·꿈결 장면에서 스스로 빛나며 손이나 마법봉에서 휘감겨 나오는 마법 입자를 쓸 때. 피사체에 컬러 글로우를 드리워 신비로운 분위기를 더한다.
- **앵커**: `glowing magical dust particles` · **무드**: enchanted · ethereal · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A swirl of self-glowing magical motes lifts and spirals from the subject's open palm and curls through the air around them, each speck a tiny soft point of light pulsing warm gold and cool teal as it drifts and twinkles; the dust trails in lazy luminous ribbons, rising and curling on unseen currents, casting a gentle colored glow and soft rim-light onto the subject's skin and throwing a scatter of dreamy bokeh sparkles into the background, the brightest motes flaring then fading as they wander out of frame.
  ```
- **영상 추가**: Motes spiral up and swirl around the subject in slow luminous ribbons, individual sparks pulsing and twinkling as they trail soft light — a continuous enchanted loop.
- **페어링**: 미디엄·클로즈업 구도, 느린 오빗·푸시인·랙포커스, 판타지 틸 앤 오렌지나 마법 블루 톤 색감과 잘 맞는다.
- **주의**: 마법 입자가 빛을 스스로 내지 않아 평범한 먼지처럼 보이거나 균일하게 깔리면 싸구려다 — 손·원천에서 휘감겨 나오는 나선 궤적, 자체 발광과 피사체에 비치는 컬러 글로우, 일부만 밝게 명멸하게 할 것.

### 깃털 낙하 / 페더 폴 (Feather Fall)

- **시그널**: 순수·천사·평온, 혹은 베개·날개가 터진 부드러운 파괴의 여운을 표현할 때. 좌우로 흔들리며 천천히 내려앉는 가벼운 깃털 입자다.
- **앵커**: `soft feathers falling slowly` · **무드**: serene · ethereal · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Soft white down feathers drift and rock slowly down through the air, the largest plumes nearest the lens swaying side to side in a gentle pendulum fall while smaller wisps of down hang almost suspended; lit from behind they glow translucent and feather-soft with their fronds catching a delicate rim of light, casting faint drifting shadows as a few settle weightlessly onto the subject's hair and shoulders and others sweep softly past the lens out of focus, filling the air with a tender floating calm.
  ```
- **영상 추가**: Feathers rock and see-saw down in slow, buoyant pendulum arcs, lifting on faint air currents before settling — a continuous gentle loop.
- **페어링**: 미디엄·클로즈업 구도와 백라이트, 느린 푸시인·랙포커스, 소프트 하이키 화이트·천상 톤 색감과 어울린다.
- **주의**: 깃털이 돌처럼 곧장 떨어지거나 솜뭉치처럼 뭉쳐 보이면 무게가 잘못 읽힌다 — 깃털마다 좌우로 흔들리는 진자 낙하 궤적, 반투명 백라이트, 근·원경 크기 차이를 주고 일부만 피사체에 사뿐히 내려앉게 할 것.
