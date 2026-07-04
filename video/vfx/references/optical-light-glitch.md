# 광학·빛·디지털 FX (optical-light-glitch)

갓레이·플레어·블룸·네온·라이트트레일·홀로스캔·글리치 — 빛 효과는 약하게 시작(AI는 블룸을 폭발시킴). 플레어는 가장 밝은 광원에만, 글리치는 지속이 아니라 버스트로, 홀로그램은 반투명으로.

> 각 항목 구성: **시그널**(언제 쓰는지) / **앵커**(키워드) · **무드** · **강도**(히어로=주연 / 양념=저밀도 보조) · **타이밍**(🔁연속=루프 / ⚡원샷=순간) / **VFX 블록**(영어, 바로 붙여쓰기) / **영상 추가** / **페어링**(어울리는 구도·무브·색감) / **주의**.

> VFX 블록은 **피사체·동작 묘사 뒤, 카메라무브·색감 앞**에 둔다. 한 컷에 히어로 효과는 하나만. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.


## 광선 · 블룸 · 플레어 (Light Rays, Bloom & Flare)


### 볼류메트릭 갓레이 (신의 빛줄기) (Volumetric God Rays)

- **시그널**: 안개·먼지가 떠 있는 공기를 가르며 광원에서 부채꼴로 뻗어 나오는 또렷한 빛줄기. 광원 뒤 역광에서 가장 강하게 서고, 피사체를 신성하고 입체적인 공기 속에 박아 넣을 때 쓴다.
- **앵커**: `volumetric crepuscular god rays` · **무드**: divine · atmospheric · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Distinct volumetric god rays fan out from the light source through hazy, dust-laden air, defined parallel shafts of warm light that grow brighter where they pass behind the subject and rim its silhouette in a halo; the beams catch slow-floating motes and fall off softly into shadow, grounding the figure in tangible, breathable atmosphere rather than flat empty space.
  ```
- **영상 추가**: The shafts breathe and drift as dust and haze move through them, with faint flicker when the subject or a foreground edge briefly occludes the source; the beams sweep gently as the light or camera shifts.
- **페어링**: 로우앵글·실루엣 역광 구도, 느린 푸시인이나 틸트업과 잘 맞는다. 색감은 골든아워·웜 톤이나 차가운 모닝 미스트 톤으로.
- **주의**: 광선이 너무 빽빽하거나 평행이 깨져 광원 방향과 어긋나면 즉시 가짜 티 — 부채살은 실제 광원과 정렬하고 적당히 성기게. 헤이즈를 과하게 깔면 피사체 디테일과 얼굴이 뿌옇게 날아간다.

### 대기 광선 샤프트 (창가 빛기둥) (Atmospheric Light Shafts)

- **시그널**: 창문·문틈·숲 캐노피 사이로 비스듬히 떨어지는 부드러운 빛기둥. 갓레이보다 성기고 잔잔하게 깔아 공간의 공기감과 시간대를 살릴 때 쓴다.
- **앵커**: `soft atmospheric light shafts` · **무드**: serene · hazy · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Soft diagonal shafts of light slant down through a window or gap and cut through the still, dust-laden air, broad and gently feathered rather than sharply defined, layering a pale-gold core into the cooler shadow around them; the beams pool a warm patch of light on the floor beneath the subject and graze one shoulder and cheek, lifting a faint rim along the near edge while slow motes drift lazily through the light.
  ```
- **영상 추가**: The shafts hold steady while dust motes drift and swirl slowly through them, the warm pool creeping almost imperceptibly across the floor as the light shifts; loops gently with no sudden change.
- **페어링**: 실내 와이드·창가 측광 구도, 고정 샷이나 아주 느린 드리프트와 어울린다. 데이라이트·웜 내추럴 그레이드.
- **주의**: 샤프트를 너무 또렷하고 빽빽하게 그리면 갓레이가 되어버린다 — 성기고 부드럽게 유지. 헤이즈를 과하게 깔면 실내 전체가 뿌옇게 흐려진다.

### 블룸 디퓨전 글로우 (몽환 발광) (Bloom Diffusion Glow)

- **시그널**: 하이라이트가 부드럽게 번져 화면 전체에 꿈결 같은 발광이 깔리는 디퓨전 필터 룩. 로맨틱·드림 시퀀스·뷰티 컷의 분위기를 살릴 때 쓴다.
- **앵커**: `soft diffusion bloom glow` · **무드**: dreamy · romantic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A soft diffusion bloom lifts gently off every bright highlight, blooming milky halos around the brightest points and bleeding a creamy glow into adjacent midtones so the whole frame takes on a dreamy, slightly hazy sheen; the highlights swell into soft white-gold pools while shadows stay lifted and pearly, and the bloom wraps the subject's lit edges and backlit hair in a tender halo, glazing skin smooth without erasing the eyes or fine detail.
  ```
- **영상 추가**: The bloom shimmers and breathes subtly as highlights flare and ebb with the subject's movement, the glow swelling on bright pickups then settling back; loops softly without strobing.
- **페어링**: 클로즈업·미디엄 뷰티 구도, 느린 핸드헬드나 고정 샷과 잘 맞는다. 파스텔·웜 필름룩 그레이드와 어울리고 강한 콘트라스트 그레이드와는 충돌한다.
- **주의**: 블룸을 과하게 올리면 하이라이트가 하얗게 타고 얼굴 디테일·눈동자가 사라진다 — 코어 디테일은 살리고 번짐만 부드럽게 둘 것.

### 할레이션 블룸 (적색 번짐) (Halation Bloom)

- **시그널**: 밝은 광원·하이라이트 가장자리에 붉은빛이 번져 새어 나오는 필름 특유의 할레이션. 야간 네온·전구·역광에서 시네스틸 같은 노스탤지어를 줄 때 쓴다.
- **앵커**: `red halation bleeding around highlights` · **무드**: nostalgic · cinematic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A warm red-orange halation bleeds outward from the brightest highlights and practical light sources, their glowing edges softening into a reddish halo as if the light has soaked into the film emulsion behind them; the bloom rings each bulb and specular hit with a rosy crimson fringe layered over a hot white core, spilling faint warm glow onto the subject's skin and catching the edges of backlit hair in a red-tinged halo while the rest of the frame stays crisp.
  ```
- **영상 추가**: The red halos swell and pulse subtly as lights brighten or the subject passes in front of them, blooming on each highlight then easing back; loops continuously.
- **페어링**: 야경·인공조명 클로즈업/미디엄 구도, 고정이나 느린 무브와 어울린다. CineStill 800T·텅스텐 야간 그레이드와 찰떡.
- **주의**: 할레이션은 가장 밝은 지점에만 — 화면 전체에 붉은 번짐을 깔면 충혈된 듯 탁해진다. 붉은 톤이 살색을 통째로 덮지 않게 가장자리에만 묻힐 것.

### 아나모픽 렌즈 플레어 (Anamorphic Lens Flare)

- **시그널**: 밝은 점광원에서 화면을 가로지르는 길고 가는 수평 청색 스트릭 — 시네마틱 SF의 시그니처 광학 플레어. 차갑고 미래적인 한 줄을 장면에 깔 때 쓴다.
- **앵커**: `horizontal blue anamorphic flare streak` · **무드**: cinematic · futuristic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A long, thin horizontal anamorphic flare streaks across the frame from each bright point light, a cool blue-cyan lens streak with a hot glowing core and a faint stretched halo, layered with subtle circular ghost reflections trailing along the lens axis; the streak blooms brighter as the source clips into highlight, laying clean optical light across the scene and tracing a cool rim along the subject's edge without washing out their detail.
  ```
- **영상 추가**: The horizontal streak slides and stretches as the source or camera moves across frame, flaring up then fading as the light passes behind edges, while the ghost reflections track in counter-motion down the lens axis.
- **페어링**: 와이드·SF 인테리어 구도, 측면 트래킹이나 느린 팬(스트릭이 쓸리게)과 어울린다. 틸 앤 오렌지·쿨 블루 그레이드와 잘 맞는다.
- **주의**: 모든 광원마다 플레어를 붙이면 산만 — 가장 밝은 1~2개 점광원에만. 수평 스트릭이 휘거나 두꺼워지면 광학적 사실감이 깨지고, 피사체 얼굴을 가로질러 시선을 가리지 않게 둘 것.

### 구형 렌즈 플레어 (고스트 반사) (Spherical Lens Flare with Ghosts)

- **시그널**: 밝은 광원에서 렌즈 축을 따라 줄지어 늘어선 둥근 무지갯빛 고스트 반사와 부드러운 헤일로. 클래식하고 자연스러운 햇빛 플레어를 줄 때 쓴다.
- **앵커**: `circular lens flare with ghosts` · **무드**: sunny · organic · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A bright point light throws a soft circular flare with a glowing halo and a chain of rounded, semi-transparent ghost reflections stepping diagonally across the frame along the lens axis; the ghosts shimmer with faint rainbow iridescence and polygonal aperture shapes, layered over a warm veiling glare that gently lifts overall contrast, while the flare blooms hotter as the source clips into frame and washes a soft haze across the scene that rims the subject's silhouette without burying their face.
  ```
- **영상 추가**: The ghost chain slides and re-spaces along the lens axis as the source or camera moves, each orb brightening and dimming in sequence while the central glare flares up then settles; tracks with the camera move.
- **페어링**: 야외 역광 와이드/미디엄 구도, 느린 팬·핸드헬드(고스트가 미끄러지게)와 어울린다. 골든아워·웜 그레이드와 잘 맞는다.
- **주의**: 고스트가 얼굴을 가로지르거나 너무 많이 늘어서면 산만 — 광원 위치에 맞춰 축을 따라 정렬하고 적당한 개수만. 베일링 글레어를 과하게 깔면 대비가 전부 죽는다.

### 선스타 버스트 (별빛 광채) (Sun Star Burst)

- **시그널**: 작은 조리개에서 점광원이 여러 갈래 뾰족한 별빛 광선으로 터지는 효과. 태양이 가장자리에 살짝 가려 빼꼼할 때 가장 선명하고, 또렷한 광채와 반짝임을 줄 때 쓴다.
- **앵커**: `pointed sunstar starburst rays` · **무드**: crisp · radiant · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The bright point source bursts into a crisp sunstar, a symmetrical fan of sharp, needle-thin spokes radiating outward as the light just clips past an edge or peeks through a gap; the spokes glint with a faint prismatic split toward their tips over a small hot white core, throwing a sparkling radiance that catches a hard specular rim along the subject's edge and casts a brief flicker as their silhouette partly occludes the source.
  ```
- **영상 추가**: The starburst flares to full brightness then collapses as the subject or a foreground edge slides across the source, the spokes lengthening and twinkling with the camera move; reveals and hides as occlusion changes.
- **페어링**: 역광 실루엣 와이드·로우앵글 구도, 광원을 가장자리에 살짝 걸친 트래킹/푸시인과 어울린다. 골든아워·하이 콘트라스트 그레이드.
- **주의**: 스파이크가 너무 많거나 길면 그래픽 스티커처럼 가짜 — 갈래 수는 적당히, 조리개에 맞춘 대칭으로. 점광원이 완전히 트이면 별빛이 죽으니 가장자리에 살짝 걸칠 것.

### 역광 림라이트 헤일로 (Backlit Rim Light Halo)

- **시그널**: 피사체 뒤 광원이 윤곽을 따라 밝은 테두리를 그리고 머리카락·어깨에 빛나는 후광을 두르는 역광. 피사체를 어두운 배경에서 또렷이 분리하고 친밀한 분위기를 줄 때 쓴다.
- **앵커**: `backlit rim light halo` · **무드**: luminous · intimate · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A bright backlight wraps a glowing rim of light around the subject's silhouette, tracing a hot outline along their shoulders, hair, and cheek that lifts them cleanly off the darker background; loose strands catch the light into a soft luminous halo, the rim warmest where it grazes skin and cooling into the shadowed core, with a gentle bloom feathering off the brightest edges and a faint glow spilling into the air around their outline.
  ```
- **영상 추가**: The rim glides along the subject's contour as they or the camera move, flaring brighter where the edge turns toward the light and thinning where it turns away; holds continuously.
- **페어링**: 클로즈업/미디엄 역광 구도, 느린 오빗이나 푸시인(림이 윤곽을 타게)과 어울린다. 로우키·웜 그레이드와 잘 맞는다.
- **주의**: 림이 윤곽 전체를 균일하게 두르면 오려붙인 듯 가짜 — 광원 방향 쪽만 밝고 반대쪽은 죽여 입체감을 줄 것. 너무 세면 머리카락이 하얗게 탄다.

### 시네마틱 라이트 리크 (빛 샘) (Cinematic Light Leak)

- **시그널**: 필름 가장자리로 빛이 새 들어와 따뜻한 주황·핑크빛이 화면 한쪽을 번지듯 물들이는 빈티지 효과. 회상·로맨틱 트랜지션이나 아날로그 무드를 줄 때 쓴다.
- **앵커**: `warm film light leak wash` · **무드**: vintage · wistful · **강도**: 양념 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A warm light leak bleeds in from one edge of the frame, a soft wash of amber, orange, and rose light flaring across the corner as if stray light has crept past the film gate, fogging that side of the image and lifting its shadows into a hazy glow; the leak layers hot orange into pink at its core and fades into the scene, tinting the subject's skin and hair on the affected side with a warm cast and dissolving that edge into a dreamy, slightly overexposed bloom.
  ```
- **영상 추가**: The leak flares in from the edge and pulses across the frame, swelling to a warm bloom then sliding off and fading; fires in intermittent washes rather than holding steady.
- **페어링**: 미디엄/클로즈업 회상 구도, 핸드헬드나 느린 무브와 어울린다. Super 8·빈티지 웜 필름룩 그레이드와 잘 맞는다.
- **주의**: 빛 샘이 화면 절반 이상을 덮으면 피사체가 통째로 날아간다 — 한쪽 가장자리에서만 번지게, 코어만 따뜻하게. 매 프레임 가득 채우지 말고 간헐적으로 흘릴 것.

### 스페큘러 글린트 & 스파클 (반짝임) (Specular Glints and Sparkle)

- **시그널**: 물·보석·금속·눈 결정 표면에서 작은 점광이 또렷하게 터지며 반짝이는 하이라이트. 광택·고급감이나 마법 같은 반짝임을 더할 때 쓴다.
- **앵커**: `twinkling specular glints sparkle` · **무드**: glamorous · sparkling · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Tiny pinpoint specular glints flare to life across reflective surfaces, sharp star-tipped sparkles igniting on water ripples, jewel facets, metal edges, or snow crystals wherever the light strikes at the right angle; each glint blooms a small four-point twinkle with a hot white core and a faint prismatic flicker, scattering bright accents that travel across the surface and dance along the subject's wet or polished edges as the angle shifts.
  ```
- **영상 추가**: The glints twinkle on and off as the surface or camera moves, new sparkles igniting and fading in a shimmering scatter that follows the light angle; loops continuously.
- **페어링**: 매크로/클로즈업 제품·주얼리 구도, 느린 슬라이드나 랙포커스(반짝임이 옮겨가게)와 어울린다. 하이키·클린 그레이드.
- **주의**: 스파클을 표면 전체에 균일하게 뿌리면 글리터 떡칠처럼 싸구려 — 각도가 맞는 지점에만 드문드문. 별빛 스파이크가 너무 크면 만화처럼 보인다.

### 워터 코스틱스 (물그림자 일렁임) (Water Caustics Light)

- **시그널**: 물 표면이 빛을 굴절시켜 바닥·벽·피사체에 그물처럼 일렁이는 밝은 무늬를 드리우는 효과. 수영장·수중·해변의 청량하고 몽환적인 빛을 줄 때 쓴다.
- **앵커**: `rippling water caustics patterns` · **무드**: aquatic · tranquil · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Rippling networks of refracted caustic light dance across surfaces, bright wavering veins and cells of light cast by water bending the sun into a shifting net that crawls over the floor, the walls, and the subject's skin; the caustics glow in cool aquamarine and white over softer blue shadow, flowing and braiding in slow organic waves that ripple along the subject's body and ground them in submerged, watery light, the brightest threads pooling where the refraction concentrates.
  ```
- **영상 추가**: The caustic net flows and ripples continuously in slow, braiding waves across every surface, threads brightening and dissolving as the water moves overhead; loops with gentle drift.
- **페어링**: 수중/풀사이드 미디엄·오버헤드 구도, 느린 드리프트나 플로팅 무브와 어울린다. 쿨 블루·아쿠아 그레이드.
- **주의**: 코스틱 무늬가 너무 또렷하고 고대비면 페인트칠한 듯 가짜 — 가장자리는 흐리게, 일렁임은 유기적으로. 무늬가 피사체 위에서 멈춰 있으면 즉시 합성 티가 난다.

### 대플드 고보 라이트 (잎새·블라인드 그림자) (Dappled Gobo Light)

- **시그널**: 나뭇잎·블라인드·창살 사이로 빛이 새어 피사체와 벽에 얼룩덜룩한 빛과 그림자 패턴을 드리우는 효과. 자연스러운 공간감과 시간대 분위기를 줄 때 쓴다.
- **앵커**: `dappled gobo leaf shadows` · **무드**: natural · tranquil · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Dappled light filters through an unseen canopy of leaves or window blinds, scattering soft-edged patches of warm light and shadow across the subject's face, body, and the wall behind them; the pattern layers golden lit pools against cool shaded gaps, the patches feathering at their edges as they wrap over the contours of skin and fabric, breaking flat light into organic texture and casting a matching mottled shadow on the floor that anchors the figure in a real, sun-pierced space.
  ```
- **영상 추가**: The dappled pattern sways and trembles gently as an unseen breeze moves the leaves, pools of light breathing and shifting across the subject; loops with soft drift.
- **페어링**: 미디엄/클로즈업 인물 구도, 고정이나 느린 무브와 어울린다. 골든아워·웜 내추럴 그레이드.
- **주의**: 패턴이 너무 또렷하고 규칙적이면 프로젝터로 쏜 듯 가짜 — 가장자리는 부드럽게, 밀도는 불규칙하게. 그림자가 얼굴 정중앙을 가르면 인물이 답답해진다.

## 광 궤적 · 발광 · 네온 (Light Trails, Luminescence & Neon)


### 장노출 차량 광궤적 (트래픽 트레일) (Long-Exposure Traffic Light Trails)

- **시그널**: 밤 도시·고속도로 위 차량의 헤드라이트·테일라이트가 장노출로 길게 흐르는 빛의 리본. 도시의 속도감과 밤 분위기를 한 컷에 담고 싶을 때.
- **앵커**: `long-exposure streaking traffic light trails` · **무드**: kinetic · nocturnal · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Long continuous ribbons of light stream along the lanes below from the moving traffic, headlights smearing into white-gold streaks in one direction and taillights into deep red in the other, layered with stray amber blurs of turn signals and the cool wash of streetlamps; the trails pool a soft shifting glow up onto the wet asphalt and the underside of the overpass and graze the still subject at the railing with faint colored light, while the cars themselves dissolve entirely into flowing bands so only the architecture and the figure stay crisp.
  ```
- **영상 추가**: The ribbons flow and lengthen continuously as traffic streams past, brightening and thinning in waves while their reflected glow ripples across the wet road; the trails stay fluid and unbroken and loop seamlessly as the subject and frame hold steady.
- **페어링**: 하이앵글·버즈아이 또는 망원 압축 와이드 구도와 궁합. 카메라는 락오프(고정) 장노출이나 아주 느린 하이퍼랩스, 색감은 틸 앤 오렌지·사이버펑크 네온 톤.
- **주의**: 트레일이 너무 빽빽하거나 차선을 벗어나 제멋대로 휘면 가짜 — 실제 도로 곡률·차선 방향을 따라야 한다. 블룸 과다로 도시 디테일이 하얗게 타지 않게, 피사체는 또렷이 유지.

### 모션 에코 광궤적 (잔상 트레일) (Motion Echo Light Trails)

- **시그널**: 빠르게 움직이는 피사체 뒤로 발광하는 잔상(에코)이 줄지어 따라붙는 스트로보식 모션 트레일. 댄스·격투·스포츠의 동작 궤적을 빛으로 시각화할 때.
- **앵커**: `stroboscopic motion echo light trails` · **무드**: dynamic · stylized · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Luminous stroboscopic echoes trail every moving limb, a fan of repeated glowing silhouettes that smear along the arc of motion and fade as they stretch away from the body, each ghost dimmer and more transparent than the last; the echoes carry a cool-to-warm tint that spills a soft moving glow onto the floor beneath the dancer and rims the trailing edge of an arm or leg, while the leading body stays sharp and solid at the head of the streak so the form never dissolves into pure blur.
  ```
- **영상 추가**: The echoes bloom and dissolve continuously in the wake of each gesture, stretching out on fast moves and collapsing back on slow ones while always trailing behind the dominant motion; they fade cleanly so the live body reads sharp at all times.
- **페어링**: 측면 트래킹·미디엄 풀샷 구도, 카메라는 팔로우/트래킹으로 동작을 따라가고, 색감은 고대비 어두운 배경의 시네마틱 톤이 잔상을 살린다.
- **주의**: 에코를 너무 많이·진하게 깔면 피사체가 영구 흐림 이중상으로 뭉개짐 — 선두 본체는 선명하게, 잔상은 동작 호를 따라 짧게 페이드. 정지한 부위엔 잔상이 생기면 안 된다.

### 라이트 페인팅 스트릭 (Light Painting Streaks)

- **시그널**: 어둠 속에서 광원을 손으로 휘둘러 허공에 그린 자유곡선·나선의 빛 그림. 장노출 라이트페인팅 특유의 손맛을 살리고 싶을 때.
- **앵커**: `freehand light-painting light streaks` · **무드**: playful · luminous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Freehand ribbons of pure light hang suspended in the dark air, tracing the looping path of the moving source into glowing calligraphic streaks and spirals that persist where they were drawn; the strokes layer electric blue, magenta and gold with a hot overexposed core and a soft outer bloom, and they throw colored light back onto the painter's hands and face and pool faint reflections on the floor below, anchoring the floating drawing to the figure that draws it rather than letting it hover as a flat graphic.
  ```
- **영상 추가**: The streak extends continuously from the tip of the moving source, unspooling fresh glowing line as the hand sweeps while the older strokes hold steady in the air; the bright drawing point leads as the dominant motion and the painted trail lingers and slowly fades.
- **페어링**: 와이드~미디엄 정면 구도에 락오프 카메라(장노출), 색감은 깊은 블랙을 살린 어두운 톤이 빛 그림을 또렷하게 한다.
- **주의**: 스트로크가 광원의 실제 이동 경로를 무시하고 떠다니면 합성 티 — 손 궤적과 정렬할 것. 코어를 과노출시켜 색이 다 하얗게 날아가지 않게 외곽 블룸만 부드럽게.

### 네온 글로우 (Neon Glow Sign Bloom)

- **시그널**: 네온 튜브·사인이 뿜는 고채도 발광과 그 주변으로 번지는 부드러운 블룸, 젖은 바닥과 피사체 피부에 묻는 컬러 스필. 밤거리·사이버펑크 무드에.
- **앵커**: `saturated neon tube glow with bloom spill` · **무드**: electric · nocturnal · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Saturated neon tubes emit an intense magenta-and-cyan glow that blooms softly into the surrounding night air, the light spilling onto the subject's skin and wet surfaces as colored reflections and tracing tinted rim light along their edges; each tube halos with a gentle falloff while its core stays hot and slightly overexposed, pooling vivid color into the scene.
  ```
- **영상 추가**: The neon hums with a faint flicker and an occasional buzzing stutter, one segment guttering or pulsing, while reflections shimmer and shift across wet ground and skin as the subject or camera moves through the colored pools of light.
- **페어링**: 로우앵글·미디엄 구도, 핸드헬드나 느린 트래킹, 색감은 사이버펑크 네온·CineStill 800T 할레이션 톤과 환상의 짝.
- **주의**: 컬러 스필이 과하면 피사체가 단색으로 물들어 형태가 뭉개짐 — 림·하이라이트에만 묻히고 살색은 살릴 것. 네온 글자는 의미 없는 가짜 문자로 깨지기 쉬우니 텍스트는 단순·추상으로.

### 생물발광 (바이오루미네선스) (Bioluminescent Glow)

- **시그널**: 플랑크톤·버섯·생물이 스스로 내는 차가운 청록색 발광. 밤바다·심해·판타지 숲 같은 신비롭고 유기적인 빛이 필요할 때.
- **앵커**: `self-emitting bioluminescent cyan glow` · **무드**: ethereal · organic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A soft organic glow emanates from within the water, cool cyan-and-teal light beading along the disturbed surface and flaring brighter wherever the swimmer's arms break it, scattering into thousands of tiny luminous points; the light is self-emitted rather than reflected, so it under-lights the face and wet skin from below with an eerie blue cast, traces a glowing rim along each limb, and bleeds into the surrounding black water in dim drifting clouds that fade with distance.
  ```
- **영상 추가**: The glow pulses and shimmers gently, igniting in bright swirls wherever the subject moves through the water and settling back to a faint ambient shimmer in still areas; the sparkle drifts and fades slowly in a loop, never strobing.
- **페어링**: 수중·로우키 클로즈업~미디엄 구도, 느린 글라이드/언더워터 무브, 색감은 차가운 청록 도미넌트 톤(채도는 낮춰 발광에 양보).
- **주의**: 발광을 과장해 블룸이 폭발하면 신비로움 대신 형광등 — 약하게 시작하고 살은 살릴 것. 자체 발광이라 반사광처럼 보이면 안 되고, 물 전체가 균일하게 빛나면 가짜다(움직임이 닿은 곳만 밝게).

### 에너지 트레이서 궤적 (Energy Tracer Streaks)

- **시그널**: 검·주먹·발 같은 빠른 동작을 따라 흐르는 SF식 에너지 잔광 궤적. 무기 휘두름이나 타격의 호(arc)를 빛으로 강조할 때.
- **앵커**: `sweeping energy tracer streak` · **무드**: energetic · futuristic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A glowing energy tracer ribbons off the fast-moving blade, a smooth tapering streak that follows the exact arc of the swing with a hot white core fading out through electric cyan at its trailing edge; the tracer flares brightest at the tip and thins as it dissolves behind the motion, casting a sweeping rim of colored light across the warrior's arm and chest, flashing reflections off nearby metal, and briefly underlighting the face as the arc passes close before it fades clean.
  ```
- **영상 추가**: The tracer draws and dissolves with each strike, sweeping along the dominant motion of the swing and lagging slightly behind the blade before fading; it stays a single clean ribbon rather than fracturing into many, looping with each new swing.
- **페어링**: 미디엄~풀샷에 속도감 있는 휩 팬이나 트래킹, 색감은 어두운 배경의 고대비 SF 톤; 스피드램프와도 잘 맞는다.
- **주의**: 트레이서가 여러 갈래로 쪼개지거나 매 프레임 화면을 채우면 산만 — 동작 호를 따르는 한 줄 깨끗한 리본으로. 코어 과노출로 검·손이 사라지지 않게.

### 스파크·잉걸불 트레일 (Spark and Ember Trails)

- **시그널**: 타격·용접·불에서 튀어 호를 그리며 떨어지는 작은 불티와 느리게 떠오르는 잉걸불. 대장간·금속 작업·모닥불의 따뜻한 디테일을 더할 때.
- **앵커**: `arcing sparks and drifting embers` · **무드**: fiery · intimate · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Tiny white-hot sparks spray off the struck metal in arcing fans, each one trailing a thin glowing tail of orange that cools to deep red as it falls, the brightest bursts scattering off the anvil while slower embers lift and drift upward; every spark acts as its own moving pinpoint light, flickering warm highlights across the blacksmith's face and forearms and the dark workshop, glinting off the tongs and wet quench bucket, then winking out one by one as they cool into the dark.
  ```
- **영상 추가**: Sparks burst on each hammer impact and arc outward under gravity, the fast ones snapping off while slow embers float and tumble as they fade; the bursts punctuate each strike while a few drifting embers carry on continuously in the air.
- **페어링**: 클로즈업~미디엄 로우키 구도, 핸드헬드 살짝, 색감은 따뜻한 앰버 도미넌트의 어두운 톤이 불티를 돋보이게.
- **주의**: 불티를 너무 빽빽이 균일하게 뿌리면 가짜 — 타격 순간에 버스트로, 중력 따라 호를 그리며 떨어지게. 모든 불티를 흰색 최대 밝기로 두지 말고 식어가며 빨갛게.

### 반딧불 부유 입자 (Floating Firefly Motes)

- **시그널**: 황혼의 공기 속을 느리게 떠다니며 깜빡이는 반딧불·발광 입자. 여름밤·판타지 숲의 따뜻하고 몽환적인 분위기를 더하는 양념 효과.
- **앵커**: `drifting blinking firefly motes` · **무드**: dreamy · magical · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Scattered points of warm yellow-green light drift lazily through the dusk air, soft glowing motes that pulse on and fade out at their own slow rhythm and bob gently on unseen currents, the nearer ones blooming into soft round bokeh; each mote sheds a faint pool of glow onto whatever it passes, catching a leaf edge or settling a tiny warm highlight on the child's outstretched fingertips and cheek, while the deeper swarm dissolves into a soft constellation of blinking light through the trees.
  ```
- **영상 추가**: The motes drift and bob slowly while blinking on and off out of sync, a few wandering close to the subject before veering away; the swarm moves gently and continuously in a loop, never in a uniform direction.
- **페어링**: 얕은 심도 보케 클로즈업~미디엄 구도, 느린 푸시인이나 락오프, 골든아워·따뜻한 황혼 톤과 궁합.
- **주의**: 입자를 너무 많이·너무 밝게 깔면 반딧불이 아니라 별가루 떡칠 — 성기게, 제각각 깜빡이게. 깜빡임이 일제히 동기화되면 가짜이고, 근접 모트만 피사체에 빛을 묻혀야 한다.

### 혜성 꼬리 위습 (Comet Trail Wisp)

- **시그널**: 밝은 머리와 길게 흩어지는 꼬리를 가진 혜성·발광 투사체의 빛줄기. 마법 구체·유성·발사체가 화면을 가로지르는 순간에.
- **앵커**: `comet head with wispy tail` · **무드**: celestial · swift · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A bright glowing head streaks across the frame trailing a long soft wisp of light that tapers and frays into drifting vapor behind it, the core a hot white-blue that bleeds back through cyan and violet as the tail thins and dissolves; the comet throws a traveling pool of cool light onto everything it passes, briefly lighting the underside of the clouds and the silhouetted ridge below as it crosses, while the wispy tail curls and disperses in its wake rather than holding a hard edge.
  ```
- **영상 추가**: The head sweeps across in one smooth arc and the tail streams behind it, lagging and feathering out before slowly dissipating; it fires once as a single dominant traversal, the tail settling and fading after the head passes rather than looping.
- **페어링**: 와이드 구도에 빛줄기를 따라가는 빠른 팬/휩, 색감은 어두운 밤하늘 톤; 강도는 가장 밝은 머리에만.
- **주의**: 머리를 제외한 꼬리가 단단한 모서리로 남으면 혜성이 아니라 막대 — 꼬리는 흩어지며 페이드. 모든 광원에 걸지 말고 가장 밝은 머리 하나에만, 블룸 폭발 주의.

### 플라즈마 테슬라 아크 (Plasma Tesla Arc)

- **시그널**: 전극 사이를 갈라지며 튀는 흰-청자색 플라즈마 전기 아크. 테슬라 코일·과학실험·SF 전기 장치의 위험한 에너지를 표현할 때.
- **앵커**: `branching plasma tesla arc` · **무드**: electric · dangerous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Jagged plasma arcs crackle and leap between the electrodes, branching filaments of white-hot electricity fringed in electric blue-violet that fork, snap and re-form in an instant, some bolts crawling and dancing across the brass surfaces; each discharge strobes a harsh cold light across the lab and the figure nearby, throwing sharp jittering shadows and glinting hot reflections off metal, with a faint corona haze glowing around the contact points between strikes.
  ```
- **영상 추가**: The arcs flicker and jump erratically, snapping to new branching paths every instant and pulsing the surrounding light in sharp irregular bursts that loop continuously; keep this the dominant motion and pair it with a locked or very slow camera so the strobing stays readable.
- **페어링**: 미디엄 구도에 락오프 또는 아주 느린 카메라(스트로빙 가독성 위해), 색감은 차가운 시안-블루 톤; 강한 셰이크와 동시 사용 금지.
- **주의**: 아크가 너무 두껍거나 부드러운 곡선이면 전기가 아니라 끈 — 가늘고 각진 분기로. 매 프레임 꽉 채워 스트로빙하면 멀미·가독성 붕괴, 강한 카메라 셰이크와 동시 사용 금지.

### 발광 윤곽선 (글로잉 엣지) (Glowing Edge Outline)

- **시그널**: 피사체의 실루엣·윤곽선만 가는 발광 라인으로 따라 그리는 빛. 어둠 속에서 형체를 빛의 테두리로만 드러내는 SF·스타일라이즈드 룩에.
- **앵커**: `glowing contour edge outline` · **무드**: sleek · luminous · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A thin luminous line traces the entire silhouette and the major contour edges of the figure, a bright cyan outline with a hot core and a soft outer bloom that follows every curve of shoulder, jaw and hand while the body's interior stays in shadow; the glowing edge reads as emitted light, casting a faint cool wash onto the floor and the dark air immediately around the subject and brightening along the contours that face the camera, so the form is defined almost entirely by its own radiant outline rather than by external lighting.
  ```
- **영상 추가**: The outline shimmers and pulses softly, a faint brightening pulse traveling along the contours while the line thickens and thins gently as the subject shifts; the glow breathes continuously in a loop without strobing or detaching from the edge.
- **페어링**: 어두운 배경의 미디엄~풀샷 구도, 느린 오빗이나 락오프, 색감은 딥 블랙을 살린 로우키 톤이 발광 윤곽을 살린다.
- **주의**: 윤곽선이 너무 두껍거나 불투명해지면 발광 덩어리가 되어 형체 소실 — 가는 라인 + 부드러운 외곽 블룸만. 내부까지 빛나면 림이 아니라 통발광이 되니 내부는 어둡게 유지.

## 홀로그램 · 스캔 · 광학 오버레이 (Hologram, Scan & Optical Overlay)


### 홀로그램 플리커 (홀로그래픽 프로젝션) (Holographic Projection Flicker)

- **시그널**: 반투명 청록 홀로그램 영상이 허공에 떠 스캔라인과 함께 깜빡이고 가장자리가 글리치처럼 떨리는 SF 광학 투사가 필요할 때. 회의·관제·콘솔 위 데이터 표출 장면에 쓴다.
- **앵커**: `translucent cyan hologram with scanlines and flicker` · **무드**: sci-fi · ethereal · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A translucent cyan-blue holographic image hovers in mid-air above its emitter, built from fine horizontal scanlines and a faint volumetric grain, semi-transparent so the background reads clearly through it; it casts a soft cool glow onto nearby surfaces and the subject's face, its edges jittering with intermittent flicker and a thin chromatic fringe as the projection settles.
  ```
- **영상 추가**: The hologram refreshes with rolling scanline sweeps and a cycling vertical brightness wipe, occasionally glitching, jumping, or briefly dropping out before snapping back as it rotates or updates; loops continuously.
- **페어링**: 미디엄/오버숄더 구도와 잘 맞고, 느린 푸시인이나 고정 샷, 차갑고 어두운 청록 톤에 얹으면 발광이 산다.
- **주의**: 너무 불투명하면 홀로그램이 아니라 그냥 발광 물체로 보임 — 반투명·배경 비침이 핵심. 스캔라인이 화면 전체를 덮지 않게 투사 부피 안에만 두고, 깜빡임이 과하면 정신없어진다.

### HUD 스캔 오버레이 (HUD Scan Overlay)

- **시그널**: 헬멧·콕핏·스마트글라스 시점에서 화면 위에 깔리는 반투명 전술 UI — 브래킷·게이지·그리드와 위에서 아래로 쓸고 가는 스캔 밴드가 필요할 때. POV·1인칭 컷에 쓴다.
- **앵커**: `translucent heads-up display overlay` · **무드**: tactical · futuristic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A translucent heads-up display overlays the frame in thin cyan and amber vector graphics — corner brackets, segmented arcs, a grid horizon line and small abstract readout glyphs — floating flat against the lens as if etched on glass, while a soft horizontal scan band sweeps down the frame and momentarily brightens every element it crosses. The interface sits semi-transparent so the subject reads clearly beneath it, throwing only a faint cool glow into the highlights, each line crisp and lightly aliased like a live projected overlay rather than a painted graphic.
  ```
- **영상 추가**: The scan band sweeps top to bottom on a slow loop while bracket elements lock, twitch and re-register to the subject, readouts ticking and flickering subtly without ever fighting the camera move.
- **페어링**: POV/오버숄더 구도, 핸드헬드나 느린 트래킹, 차갑고 저채도인 밀리터리 톤과 잘 맞는다.
- **주의**: 텍스트·숫자가 가짜 글자로 깨지기 쉬움 — 글리프는 추상·최소로. 오버레이가 불투명하거나 너무 빽빽하면 피사체를 가려 가독성이 무너진다.

### 타게팅 레티클 (락온 추적) (Targeting Reticle Tracking)

- **시그널**: 움직이는 피사체를 따라붙어 잠기는 조준 레티클 — 코너 브래킷이 안으로 스냅되며 락온되고 상태 글리프가 적색으로 점멸하는 추적 UI가 필요할 때. 추격·저격·드론 추적 컷에 쓴다.
- **앵커**: `lock-on targeting reticle brackets` · **무드**: tactical · predatory · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A targeting reticle hovers over the subject — a thin square of corner brackets around a center crosshair and fine tick marks — snapping inward to lock onto the moving figure, ringed by a slowly rotating range scale and an abstract status glyph that pulses from amber to red as it acquires. The reticle reads as a flat translucent overlay pinned to the lens, throwing a faint colored glow only into the nearest highlights, its brackets jittering and re-centering each time the subject shifts while smaller secondary boxes flick onto background objects and dismiss.
  ```
- **영상 추가**: The brackets chase and snap onto the subject with a quick ease-in lock, the range ring spinning steadily while the status glyph blinks faster as the target centers; loops as the figure moves through frame.
- **페어링**: 망원 압축의 미디엄/풀샷, 팔로우 트래킹이나 핸드헬드 추적, 차가운 밀리터리 톤과 잘 맞는다.
- **주의**: 레티클이 피사체를 못 따라가 어긋나면 즉시 가짜 — 락온 박스는 항상 피사체 중심에 정렬해야. 숫자·글자는 추상으로, 박스를 화면 가득 채우지 말 것.

### 와이어프레임 포인트클라우드 스캔 (Wireframe Point-Cloud Scan)

- **시그널**: 스캔 평면이 피사체를 훑으며 표면을 삼각 와이어프레임과 점군으로 디지털화하는 캡처 장면이 필요할 때. 모션캡처·디지타이징·스캐닝 연출에 쓴다.
- **앵커**: `glowing wireframe point-cloud mesh` · **무드**: digital · analytical · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A scanning plane passes over the subject and converts their surface into a glowing wireframe of fine triangulated lines and a dense cloud of tiny luminous points, the mesh clinging exactly to every contour — face, shoulders, the folds of clothing — in cool cyan with hotter white vertices where the scan front is still resolving. The point cloud builds progressively behind the sweep, semi-transparent so the real figure shows through the lattice, and casts a faint blue rim glow along the edges it traces while stray points drift loose and re-snap to the surface.
  ```
- **영상 추가**: A horizontal scan line sweeps over the figure once, points blooming into existence behind it and settling onto the surface with a faint shimmer before the mesh holds or dissolves; fires as a single build-up pass.
- **페어링**: 미디엄/풀샷의 중앙 구도, 느린 오빗이나 고정 샷, 차가운 청록 톤과 잘 맞는다.
- **주의**: 와이어프레임이 피사체 표면에서 떠 들뜨면 가짜 — 점·선이 윤곽에 정확히 밀착해야. 격자가 너무 빽빽하면 형체가 사라지니 배경 비침을 유지할 것.

### 라이다 뎁스 스캔 스윕 (Lidar Depth Scan Sweep)

- **시그널**: 어둠 속에서 한 점으로부터 점군 파동이 방사형으로 퍼지며 거리별 색으로 공간을 드러내는 라이다 스캔이 필요할 때. 동굴·폐허·야간 정찰 같은 어두운 환경 탐사 컷에 쓴다.
- **앵커**: `radial lidar depth scan sweep` · **무드**: digital · exploratory · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  A radial lidar sweep washes outward from the subject's position, expanding rings of fine points that paint every surface they touch into a depth-graded point cloud — near geometry in warm amber, far walls falling to deep blue — revealing the dark environment only where the pulse has passed. The points cling to floor, walls and the subject's silhouette, glowing faintly and fading behind the advancing wavefront, a soft rim of light brushing the figure as the ring crosses them before the surfaces dissolve back into black between sweeps.
  ```
- **영상 추가**: A ring of points expands outward from a single origin in one smooth pulse, illuminating surfaces as it passes then dimming behind it, a fainter second sweep trailing after; fires as a single expanding wave.
- **페어링**: 와이드/익스트림 와이드의 로우앵글, 고정 또는 느린 푸시인, 어두운 배경에 거리별 depth 그라데이션 톤과 잘 맞는다.
- **주의**: 스윕이 지난 뒤에도 점이 영구히 남아 화면을 채우면 가짜 — 파면 뒤로 페이드해야. depth 색상이 실제 거리와 어긋나면 깊이감이 깨진다.

### 이중 노출 블렌드 (Double Exposure Blend)

- **시그널**: 인물 실루엣 안에 풍경·숲이 비쳐 두 이미지가 겹쳐 보이는 시적 이중 노출이 필요할 때. 감성 포스터·앨범 커버·서정적 인물 컷에 쓴다.
- **앵커**: `double exposure silhouette blend` · **무드**: dreamy · poetic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The subject's silhouette is filled with a second exposure, a ghostly forest bleeding through their form so the overlaid scene shows brightest in the lit planes of the face and body and fades to clear in the shadows, the edges of the profile dissolving softly into a pale field. The inner imagery wraps the contour like a translucent texture rather than a flat sticker, sharing the subject's own tonal light so highlights still carry detail and the silhouette's rim stays defined, the blend kept near-monochromatic so it never fights the grade.
  ```
- **영상 추가**: The inner exposure drifts and parallaxes slowly within the silhouette — branches swaying, mist creeping — while the outer profile holds still, a gentle continuous dissolve rather than any sharp cut.
- **페어링**: 클로즈업/미디엄 프로필에 네거티브 스페이스, 고정 샷이나 아주 느린 푸시인, 단색·저채도 톤과 잘 맞는다.
- **주의**: 두 이미지가 균등하게 겹쳐 둘 다 안 보이면 실패 — 보조 이미지는 밝은 면에만 채우고 그림자는 비워 윤곽을 살릴 것. 너무 사실적이면 그냥 합성 사진처럼 보인다.

### 프로젝션 매핑 (Projection Mapping)

- **시그널**: 건물·조각·오브제 표면에 영상광이 굴곡을 따라 정확히 정합돼 흐르는 프로젝션 매핑 쇼가 필요할 때. 미디어 파사드·무대·전시 연출 컷에 쓴다.
- **앵커**: `projected light mapping onto surface` · **무드**: spectacular · kinetic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Projected light maps precisely onto the subject's surface — geometric panels, flowing color fields and abstract patterns that wrap and conform to every plane and edge of the form, appearing painted onto the architecture rather than floating in front of it. The projection casts real illumination, brightening the surfaces it strikes and dropping into true shadow in the recesses and wherever the subject occludes the beam, the mapped graphics aligning exactly to the silhouette while colors flow and bleed across the geometry, a faint haze catching the throw and spilling color onto the floor in front.
  ```
- **영상 추가**: The mapped patterns flow, morph and march across the surface in a continuous loop, color fields sweeping over the geometry while the projected light flickers subtly and the throw beam shimmers in haze.
- **페어링**: 와이드/풀샷의 정면 대칭 구도, 고정 또는 아주 느린 푸시인, 어두운 환경에 고채도 프로젝션 컬러와 잘 맞는다.
- **주의**: 패턴이 표면 굴곡을 안 따르고 평면 스티커처럼 떠 있으면 즉시 가짜 — 그래픽이 윤곽·면에 정확히 정합돼야. 프로젝션이 너무 밝으면 표면 디테일이 하얗게 탄다.

### 이리데센트 홀로그래픽 시인 (Iridescent Holographic Sheen)

- **시그널**: 표면 위로 각도에 따라 이동하는 무지개 오일슬릭 광택 — 홀로그래픽 포일·진주광 질감이 필요할 때. 패션·뷰티·패키지 제품 디테일 컷에 쓴다.
- **앵커**: `iridescent holographic foil sheen` · **무드**: glossy · dreamy · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A rainbow holographic sheen plays across the subject's surface, oil-slick bands of magenta, cyan, gold and green sliding as the angle shifts, brightest where the light grazes and catching a metallic foil-like glint along the edges. The iridescence wraps the contours of the material — pooling in folds, streaking along smooth panels — reflecting tinted highlights and throwing a faint colored bounce onto nearby surfaces, while the base form and texture still read clearly beneath the prismatic film, the color glossy and saturated yet soft, never opaque.
  ```
- **영상 추가**: The rainbow bands flow and migrate across the surface as the subject or light turns, hues cycling smoothly in a continuous loop with bright specular glints sliding along the edges.
- **페어링**: 클로즈업/제품 디테일에 얕은 심도, 느린 오빗이나 회전, 어두운 배경에 깨끗한 하이라이트와 잘 맞는다.
- **주의**: 무지개가 표면 전체를 균일하게 덮어 형태가 사라지면 실패 — 각도에 따라 밴드가 이동하고 base 재질이 비쳐야. 채도가 과하면 color-grade를 덮어쓴다.

### 증강현실 데이터 태그 (Augmented-Reality Data Tags)

- **시그널**: 장면 속 사물·인물 옆에 리더라인으로 연결된 반투명 콜아웃 태그가 떠다니며 대상을 추적하는 AR 인터페이스가 필요할 때. 스마트글라스 POV·미래 도시·분석 화면에 쓴다.
- **앵커**: `floating AR data callout tags` · **무드**: futuristic · informational · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Translucent augmented-reality data tags float beside the objects and people in the scene, small rounded callout panels tethered by thin leader lines to their anchor points — each carrying abstract bars, tiny icons and minimal glyph readouts in cool cyan and white — hovering flat in space yet tracking their targets as the view shifts. The tags read semi-transparent so the scene shows through them, glowing softly and casting only a faint tint into nearby highlights, brackets popping in with a quick scale as objects enter frame and dismissing as they leave, their few readouts kept sparse and abstract.
  ```
- **영상 추가**: Tags pop in with a fast ease-out scale and then hold, gently bobbing and re-anchoring to their targets as the camera moves and readout bars tick subtly; loops continuously without sharp jumps.
- **페어링**: 와이드/미디엄에 전경-중경-배경 레이어, 느린 트래킹이나 POV, 차갑고 깨끗한 톤과 잘 맞는다.
- **주의**: 태그 텍스트가 가짜 글자로 깨지기 쉬움 — 글리프는 최소·추상으로, 리더라인은 실제 앵커에 연결할 것. 태그가 너무 많거나 불투명하면 화면이 산만해진다.

### 프리즘 색분산 (크로매틱 디스퍼전) (Prismatic Chromatic Dispersion)

- **시그널**: 빛이 프리즘·크리스털을 통과하며 스펙트럼으로 갈라져 피사체와 표면 위로 가는 무지개 띠와 색수차 프린지를 흩뿌리는 광학 분산이 필요할 때. 역광 인물·크리스털·유리 디테일 컷에 쓴다.
- **앵커**: `prismatic spectral light dispersion` · **무드**: luminous · spectral · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A beam of light refracts into a full spectrum, splitting into a fan of rainbow bands that sweep across the subject and spill a soft prismatic streak over their skin and the surrounding surfaces, red bleeding through to violet along the edge of the cast. The dispersion fringes bright highlights and reflective edges with thin spectral rims of cyan-to-magenta, the colored light grazing the contours where the beam lands and falling off into clean shadow elsewhere, faint refracted caustics dancing on the floor, the spectrum kept delicate and translucent so it tints rather than repaints the scene.
  ```
- **영상 추가**: The rainbow fan sweeps and slides across the subject as the light or prism turns, spectral bands stretching and compressing with a slow drift while caustics ripple gently on the floor; loops continuously.
- **페어링**: 클로즈업/미디엄의 역광 구도, 느린 오빗이나 랙포커스, 어두운 배경에 깨끗한 하이라이트와 잘 맞는다 (틸 앤 오렌지 등 강한 그레이드와는 충돌 주의).
- **주의**: 스펙트럼이 화면 전체를 무지개로 덮어 피사체를 물들이면 실패 — 가는 띠로 윤곽·하이라이트에만 걸 것. 채도가 과하면 color-grade와 싸우니 VFX 채도를 낮춰 양보한다.

## 글리치 · 디지털 손상 (Glitch & Digital Corruption)


### RGB 채널 분리 글리치 (RGB Channel Split Glitch)

- **시그널**: 적·녹·청 색 채널이 좌우로 어긋나 가장자리에 컬러 프린지가 생기고, 수평 슬라이스가 밀리며 신호가 손상된 듯한 디지털 글리치. 사이버펑크·해킹·고장난 신호 연출에.
- **앵커**: `RGB channel split with horizontal slice displacement` · **무드**: corrupted · digital · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The red, green, and blue channels separate and shift apart horizontally over the subject, fringing every edge with offset cyan-and-magenta ghosting, while thin horizontal slices of the image tear and displace sideways as if the signal is breaking up; the corruption stutters in sharp bursts, punctuated by momentary blocks of compression mosaic and a faint scanline crawl. The doubled edges glow faintly where the cold monitor light rims the subject's face, the split widening on motion before the picture momentarily resolves clean.
  ```
- **영상 추가**: The channel offset jitters and pulses in stuttering bursts, slices snapping to new positions frame to frame, with intermittent freeze-frame hitches and pixel smearing that drags color into the next motion before the image resolves clean again; fires in short bursts rather than looping.
- **페어링**: 정면 클로즈업·POV 구도와 고정 또는 미세 핸드헬드 무브에 가장 잘 박힌다(강한 카메라 무브와 겹치면 멀미). 사이버펑크 네온이나 차가운 틸 그레이드와 어울린다.
- **주의**: 글리치를 매 프레임 꽉 채우면 형체를 알아볼 수 없음 — 짧은 버스트로 간헐적으로, 사이사이 깨끗한 프레임을 둘 것. 채널 분리가 과하면 피사체가 영구히 흐릿한 이중상으로 남는다.

### 데이터모시 픽셀 블리드 (Datamosh Pixel Bleed)

- **시그널**: 한 동작이 다음 프레임으로 번지며 픽셀이 뭉개져 끌려가 잔상처럼 녹아 흐르는 디지털 손상. 동작이 액체처럼 용해되는 몽환적·불안한 전환에.
- **앵커**: `datamosh pixel bleed smear` · **무드**: surreal · decayed · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Blocks of the image smear and bleed in the direction of motion, dragging the subject's color and detail forward into the next frame so edges dissolve into soft melting pixel trails; the bloom carries warped chunks of the background through the figure, mixing skin tone and ambient light into one another as keyframes drop and the picture liquefies. Where the subject moves fastest the smear stretches longest, pulling rim highlights into long painterly streaks before the image briefly snaps back to a clean, sharp frame.
  ```
- **영상 추가**: The pixel bleed builds as motion accelerates, dragging smeared blocks forward in fluid streaks, then resolves to a clean frame in short bursts; fire once on a hard movement or cut rather than looping continuously.
- **페어링**: 빠른 회전·도약 동작과 트래킹·휘프팬 무브에서 가장 극적이다. 채도를 살짝 죽인 시네마스코프나 워시드 톤이라야 끌리는 픽셀의 색이 또렷이 읽힌다.
- **주의**: 매 프레임 번지게 두면 피사체가 영원히 녹아 형체가 사라짐 — 깨끗한 프레임과 교차해 버스트로. 너무 약하면 그냥 모션블러로 보이니 블록 단위로 끌리는 '디지털' 질감을 살려야 한다.

### CRT 스캔라인·인터레이스 (CRT Scanlines and Interlace)

- **시그널**: 브라운관 모니터 특유의 가는 수평 주사선과 필드 간 인터레이스 깜빡임, 인광 글로우와 곡률. 레트로·감시카메라·구형 방송 룩에.
- **앵커**: `CRT scanlines and interlace flicker` · **무드**: retro · analog · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Fine dark horizontal scanlines lay evenly across the whole frame with a faint interlace shimmer between alternating fields, the picture softened by a gentle phosphor glow and a subtle barrel curvature toward the screen edges; the brightest parts of the subject bloom and bleed slightly past the scanlines, haloed in a soft phosphor smear while highlights pulse with a faint interlace flicker. A thin black mask and rounded corners frame the image, grounding it as light emitted from a curved glass tube rather than a flat digital plate.
  ```
- **영상 추가**: The scanlines hold steady while a faint interlace flicker rolls between fields and a slow brightness pulse breathes across the tube; loops continuously as a persistent low-weight texture.
- **페어링**: 정면 미디엄·클로즈업과 고정 카메라에 얹는다. 80년대 VHS 빈티지나 인광 그린·앰버 모노 그레이드와 짝이 좋고, 버티컬 홀드 롤과 겹쳐 쓰면 완성도가 오른다.
- **주의**: 주사선이 너무 굵거나 촘촘하면 얼굴 디테일이 가려져 줄무늬 덩어리가 됨 — 가늘고 은은하게, 곡률·인광 글로우와 함께 써야 '브라운관'이지 단순 줄무늬가 아니다.

### VHS 트래킹 아티팩트 (VHS Tracking Artifact)

- **시그널**: 비디오테이프 트래킹이 안 맞을 때 화면 하단에 생기는 찢김·노이즈 밴드와 색번짐, 워블. 홈비디오·90년대 캠코더 향수 연출에.
- **앵커**: `VHS tracking noise band and warp` · **무드**: nostalgic · degraded · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  A band of torn tracking noise and warped static rolls through the lower frame, the image above it smeared with soft chroma bleed where saturated colors drag sideways past their edges; the tape warble bends the picture with a wobbling horizontal jitter and a faint head-switching glitch at the very bottom. The subject's bright edges halo into milky chroma noise and timecode-style highlights bloom and trail, the whole picture sitting under a soft analog haze and rounded-off detail as if dubbed from a worn cassette.
  ```
- **영상 추가**: The tracking band crawls and jitters upward while the picture warbles with a slow horizontal wobble and occasional head-switching tears; loops continuously, the noise band drifting rather than firing once.
- **페어링**: 핸드헬드 홈비디오 구도와 살짝 흔들리는 핸드헬드 무브에 환상적이다. 색바랜 80~90년대 VHS 그레이드(채도 낮고 마젠타로 틀어진 톤)와 함께 쓰면 시대감이 산다.
- **주의**: 트래킹 노이즈를 화면 전체에 깔면 그냥 지저분하게만 보임 — 밴드는 하단 일부에, 색번짐은 채도 높은 가장자리에만. 워블이 과하면 멀미가 난다.

### 픽셀 소팅 (Pixel Sorting)

- **시그널**: 픽셀이 밝기·색 순서대로 한 방향으로 줄줄 늘어져 흘러내리는 데이터 손상. 초현실적 용해·해체 이미지에.
- **앵커**: `directional pixel sort streaks` · **무드**: surreal · glitched · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  Streaks of pixels stretch and reorder along one axis, pulling the subject's colors into long smooth vertical ribbons sorted light-to-dark so solid forms melt downward into combed bands of color; the sort spills from one edge of the figure and bleeds across the frame, each ribbon holding a single hue lifted from the skin, hair, or background it tore through. Where the streaks pass over highlights they drag the brightest pixels into glowing threads, the silhouette half-dissolving into a curtain of sorted color while untouched patches of the image stay razor sharp.
  ```
- **영상 추가**: The sort grows from a seed edge and streams outward in smooth ribbons, melting more of the frame before snapping back to the clean image; fires once as a transformation rather than looping.
- **페어링**: 인물 정면 포트레이트·세로 구도와 고정 또는 느린 푸시인에 잘 맞는다. 색 띠가 핵심이라 채도를 살린 그레이드를 써야 하며, 채도를 죽이면 효과 자체가 죽는다.
- **주의**: 화면 전체를 다 정렬해버리면 형체가 완전히 사라져 추상 줄무늬만 남음 — 일부 영역은 선명하게 남기고 한 방향으로만 흘려야 '정렬'로 읽힌다.

### 매크로블록 압축 손상 (Macroblock Compression Corruption)

- **시그널**: 저비트레이트 영상이 깨질 때 생기는 사각 블록 모자이크와 잘못 예측된 모션 블록의 끌림. 끊긴 스트리밍·손상된 방송 느낌에.
- **앵커**: `macroblock compression mosaic breakup` · **무드**: corrupted · digital · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The image fractures into a grid of blocky compression macroblocks, squares of averaged color freezing and smearing out of sync where the data fails, with mispredicted motion blocks dragging stale chunks of the previous frame across the subject; saturated edges quantize into stair-stepped color banding and ringing halos. The corruption clusters thickest over the fastest-moving part of the figure, blocks locking and stuttering while cleaner zones hold detail, the whole picture flattening into coarse pixel tiles before momentarily resolving.
  ```
- **영상 추가**: Macroblocks freeze and stutter in bursts, dragging stale color forward over motion before the frame snaps clean; fires in short intermittent bursts, not a continuous loop.
- **페어링**: 빠른 동작이 있는 와이드·미디엄 샷과 고정 또는 가벼운 팔로우 무브에 어울린다. 디지털·방송 톤 그레이드와 맞고, 강한 카메라 셰이크와는 겹치지 말 것.
- **주의**: 블록을 화면 전체에 균일하게 깔면 그냥 저해상 픽셀아트로 보임 — 움직이는 영역에 뭉치고, 깨끗한 영역과 대비시켜야 '압축 깨짐'으로 읽힌다.

### 신호 끊김 스태틱 버스트 (Signal Dropout Static Burst)

- **시그널**: 신호가 끊기며 화면이 백색소음 정전기로 무너졌다 복구되는 순간. 충격적 컷·긴장 고조·전환 직전에.
- **앵커**: `signal dropout into static snow` · **무드**: jarring · analog · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The picture collapses into a burst of black-and-white static snow, the subject swallowed by hissing analog noise as the signal cuts out, edged by a torn sync bar and a flash of overscan white before the image fights its way back; fragments of the figure flicker through the snow in stuttering half-frames, dragging colored noise and rolling distortion. The dropout blooms from a bright clipped flash that washes the scene to white noise then collapses to black for a beat, the recovered picture ghosting with residual static along the subject's edges.
  ```
- **영상 추가**: The image cuts to a sharp static burst with a clipped white flash, holds in hissing snow for a beat, then snaps back to picture; fires once as a hard hit rather than looping.
- **페어링**: 긴장된 클로즈업·정면 구도와 고정 카메라에 가장 강하다(컷 충격이 핵심). 차갑고 대비 강한 그레이드나 흑백과 맞고, 강한 셰이크와 겹치면 가독성이 무너진다.
- **주의**: 정전기를 너무 오래 깔면 피사체가 사라져 그냥 노이즈 화면이 됨 — 짧은 버스트로 때리고 곧 복구, 사이에 형체가 보이는 반프레임을 둘 것.

### 슬라이스 디스플레이스먼트 글리치 (Slice Displacement Glitch)

- **시그널**: 화면이 수평 띠 단위로 좌우로 어긋나 밀려 끊긴 신호처럼 보이는 글리치. 사이버펑크·디지털 손상 강조에.
- **앵커**: `horizontal slice displacement tear` · **무드**: glitched · digital · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The frame shears into horizontal slices that snap and slide sideways out of alignment, each band offset from the next so the subject's silhouette breaks into staggered, mismatched strips as if the signal is tearing; the displaced edges fringe with a thin chromatic shimmer and a faint blocky smear at every seam. The slicing concentrates over the figure, bands jittering to new offsets while the cast light and wet reflections shift discontinuously across the breaks, the picture shattering into a stack of misregistered ribbons before locking back into register.
  ```
- **영상 추가**: Horizontal slices snap to new sideways offsets in stuttering bursts, the silhouette tearing and re-stacking before the frame locks clean; fires in short bursts, not a steady loop.
- **페어링**: 전신·세로 구도 인물과 고정 또는 미세 무브에 잘 맞는다. 네온·사이버펑크 그레이드와 어울리며, RGB 채널분리와 함께 쓰면 시너지가 크다(단, 둘 다 약하게).
- **주의**: 모든 띠를 매 프레임 어긋내면 형체가 영구히 깨져 읽기 불가 — 일부 띠만 밀고, 정렬된 깨끗한 순간과 교차시킬 것.

### 버티컬 홀드 롤 (Vertical Hold Roll)

- **시그널**: 수직 동기가 안 맞아 화면이 위아래로 굴러가고 검은 동기 바가 가로지르는 구형 TV 글리치. 레트로·고장난 모니터 연출에.
- **앵커**: `vertical hold roll bar` · **무드**: retro · analog · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The picture loses vertical sync and rolls steadily upward, a thick black head-switching bar of torn noise sweeping through the frame while the image wraps around top to bottom, the subject sliding past the seam and re-entering from the other edge; the rolling band smears the picture with chroma bleed and a soft analog glow. As the bar crosses the figure it drags bright highlights into vertical streaks and flickers the phosphor glow, the whole frame breathing with the steady mechanical cadence of a mistuned tube before nearly settling and slipping again.
  ```
- **영상 추가**: The frame rolls upward at a steady mechanical pace with the black sync bar sweeping through, never quite locking; loops continuously as a smooth repeating roll.
- **페어링**: 정면 미디엄·클로즈업과 고정 카메라에 어울린다. 빈티지 CRT·VHS 그레이드나 인광 그린·앰버 모노 톤과 맞고, CRT 스캔라인과 겹쳐 쓰면 더 완성도가 높다.
- **주의**: 롤 속도가 너무 빠르면 형체를 못 알아보고 멀미만 남음 — 천천히 굴러야 하고, 동기 바는 한 줄로 또렷하게 둘 것(여러 줄로 화면을 채우면 그냥 노이즈).

### 비트크러시 포스터라이즈 (Bit-Crush Posterize)

- **시그널**: 색 계조를 확 줄여 매끈한 그라데이션이 몇 단계 색 띠로 뭉치는 비트크러시·포스터라이즈. 로파이·레트로게임·팝아트 룩에.
- **앵커**: `bit-crushed posterized color banding` · **무드**: lo-fi · graphic · **강도**: 히어로 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  The color depth crushes down to a few flat steps so smooth gradients collapse into hard posterized bands, the subject rendered in blocky quantized patches with stair-stepped contour lines marching across every soft transition; shadows clamp to one or two muddy tones and highlights snap to flat plates of pure color. A coarse ordered dither stipples the boundaries between bands, the figure's rounded forms reading as banded relief while bright spill light flattens into solid posterized shapes that cling to the contours of the face and shoulders.
  ```
- **영상 추가**: The posterized bands shift and pop as light and motion cross the quantization steps, contour lines crawling between levels; loops continuously as a persistent low-bit texture.
- **페어링**: 정면 포트레이트·그래픽한 중앙 구도와 고정 카메라에 잘 맞는다. 고채도 팝·레트로 게임 그레이드와 어울리되, 색감 블록과 채도가 싸우면 VFX 쪽이 양보한다.
- **주의**: 단계를 너무 적게 주면 얼굴이 색 덩어리로 뭉개져 누군지 알 수 없게 됨 — 형태를 읽을 만큼의 계조는 남기고, 디더링으로 띠 경계를 부드럽게 풀 것.

### 도트크롤 레인보우 모아레 (Dot-Crawl Rainbow Moire)

- **시그널**: 가는 줄무늬·체크 패턴에서 색신호가 간섭해 가장자리에 무지개빛 점이 기어다니고 모아레가 어른거리는 컴포지트 비디오 아티팩트. 빈티지 방송·레트로 디테일에.
- **앵커**: `dot-crawl rainbow moire shimmer` · **무드**: analog · iridescent · **강도**: 양념 · **타이밍**: 🔁 연속
- **VFX 블록**:
  ```
  Crawling rows of tiny rainbow dots shimmer along high-contrast edges and fine patterns, the color subcarrier beating against the detail so the subject's sharp lines fringe with iridescent red-green-blue speckle that creeps sideways; dense stripes and textures erupt into rippling moire of false color. The shimmer clusters where contrast is highest, edging the figure's outline and patterned clothing with a restless crawling sparkle while flatter areas stay calm, the false-color haze drifting like oil-slick interference over the busiest detail.
  ```
- **영상 추가**: The rainbow dots crawl steadily along edges while the moire ripples shift as detail or camera moves; loops continuously as a low-weight shimmering texture.
- **페어링**: 줄무늬·체크 의상이 있는 미디엄 샷과 고정 또는 느린 무브에 어울린다. 빈티지 컴포지트·방송 그레이드와 맞고, 단독 주효과보다 다른 아날로그 글리치의 양념으로 쓰는 게 좋다.
- **주의**: 무지개 점을 화면 전체에 깔면 그냥 노이즈 — 고대비 가장자리·잔무늬에만 기어다니게, 평평한 영역은 깨끗이 둘 것. 텍스트·세밀 패턴에 과하면 가독성이 무너진다.

### 글리치 와이프 전환 (Glitch Wipe Transition)

- **시그널**: 화면이 디지털 손상으로 무너지며 다음 장면으로 넘어가는 전환. 컷과 컷 사이를 글리치로 찢어 바꿀 때.
- **앵커**: `glitch corruption wipe transition` · **무드**: abrupt · corrupted · **강도**: 히어로 · **타이밍**: ⚡ 원샷
- **VFX 블록**:
  ```
  The frame tears itself apart to hand off to the next shot, a wave of digital corruption sweeping across the picture in displaced slices, RGB-split fringing, and blocky pixel smear that drags the subject's pixels sideways until the image shatters and the new scene bleeds through the cracks; the corruption crests as a band of static and scanline noise, edges fringing cyan-and-magenta as the old picture collapses. The wipe front glows hot where it cuts, dragging the brightest highlights into streaks and flashing the figure's silhouette before the clean incoming frame snaps into place.
  ```
- **영상 추가**: A band of glitch corruption sweeps across the frame in one fast pass, shredding the outgoing shot and revealing the next behind it; fires once as a transition, not a loop.
- **페어링**: 두 장면을 잇는 와이드·확립 샷 사이에 쓴다. 휘프팬·크래시줌 같은 빠른 무브와 타이밍을 맞추면 강력하고, 디지털·사이버펑크 그레이드와 어울린다.
- **주의**: 전환이 너무 길거나 화면을 오래 점령하면 양쪽 다 안 보이고 지저분한 노이즈만 남음 — 한 번에 빠르게 쓸고 지나가야 한다. 양쪽 장면 색감이 충돌하면 글리치 밴드에서 한쪽으로 정리할 것.
