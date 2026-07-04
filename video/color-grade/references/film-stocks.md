# 필름 스톡 에뮬레이션 (Film Stock Emulations)

코닥·후지·시네스틸 등 컬러 네거티브/리버설 스톡과 흑백 스톡. 스톡 이름은 색·그레인·할레이션을 통째로 불러오는 강한 신호지만, **반드시 색 묘사를 함께** 붙여야 한다(브랜드명만으론 약하다).

> 각 항목 구성: **시그널**(색 시그니처) / **그레이드 블록**(영어, 바로 붙여쓰기) / **영상 추가**(영상 생성 시에만) / **앵커**(있으면 룩을 고정하는 키워드) / **무드** / **주의**.
>
> 그레이드 블록은 이미지·영상 **공용**이다. 영상은 블록을 그대로 쓰고 *영상 추가* 토큰을 덧붙인다. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.



## 코닥 필름 스톡

### 코닥 포트라 400 / Kodak Portra 400

- **시그널**: 따뜻한 golden-amber 캐스트에 lifted milky 블랙, 낮은 콘트라스트와 크리미한 하이라이트 롤오프로 피부가 peachy하게 살아나는 부드러운 인물 네거티브.
- **앵커**: `Kodak Portra 400`  ·  **무드**: soft, warm, flattering
- **그레이드 블록**:
  ```
  Warm daylight white balance with a soft golden-amber cast that leans gently into the skin; low-to-medium contrast with lifted, milky blacks and a long creamy highlight rolloff that never clips harshly; restrained saturation overall while holding peachy skin warmth and soft green-gold foliage, with blues pulled back and muted; fine, barely-there grain over a smooth emulsion with no halation; overall look — Creamy Portrait Negative, soft and flattering.
  ```
- **영상 추가**: `subtle fine-grain shimmer in the shadows; gentle organic exposure breathing`
- **주의**: 가장 신뢰도 높게 인식되는 스톡 중 하나지만 'warm creamy low-contrast skin'처럼 색 묘사를 반드시 붙여야 함 — 브랜드명만 쓰면 약하다. 과하게 밀면 흔한 인스타 웜톤처럼 보일 수 있음.

### 코닥 포트라 160 / Kodak Portra 160

- **시그널**: 포트라 400보다 더 낮은 콘트라스트와 초미세 입자, 거의 pastel에 가까운 muted 톤으로 porcelain 같은 매끈한 피부를 내는 에어리한 네거티브.
- **앵커**: `Kodak Portra 160`  ·  **무드**: delicate, airy, muted
- **그레이드 블록**:
  ```
  Neutral-to-faintly-warm white balance with a delicate, almost pastel cast and no strong color bias; very low contrast with softly lifted blacks and an extremely gentle highlight rolloff that keeps whites airy; muted, desaturated palette with smooth porcelain skin, soft rose and sage tones and restrained blues; ultra-fine, nearly invisible grain over a clean smooth emulsion; overall look — Porcelain Pastel Negative, delicate and airy.
  ```
- **영상 추가**: `almost imperceptible grain texture; smooth highlight breathing on slow camera moves`
- **주의**: 포트라 400과 구분이 어려움 — 더 낮은 콘트라스트와 더 고운 입자, pastel 톤이라고 명시해야 구분된다. 자칫 밋밋하고 물빠진 느낌이 될 수 있어 색 묘사 병기 필수.

### 코닥 골드 200 / Kodak Gold 200

- **시그널**: honey-gold 웜 캐스트와 sunny yellow 하이라이트, boosted 황금빛 옐로우·웜 레드로 향수를 자극하는 골든 스냅샷.
- **앵커**: `Kodak Gold 200`  ·  **무드**: nostalgic, golden, sunny
- **그레이드 블록**:
  ```
  Warm white balance pushed toward honey-gold with a sunny yellow cast in the highlights; medium contrast with gently deep but uncrushed blacks and a warm glowing highlight rolloff; moderate saturation with boosted golden yellows, warm reds and amber skin while greens turn slightly olive-warm; modest visible grain with a nostalgic everyday emulsion feel; overall look — Sunlit Gold Snapshot, nostalgic and golden.
  ```
- **영상 추가**: `warm grain flicker in highlights; faint sunlit shimmer on motion`
- **주의**: '골든 웜 향수' 룩으로 매우 잘 인식되고 신뢰도 높음. 다만 웜을 밀면 피부가 과하게 주황/탠처럼 되니 honey-gold 캐스트라고 색을 병기해 강도를 명시할 것.

### 코닥 엑타 100 / Kodak Ektar 100

- **시그널**: cool-neutral 클린 화이트에 high saturation, electric blue와 deep red가 튀는 슬라이드급 채도의 초미세 입자 네거티브.
- **앵커**: `Kodak Ektar 100`  ·  **무드**: vivid, bold, crisp
- **그레이드 블록**:
  ```
  Neutral-to-cool white balance with clean whites and a faint cool cast; punchy high contrast with deep rich blacks and a crisp highlight rolloff; high saturation with vivid electric blues, deep reds and lush greens, the most slide-like of the color negatives; extremely fine grain over a sharp clean emulsion with no halation; overall look — Vivid Ektar Chrome-Negative, bold and crisp.
  ```
- **영상 추가**: `crisp clean motion with minimal grain churn`
- **주의**: 채도로 잘 인식되지만 피부 경고가 큼 — 얼굴이 ruddy/sunburned로 붉어지므로 얼굴 레드를 낮춰야 한다. 'high-saturation fine-grain vivid'와 함께 병기할 것.

### 코닥 엑타크롬 E100 / Kodak Ektachrome E100

- **시그널**: cool-neutral 클린 화이트와 vivid blue sky, 정확한 primaries를 살린 모던한 리버설 슬라이드 룩.
- **앵커**: `Kodak Ektachrome E100`  ·  **무드**: clean, crisp, true
- **그레이드 블록**:
  ```
  Cool-neutral white balance with clean accurate whites and a crisp blue-leaning cast in the shadows; moderate-to-high reversal contrast with clean deep blacks and a controlled highlight rolloff that holds detail; faithful saturation with notably vivid blue skies, clean cyans and accurate primaries while skin stays natural; very fine grain with a clean modern transparency texture; overall look — Clean E100 Slide, crisp and true.
  ```
- **영상 추가**: `clean stable grade with negligible grain movement`
- **주의**: '클린 모던 슬라이드 + vivid blue sky'로 잘 인식됨. 너무 깔끔해 디지털처럼 보일 위험이 있고, 피부는 대체로 안전하나 약간 cool하게 떨어지니 'neutral fine-grain reversal'로 병기.

### 코닥 코다크롬 64 / Kodak Kodachrome 64

- **시그널**: rich red-amber 바이어스와 dense한 블랙, 어스톤 위주의 깊은 채도로 National Geographic 느낌을 내는 헤리티지 슬라이드.
- **앵커**: `Kodak Kodachrome 64`  ·  **무드**: rich, timeless, earthy
- **그레이드 블록**:
  ```
  Warm white balance with a rich red-amber bias and slightly dense, dusky midtones; high contrast with deep, almost lacquered blacks and a tight highlight rolloff; rich saturation concentrated in reds, warm oranges and earthy browns while blues stay deep and slightly muted; fine grain over a dense archival emulsion with a subtly dark luminance; overall look — Kodachrome Heritage, rich and timeless.
  ```
- **영상 추가**: `dense shadow grain with a slow archival flicker on highlights`
- **주의**: 아이코닉하지만 hit-or-miss — 레드를 과하게 밀면 만화처럼 된다. 'rich reds + dense dark blacks'를 반드시 병기하고, 피부가 어둡고 sallow하게 갈 수 있어 주의.

### 코닥 비전3 250D / Kodak Vision3 250D

- **시그널**: balanced daylight의 natural 컬러와 fine cine grain, wide latitude로 부드럽고 자연스러운 시네마 데이라이트 네거티브.
- **앵커**: `Kodak Vision3 250D`  ·  **무드**: natural, filmic, balanced
- **그레이드 블록**:
  ```
  Balanced daylight white balance with neutral natural color and only the faintest warmth; gentle cinematic contrast with clean, slightly lifted blacks that hold shadow detail and a smooth wide highlight rolloff; natural moderate saturation with believable skin, balanced greens and blues and nothing pushed; fine cinema grain over a soft scannable emulsion texture; overall look — Daylight Cine Negative, natural and filmic.
  ```
- **영상 추가**: `soft fine cine-grain churn; clean shadow detail retained in motion`
- **주의**: 단독 인식력 낮음 — 어떤 '클린 시네마틱' 룩과도 헷갈린다. 'fine cine grain + wide-latitude natural color'로 명시해야 자기 색이 남고, 피부는 안전한 편.

### 코닥 비전3 500T / Kodak Vision3 500T

- **시그널**: 텅스텐 웜과 teal 섀도우, 밝은 광원 둘레의 red-orange halation으로 무드 있는 야간 시네마 룩.
- **앵커**: `Kodak Vision3 500T`  ·  **무드**: moody, cinematic, nocturnal
- **그레이드 블록**:
  ```
  Tungsten-leaning white balance that runs warm under artificial light and cool-blue when uncorrected in daylight, with cyan-teal drifting into the shadows; cinematic medium contrast with deep but detailed blacks and a soft highlight rolloff; natural saturation with warm sodium-orange practicals set against teal shadows and skin kept warm; visible cinema grain with characteristic red-orange halation glowing around bright lights; overall look — Tungsten Night Cine, moody and cinematic.
  ```
- **영상 추가**: `halation bloom pulsing around moving highlights; fine grain churn in motion; subtle gate-weave drift`
- **주의**: 색보다 halation + grain + teal 야간룩으로 인식됨 — 'halation glow + tungsten warmth' 병기 필수. daylight 미보정 시 피부가 푸르딩딩하게 떠 보일 수 있음.

### 코닥 컬러플러스 200 / Kodak ColorPlus 200

- **시그널**: vintage yellow-green tint이 깔린 muted 웜 톤, 저렴한 감성의 입자감으로 retro한 스냅샷 룩.
- **앵커**: `Kodak ColorPlus 200`  ·  **무드**: nostalgic, retro, lo-fi
- **그레이드 블록**:
  ```
  Warm white balance with a vintage yellow-green tint threading through the midtones and shadows; medium contrast with slightly murky, gently lifted blacks and a soft hazy highlight rolloff; modest saturation with warm muted reds, retro olive greens and amber skin while blues stay dull; noticeable nostalgic grain over an inexpensive, slightly soft emulsion; overall look — Retro ColorPlus Snapshot, nostalgic and lo-fi.
  ```
- **영상 추가**: `coarser grain drift; soft hazy bloom on bright windows in motion`
- **주의**: 골드와 혼동되기 쉬움 — Gold의 깨끗한 골드 대비 'muted + faint yellow-green vintage tint'으로 구분 명시. 피부가 약간 olive/sallow하게 뜰 수 있어 얼굴 주의.

### 코닥 울트라맥스 400 / Kodak UltraMax 400

- **시그널**: punchy한 medium-high 콘트라스트와 elevated saturation, 거친 입자로 vivid한 일상 스냅샷을 내는 컨슈머 400.
- **앵커**: `Kodak UltraMax 400`  ·  **무드**: punchy, vivid, everyday
- **그레이드 블록**:
  ```
  Warm-neutral white balance with a lively, slightly punchy cast; medium-high contrast with firm blacks and a snappy highlight rolloff typical of flash snapshots; elevated saturation with vivid warm reds, strong greens and bright everyday color while skin reads warm and healthy; coarser visible grain over an energetic consumer emulsion; overall look — Everyday UltraMax Snapshot, vivid and punchy.
  ```
- **영상 추가**: `lively coarse grain churn; punchy flash-lit highlight pop on motion`
- **주의**: '펀치 있고 입자 거친 일상 400 스냅샷'으로 어느 정도 인식됨. Gold보다 콘트라스트·채도·입자가 더 강하다고 구분하고, 채도 과하면 얼굴이 과하게 붉어지니 얼굴 레드는 살짝 낮출 것.

### 코닥 비전 2383 프린트 / Kodak Vision 2383 Print

- **시그널**: warm-highlight / cool-shadow 분리, teal 섀도우 크러시와 amber 하이라이트의 글로시한 극장 프린트 에뮬레이션.
- **앵커**: `Kodak Vision 2383`  ·  **무드**: glossy, cinematic, theatrical
- **그레이드 블록**:
  ```
  Warm-highlight, cool-shadow split white balance with amber-leaning brights and teal-green pushed into the darks; high theatrical contrast with deep, slightly crushed blacks and a bold glossy highlight rolloff; rich controlled saturation with warm skin, deep reds and a signature teal-and-amber separation while blues turn cinematic cyan; clean projection-print emulsion with negligible grain; overall look — Theatrical Print Emulation, glossy and cinematic.
  ```
- **영상 추가**: `stable glossy grade; deep crushed shadows holding steady in motion`
- **주의**: '필름아웃 / 극장 프린트' 룩으로 매우 잘 인식되나 teal-orange 클리셰 위험이 큼. 시그니처는 'crushed teal shadows + warm glossy highlights'. 피부가 주황으로 뜨거나 섀도우가 디테일을 삼킬 수 있어 얼굴·암부 보호.

### 코닥 에어로크롬 / Kodak Aerochrome

- **시그널**: false-color 적외선 변환으로 초록 잎이 crimson·magenta·pink로 뒤바뀌고 하늘은 cyan-blue로 남는 초현실 룩.
- **앵커**: `Kodak Aerochrome`  ·  **무드**: surreal, psychedelic, dreamlike
- **그레이드 블록**:
  ```
  Daylight white balance with a surreal false-color infrared shift; punchy contrast with clean deep blacks and a bright highlight rolloff; high saturation where living foliage is remapped to vivid crimson, magenta and candy-pink while skies and water stay cyan-blue and yellows drift toward white; fine clean reversal-style emulsion; overall look — Infrared Aerochrome, surreal and psychedelic.
  ```
- **영상 추가**: `clean bright motion; vivid pink foliage shimmering as branches move`
- **주의**: 명백히 구분되지만 극단적 — 의도적으로만 사용. 초록 식생이 있어야 룩이 읽힌다. 피부는 waxy yellow-pink로 매우 비호감이라 인물엔 부적합(초현실 의도 제외).

### 코닥 포트라 800 / Kodak Portra 800

- **시그널**: 따뜻한 앰버 베이스에 부드러운 대비, 풍부하면서도 절제된 살구빛 피부톤.
- **앵커**: `Kodak Portra 800`  ·  **무드**: warm, intimate, flattering
- **그레이드 블록**:
  ```
  Warm golden-amber temperature with gently warmed highlights and neutral-warm shadows; low-to-medium contrast, softly lifted blacks with a long toe, smooth creamy highlight rolloff; medium saturation that flatters skin through rich restrained reds and oranges with slightly muted greens; fine-to-medium grain delicate for the film speed, no halation; overall look — Portra 800, warm and intimate.
  ```
- **영상 추가**: `fine animated grain, gentle warm exposure breathing`
- **주의**: 피부 표현이 매우 안정적이고 부드러움. 다만 과하게 따뜻해지면 주황빛으로 떠 보일 수 있으니 화이트밸런스를 잡아둘 것.


## 후지 / 시네스틸 / 기타 컬러 스톡

### 후지 벨비아 50 / Fuji Velvia 50

- **시그널**: 풍경용 슬라이드 필름 특유의 극단적 채도 — emerald green과 cyan-blue가 폭발하고 red는 깊게, 높은 콘트라스트에 단단하게 떨어지는 블랙의 쨍한 발색.
- **앵커**: `Fuji Velvia 50`  ·  **무드**: vivid, electric
- **그레이드 블록**:
  ```
  Cool-neutral daylight base with a faint magenta-leaning cast in the shadows; high contrast with deep firmly-crushed blacks and a punchy, quick highlight rolloff; intensely saturated overall, pushing emerald greens, deep cyan-blues and rich crimson reds the hardest; emulates Fuji Velvia 50 slide film, clean fine grain; overall look — Velvia Landscape, vivid and electric.
  ```
- **영상 추가**: `subtle fine-grain shimmer; hold saturation stable across frames so foliage and skies do not pulse`
- **주의**: 채도가 극단적이라 인물 피부가 붉게 떠 화상 입은 듯 보이기 쉬움 — 풍경/정물용이며 클로즈업 인물엔 비추천.

### 후지 프로비아 100F / Fuji Provia 100F

- **시그널**: 벨비아보다 차분한 정통 슬라이드 — 정확하고 깔끔한 발색에 중상 채도, 살짝 쿨하고 투명한 톤.
- **앵커**: `Fuji Provia 100F`  ·  **무드**: crisp, faithful
- **그레이드 블록**:
  ```
  Neutral daylight balance with a clean, very slightly cool cast and no obvious color crossover; medium-high contrast with solid but not crushed blacks and a smooth, controlled highlight rolloff; moderately high yet balanced saturation that lifts blues and greens without skewing skin; emulates Fuji Provia 100F slide film, fine tight grain; overall look — Provia Clarity, crisp and faithful.
  ```
- **영상 추가**: `fine even grain; minimal flicker with color held steady frame to frame`
- **주의**: 깔끔하지만 개성은 약한 편 — 무드보다 정확한 색 재현이 필요할 때 적합. 피부는 무난하게 중립적으로 나옴.

### 후지 프로 400H / Fuji Pro 400H

- **시그널**: 웨딩·인물의 전설 — 파스텔 민트빛 green, 크리미한 피부, 살짝 들린 블랙과 낮은 콘트라스트의 공기감 있는 부드러움.
- **앵커**: `Fuji Pro 400H`  ·  **무드**: soft, romantic
- **그레이드 블록**:
  ```
  Cool, airy daylight base with a soft seafoam cyan-green cast in the shadows; low-to-medium contrast with gently lifted milky blacks and a long, creamy highlight rolloff; muted pastel saturation holding minty greens and soft cyans while keeping skin creamy and warm-neutral; emulates Fuji Pro 400H negative film, soft fine grain; overall look — Pro 400H Pastel, soft and romantic.
  ```
- **영상 추가**: `gentle soft grain; preserve the pastel shadow tint without it drifting between shots`
- **주의**: 시안-그린 그림자가 과하면 피부가 창백해질 수 있으니 피부는 따뜻하게 잡아둘 것. 하이라이트 살짝 과노출 시 룩이 더 살아남.

### 후지 수페리아 400 / Fuji Superia 400

- **시그널**: 90~2000년대 스냅 감성 — 살짝 초록빛 그림자, 쨍한 green·red, 약간 쿨하고 그레인 있는 일상 네거티브 룩.
- **앵커**: `Fuji Superia 400`  ·  **무드**: nostalgic, punchy
- **그레이드 블록**:
  ```
  Slightly cool daylight base with a characteristic green-leaning cast in the shadows; medium contrast with moderately deep blacks and a natural highlight rolloff; punchy saturation pushing vivid greens and reds while leaving skin slightly cool; emulates Fuji Superia 400 consumer negative film, visible everyday grain; overall look — Superia Snapshot, nostalgic and punchy.
  ```
- **영상 추가**: `lively visible grain; light random grain movement suits the consumer-film feel`
- **주의**: 그림자 그린 캐스트가 강하면 피부가 칙칙해질 수 있음 — 미드톤 피부는 살짝 따뜻하게 보정.

### 후지 에터나 (시네) / Fuji Eterna (Cine)

- **시그널**: 영화용 네거티브 — 낮은 채도와 낮은 콘트라스트, 들린 블랙의 플랫하고 부드러운 시네마틱 톤, 자연스러운 피부.
- **앵커**: `Fuji Eterna`  ·  **무드**: calm, understated
- **그레이드 블록**:
  ```
  Neutral-to-slightly-warm balance with a soft, low-key cast and gentle desaturation across the board; low contrast with softly lifted blacks and a long, gradual highlight rolloff that resists clipping; muted restrained saturation holding natural skin and earthy greens with nothing pushed; emulates Fuji Eterna cinema negative, fine cinematic grain; overall look — Eterna Cinescape, calm and understated.
  ```
- **영상 추가**: `very fine even grain; the flat profile holds shadow detail in motion with no contrast pumping`
- **주의**: 워낙 플랫해서 그레이딩 베이스로 좋지만 그대로 두면 밋밋할 수 있음. 피부는 자연스럽고 안전한 편.

### 시네스틸 800T / CineStill 800T

- **시그널**: 텅스텐 밸런스 시네 필름 — 데이라이트에선 차가운 teal/blue 그림자, 그리고 시그니처인 광원 주위로 번지는 red·orange 헐레이션 글로우.
- **앵커**: `CineStill 800T`  ·  **무드**: moody, cinematic
- **그레이드 블록**:
  ```
  Tungsten-balanced base that reads cool and teal-blue in daylight and shadow while warming under artificial light; medium contrast with deep cool blacks and a soft, blooming highlight rolloff; saturation rich in cyan-blues and neon hues, with the signature bright red-orange halation glow ringing every highlight, lamp, neon sign and specular point; emulates CineStill 800T tungsten cinema film, pronounced grain and heavy red halation bloom; overall look — 800T Neon Night, moody and cinematic.
  ```
- **영상 추가**: `animated red-orange halation bloom that swells around moving lights and passing headlights; gentle grain movement; teal shadows held steady so only the glow breathes`
- **주의**: 헐레이션 빨강이 피부 하이라이트에 번지면 인물이 붉게 달아오를 수 있으니 광원과 피부를 분리할 것. 텅스텐 밸런스라 주광에선 전체가 푸르게 식음.

### 시네스틸 50D / CineStill 50D

- **시그널**: 데이라이트 시네 필름 — 깨끗하고 고운 입자, 자연스러운 발색에 살짝 쿨, 하이라이트에 은은한 red 헐레이션만 살짝.
- **앵커**: `CineStill 50D`  ·  **무드**: clean, refined
- **그레이드 블록**:
  ```
  Clean daylight balance with a faint cool cast and accurate, natural color; medium contrast with controlled blacks and a smooth, slightly glowing highlight rolloff; balanced natural saturation with gently lifted blues and skin kept true; emulates CineStill 50D daylight cinema film, very fine grain with only a subtle red halation kissing the brightest highlights; overall look — 50D Daylight Cine, clean and refined.
  ```
- **영상 추가**: `subtle red halation that lightly blooms on bright specular highlights in motion; very fine, quiet grain`
- **주의**: 헐레이션이 800T보다 훨씬 약하니 과하게 빨간 글로우는 금물. 피부는 자연스럽고 안전한 편.

### 아그파 비스타 / Agfa Vista

- **시그널**: 유럽풍 따뜻한 컨슈머 네거티브 — 강한 red·yellow, 쨍한 채도, 살짝 붉고 따뜻한 캐스트의 향수 어린 발색.
- **앵커**: `Agfa Vista`  ·  **무드**: vibrant, nostalgic
- **그레이드 블록**:
  ```
  Warm daylight base with a reddish-amber cast through the midtones; medium-high contrast with fairly deep blacks and a natural highlight rolloff; bold saturation pushing warm reds, oranges and yellows the hardest while greens stay lush; emulates Agfa Vista consumer negative film, modest grain; overall look — Vista Warmth, vibrant and nostalgic.
  ```
- **영상 추가**: `light film grain; warm cast held consistent so reds do not throb between frames`
- **주의**: 따뜻한 레드 캐스트가 강하면 피부가 지나치게 발그레해질 수 있음 — 인물은 레드를 약간 빼고 사용.

### 로모그래피 800 / Lomography 800

- **시그널**: 로모 특유의 로파이 — golden 워밍, 높은 채도, 굵은 그레인과 진한 비네팅, 예측 불가한 따뜻한 발색.
- **앵커**: `Lomography 800`  ·  **무드**: warm, lo-fi
- **그레이드 블록**:
  ```
  Warm golden base with a saturated amber cast and warm shadows; medium-high contrast with crushed blacks rolling into a heavy edge vignette and a punchy highlight rolloff; high lo-fi saturation pushing golden yellows, oranges and deep reds; emulates Lomography 800 negative film, coarse heavy grain and strong corner vignetting; overall look — Lomo Gold, warm and lo-fi.
  ```
- **영상 추가**: `coarse moving grain; breathing vignette edges; slight unpredictable warm color drift between shots for the toy-camera feel`
- **주의**: 골든 캐스트+비네팅이 강해 피부가 노랗게 뜰 수 있음. 의도적 로파이 룩이니 깔끔함이 필요하면 비추천.

### 유통기한 지난 필름 룩 / Expired Film Look

- **시그널**: 색이 틀어진 빛바랜 감성 — magenta·green 크로스오버, 우윳빛 들린 블랙, 낮은 콘트라스트와 라이트릭, 탁한 색 변이.
- **앵커**: `Expired Film`  ·  **무드**: decayed, dreamy
- **그레이드 블록**:
  ```
  Unbalanced base with a magenta-and-green color crossover, warm in the highlights and sickly green in the shadows; low faded contrast with milky lifted blacks and washed, hazy highlights; muddy uneven saturation with degraded, drifting hues; emulates long-expired color negative film, clumpy uneven grain with occasional warm light-leak edges; overall look — Expired Roll, decayed and dreamy.
  ```
- **영상 추가**: `unstable grain and flicker; slow color shifts and breathing light-leak edges that drift over time for an aged, unreliable feel`
- **주의**: 그린 그림자+마젠타 크로스오버가 피부를 시체처럼 칙칙하게 만들 수 있음 — 미드톤 피부는 약간 살려둘 것. 의도된 빈티지 결함 룩.

### 폴라로이드 600 / Polaroid 600

- **시그널**: 빈티지 인스턴트 — 낮은 콘트라스트, 우윳빛 들린 블랙, 살짝 쿨한 cyan 그림자와 크리미한 따뜻한 하이라이트의 몽환적 톤.
- **앵커**: `Polaroid 600`  ·  **무드**: dreamy, faded
- **그레이드 블록**:
  ```
  Slightly cool base with a soft cyan tint in the shadows and creamy warm highlights; low contrast with milky lifted blacks and a soft, blooming highlight rolloff; gently muted, slightly faded saturation with a soft yellow-green midtone drift; emulates Polaroid 600 instant film, soft texture with a mild edge vignette and a faded chemical bloom; overall look — Polaroid Instant, dreamy and faded.
  ```
- **영상 추가**: `soft static-feeling grain; faint slow exposure bloom; keep the milky look stable so it reads as instant film, not haze`
- **주의**: 들린 블랙+시안 그림자로 피부가 칙칙해 보일 수 있으니 하이라이트 피부는 따뜻하게. 전체적으로 소프트해 디테일은 의도적으로 약함.

### 후지 인스탁스 / Fuji Instax

- **시그널**: 현대 인스턴트 — 밝고 하이키한 노출, 파스텔 톤, 살짝 cyan빛 쿨함과 부드럽고 깨끗한 발색.
- **앵커**: `Fuji Instax`  ·  **무드**: airy, cheerful
- **그레이드 블록**:
  ```
  Cool-leaning bright base with a light cyan cast and a high-key, slightly overexposed exposure; low contrast with softly lifted blacks and bright, gently clipped highlights; soft pastel saturation that keeps colors light and clean rather than punchy, skin kept bright and fresh; emulates Fuji Instax instant film, fine soft texture with a faint white-border softness; overall look — Instax Bright, airy and cheerful.
  ```
- **영상 추가**: `very fine soft grain; bright, stable exposure with no flicker for a clean modern-instant feel`
- **주의**: 하이키+시안으로 피부가 창백하게 날아갈 수 있으니 노출을 살짝 눌러 피부 혈색을 유지. 인스탁스는 폴라로이드보다 깨끗하고 밝게 잡을 것.

### 로모크롬 퍼플 / Lomochrome Purple

- **시그널**: 초록을 보라·마젠타로 뒤집는 적외선풍 컬러 시프트, 비비드한 violet 톤이 화면을 지배.
- **앵커**: `Lomochrome Purple`  ·  **무드**: surreal, dreamy, psychedelic
- **그레이드 블록**:
  ```
  Cool-neutral daylight base carrying a dominant violet-magenta color shift that pushes all foliage greens into lavender and purple while blues drift toward teal-cyan; punchy mid-to-high contrast, moderately deep blacks, gentle highlight rolloff; vivid saturation concentrated in the boosted magentas and violets, with reds and warm skin yellows left intact; medium organic film grain, no halation; overall look — Lomochrome Purple, surreal and dreamlike.
  ```
- **영상 추가**: `animated grain shimmer, subtle violet channel-shift wobble on motion`
- **주의**: 초록 잎이 보라·라벤더로 바뀌는 게 핵심 효과. 피부에 라벤더 캐스트가 끼면 병색으로 보일 수 있어 인물 클로즈업에는 과하게 쓰지 말 것.

### 로모크롬 메트로폴리스 / Lomochrome Metropolis

- **시그널**: 채도를 쫙 뺀 탁한 청록·황록 톤, 강한 대비와 짓눌린 블랙의 디스토피아 도시 룩.
- **앵커**: `Lomochrome Metropolis`  ·  **무드**: bleak, industrial, dystopian
- **그레이드 블록**:
  ```
  Cool-neutral temperature with a muddy yellow-green undertone and muted teal shadows; high contrast, crushed deep blacks, hard highlight rolloff carrying a faint milky veil; heavily reduced overall saturation that retains only dull ochre-rust reds and washed-out teal; coarse gritty film grain, no halation; overall look — Metropolis, bleak and industrial.
  ```
- **영상 추가**: `animated gritty grain flicker, faint contrast breathing`
- **주의**: 채도가 크게 빠져 피부가 잿빛으로 생기 없이 보이기 쉬움. 얼굴에는 약간의 ochre 따뜻함을 되살려 시체톤을 피할 것.

### 시네스틸 400D / CineStill 400D

- **시그널**: 데이라이트 밸런스의 자연스러운 파스텔 톤에 하이라이트 주변 붉은 할레이션 글로우.
- **앵커**: `CineStill 400D`  ·  **무드**: cinematic, nostalgic, soft
- **그레이드 블록**:
  ```
  Balanced daylight temperature leaning subtly warm with clean neutrals; medium-low contrast, softly lifted blacks, very smooth gradual highlight rolloff; natural-to-slightly-muted pastel saturation with pleasant gentle skin and soft cyan-teal skies; fine cinema grain plus the signature red-amber halation bloom glowing around bright highlights and light sources; overall look — CineStill 400D, cinematic and nostalgic.
  ```
- **영상 추가**: `red-amber halation bloom swelling on moving light sources, animated cinema grain, subtle gate weave`
- **주의**: 할레이션이 밝은 부분 가장자리를 붉게 번지게 함. 창가 인물 피부에 붉은 테가 끼지 않도록 강도를 절제할 것.


## 흑백 스톡 & 룩

### 코닥 트라이-X 400 / Kodak Tri-X 400

- **시그널**: 중간톤에 박힌 거친 은입자, 펀치감 있는 콘트라스트와 디테일이 살아있는 깊은 블랙의 정통 보도사진 흑백.
- **앵커**: `Kodak Tri-X 400`  ·  **무드**: gritty, timeless, raw
- **그레이드 블록**:
  ```
  Neutral monochrome base with a faint cool-charcoal cast in the shadows; punchy medium-high contrast, deep blacks held just short of full crush with shadow detail retained and highlights rolling off smoothly without clipping; fully desaturated with no residual color, neutral-gray tonal mapping that keeps skin in the upper-mid grays; classic Tri-X 400 rendering with pronounced sharp silver grain across the midtones and a gritty edge bite; overall look — Tri-X Reportage, gritty timeless.
  ```
- **영상 추가**: `boiling animated silver grain shifting frame to frame, subtle gate weave`
- **주의**: 입자가 두드러져 매끈한 뷰티/제품 클로즈업엔 부적합하니, 깨끗한 피부 묘사를 원하면 피할 것.

### 일포드 HP5 플러스 / Ilford HP5 Plus

- **시그널**: 관용도 높은 중간 콘트라스트, 부드러운 계조와 벨벳 같은 중간톤의 정직한 다큐멘터리 흑백.
- **앵커**: `Ilford HP5 Plus`  ·  **무드**: honest, gentle
- **그레이드 블록**:
  ```
  Neutral monochrome with a warm-gray, slightly creamy cast; forgiving medium contrast, blacks rich but open with shadow detail preserved and a long gentle highlight rolloff that protects bright skin and skies; fully desaturated with a neutral tonal scale and soft separation through the midtones; Ilford HP5 Plus rendering with moderate soft-edged grain and velvety gradation; overall look — HP5 Documentary, honest gentle.
  ```
- **영상 추가**: `gentle moving grain texture, soft luminance flicker`
- **주의**: 관용도가 높은 만큼 자칫 밋밋해질 수 있으니 명확한 광원과 콘트라스트를 확보할 것.

### 일포드 델타 3200 / Ilford Delta 3200

- **시그널**: 들뜬 우윳빛 섀도와 빛 번짐, 크고 뭉친 입자의 저조도 야간 흑백.
- **앵커**: `Ilford Delta 3200`  ·  **무드**: nocturnal, grainy, raw
- **그레이드 블록**:
  ```
  Cool monochrome with a smoky blue-gray cast in low light; low-to-medium contrast with lifted milky shadows that never reach true black and glowing slightly haloed highlights; fully desaturated, flat neutral tone with crushed separation only in the brightest speculars; Ilford Delta 3200 push rendering with large chunky clumping grain and soft luminous halation around light sources; overall look — Delta Nightpush, grainy nocturnal.
  ```
- **영상 추가**: `heavy boiling grain, flickering halation on moving practical lights, low-light noise shimmer`
- **주의**: 들뜬 섀도와 큰 입자로 디테일이 뭉개지므로 고해상 정밀 묘사엔 부적합.

### 코닥 티-맥스 100 / Kodak T-Max 100

- **시그널**: 거의 입자 없는 초미립, 날카로운 샤프니스와 길고 균일한 계조의 클린 흑백.
- **앵커**: `Kodak T-Max 100`  ·  **무드**: pristine, precise
- **그레이드 블록**:
  ```
  Clean neutral monochrome with no perceptible cast; crisp medium-high contrast with precisely placed blacks, smooth controlled highlight rolloff and a long even tonal staircase; fully desaturated, perfectly neutral grays with high microcontrast and acutance; Kodak T-Max 100 rendering, near-grainless and ultra-fine with razor-sharp edges; overall look — T-Max Clinical, pristine precise.
  ```
- **영상 추가**: `clean stable image, only the faintest fine-grain movement`
- **주의**: 너무 깨끗해 디지털처럼 보일 수 있으니, 필름 무드가 필요하면 약한 입자를 더할 것.

### 후지 아크로스 100 / Fuji Acros 100

- **시그널**: 유리알처럼 매끄러운 초미립, 깊고 깨끗한 블랙과 섬세한 하이라이트의 정적인 흑백.
- **앵커**: `Fuji Acros 100`  ·  **무드**: serene, refined
- **그레이드 블록**:
  ```
  Cool-neutral monochrome with a faint silver-blue undertone; smooth medium contrast, deep clean blacks with delicate highlight retention and a graceful gentle rolloff; fully desaturated, refined neutral grays with luminous midtone separation; Fuji Acros 100 rendering, extremely fine grain that stays smooth even in long exposures with a glassy tonal surface; overall look — Acros Stillness, serene refined.
  ```
- **영상 추가**: `very subtle stable fine grain, optional smooth long-exposure motion smear on flowing elements`
- **주의**: 콘트라스트가 과하면 깊은 블랙에서 섀도 디테일이 쉽게 막히니 노출에 주의.

### 하이콘트라스트 그래픽 흑백 / High-Contrast Graphic B&W

- **시그널**: 순백과 순흑만 남기고 중간톤을 지운 극단적 고대비 그래픽 흑백.
- **무드**: bold, stark
- **그레이드 블록**:
  ```
  Neutral monochrome with no cast; extreme high contrast collapsing toward pure black and pure white, blacks fully crushed and highlights driven to clip with minimal surviving midtones; fully desaturated, stark two-tone separation with hard edges; no grain emphasis, a clean lithographic surface; overall look — Graphic Hardline, bold stark.
  ```
- **영상 추가**: `hard edge shimmer as fine detail thresholds between black and white in motion`
- **주의**: 중간톤이 사라져 피부가 종이처럼 평평해지거나 디테일이 날아가니 인물엔 신중히 쓸 것.

### 소프트 로우콘트라스트 실버 흑백 / Soft Low-Contrast Silver B&W

- **시그널**: 들뜬 블랙과 눌린 하이라이트, 은은한 은빛 광택의 로우콘트라스트 몽환 흑백.
- **무드**: soft, ethereal, dreamy
- **그레이드 블록**:
  ```
  Warm-neutral monochrome with a soft silver sheen; very low contrast, lifted milky blacks and muted rolled-down highlights that never reach pure white, a compressed luminous gray scale; fully desaturated, gentle neutral grays carrying a faint pearly warmth; fine smooth grain over a matte silver-gelatin surface with a soft glow; overall look — Silver Mist, soft ethereal.
  ```
- **영상 추가**: `slow soft diffusion bloom drift, gentle drifting fine grain`
- **주의**: 콘트라스트가 너무 낮아 흐리멍덩해 보일 수 있으니 최소한의 검은 앵커 포인트는 남길 것.

### 필름 느와르 키아로스쿠로 / Film-Noir Chiaroscuro

- **시그널**: 강한 키라이트와 짓눌린 블랙이 조각하는 극적 명암대비의 느와르.
- **무드**: dramatic, shadowy
- **그레이드 블록**:
  ```
  Cool monochrome with a steely blue-black cast; severe high-contrast chiaroscuro, deep crushed blacks swallowing the frame, hard-edged sculpted highlights with abrupt rolloff and sharp shadow falloff; fully desaturated, dramatic neutral tone with strong specular accents; modest fine grain over a polished noir surface; overall look — Noir Chiaroscuro, dramatic shadowy.
  ```
- **영상 추가**: `animated grain, flickering practical lights, slow venetian-blind shadow drift across faces`
- **주의**: 얼굴 절반이 짙은 섀도에 묻혀 디테일이 사라질 수 있으니, 표정이 중요하면 약한 보조광을 고려.

### 적외선 흑백 / Infrared B&W

- **시그널**: 거의 검은 하늘과 새하얗게 빛나는 잎, 빛 번짐이 감도는 초현실 적외선 흑백.
- **앵커**: `Kodak HIE Infrared`  ·  **무드**: surreal, dreamlike
- **그레이드 블록**:
  ```
  Cool surreal monochrome with a faint icy cast; medium-high contrast with near-black skies and brilliant white foliage, blacks deep in clear sky and shadow while highlights bloom and glow; fully desaturated, inverted tonal logic where greens render bright and blues render dark; infrared rendering with soft luminous halation and a fine ethereal grain glow; overall look — Infrared Wood-Effect, surreal dreamlike.
  ```
- **영상 추가**: `pulsing halation bloom on wind-moved foliage, ethereal grain shimmer`
- **주의**: 피부가 창백하게 빛나고 눈·혈관이 검게 떠 시체처럼 보일 수 있으니 인물 사용엔 주의.

### 레드필터 드라마틱 스카이 흑백 / Red-Filter Dramatic Sky B&W

- **시그널**: 푸른 하늘을 짙게 눌러 흰 구름을 도드라지게 하는 드라마틱 풍경 흑백.
- **앵커**: `Red #25 filter`  ·  **무드**: majestic, theatrical
- **그레이드 블록**:
  ```
  Neutral monochrome with a clean cast; high contrast with dramatically darkened skies and luminous white clouds, deep blacks in the sky gradient and bright open highlights with smooth rolloff on the clouds; fully desaturated, red-filter tonal mapping that darkens blues and lightens reds; classic large-format landscape rendering with fine grain and crisp edge definition; overall look — Red-Filter Drama, majestic theatrical.
  ```
- **영상 추가**: `drifting darkened-sky contrast as clouds move, subtle gate weave`
- **주의**: 레드필터가 피부를 밝게 띄워 평평하게 만들 수 있으니 풍경엔 강력하나 인물엔 밋밋해짐.

### 빈티지 정색성 흑백 / Vintage Orthochromatic B&W

- **시그널**: 붉은 입술·피부는 어둡게, 푸른 하늘은 하얗게 뒤집히는 빈티지 정색성 흑백.
- **앵커**: `Ilford Ortho Plus`  ·  **무드**: vintage, haunting
- **그레이드 블록**:
  ```
  Neutral antique monochrome with a faint cool silver cast; medium-high contrast with blue skies rendering pale to white and reds plunging dark, open highlights and weighty shadows; fully desaturated, orthochromatic tonal mapping that turns red lips, ruddy skin and freckles dark while lightening blues; vintage plate rendering with fine grain and a slightly soft antique edge; overall look — Orthochromatic Antique, vintage haunting.
  ```
- **영상 추가**: `antique gate weave, light flicker, drifting dust and emulsion scratches`
- **주의**: 붉은 기 도는 피부·입술·여드름이 검고 얼룩지게 표현되어 인물에 가혹하니 의도된 빈티지 룩에만 사용.

### 신문 망점 흑백 / Newspaper Halftone B&W

- **시그널**: 짧은 계조와 망점 스크린, 신문지 잉크 질감의 인쇄 흑백.
- **무드**: pulpy, retro
- **그레이드 블록**:
  ```
  Warm-neutral monochrome with a faint newsprint-paper cream cast; high contrast with a short crushed tonal range, plugged blacks and paper-white highlights and abrupt midtone clipping; fully desaturated ink-gray tone with no color; halftone dot-screen texture simulating offset newsprint, coarse and patterned; overall look — Newsprint Halftone, pulpy retro.
  ```
- **영상 추가**: `halftone dot-screen registration jitter, slight ink-misalignment shimmer, paper-grain flutter`
- **주의**: 망점 때문에 디테일이 거칠게 뭉개지므로 고급스럽거나 미니멀한 룩엔 부적합.

### 일포드 FP4 플러스 125 / Ilford FP4 Plus 125

- **시그널**: 풀 톤 계조의 클래식 흑백, 곱고 디테일이 살아있는 실버 그레인.
- **앵커**: `Ilford FP4 Plus 125`  ·  **무드**: timeless, classic, documentary
- **그레이드 블록**:
  ```
  Neutral monochrome grayscale with no color, rendered in a clean cool-neutral silver tone; medium contrast, rich detailed blacks that hold shadow information, smooth highlight rolloff and a full continuous midtone gradation; fully desaturated black-and-white; fine classic silver-gelatin grain; overall look — FP4 Plus, timeless and documentary.
  ```
- **영상 추가**: `animated silver grain texture, subtle gate weave`
- **주의**: 흑백이라 피부는 명도로만 표현됨. 붉은 입술·홍조가 어둡게 빠질 수 있으니 인물 톤 분리를 미리 확인할 것.
