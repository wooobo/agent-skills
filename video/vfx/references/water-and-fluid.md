# 물·유체 FX (water-and-fluid)

물·스플래시·물방울·잉크·피·수중 — 유체는 빛으로 정의된다(스페큘러·굴절·투과·코스틱). 접촉점(수면·피부·유리)을 피사체와 묶고, 시트→리거먼트→물방울→안개의 크기 위계를 강제한다.

> 각 항목 구성: **시그널**(언제 쓰는지) / **앵커**(키워드) · **무드** · **강도**(히어로=주연 / 양념=저밀도 보조) · **타이밍**(🔁연속=루프 / ⚡원샷=순간) / **VFX 블록**(영어, 바로 붙여쓰기) / **영상 추가** / **페어링**(어울리는 구도·무브·색감) / **주의**.

> VFX 블록은 **피사체·동작 묘사 뒤, 카메라무브·색감 앞**에 둔다. 한 컷에 히어로 효과는 하나만. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.


## 물 충돌·비산 (Splash & Spray)


### 물 충돌 스플래시 / 임팩트 스플래시 (Object-Impact Splash)

- **시그널**: 물체가 수면을 때리는 순간 위로 솟구치는 왕관형 물기둥과 사방으로 흩어지는 시트·물방울·미세 안개를 원할 때. 충돌의 임팩트를 한 컷에 박는 데 가장 강력하다.
- **앵커**: `high-speed water impact splash` · **무드**: explosive · dynamic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the subject strikes the water surface a violent crown of white spray erupts upward and outward, taut sheets of clear water tearing into ragged ligaments that pinch off into a fanning burst of glittering droplets and fine atomized mist; the splash reads bright translucent blue-white where it catches the key light, with hard specular glints riding every bead, the displaced water folding back into a churning aerated foam collar that rings the impact point and throws crisp moving reflections and refractions across the subject.
  ```
- **영상 추가**: The crown rises and peaks within the first beats, then collapses as secondary droplets arc up and rain back down, concentric surface rings racing outward while the trailing mist hangs and slowly settles; fires once as a single rise-and-collapse.
- **페어링**: 측면 또는 살짝 로우앵글 미디엄샷으로 임팩트 포인트를 프레임 중앙 하단에 두고, 약한 슬로우모션 + 고정 또는 가벼운 푸시인 카메라무브가 잘 맞는다. 색감은 차가운 블루-화이트 하이키나 시네마틱 틸로 비말의 투명감을 살린다.
- **주의**: 물방울이 너무 많고 고르게 깔리면 CG 입자 수프처럼 보임 — 큰 시트·리거먼트와 작은 물방울·안개의 크기 차이를 분명히 둘 것; 슬로우모션 과다로 물이 젤리처럼 뭉치거나 피사체를 통째로 가리지 않게.

### 왕관 스플래시 / 코로넷 (Crown Splash)

- **시그널**: 한 방울이 얕은 수면 막에 떨어져 튀어 오르며 만드는 완벽한 왕관(코로넷) 형태 — 둘레를 따라 균일하게 솟은 가는 물기둥과 끝마다 맺힌 구슬방울을 원할 때. 마크로·하이스피드 감성에 최적.
- **앵커**: `milk-drop coronet crown splash` · **무드**: delicate · symmetric · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Where the falling droplet meets the thin liquid film a flawless circular coronet leaps up around the impact, a ring of evenly spaced slender jets rising in unison from a rebounding wall, each spire tapering to a perfectly pinched bead that hangs at its tip; the crown glows translucent milky white with a cool rim of refracted light running its scalloped edge, opaque in the rising wall yet glassy where the thin sheet stretches, every bead carrying a tight specular catchlight. A shallow ripple bulges outward from the base while a single rebound jet pillars up through the crown's center, the structure refracting the backlight into a bright fringed halo and casting soft caustic crescents onto the surface below.
  ```
- **영상 추가**: The coronet springs up and flares open to its peak in a held high-speed beat, beads quivering at each jet tip, then the wall thins and falls back as a central rebound jet rises and necks off into a detaching droplet; fires once as a single bloom-and-collapse.
- **페어링**: 익스트림 클로즈업/마크로, 중앙 대칭 구도로 코로넷을 정면 또는 살짝 로우앵글에서; 백라이트로 투과를 살리고 고속 촬영 슬로우모션에 카메라는 고정. 색감은 깨끗한 하이키 화이트나 살짝 차가운 톤.
- **주의**: 왕관 기둥 개수·간격이 들쭉날쭉하거나 비대칭이면 가짜 티 — 둘레를 따라 균일 간격·균일 높이로 솟게; 끝의 구슬방울이 없거나 점도가 물처럼 너무 묽어 코로넷이 무너지면 안 됨(우유 같은 약한 점성·불투명감 유지).

### 캐논볼 플런지 스플래시 (Cannonball Plunge Splash)

- **시그널**: 사람이 캐논볼/다이브로 수면에 떨어질 때 터지는 대형 물폭발 — 넓게 솟구치는 물기둥과 둔탁하게 퍼지는 흰 물보라, 크게 출렁이는 수면을 원할 때. 임팩트보다 무게·부피감이 핵심.
- **앵커**: `cannonball plunge pool splash` · **무드**: boisterous · heavy · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the subject cannonballs into the pool a massive dome of water blasts upward and outward around the entry point, a thick column of aerated whitewater punching skyward then peeling into broad heavy sheets that shred into chunky droplets and a billowing veil of mist; the eruption is opaque churning white at its frothy core, thinning to translucent green-blue where the pool water lifts and the light shines through its curling lips. The displaced water heaves into a deep crater that surges back as a fat rebound jet and rolling foam waves, throwing slapping wavelets and dancing reflections across the deck and the subject's body while caustics flicker and scatter under the disturbed surface.
  ```
- **영상 추가**: The column erupts and bellies out to its peak with weighty momentum, then the heavy sheets slump and the crater collapses inward into a surging rebound jet and spreading foam rings that slosh back and forth; fires once with a big rise-and-collapse arc.
- **페어링**: 풀사이드 미디엄 와이드, 살짝 로우앵글로 물기둥의 높이를 강조; 약한 슬로우모션 + 고정 또는 가벼운 핸드헬드. 여름 햇살의 골든/하이키 색감이 잘 맞는다.
- **주의**: 물보라가 임팩트성 스플래시처럼 가늘고 날카로우면 무게감이 사라짐 — 두껍고 둔탁한 시트와 거품 위주로, 가벼운 안개보다 덩어리진 흰 물거품을 강조; 수면 크레이터와 리바운드 제트 없이 표면이 변위 안 되면 가짜.

### 파도 부서짐 / 브레이킹 웨이브 (Breaking Wave Crash)

- **시그널**: 파도가 말려 부서지며 입술(립)이 앞으로 던져지고 흰 물보라로 폭발하는 순간을 원할 때 — 배럴이 무너지며 쏟아지는 화이트워터와 바람에 흩날리는 스프레이. 바다 스케일·파워가 핵심.
- **앵커**: `ocean wave breaking and crashing` · **무드**: powerful · thunderous · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The cresting wave curls into a hollow barrel and pitches its lip forward, the throwing tongue of water exploding against the surface into a roaring wall of whitewater that surges up the face and blows back off the crest as a streaming veil of wind-torn spray and mist; the wave glows translucent jade-green and backlit teal through its thinning lip, capped by churning opaque white foam that marbles into the dark trough. Spray feathers off the top in long horizontal streaks as the collapsing mass drives a frothing surge of foam and aerated water rushing toward the subject, sunlight refracting through the curling crest and scattering bright caustics and glistening highlights across the wet, streaming surface.
  ```
- **영상 추가**: The lip pitches over and the barrel collapses in a surging downward avalanche of whitewater, spray blowing back off the crest before the broken foam rushes forward and drains back in a hissing backwash; fires once as a single crash.
- **페어링**: 와이드/익스트림 와이드, 로우앵글로 파도를 올려다보며 스케일을 강조; 망원 압축의 고정 롱렌즈나 가벼운 트래킹. 시원한 시네마틱 틸-블루나 골든아워 백라이트 색감이 잘 맞는다.
- **주의**: 파도 립이 균일한 곡선으로 매끈하게 말리기만 하고 부서질 때 화이트워터의 무게·점도가 없으면 CG 티 — 두꺼운 거품 덩어리와 바람에 찢긴 가는 스프레이의 크기 위계를 분명히; 물이 젤리처럼 한 덩어리로 출렁이거나 백워시(되돌이 물) 없이 끝나면 안 됨.

### 간헐천 분출 / 가이저 (Geyser Burst)

- **시그널**: 땅·수면·파이프에서 수직으로 솟구치는 물기둥을 원할 때 — 좁고 높게 치솟았다가 정점에서 흩어지며 비산하는 간헐천형 분출. 수직 폭발의 높이감이 핵심.
- **앵커**: `vertical geyser water eruption` · **무드**: eruptive · forceful · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  From the vent the subject erupts a tall vertical column of water that rockets straight up, the cohesive jet at its base fraying as it climbs into ragged plumes that bloom and feather apart at the apex into a fanning canopy of droplets and a towering veil of fine mist and steam; the core runs glassy and translucent blue-white where the light pierces the jet, going opaque churning white in the broken spray and hazy grey in the drifting vapor. The plume sways and pulses as it reaches its peak then rains back down in heavy curtains around the vent, water sheeting off and pooling outward, the backlight refracting through the rising column and scattering caustic glints and a soft prismatic shimmer across the wet ground and the subject.
  ```
- **영상 추가**: The column surges upward and punches to its full height, the apex blooming and fraying into mist, then sags and rains back down in falling curtains as the jet pulses; fires once as an eruption.
- **페어링**: 세로 프레임(9:16)·로우앵글로 물기둥의 높이를 강조하는 와이드; 고정 카메라 + 약한 슬로우모션. 백라이트로 미스트 투과를 살리고 차갑거나 골든아워 톤이 좋다.
- **주의**: 물기둥이 위로만 곧게 뻗고 정점에서 흩어지지 않거나, 솟음→정점→낙하의 호 없이 얼어붙으면 가짜 — 정점에서 플룸이 펴지고 무거운 커튼으로 되떨어지는 중력 흐름이 필수; 분출 줄기·broken spray·드리프트 미스트의 크기 위계를 구분.

### 급류 물보라 / 화이트워터 스프레이 (Whitewater Rapids Spray)

- **시그널**: 급류가 바위에 부딪혀 끊임없이 솟구치는 화이트워터와 흩날리는 물안개를 원할 때 — 출렁이는 거품과 공중에 머무는 미세 스프레이. 강 시퀀스의 분위기·에너지 시즈닝으로 좋다.
- **앵커**: `churning whitewater rapids spray` · **무드**: turbulent · energetic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Over the rocks the rushing current piles into churning whitewater, the river folding and rebounding into surging humps and standing waves that throw up constant bursts of spray and a drifting haze of fine mist hanging above the rapids; the water is aerated opaque white in the frothing chutes and seams, thinning to translucent green-glass where it stretches over submerged boulders, the foam streaked into marbled ribbons that race downstream. Crests catch hard specular highlights and the airborne mist softens into a luminous veil that diffuses the light, sunlit droplets glittering as they leap and fall back while reflections and caustics shatter across the broken, restless surface around the subject.
  ```
- **영상 추가**: The rapids churn and surge continuously, foam ribbons streaking downstream while bursts of spray leap off the standing waves and the mist drifts and reknits overhead; loops as ceaseless turbulent flow.
- **페어링**: 미디엄 와이드, 강 흐름을 따라가는 트래킹/팔로우나 가벼운 핸드헬드; 약한 슬로우모션은 거품 디테일을, 빠른 셔터는 물방울을 살린다. 차가운 블루-그린이나 자연광 톤이 어울린다.
- **주의**: 거품이 한 덩어리로 균일하게 깔리고 화이트워터의 흐름 방향·줄무늬(streak)가 없으면 가짜 — 하류로 흐르는 마블 리본과 솟구치는 스프레이를 구분; 물안개가 너무 두꺼워 급류 디테일을 덮지 않게 은은하게 유지.

### 보트 항적 물보라 / 웨이크 스프레이 (Boat Wake Spray)

- **시그널**: 달리는 보트의 선수·선체가 물을 가르며 던지는 스프레이를 원할 때 — V자로 갈라지는 선수파와 옆으로 부채처럼 흩날리는 물보라. 속도감을 더하는 액센트로 좋다.
- **앵커**: `boat bow wake spray fan` · **무드**: brisk · kinetic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  As the subject's hull knifes through the water it peels back a glassy V-shaped bow wave that curls and shatters into a continuous fanning sheet of spray flung outward along the waterline, taut clear tongues of water tearing into streaming droplets and a low wind-blown veil of mist trailing off the crest; the wake runs translucent blue-green in its smooth peeling face, capping into aerated white foam where it breaks and churning into a turbulent frothing trail astern. The spray fans glitter with hard specular sparkle in the sun, the disturbed water throwing skittering reflections and refracted light up onto the hull and the subject as the foam wake widens and dissolves behind.
  ```
- **영상 추가**: The bow wave peels and the spray fans stream outward in a steady continuous sheet, the foam wake unfurling and widening astern while wind blows a fine mist off the crest; loops as sustained motion-driven spray.
- **페어링**: 트래킹/팔로우 또는 측면 패닝으로 보트 속도를 따라가는 미디엄 와이드; 약한 슬로우모션과 망원 압축이 스프레이 부채를 살린다. 시원한 블루나 골든아워 색감.
- **주의**: 스프레이가 보트 속도·진행 방향과 무관하게 사방으로 흩어지거나 선수파 없이 물보라만 떠 있으면 가짜 — 선체에서 바깥·뒤로 흐르는 부채형 시트와 V자 항적(wake)을 진행 방향에 묶을 것; 물방울이 균일 크기로 깔리지 않게 위계를 둘 것.

### 루스터 테일 / 수탉꼬리 물줄기 (Rooster-Tail Spray)

- **시그널**: 수상스키·제트스키·하이드로플레인 뒤로 높이 치솟는 수탉 꼬리 모양의 물줄기를 원할 때 — 좁고 길게 호를 그리며 뿜어 올라가는 시그니처 플룸. 극적인 속도·스펙터클이 핵심.
- **앵커**: `rooster-tail water plume arc` · **무드**: dramatic · speedy · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Behind the subject a towering rooster-tail of water arcs up and back in a single sweeping plume, the propeller or ski flinging a tight cohesive jet that climbs and feathers apart into a long fanning arc of droplets and a trailing banner of fine mist drifting on the slipstream; the column is translucent blue-white and glassy at its dense rising base, breaking into aerated sparkling white along its frayed crest and hazy grey in the wind-blown tail. The plume catches the low sun in a blaze of specular sparkle and a faint prismatic shimmer, hard glints riding the leading droplets while the arc casts skittering reflections and a moving shadow across the churned wake below and the subject ahead of it.
  ```
- **영상 추가**: The rooster-tail jets up and sweeps back in a continuous high arc, its crest feathering into droplets that trail off as drifting mist while the plume holds its shape with the subject's speed; loops as sustained spray.
- **페어링**: 측면 트래킹/팔로우로 플룸 전체 호를 담는 와이드, 살짝 로우앵글이 높이를 강조; 망원 압축 + 약한 슬로우모션, 골든아워 백라이트가 비말 스파클을 살린다.
- **주의**: 플룸이 진행 방향 뒤로 호를 그리지 않고 수직으로만 솟거나, 좁은 수탉꼬리 형태를 잃고 넓게 퍼지면 시그니처가 사라짐 — 좁고 길게 위·뒤로 휘는 단일 아크 유지; 베이스(조밀)→크레스트(스파클)→테일(미스트)의 위계를 분명히.

### 웅덩이 밟기 스플래시 (Puddle Stomp Splash)

- **시그널**: 발이 얕은 물웅덩이를 밟는 순간 사방으로 낮게 퍼지는 방사형 물보라를 원할 때 — 발 둘레로 솟는 얇은 물 커튼과 튀어 오르는 물방울, 번지는 파문. 경쾌하고 순간적인 임팩트에 좋다.
- **앵커**: `foot stomping puddle splash` · **무드**: playful · snappy · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the subject's foot stomps down into the shallow puddle a radial crown of water bursts outward low and wide around the heel, thin clear sheets fanning up and tearing into a scatter of arcing droplets and a quick puff of fine spray, the displaced water shoved aside in a spreading skirt; the splash is translucent grey-blue and glassy where it sheets up, sparkling with bright specular beads, while the thin film over the wet pavement mirrors the sky and the subject. Expanding ripples and a dark wet halo race outward across the puddle, the airborne droplets casting tiny moving reflections and the low splash flinging glints and refracted light up around the foot before it all rains back onto the glistening ground.
  ```
- **영상 추가**: The crown bursts outward and low on foot contact, droplets arcing up and raining straight back down while ripples race out across the puddle and the spray settles; fires once per stomp.
- **페어링**: 로우앵글/지면 레벨 미디엄 클로즈업으로 발 둘레 물보라를 강조; 약한 슬로우모션 + 고정 또는 가벼운 핸드헬드. 비 오는 날 차가운 톤이나 가로등 골든 반사 색감.
- **주의**: 물보라가 위로만 높이 솟으면 어색 — 얕은 웅덩이는 바깥으로 낮고 넓게 퍼지는 방사형이 핵심; 젖은 바닥 반사·번지는 파문·어두운 물자국 없이 물방울만 떠 있으면 가짜, 물방울 크기를 불규칙하게 섞을 것.

### 시트 스플래시 / 물의 벽 (Sheet Splash (Wall of Water))

- **시그널**: 옆으로 던져지는 넓고 평평한 물의 벽/시트를 원할 때 — 차가 침수 도로를 지나거나 무언가 수면을 쓸어칠 때 한 장으로 솟아 호를 그리며 펼쳐지는 커튼형 물보라. 스케일과 휩쓰는 동작이 핵심.
- **앵커**: `broad sheet wall of water` · **무드**: sweeping · forceful · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the subject sweeps through the standing water a broad continuous sheet of water peels up and arcs sideways like a translucent curtain, the flat fanning wall holding together as a glassy membrane before its leading edge frays into ragged ligaments trailing droplets and a blown-back haze of mist along the top; the sheet glows translucent blue-green and reads thinnest and brightest where the light passes through its stretched center, capping into torn white foam along its breaking crest and base. The arcing wall bends and thins as it travels, refracting and warping the scene and the subject seen through it, throwing a sweeping band of caustic light and a moving wet sheen across the ground as the curtain peaks, breaks apart and crashes back down in a spreading slap of foam.
  ```
- **영상 추가**: The sheet peels up and sweeps sideways in a single arcing curtain, stretching and thinning to its peak before the leading edge tears apart and the wall folds and crashes back down; fires once as one sweeping throw.
- **페어링**: 측면 트래킹/패닝 와이드로 물 시트의 호 전체를 담되 피사체는 시트 너머로 비치게; 약한 슬로우모션 + 망원 압축. 차가운 시네마틱 톤이나 야간 가로등 반사 색감.
- **주의**: 물 벽이 피사체를 통째로 가리거나 불투명한 한 덩어리면 안 됨(오클루전 안티패턴) — 빛이 통과하는 투명한 멤브레인으로, 가운데가 가장 얇고 밝게; 시트가 평평한 판처럼 균일하면 가짜, 가장자리가 리거먼트로 찢어지고 무게로 되떨어지게.

### 고압 소방호스 분사 (Pressurized Fire-Hose Blast)

- **시그널**: 소방호스·고압 노즐에서 뿜어 나오는 강력한 물줄기를 원할 때 — 조밀한 제트가 공기 저항에 풀려 스프레이로 흩어지고, 표면에 부딪혀 폭발하듯 비산하는 고압 분사. 힘·압력감이 핵심.
- **앵커**: `high-pressure fire-hose water jet` · **무드**: forceful · relentless · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  From the nozzle the subject blasts a thick high-pressure jet of water that shoots out in a near-straight rope, the cohesive cylindrical stream holding tight at the muzzle then fraying along its length into a widening cone of fast droplets and a trailing banner of atomized mist torn off by the air; the jet runs translucent blue-white and glassy in its solid core, breaking into aerated sparkling white spray and hazy drifting fog toward its end. Where it slams into a surface the stream explodes into a violent radial burst of spray and rebounding sheets that sheet off and rain down, the whole jet flickering with hard specular highlights and flinging skittering reflections, refracted light and a fine prismatic mist across the subject and the soaked surroundings.
  ```
- **영상 추가**: The jet fires out in a sustained forceful rope, fraying into spray along its length and exploding into a radial burst where it hits a surface, the nozzle kicking with pressure; loops as a continuous blast.
- **페어링**: 미디엄 와이드/측면으로 제트의 길이와 임팩트를 함께 담고 트래킹이나 고정; 약한 슬로우모션이 분사 콘을, 백라이트가 미스트를 살린다. 차가운 톤이나 야간 비상등 색감.
- **주의**: 물줄기가 끝까지 균일한 굵기로 곧게만 뻗고 풀리지 않으면 봉(rod)처럼 보여 가짜 — 노즐의 조밀한 코어→길이 따라 풀리는 콘→끝의 안개로 점진적 분산; 표면 충돌 시 방사형 폭발·리바운드 시트 없이 그냥 사라지면 안 됨, 중력에 의한 줄기 처짐도 약하게.

### 조수 surge 범람 / 해일성 밀물 (Tidal Surge Flood)

- **시그널**: 밀려드는 조수·해일성 surge가 지면을 덮으며 전진하는 거대한 물의 전선을 원할 때 — 거품을 앞세우고 빠르게 차오르며 휩쓸고 들어오는 범람. 압도적 규모와 위협감이 핵심.
- **앵커**: `surging tidal flood front` · **무드**: overwhelming · ominous · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A surging front of water rushes in across the ground toward the subject, its leading edge a churning brown-white wall of foam and aerated turbulence that bulges, folds and tumbles forward as the flood piles up behind it and the water level climbs; the surge runs opaque silty and foam-capped at the advancing lip, translucent murky green-brown in the deeper body where light filters through the suspended load, swirling with debris and curling eddies. The front races forward and slaps up against obstacles in bursts of spray, the rising water swallowing the ground and throwing broad rolling reflections and a restless wet sheen across the scene, refracted light wobbling through the turbid surface as the flood surges past and keeps climbing around the subject.
  ```
- **영상 추가**: The foaming front rushes forward and swallows the ground, bulging and tumbling as it climbs, bursting into spray against obstacles while the water keeps rising and surging past; fires once as an advancing surge.
- **페어링**: 하이앵글/와이드로 전진하는 물 전선의 규모를 담거나 로우앵글로 위협감을 강조; 트래킹이나 고정 + 약한 슬로우모션. 탁한 그린-브라운의 어둡고 불길한 톤이 잘 맞는다.
- **주의**: 탁한 surge가 맑고 푸른 물처럼 투명하거나 거품 전선(leading foam lip) 없이 매끈하게 차오르면 가짜 — 앞쪽은 흙탕·거품으로 불투명, 깊은 몸통만 탁한 투과; 부유물·소용돌이와 전진하는 무게감, 장애물에 부딪히는 비산을 유지하되 단일 유체 이벤트로(스플래시 남발 금지).

## 수면·물방울 (Surface & Droplets)


### 동심원 잔물결 / 수면 파문 (Concentric Ripples)

- **시그널**: 잔잔한 수면 한 점에 물방울이 닿아 균일하게 퍼져나가는 동심원 파문. 명상적이고 정적인 수면 클로즈업이나 미니멀한 장면에 어울린다.
- **앵커**: `concentric expanding ripples on still water` · **무드**: calm · meditative · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Rings of ripples spread outward in smooth concentric circles from the point of contact, the still surface dimpling and rebounding so each crest carries a thin bright highlight while the troughs hold a darker mirrored tone, neighboring rings crossing into a soft interference lattice; the disturbance decays in amplitude as it travels and the glassy water slowly knits back to stillness, bending the reflected sky, light and the subject's reflection into gently flexing concentric bands.
  ```
- **영상 추가**: the rings emanate and widen at a steady, even pace, each new crest born at the center and racing outward as its amplitude fades toward the edges, the surface settling back to glass between disturbances; a calm continuous loop.
- **페어링**: 탑다운/버즈아이뷰나 수면 가까이의 로우앵글 구도, 느린 푸시인이나 정적인 락오프 무브, 차분한 톤의 색감과 잘 어울린다.
- **주의**: 파문이 동심원을 못 지키고 사방으로 일그러지거나 링마다 속도가 제각각이면 가짜 티 — 한 점에서 균일하게, 멀어질수록 약해지게; 반사가 너무 칼같이 선명하면 유리판처럼 보이니 살짝 부드럽게.

### 빗방울 파문 / 수면 빗무늬 (Raindrop Ripples on Water)

- **시그널**: 잔잔한 수면에 빗방울이 끊임없이 떨어지며 무수한 동심원이 겹치고 간섭하는 효과. 비 오는 호수·웅덩이·창밖 수면 같은 분위기 컷에.
- **앵커**: `stippling raindrop rings on water` · **무드**: rhythmic · moody · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Countless raindrops pepper the water's surface, each impact punching a tiny dimpled crater that rebounds into a small vertical jet and throws out its own ring of concentric ripples, the thousands of overlapping ring sets crossing into a restless shimmering interference of crests and troughs; bright highlights skitter along every wavelet edge while the troughs stay darker and mirrored, and scattered impacts trap small air bubbles that bead and drift on the disturbed skin. The drumming surface fractures the reflected light and the subject's reflection into a continuously broken, trembling mosaic.
  ```
- **영상 추가**: fresh impact points keep stippling the surface at a rapid, irregular cadence, each spawning a quick rebound jet and an expanding ring that fades as the next drops land, the overlapping interference shimmering in a continuous loop.
- **페어링**: 탑다운 웅덩이 클로즈업이나 비 오는 거리 와이드 구도, 핸드헬드나 슬로우 트래킹 무브, 무드 있는 저채도 색감과 잘 맞는다.
- **주의**: 각 임팩트마다 동심원이 유지돼야 하고 빗방울 밀도는 불규칙해야 함 — 일정 간격 격자처럼 떨어지면 가짜 티; 작은 반동 제트와 가끔 갇히는 기포를 섞을 것. 모든 링이 같은 크기로 화면 가득 깔리면 입자 수프.

### 피부 위 물방울 맺힘 (Droplet Beading on Skin)

- **시그널**: 샤워·땀·물기 등이 피부 위에 표면장력으로 동그랗게 맺힌 물방울. 클로즈업 뷰티·스포츠·관능 샷의 핵심 디테일로.
- **앵커**: `water droplets beading on skin` · **무드**: sensual · fresh · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Beads of clear water cling to the subject's skin in a scatter of varied sizes, each domed up by surface tension into a glassy hemisphere that catches a hard pinpoint specular highlight and holds a tiny inverted refraction of the surroundings, magnifying the pores and fine texture directly beneath it; smaller droplets bridge into faint chains while the heaviest beads swell, lose their grip and slide, leaving glistening wet trails down the contour. The skin reads dewy and luminous where the beads transmit and bend the key light, each one throwing a soft tiny shadow and a bright caustic dot onto the skin below.
  ```
- **영상 추가**: the beads hold and quiver with faint surface tension, the largest ones occasionally swelling past their limit and sliding down the skin in a slow glassy streak before settling, a single dominant trickle at a time.
- **페어링**: 익스트림 클로즈업·매크로 구도와 얕은 심도 보케, 미세한 랙포커스나 슬로우 푸시인 무브, 살결을 살리는 따뜻한 색감과 잘 어울린다.
- **주의**: 물방울이 다 같은 크기로 고르게 깔리면 CG 티 — 크고 작은 비드와 사슬처럼 이어진 미세 방울의 크기 위계를 둘 것; 캐치라이트·굴절·아래로 비치는 코스틱 점이 없으면 회색 사마귀처럼 보임. 점도는 물처럼 묽고 표면장력으로 동그랗게.

### 유리 응결 / 차가운 잔의 땀 (Condensation Sweat on Glass)

- **시그널**: 차가운 유리·병 표면에 맺히는 응결 — 뿌연 안개막에서 굵은 비드로, 다시 흘러내리는 물줄기로. 시원함을 강조하는 음료·제품 컷에.
- **앵커**: `condensation sweating on cold glass` · **무드**: cold · refreshing · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A fine veil of condensation sweats across the cold glass, fogging it with a soft frosted bloom of microscopic droplets that scatter the light into a diffuse glow, while larger beads gather and clear up in scattered patches; here and there a heavy droplet overruns its weight and carves a clean transparent rivulet straight down, leaving a sharp glistening track through the misted surface. Each bead glints with a tiny specular highlight and refracts a pinched, inverted sliver of the scene behind the glass, the runnels reading bright and wet against the matte fogged film, with soft shadows pooling where the moisture thickens.
  ```
- **영상 추가**: the fog creeps and thickens across the glass while isolated heavy beads swell and suddenly race downward in clean rivulets that fork and gather others, one runnel at a time, the misted field slowly clearing in their wake.
- **페어링**: 제품 클로즈업이나 미디엄 구도, 얕은 심도와 슬로우 푸시인·랙포커스 무브, 시원한 톤(채도·색온도는 color-grade)과 잘 맞는다.
- **주의**: 응결은 안개 같은 미세 막 → 굵은 비드 → 흘러내리는 물줄기의 크기 위계가 핵심 — 처음부터 굵은 물방울만 박히면 가짜; 줄기는 중력 따라 곧게 아래로, 옆이나 위로 새면 물리 깨짐. 유리 너머 장면이 비드마다 뒤집혀 굴절돼야 입체감이 산다.

### 물방울 맺힘·낙하 / 핀치오프 (Dripping Droplet Pinch-Off)

- **시그널**: 표면 끝에 매달린 물방울이 부풀다 목이 가늘어지며 끊겨 떨어지는 결정적 순간. 매크로 물방울 한 컷, 떨어지기 직전의 긴장감을 노릴 때.
- **앵커**: `droplet swelling and pinching off` · **무드**: delicate · suspenseful · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Hanging from the lowest point, a single droplet gathers and swells, bulging into a tensioned teardrop that stretches downward, necks into a thin glassy thread and pinches off, snapping free as a near-perfect falling sphere while the thread recoils upward and a tiny satellite bead breaks away behind it; the pendant drop and the falling sphere stay crystal clear, each holding a bright specular highlight and a full inverted refraction of the scene that warps as it elongates. As it lets go the surface above rebounds and quivers, the drop trailing a faint glint as it falls and casting a small moving caustic spot onto whatever lies beneath.
  ```
- **영상 추가**: the drop swells and stretches in slow motion, the neck thinning until it pinches and the sphere drops away with a tiny satellite trailing behind, the pendant recoiling upward — a single deliberate fire, not a loop.
- **페어링**: 익스트림 매크로 구도와 강한 얕은 심도, 고정 락오프나 미세 푸시인으로 방울에 집중, 어두운 배경 대비 색감과 잘 맞는다. 불릿타임·슬로우모션 무브와 궁합.
- **주의**: 끊어지는 순간의 넥킹(목이 가늘어짐)과 위성 방울이 빠지면 가짜 — 표면장력 물리를 살릴 것; 방울이 떨어진 뒤 매달린 면이 위로 반동해야 하고, 떨어지는 방울은 완전한 구체로 굴절상을 담아야 함. 점도가 꿀처럼 늘어지면 물이 아님.

### 거울 같은 정수면 반사 (Mirror-Still Reflection)

- **시그널**: 바람 한 점 없는 정수면이 피사체와 하늘을 거의 완벽한 거울처럼 반사하는 효과. 대칭·고요·미니멀을 노리는 풍경·인물 와이드 컷에.
- **앵커**: `mirror-still water reflection` · **무드**: serene · tranquil · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The water lies in perfect mirror stillness, its glassy surface returning an almost flawless inverted reflection of the subject and sky, the doubled image meeting at a crisp horizon seam so symmetrical it reads like folded glass; the reflection sits a touch darker and deeper in tone than the real scene, with the faintest soft falloff toward the edges. Only the slightest breath of motion troubles it — a single slow drifting ripple or a thread of mist — bending a sliver of the mirrored highlights into a gentle waver before the surface settles back to flawless symmetry, the subject's reflection anchored directly beneath it.
  ```
- **영상 추가**: the surface holds near-perfectly still, a single slow ripple or breath of wind occasionally crossing to flex the reflection before it knits back to a flawless mirror — a slow continuous calm, barely moving.
- **페어링**: 대칭 구도·중앙 정렬과 와이드 샷, 느린 푸시인이나 정적 락오프 무브, 잔잔한 톤의 색감과 잘 어울린다.
- **주의**: 반사가 실물과 똑같이 밝거나 칼같이 선명하면 유리판처럼 가짜 — 반사상은 살짝 어둡고 미세하게 부드럽게, 수평선 접합부만 또렷하게; 거울 같은 정적이라도 완전 정지면 죽은 그림, 아주 약한 일렁임 하나만 허용. 좌우/상하 반전이 어긋나면 물리 깨짐.

### 잔에 붓는 물줄기 (Pouring Stream into Glass)

- **시그널**: 유리잔에 또르르 떨어지는 응집된 물줄기와 입수 지점에 솟는 거품·크라운, 차오르는 수면. 음료·제품·테이블탑 컷에서 시원함을 연출할 때.
- **앵커**: `water stream pouring into a glass` · **무드**: refreshing · crisp · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A smooth cohesive stream of water pours down into the glass, the falling column glassy and rope-like with a faint surface ripple, plunging in to punch a churning white pool of aerated bubbles and a small rebounding crown at the point of entry; the rising level glints with a bright meniscus climbing the inside wall, clear water layering over a cloud of fine entrained bubbles that race up and clear. The stream and glass refract and magnify the scene behind them, throwing a bright wandering caustic pool onto the surface beneath the glass while specular highlights ride the lip of the pour and every rising bubble.
  ```
- **영상 추가**: the stream pours in a steady continuous fall, the level climbing as the plunge-pool churns and the entrained bubbles spiral up and clear, the pour easing off and the surface settling level — a sustained action that can taper to a stop.
- **페어링**: 제품/테이블탑 클로즈업 구도와 얕은 심도, 고정 락오프나 미세 푸시인 무브, 깨끗한 톤의 색감과 잘 맞는다. 슬로우모션 무브와 궁합.
- **주의**: 떨어지는 물줄기는 끊기지 않는 응집된 로프형이어야 하고 입수 지점엔 반드시 흰 거품 풀과 작은 크라운이 생겨야 함 — 수면 변위 없이 그냥 채워지면 물리 깨짐; 점도가 꿀처럼 느리거나 줄기가 산산이 흩어지면 가짜. 유리·물의 굴절과 아래 코스틱을 살릴 것.

### 물줄기 흘러내림 / 리뷸렛 (Trickle Rivulet Run-Off)

- **시그널**: 피사체 표면을 따라 갈라지고 합쳐지며 흘러내리는 가는 물줄기. 비에 젖은 조각상·차체·피부 등 젖은 디테일을 살릴 때.
- **앵커**: `trickling rivulets running down a surface` · **무드**: intimate · wet · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thin trickle of water snakes down the subject's surface in branching rivulets, each runnel a narrow glistening thread that wanders, forks and rejoins as it follows the contours, swelling where it pools and thinning where it races; the water film reads clear and bright with a sharp specular highlight tracing the crest of every rivulet, the leading bead of each runnel bulging fat before it surges on and leaves a wet darkened trail behind it. The thin sheet transmits and bends the light over the surface beneath, catching tiny caustic glints and beading off the lowest edge into hanging drops.
  ```
- **영상 추가**: the rivulets crawl downward at an uneven pace, each leading bead swelling then surging ahead to fork and rejoin, new threads breaking from the source and the lowest edge shedding hanging drops — a continuous trickling run.
- **페어링**: 클로즈업·디테일 구도와 얕은 심도, 느린 틸트다운이나 랙포커스 무브, 차분한 색감과 잘 어울린다.
- **주의**: 물줄기가 곧은 직선으로 균일하게 흐르면 가짜 — 표면 굴곡 따라 갈라지고 합쳐지며 선두 방울이 굵게 맺혔다 흘러야 진짜; 점도는 물처럼 묽게, 자국 폭이 일정하면 페인트 흘림처럼 보임. 맨 아래 가장자리에서 방울로 떨어지는 디테일을 넣을 것.

### 미세 분무 안개 / 워터 미스트 (Atomized Mist Spray)

- **시그널**: 피사체에서 뿜어져 흩어지는 극미세 물방울 — 개별 방울이 안 보일 만큼 곱게 부서진 발광 헤이즈. 역광 시즈닝, 파도 물보라·스프링클러 분위기에.
- **앵커**: `fine atomized water mist` · **무드**: ethereal · soft · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A fine atomized mist sprays off the subject in a soft expanding cone of microscopic droplets, the cloud so finely divided it reads as a luminous translucent haze, denser and brighter at the nozzle of the burst and feathering into near-invisible vapor at its drifting edges; the suspended particles catch the light and scatter it into a glowing veil, picking up a faint rim glow where backlit and casting only the softest diffusion across the subject. The spray hangs and drifts on the air with no clearly resolved individual droplets, the few larger stray beads at its core arcing out and falling away while the haze slowly settles and dissolves.
  ```
- **영상 추가**: the mist jets out and blooms into a drifting cone, hanging in the air and slowly settling and dissolving as faint air currents pull it sideways — a soft continuous drift that can loop or taper after a burst.
- **페어링**: 백라이트·역광 구도와 와이드 샷, 슬로우 트래킹이나 푸시인 무브, 갓레이가 살아나는 색감과 잘 어울린다. 강도는 낮게 깔아 시즈닝으로.
- **주의**: 미세 안개는 개별 물방울이 또렷이 보이면 안 됨 — 균일하게 흩어진 발광 헤이즈로, 노즐 쪽이 짙고 가장자리로 갈수록 증발하듯 옅어지는 밀도 위계를 둘 것; 역광 산란·림 글로가 없으면 그냥 흰 연기처럼 보임. 큰 물방울 몇 개만 코어에서 튀어 떨어지게.

### 렌즈에 튄 물방울 (Lens-Splatter Droplets)

- **시그널**: 카메라 렌즈 표면에 직접 튀어 붙은 물방울·번진 자국 — 뒷장면은 흐리고 방울만 또렷한 몰입형 오버레이. POV·스톰·액션 컷의 현장감 강조에.
- **앵커**: `water droplets splattered on the lens` · **무드**: immersive · gritty · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Stray water droplets splatter directly across the camera lens, clinging to the glass as a scatter of clear beads and smeared streaks of varied size that sit in sharp focus against the softly defocused scene beyond; each bead acts as a tiny lens, holding a bright pinpoint highlight and a rounded inverted refraction of the bokeh and lights behind it, while the thinner smears veil their patch of frame in a soft milky bloom. The droplets break up and refract the subject behind them, scattering highlights into little glowing orbs and lending the whole frame a wet, in-the-thick-of-it immediacy without ever fully hiding the subject.
  ```
- **영상 추가**: fresh droplets spatter onto the lens and cling, the heaviest slowly sagging and dragging downward while occasional hits add new beads, an unseen wipe or focus shift smearing and re-clarifying them — short bursts over a continuous wet overlay.
- **페어링**: POV·핸드헬드 구도와 흔들리는 무브, 강도는 accent로 화면 가장자리에 깔아 몰입감을 더한다. 색감은 color-grade에 맡길 것.
- **주의**: 렌즈 물방울은 피사체 평면이 아니라 렌즈 평면에 붙음 — 뒤 장면은 보케로 흐리고 방울만 또렷해야 함; 방울마다 뒤 빛이 뒤집혀 굴절되는 미니 렌즈 효과가 핵심. 화면을 통째로 가리거나 히어로를 완전히 덮으면 안 되고, 크고 작은 비드와 번진 자국을 섞을 것.

### 막 흐름 / 시트 워터 런오프 (Sheeting Water Film Run-Off)

- **시그널**: 표면을 하나의 매끈한 막으로 미끄러져 내려가다 가장자리에서 손가락처럼 갈라지며 떨어지는 시트 워터. 유리·차체·돌벽 위 광택과 흐름을 살릴 때.
- **앵커**: `sheeting water film running off a surface` · **무드**: sleek · flowing · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A continuous sheet of water sheets down over the subject's surface in a thin glassy film, flowing as one smooth unbroken skin that hugs every contour, gathering at the lower edge into a fattening lip before it crumbles from one corner into a fringe of fingering rivulets and a curtain of falling drops; the film stays clear and bright, layering a wet specular sheen over the surface with a long highlight sliding down its face. Light transmits and refracts straight through the moving skin, throwing wandering caustic ribbons onto whatever lies beneath while the sheet's leading edge sheds a continuous beaded fringe that streams off into the fall.
  ```
- **영상 추가**: the film slides down in one smooth continuous skin, gathering at the edge and shedding a steady fringe of rivulets and drops, the leading edge fingering as it crumbles — a sustained flowing loop.
- **페어링**: 미디엄·디테일 구도와 얕은 심도, 느린 틸트다운이나 트래킹 무브, 광택을 살리는 색감과 잘 어울린다.
- **주의**: 시트 워터는 낱방울이 아니라 하나의 매끈한 막으로 흘러야 함 — 가장자리에서 손가락처럼 갈라지는 fingering과 떨어지는 물 커튼의 크기 위계를 둘 것; 막이 알알이 부서지면 입자 수프, 너무 두꺼우면 젤리. 막을 통과하는 코스틱과 미끄러지는 하이라이트가 없으면 불투명 비닐처럼 보임.

## 비-물 유체·점성 (Non-Water & Viscous Fluids)


### 동맥혈 분사 / 혈액 스프레이 (Arterial Blood Spray)

- **시그널**: 압력으로 뿜어져 나오는 동맥혈 — 박동하는 줄기와 흩날리는 미세 비말, 표면에 길게 꽂히는 핏자국이 필요할 때. 격투·호러·전투 임팩트의 잔혹한 한 방에.
- **앵커**: `pressurized pulsing arterial blood spray` · **무드**: visceral · brutal · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A pressurized jet of dark crimson blood spurts from the wound in a pulsing arc, the cohesive stream shedding into a spray of fine droplets and a fan of airborne mist that glows deep translucent red along its thin edges and goes near-black in the dense core; it spatters the subject and nearby surfaces in elongated comet-shaped flecks trailing thin cast-off tails, glossy and wet, beading on skin under hard specular highlights before drawing into slow downward rivulets, the wet sheen throwing small red-tinted reflections back onto the host.
  ```
- **영상 추가**: The spurt pulses in rhythmic bursts timed to each pressure beat, the leading edge whipping through its arc as shed droplets trail and stipple the surroundings, then weakens to a faltering dribble; fires once rather than looping.
- **페어링**: 타이트한 미디엄·클로즈업과 로우/더치 앵글, 살짝의 핸드헬드나 휩팬과 잘 맞음. 색감은 차갑게 데자추레이트한 그레이드가 어두운 코어를 더 잔혹하게 살림.
- **주의**: 색이 형광 빨강이거나 케첩처럼 균일하면 즉시 가짜 — 코어는 어둡고 가장자리만 투명 적색으로; 점도가 물처럼 묽거나 페인트처럼 끈적이지 않게, 비말·자국 크기를 불규칙하게 섞을 것.

### 번지는 혈흔 웅덩이 (Spreading Blood Pool)

- **시그널**: 쓰러진 피사체 아래 바닥으로 천천히 번져 나가는 혈액 웅덩이 — 호러·범죄·전장 후일담의 정적인 잔혹함. 시간 경과와 무거운 정적을 보여줄 때.
- **앵커**: `blood pool spreading across floor` · **무드**: ominous · grim · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A dark pool of blood spreads slowly across the floor beneath the subject, its glossy edge fingering outward into thin advancing tendrils that track every grout line, crack and slope of the surface; the body of the pool is near-black and opaque at the center, thinning to a deep translucent crimson along the creeping meniscus where the light passes through, the mirror-smooth skin of the pool catching a sharp specular sheen and reflecting the overhead light and the subject's silhouette in a wet, warped highlight.
  ```
- **영상 추가**: The pool creeps outward in slow, uneven advance, leading tendrils probing along the floor's low points and seams while the reflective surface settles and stills; a slow continuous spread rather than a single burst.
- **페어링**: 하이앵글·버즈아이 부감이나 바닥에 붙은 로우앵글과 잘 맞음; 느린 크레인 다운이나 푸시인. 색감은 차갑고 어두운 그레이드가 광택을, 따뜻한 단일 광원이 반사를 강조.
- **주의**: 가장자리가 너무 매끈한 정원형이면 가짜 — 바닥 결·틈새를 따라 불규칙하게 손가락처럼 번져야; 색이 전체 균일 빨강이면 안 됨, 두꺼운 중심은 검붉게 얇은 가장자리만 투명 적색으로; 점도 잃고 물처럼 좍 퍼지지 않게.

### 물속 혈액 확산 / 핏빛 번짐 (Blood Bloom in Water)

- **시그널**: 맑은 물속에 풀려 피어오르는 혈액 — 익사·수중 격투·몽환적 호러의 불길한 붉은 구름. 잉크보다 무겁고 붉게 가라앉는 흐름이 필요할 때.
- **앵커**: `blood blooming and diffusing in water` · **무드**: haunting · ominous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Blood unfurls from the wound into the surrounding water in billowing crimson clouds, curling into soft sinking tendrils and lacy threads that braid, fold and feather apart as they descend and disperse, dense opaque dark-red at the source thinning to a translucent rose-pink haze along the diffusing edges; the cloud tints and absorbs the light raking through it, casting drifting reddish shadows across the subject's pale skin while slow heavy eddies coil downward through the clear volume.
  ```
- **영상 추가**: The blood blooms and sinks in slow, heavy turbulence, tendrils branching and dissolving as the cloud spreads and gradually clouds the water around the subject; a continuous drifting diffusion.
- **페어링**: 수중 미디엄·클로즈업과 떠 있는 피사체를 담은 부유 구도; 느린 오빗이나 푸시인. 색감은 데이트한 청록 수중 톤이 붉은 코어를 대비로 살림.
- **주의**: 피가 잉크처럼 위로 솟거나 연기처럼 가볍게 흩어지면 안 됨 — 물보다 무거워 천천히 가라앉아야; 색이 형광/케첩 빨강이면 가짜, 코어는 어둡고 가장자리만 투명 분홍빛으로; 너무 빨리 균일하게 섞이지 않게.

### 물속 잉크 확산 (Ink Diffusion in Water)

- **시그널**: 맑은 물속에 풀리는 잉크 — 버섯구름처럼 피어오르며 실타래로 갈라지는 점성 난류. 최면적·유기적 추상 비주얼이나 장면 전환 효과에.
- **앵커**: `ink billowing and diffusing in clear water` · **무드**: hypnotic · organic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A drop of ink blooms into the surrounding water as a billowing mushroom-shaped plume, curling into delicate fractal tendrils and lacy filaments that fold, braid and feather apart as they sink and disperse, dense opaque black at the core thinning to a translucent smoky-grey haze along the diffusing edges; the cloud refracts and tints the light passing through it, casting soft drifting shadows into the clear liquid as slow turbulent eddies coil through the volume.
  ```
- **영상 추가**: The plume mushrooms and unfurls in slow graceful turbulence, tendrils branching and dissolving as the ink spreads and gradually clouds the whole tank; a continuous loopable diffusion.
- **페어링**: 정면 매크로·센터 대칭 구도와 잘 맞음; 천천히 들어가는 푸시인이나 고정 샷. 색감은 깨끗한 하이키 배경이 검은 잉크의 실루엣을 또렷이 살림.
- **주의**: 잉크가 연기처럼 위로만 솟거나 너무 빨리 균일하게 섞이면 수중감이 사라짐 — 느린 점성 난류와 가라앉는 흐름을 유지; 가장자리가 칼처럼 떨어지지 않고 부드럽게 풀려야 함.

### 잉크 한 방울 빌로우 / 피어오르는 잉크 기둥 (Ink-Drop Billow Plume)

- **시그널**: 한 방울이 떨어진 직후 솟아오르는 잉크 기둥 — 버섯 캡과 소용돌이 고리, 가닥져 내리는 줄기의 점성 난류를 극적인 매크로로 보여줄 때. 추상 타이틀백·전환에.
- **앵커**: `single ink drop billowing plume` · **무드**: mesmerizing · fluid · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  From the single point where the drop pierces the surface a dense ink plume billows out, its rounded mushroom cap rolling over on itself into spiraling vortex rings while a tapering stem trails behind, the whole column branching into curling tendrils and feathered skeins; jet-black and opaque through the thick core, it thins to a soft translucent grey wash at the curling edges, refracting and shadowing the backlight so the plume glows with internal depth and casts slow drifting silhouettes through the clear liquid around it.
  ```
- **영상 추가**: The plume swells and rolls upward in slow viscous turbulence, its cap curling into vortex rings as the trailing stem stretches and frays and branching tendrils dissolve outward; a continuous loopable billow.
- **페어링**: 매크로 클로즈업·로우앵글로 기둥의 솟음을 강조; 천천히 상승하는 페데스탈 업이나 고정 샷. 색감은 어두운 배경에 강한 백라이트로 캡의 실루엣과 투과를 살림.
- **주의**: 캡·소용돌이 고리 없이 그냥 균일하게 퍼지면 빌로우감이 죽음 — 버섯 캡과 가닥진 줄기의 크기 위계를 분명히; 너무 빨라 연기처럼 보이거나 가장자리가 칼같이 떨어지지 않게, 점성 난류를 유지.

### 우유 왕관 스플래시 / 밀크 크라운 (Milk Splash Crown)

- **시그널**: 한 방울이 우유 표면을 때릴 때 솟는 완벽한 왕관 — 둘레로 돋는 뾰족한 분출과 그 끝에 맺힌 구슬방울. 광고풍 깨끗한 스플래시·식음료 컷에.
- **앵커**: `milk-drop coronet crown splash` · **무드**: crisp · playful · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the drop strikes the milk a flawless coronet crown leaps up from the impact ring, a circlet of slender white jets each pinching off a perfectly round bead at its tip, the rim scalloping into even points above a swelling Worthington column that rebounds from the center; thick and opaque matte-white, the milk reads with creamy subsurface softness and gentle specular sheen rather than transparency, throwing soft bright bounce light back up onto the subject as the displaced surface dimples into a smooth circular moat ringed with fine satellite droplets.
  ```
- **영상 추가**: The crown springs up and flares to its peak within the first beats, beaded tips hovering before the rim collapses and a central column rebounds and falls back with concentric rings; fires once rather than looping.
- **페어링**: 매크로 클로즈업·정면 또는 약간 로우앵글, 센터 대칭 구도; 고정 샷이나 미세 푸시인에 강한 슬로우모션. 색감은 깨끗한 하이키 화이트가 크라운의 형태를 또렷이.
- **주의**: 우유가 물처럼 투명하게 비치거나 묽게 흩어지면 가짜 — 불투명 매트 화이트와 크림 같은 두께를 유지; 왕관 꼭짓점·구슬방울 크기가 다 똑같으면 CG 티, 미세한 불규칙을 줄 것.

### 페인트 충돌 스플래시 / 물감 부딪힘 (Paint Collision Splash)

- **시그널**: 두 갈래 물감 줄기가 공중에서 부딪혀 터지는 순간 — 두껍고 윤기 나는 리본과 방울이 부채처럼 펼쳐지는 컬러풀 스플래시. 다이내믹한 광고·앨범아트·추상 비주얼에.
- **앵커**: `two paint streams colliding midair` · **무드**: vibrant · energetic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the two streams of paint collide in mid-air they burst apart into a fanning splash of thick glossy ribbons, fat blobs and trailing ligaments that stretch and pinch into a spray of rounded droplets, the saturated colors smearing and marbling where they meet without fully blending; opaque and richly pigmented, each lobe carries a wet glossy highlight and a darker shaded underside that gives it heavy volume, the airborne sheets bending hard specular reflections and casting colored bounce light and soft shadows across the subject behind.
  ```
- **영상 추가**: The streams meet and detonate outward, ribbons unfurling and droplets arcing through their fanning trajectories before gravity drags the heavy blobs down; fires once rather than looping.
- **페어링**: 미디엄·와이드로 부채꼴 분산을 담고 약간 로우앵글이 비상감을 강조; 강한 슬로우모션과 미세 푸시인 또는 불릿타임. 색감은 채도를 살리는 하이키 또는 블랙 배경 대비.
- **주의**: 물감이 물처럼 묽게 흩어지면 가짜 — 두껍고 윤기 나는 점성과 무게를 유지, 시트→리본→방울의 크기 위계를 둘 것; 색이 즉시 회색으로 다 섞여버리면 안 됨, 만나는 면만 마블링되고 코어 색은 또렷하게.

### 액체 금속 흐름 (크롬 / 수은) (Liquid Metal Flow (Chrome / Mercury))

- **시그널**: 거울처럼 주변을 비추며 구슬져 굴러가는 액체 금속 — 수은·크롬의 강한 표면장력과 응집. SF·미래 제품·초현실 비주얼에.
- **앵커**: `mirror-like liquid metal flowing` · **무드**: sleek · surreal · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Liquid metal flows and beads across the surface in cohesive mirror-bright blobs that roll, merge and split under heavy surface tension, their skins taut and seamless as droplets bulge and wobble before pinching free; perfectly reflective chrome with no transparency, the metal mirrors and warps the whole environment across its curved surface in a smear of fish-eye reflections, pooling into silvery highlights and ink-dark shadow reflections with razor-sharp specular glints riding every rolling bead as it throws bent reflections of the subject back across itself.
  ```
- **영상 추가**: The metal rolls and coalesces in slow heavy globules, beads wobbling and merging as the reflected world slides and warps across their mirrored skins; a continuous flowing motion.
- **페어링**: 매크로 클로즈업·정면, 반사거리를 둔 깨끗한 스튜디오 환경과 잘 맞음; 느린 오빗이나 푸시인으로 반사 변화를 보여줌. 색감은 중성 톤이 거울 반사를 왜곡 없이 살림.
- **주의**: 금속이 투명하거나 무광 회색 점액처럼 보이면 가짜 — 반드시 주변을 비추는 거울 반사와 날카로운 스펙큘러가 있어야; 표면장력 잃고 물처럼 묽게 퍼지면 안 됨, 구슬져 굴러야 함.

### 액체 금속 변형 / 모핑 (Liquid Metal Morph)

- **시그널**: 액체 금속이 솟아올라 형태를 빚어내는 변신 — 수은 웅덩이가 끓어오르듯 모여 윤곽을 잡아가는 SF 모핑. 변신·생성·트랜스포메이션 컷에.
- **앵커**: `liquid metal morphing into form` · **무드**: uncanny · futuristic · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A pool of liquid metal draws together and rises into shape, the mirror-bright surface rippling and tensing as bulges climb and resolve into the emerging form, fine ridges and facets smoothing out of the molten skin under taut surface tension; flawlessly reflective chrome with no transparency, it mirrors and bends the surroundings across every shifting contour, silvery highlights sliding and pooling as ink-dark shadow reflections flex over the morphing volume, throwing warped reflections of the subject and the room across its quivering surface.
  ```
- **영상 추가**: The metal wells up and resolves into form in one smooth surge, the surface rippling and tightening as features emerge and settle while reflections slide across the shifting contours; fires once as a transformation rather than looping.
- **페어링**: 미디엄·로우앵글로 솟아오르는 형태를 강조; 천천히 상승하는 페데스탈 업이나 푸시인. 색감은 차가운 중성 톤과 강한 키라이트가 거울 반사의 변화를 또렷이.
- **주의**: 표면이 무광이거나 반사가 멈춰 있으면 변신감이 죽음 — 윤곽이 변할 때마다 반사가 미끄러지고 휘어야; 점성이 물처럼 묽거나 젤리처럼 출렁이지 않게, 표면장력으로 매끈하게 빚어질 것.

### 슬라임 흘러내림 / 끈적 실 늘어짐 (Slime Drip with Strings)

- **시그널**: 손가락이나 표면에서 늘어지며 가느다란 실을 뽑는 끈적한 슬라임 — 점성 젤이 처지고 실이 가늘어지다 끊기는 질감. 호러·키즈·괴물 점액 컷에.
- **앵커**: `viscous slime dripping in strings` · **무드**: gooey · grotesque · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thick slime sags and drips from the subject's fingers, drawing out long elastic strings that stretch ever thinner, neck down to a glistening filament and snap back into trembling beads, heavy globs sagging under their own weight before they let go; translucent gel glows with soft subsurface scatter where the light shines through its green-tinged edges and pools darker in the thicker mass, its wet glossy skin riding bright specular highlights and casting blurry colored shadows as gluey strands bridge between the fingers and the dripping pool below.
  ```
- **영상 추가**: The slime oozes and stretches downward in slow sagging drips, strings thinning until they snap and recoil into wobbling beads while fresh globs gather and let go; a continuous dripping loop.
- **페어링**: 매크로 클로즈업·로우앵글로 늘어지는 실을 강조; 고정 샷이나 느린 틸트 다운. 색감은 어두운 배경에 백라이트가 투과(서브서피스)를 살림.
- **주의**: 실이 안 생기고 물처럼 뚝뚝 떨어지면 점도가 죽음 — 늘어지다 가늘어져 끊기는 탄성 실을 반드시; 투과·광택 없는 불투명 회색 덩어리면 안 됨, 가장자리로 빛이 통과해야.

### 꿀 흘러내림 / 점성 꿀 줄기 (Viscous Honey Pour)

- **시그널**: 두껍게 늘어지며 떨어지는 황금빛 꿀 줄기 — 표면에 닿아 똬리처럼 접히며 쌓이는 점성 흐름. 식음료·따뜻한 질감 광고 컷에.
- **앵커**: `thick honey pouring and coiling` · **무드**: luscious · warm · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thick rope of honey pours down in a slow unbroken ribbon that thins and stretches as it falls, then buckles and folds into neat stacking coils as it meets the surface below and slowly heaps into a glossy mound; rich translucent amber, it glows where the light passes through the cohesive stream and casts a warm refracted caustic glow onto the surface, its smooth wet skin riding soft specular highlights along the coil while the pour drags a slow elastic tail that never quite breaks.
  ```
- **영상 추가**: The honey pours in a steady viscous ribbon that buckles into rhythmic coiling folds as it stacks, the heap swelling and the surface slowly leveling; a continuous loopable pour.
- **페어링**: 매크로 클로즈업·정면 또는 약간 로우앵글; 고정 샷이나 미세 푸시인. 색감은 따뜻한 골든 톤과 백라이트가 호박빛 투과를 살림.
- **주의**: 꿀이 물처럼 묽게 좍 흐르거나 줄기가 툭 끊기면 점도가 죽음 — 가늘게 늘어나며 똬리처럼 접히는 점성을 유지; 불투명 갈색 덩어리면 안 됨, 줄기로 빛이 투과해 호박빛으로 빛나야.

### 녹은 금 붓기 / 용융 골드 (Molten Gold Pour)

- **시그널**: 스스로 빛을 내며 쏟아지는 용융 황금 — 백열하는 노란 코어와 식어가는 어두운 표피, 주변을 데우는 따뜻한 광채. 럭셔리·판타지·금속 주조 컷에.
- **앵커**: `glowing molten gold pouring` · **무드**: molten · opulent · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thick stream of molten gold pours down glowing from within, the incandescent yellow-white core radiating through a skin of deep orange that darkens to a thin cooling crust at the edges, splashing into a luminous pool that sheds fat glowing globs and a few bright sparks; self-luminous and emissive rather than merely lit, the liquid gold casts a warm amber glow and a hot rim onto the subject and surroundings, mirror-bright molten highlights sliding across its rippling surface as the heat-shimmer bends the air above the pour.
  ```
- **영상 추가**: The gold pours in a heavy glowing ribbon that splashes and pools, fat globs lobbing up and sparks flicking off as the molten surface ripples and slowly skins over; a continuous loopable pour.
- **페어링**: 미디엄·클로즈업·로우앵글로 쏟아지는 광채를 강조; 고정 샷이나 미세 푸시인에 약한 슬로우모션. 색감은 어두운 환경에 따뜻한 골든 톤이 자발광과 림라이트를 살림 (색온도 마무리는 색감 단계가 담당).
- **주의**: 금속이 빛을 안 내고 차가운 회색이면 가짜 — 코어가 백열해 주변에 따뜻한 광채를 던져야; 물처럼 묽게 튀거나 거울 크롬처럼 차갑게 반사만 하면 안 됨, 자발광 코어와 어둡게 식은 표피의 층을 둘 것.

### 기름막 무지갯빛 / 오일슬릭 이리데센스 (Oil-Slick Iridescence)

- **시그널**: 어두운 물·표면 위 기름막에 번지는 무지갯빛 간섭색 — 보는 각도에 따라 흐르는 스펙트럼 소용돌이. 도시 거리·디스토피아·추상 매크로 무드에.
- **앵커**: `iridescent oil slick on water` · **무드**: psychedelic · moody · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thin film of oil spreads across the dark water surface beneath the subject, blooming into swirling iridescent bands of shifting spectral color — magenta sliding into cyan, gold, violet and oily green — marbling and drifting as the film flexes; the rainbow sheen rides on a near-black reflective base, the thin-film interference colors smearing and re-sorting with the slightest ripple while the slick mirrors warped highlights of the sky and the subject, its glossy skin catching soft specular streaks that bleed into the spectral swirl.
  ```
- **영상 추가**: The iridescent bands drift and swirl slowly, spectral colors sliding and re-sorting as gentle ripples flex the film and reflections warp across the slick; a continuous loopable shimmer.
- **페어링**: 매크로 클로즈업·하이앵글 부감으로 무지갯빛 소용돌이를 담음; 느린 푸시인이나 슬라이드. 색감은 어두운 베이스에 스펙트럼 채도를 살리되 과한 LUT로 간섭색을 덮지 않게.
- **주의**: 무지갯빛이 균일한 한 색이거나 정지해 있으면 가짜 — 각도·잔물결에 따라 스펙트럼이 흐르고 재배열돼야; 베이스가 밝으면 간섭색이 죽으니 어두운 반사 바탕에 얇은 막으로, 페인트처럼 두껍게 뭉치지 않게.

## 수중·거품·포말 (Underwater, Bubbles & Foam)


### 수중 코스틱 (일렁이는 빛무늬) (Underwater Caustics)

- **시그널**: 수면을 통과한 빛이 바닥과 피사체에 드리우는, 끊임없이 일렁이는 그물망 빛무늬가 필요할 때. 잔잔하면서도 살아 있는 수중 분위기를 깔고 싶을 때 쓴다.
- **앵커**: `dancing underwater light caustics` · **무드**: serene · dreamy · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Rippling nets of bright caustic light play across the subject and the seabed below, the moving surface above focusing the sun into a shifting web of luminous veins and dappled patches that brighten and dim as they crawl; the pattern wraps over every contour in warm-to-cool gradients edged with faint prismatic dispersion, while soft volumetric shafts filter down through the water and the whole scene takes on a gently swaying submerged glow.
  ```
- **영상 추가**: The caustic web ripples and drifts continuously in slow organic waves, its bright veins flickering and reknitting in sync with the unseen surface motion overhead; loops.
- **페어링**: 바닥과 피사체를 함께 담는 버즈아이·로우앵글 와이드 구도, 느린 오빗이나 플로팅 스테디캠, 청록 톤의 시원한 색감과 잘 맞는다.
- **주의**: 빛무늬가 정지해 있거나 바둑판처럼 규칙적이면 가짜 티 — 불규칙하게 흐르고 일렁여야 함. 너무 강하면 피사체 디테일을 덮으니 은은하게, 코스틱의 밝기·방향을 실제 광원·그림자와 일치시킬 것.

### 수중 갓레이 (빛기둥) (Underwater God Rays)

- **시그널**: 수면을 뚫고 비스듬히 내리꽂히는 빛기둥으로 깊은 물속에 신성하고 광활한 깊이감을 줄 때. 부유물이 빛에 산란되는 실루엣 분위기에 쓴다.
- **앵커**: `slanting underwater volumetric sunbeams` · **무드**: ethereal · majestic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Slanting shafts of sunlight knife down through the surface in near-parallel beams, fanning out and softening as they sink, each shaft made visible by suspended motes and fine bubbles that scatter the light into a luminous floating dust; the beams glow bright blue-white near the surface and bleed into deep teal toward the depths, raking across the subject to rim its edges and lay long swaying god-ray stripes over it, while the unlit water falls away into shadowy blue and the silhouetted form hangs within the descending column.
  ```
- **영상 추가**: The shafts sway and flicker slowly as suspended particles drift through them, the beams breathing brighter and dimmer in sync with the surface above; loops.
- **페어링**: 깊은 수심을 강조하는 로우앵글 실루엣 구도, 천천히 하강하는 크레인·드론 다운, 딥블루 톤 색감과 어울린다.
- **주의**: 빛기둥이 평행하게 곧기만 하거나 끝까지 또렷하면 가짜 — 깊이로 갈수록 흐려지고 부유물에 산란돼야 함. 빛 각도를 수면 방향·태양과 맞추고 피사체 그림자와 모순되지 않게.

### 상승 기포 기둥 (Rising Bubble Column)

- **시그널**: 바닥의 한 점에서 끊임없이 솟아오르는 기포 줄기가 필요할 때. 잠긴 배기구·온천·발효처럼 고정된 발생원에서 올라오는 생동감 있는 수직 흐름에 쓴다.
- **앵커**: `stream of bubbles rising in water` · **무드**: lively · buoyant · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A continuous thread of bubbles streams upward from the source point, tiny pinprick bubbles at the base swelling and merging into larger wobbling spheres as they climb, the column weaving and drifting with the current; each bubble wears a mirror-bright silver skin with a sharp specular highlight and a refracted, inverted glimpse of the scene, the cluster catching the key light in a chain of dancing glints and casting soft moving reflections through the water before the largest domes flatten and burst at the surface above.
  ```
- **영상 추가**: Bubbles release in a steady stream, wobbling and accelerating as they rise and expand, the largest popping at the surface; loops seamlessly.
- **페어링**: 세로 구도(9:16)로 상승을 담는 로우앵글, 천천히 따라 올라가는 페데스탈 업·틸트 업, 청록 수중 색감과 맞는다.
- **주의**: 기포가 전부 같은 크기로 일직선이면 CG 티 — 위로 갈수록 커지고 흔들리며 합쳐지는 크기 위계를 둘 것. 기포 표면에 굴절·캐치라이트가 없으면 흰 동그라미가 된다.

### 수면 기포 터짐 (Surface Bubble Burst)

- **시그널**: 수면에 떠오른 기포가 톡 터지는 순간을 클로즈업으로 잡을 때. 막이 찢어지며 미세 물방울 왕관과 파문을 남기는 섬세한 디테일에 쓴다.
- **앵커**: `bubble popping at water surface` · **무드**: delicate · crisp · **강도**: 양념 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A domed bubble bulges above the waterline beside the subject, its taut iridescent film shimmering with thin-film rainbow sheen before it ruptures in an instant, the skin snapping back and flinging a tiny crown of micro-droplets outward; the burst leaves a small dimpled crater that rebounds into a quick set of concentric ripples, bright specular glints riding the flung droplets while the refracted scene flexes through the collapsing dome and the surface knits back to calm.
  ```
- **영상 추가**: The dome trembles, then ruptures in a single beat as the film snaps back and micro-droplets flick outward, leaving a small crown and a fading ripple; fires once.
- **페어링**: 매크로 클로즈업·얕은 심도 구도, 고정 또는 미세 푸시인, 무지갯빛 박막이 살아나는 어두운 저채도 배경 색감과 맞는다.
- **주의**: 막이 그냥 사라지면 가짜 — 찢어지며 미세 물방울 왕관과 파문을 남겨야 함. 박막 무지갯빛이 과하면 비눗방울 장난감처럼 보이니 은은하게, 수면 변위(딤플)를 잊지 말 것.

### 바다 거품 / 파도 포말 (Sea Foam / Surf Foam)

- **시그널**: 파도가 부서지며 해안에 밀려드는 흰 거품이 필요할 때. 모래 위를 미끄러지듯 퍼졌다 빠지는 거칠고 바람결 같은 포말에 쓴다.
- **앵커**: `churning sea foam surf wash` · **무드**: raw · windswept · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Aerated white foam churns up as the wave breaks and surges toward the subject, a lacy reticulated raft of close-packed bubbles sliding up the wet sand in a thinning sheet before it drains back and recedes; the foam reads bright cream-white in the diffuse light with cool blue-grey shadows pooling in its pockets and translucent fizzing thin edges, leaving a hissing lace of popping bubbles and a glassy wet sheen on the sand that mirrors the sky.
  ```
- **영상 추가**: Foam surges forward as the wave collapses, slides up the sand in a thinning sheet, then drains back leaving a popping bubble lace; loops with each wave.
- **페어링**: 발밑·해안선을 담는 로우앵글 와이드, 파도를 따라가는 핸드헬드·트래킹, 차갑고 살짝 데새추레이트된 해변 색감과 잘 맞는다.
- **주의**: 거품이 균일한 흰 매트처럼 깔리면 가짜 — 레이스 같은 망상 구조와 크고 작은 기포가 섞이고, 밀려왔다 빠지며 모래에 젖은 자국을 남겨야 함. 너무 정적이면 죽은 거품처럼 보인다.

### 비누 거품 / 라더 (Soap Lather Suds)

- **시그널**: 피부·표면에 일어나는 풍성한 비누 거품이 필요할 때. 촘촘한 흰 폼과 무지갯빛 막이 비치는 작은 기포들이 흘러내리는 깨끗한 무드에 쓴다.
- **앵커**: `rich foamy soap lather suds` · **무드**: clean · soft · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Thick creamy lather builds and clings over the subject's skin in soft slumping mounds, a dense pack of tightly fitted bubbles in mixed sizes glazed with a faint iridescent thin-film sheen, the heavier clumps sagging and sliding down under their own weight in slow wet trails; soft specular highlights ride each glossy bubble skin while light glows through the translucent foam with a gentle subsurface warmth, the odd bubble winking out with a tiny pop as the suds keep frothing up.
  ```
- **영상 추가**: Bubbles bloom and multiply as the lather builds, the foam mass slumping and sliding slowly while stray bubbles pop; loops.
- **페어링**: 피부·손을 담는 클로즈업, 미세 푸시인·랙포커스, 깨끗하고 부드러운 하이키 색감과 어울린다.
- **주의**: 거품이 매끈한 크림 덩어리로 뭉치면 가짜 — 크고 작은 기포와 박막 광택을 섞고, 중력에 흘러내리며 톡톡 터지게 할 것. 점도가 물처럼 묽으면 폼이 안 읽힌다.

### 탄산·샴페인 기포 (Soda / Champagne Fizz)

- **시그널**: 잔 속에서 끊임없이 솟는 미세 탄산 기포가 필요할 때. 유리벽과 음료 표면에서 일어나는 가는 기포 줄기와 거품 띠로 청량하고 축하 분위기를 줄 때 쓴다.
- **앵커**: `rising carbonation fizz in glass` · **무드**: effervescent · celebratory · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Fine chains of tiny bubbles stream up in steady threads from nucleation points along the inner glass wall, the micro-bubbles accelerating and swelling as they rise to gather into a frothy renewing collar at the surface; they glow golden and translucent with bright pinpoint specular sparkles, the light refracting through the glass and effervescent liquid to scatter dancing caustic dots across the scene, each bursting bubble flicking a micro-droplet above the rim.
  ```
- **영상 추가**: Bubble chains stream upward continuously, accelerating and growing, bursting at the surface into a renewing foam ring; loops.
- **페어링**: 잔을 세로로 담는 매크로·역광 구도, 고정 또는 천천히 상승하는 페데스탈, 황금빛 따뜻한 역광 색감과 맞는다.
- **주의**: 기포가 너무 굵거나 사방에서 무작위로 뜨면 탄산이 아님 — 유리벽 핵 생성점에서 가는 줄기로 솟아 표면에서 거품 띠를 이뤄야 함. 표면 거품(collar)이 없으면 김빠진 느낌이 난다.

### 침수·가라앉는 기포 자취 (Submersion Sink Trail)

- **시그널**: 물체가 물에 빠져 가라앉으며 뒤로 흘리는 기포 꼬리와 교란된 물 자취가 필요할 때. 잠기는 순간의 무게감과 긴장감을 줄 때 쓴다.
- **앵커**: `object sinking with bubble trail` · **무드**: weighty · suspenseful · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  As the subject sinks below the surface a turbulent wake of entrained air peels off and streams upward behind it, ropes of silver bubbles in mixed sizes spiraling and tumbling through the churned water in its path; the disturbed volume hazes faintly while the clear blue-green liquid refracts and shimmers around the descending form, caustic flickers and a wet rim-catch riding its surface as the bubble trail thins, slows and unravels back toward the bright surface above.
  ```
- **영상 추가**: The subject plunges and decelerates as it sinks, the bubble trail spiraling up behind and thinning until the wake settles; fires once.
- **페어링**: 하강을 담는 세로 구도, 가라앉음을 따라 내리는 틸트 다운·페데스탈 다운, 깊이감 있는 청록 색감과 맞는다.
- **주의**: 기포 꼬리가 물체를 앞질러 오르거나 물체가 둥둥 떠 가짜 부유면 안 됨 — 무게대로 가라앉고 난류 꼬리는 뒤로 흘러 위로 풀려야 함. 자취가 직선이면 점성이 없어 보이니 나선·교란을 줄 것.

### 수중 폭발 버블 (Underwater Explosion Bubble)

- **시그널**: 물속 폭발 순간 부풀어 오르는 거대한 가스 거품과 충격 전선이 필요할 때. 빠르게 팽창했다 붕괴하며 흰 기포 구름을 토해내는 격렬한 임팩트에 쓴다.
- **앵커**: `expanding underwater explosion gas bubble` · **무드**: violent · concussive · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A massive gas bubble balloons outward from the blast point behind a racing shock front, the cavity ballooning then collapsing inward and venting a roiling cloud of white aerated bubbles and shredded foam; dense opaque white at the core thins to translucent blue-green at the diffusing edges as jets of micro-bubbles fire outward, a hard refracted flash raking caustics across the scene while the swelling mass occludes the murky background before it billows up and apart.
  ```
- **영상 추가**: The bubble balloons violently and peaks, then implodes and re-expands in a pulsing collapse, spewing a roiling foam cloud that billows outward and rises; fires once.
- **페어링**: 위력을 담는 와이드 구도, 충격에 흔들리는 카메라 셰이크·살짝 푸시아웃, 차가운 딥블루에 폭심부만 밝은 색감과 맞는다.
- **주의**: 가스 거품이 단순 둥근 풍선으로 한 번 부풀고 끝나면 가짜 — 팽창→붕괴→재팽창의 맥동과 흰 기포 구름 토출을 보여야 함. 충격 전선·코스틱 플래시가 없으면 위력이 안 읽힌다.

### 침전물·부유 입자 구름 (Silt / Particulate Cloud)

- **시그널**: 바닥을 건드려 피어오르는 흙·모래 먼지 구름이 필요할 때. 물속에서 천천히 퍼지며 가시거리를 흐리는 탁하고 불길한 부유 입자에 쓴다.
- **앵커**: `billowing silt cloud underwater` · **무드**: murky · ominous · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A cloud of disturbed silt blooms up from the seabed where the subject touches down, fine sediment rolling into slow turbulent billows that hang, curl and spread through the water; warm tan-to-brown at the dense core, it feathers into a hazy translucent veil at its edges, the drifting particles scattering and dimming the light into soft volumetric murk that swallows the background into a dim silhouette and dulls the caustic glow before the heavier grains gradually rain back down.
  ```
- **영상 추가**: The silt mushrooms up and rolls outward in slow turbulence, fine particles drifting and settling back gradually as the haze thins and disperses; settles after the disturbance.
- **페어링**: 바닥 접촉점을 담는 로우앵글, 느린 트래킹·살짝 푸시인, 탁한 그린/세피아 머디 색감과 맞는다.
- **주의**: 침전물이 연기처럼 위로만 솟거나 칼같은 가장자리면 가짜 — 느린 점성 난류로 굴러 퍼졌다 다시 가라앉아야 함. 입자가 빛을 산란해 배경을 흐려야 수중 탁도가 읽힌다.

### 거품 폭류 / 백색 급류 (Frothy Aeration Whitewater)

- **시그널**: 급류·폭포 아래에서 공기를 머금어 새하얗게 끓어오르는 난류 백수가 필요할 때. 거품과 물보라가 뒤섞여 휘몰아치는 힘찬 격류에 쓴다.
- **앵커**: `churning aerated whitewater froth` · **무드**: turbulent · powerful · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Violently aerated whitewater boils and churns where the current crashes against the subject, opaque foaming white masses tumbling over standing waves and tearing off ropes of spray and froth; the aerated peaks glow pure bright white while the deeper troughs hold a glassy blue-green, wet specular glints flashing across the surging chaotic eddies and a fine churned mist hanging above the turbulence as it folds and re-folds without pause.
  ```
- **영상 추가**: The whitewater boils and surges continuously, standing waves pulsing and folding as froth ropes tear off and spray hangs; loops.
- **페어링**: 급류를 담는 로우앵글·와이드, 흐름을 따라가는 핸드헬드·트래킹, 차갑고 대비 강한 색감과 맞는다.
- **주의**: 백수가 매끈한 흰 덩어리로 얼어붙으면 가짜 — 공기를 머금어 끓듯 솟고 거품 밧줄과 물보라를 토하며 끊임없이 뒤집혀야 함. 골과 마루의 명암(유리 같은 청록 vs 불투명 흰색) 위계를 둘 것.

### 다이버 호흡 기포 (Diver's Breath Bubbles)

- **시그널**: 다이버가 숨을 내쉴 때마다 호흡기에서 터져 나와 흔들리며 떠오르는 큰 기포 무리가 필요할 때. 박동하듯 끊기는 호흡 리듬으로 몰입감 있는 수중 인물에 쓴다.
- **앵커**: `diver exhaling bubbles underwater` · **무드**: tranquil · immersive · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Clusters of large wobbling bubbles burst from the subject's regulator with each exhale, jellyfish-domed and quivering as they flatten, accelerate and swell on the way up before fragmenting into smaller trailing satellites; their mirror-bright silver skins refract an inverted, warped glimpse of the scene with dark undersides and rim-lit crowns, caustic glints sliding over each dome and soft reflected highlights flickering across the diver's mask and shoulders as the swarm rises past.
  ```
- **영상 추가**: Bubbles release in rhythmic bursts with each exhale, wobbling and flattening as they rise and accelerate, fragmenting into smaller bubbles near the top; loops with the breathing cadence.
- **페어링**: 다이버 인물을 담는 미디엄·로우앵글, 부드럽게 상승하는 페데스탈 업·플로팅 무브, 시원한 청록 색감과 잘 맞는다.
- **주의**: 기포가 작고 균일하게 흩어지면 호흡감이 사라짐 — 날숨마다 큰 기포 무리가 박동하듯 터져 나와 흔들리며 커지고 위에서 잘게 쪼개져야 함. 굴절·미러 스킨이 없으면 흰 점이 된다.
