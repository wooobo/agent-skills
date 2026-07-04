# 시대 룩 & 조명/시간대 색 톤 (Era Looks & Lighting Tones)

연식·매체 아티팩트 기반 시대 룩과, 그레이드처럼 작동하는 조명·시간대 색 톤. 매체 아티팩트(스캔라인·트래킹·게이트 위브 등)는 영상 추가 노트로 분리했다.

> 각 항목 구성: **시그널**(색 시그니처) / **그레이드 블록**(영어, 바로 붙여쓰기) / **영상 추가**(영상 생성 시에만) / **앵커**(있으면 룩을 고정하는 키워드) / **무드** / **주의**.
>
> 그레이드 블록은 이미지·영상 **공용**이다. 영상은 블록을 그대로 쓰고 *영상 추가* 토큰을 덧붙인다. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.



## 시대 / 연식 룩

### 1950년대 코다크롬 아메리카나 / 1950s Kodachrome Americana

- **시그널**: 따뜻한 골든 톤 위에 진한 crimson red와 postcard-blue 하늘이 쨍하게 살아나는, 블랙이 묵직한 50년대 엽서풍 고채도 룩.
- **앵커**: `Kodachrome 25`  ·  **무드**: nostalgic, vivid, sunlit
- **그레이드 블록**:
  ```
  Warm golden color temperature with a gentle red-amber cast and clean daylight whites; punchy mid-to-high contrast with dense, slightly crushed blacks and a smooth creamy highlight rolloff; rich high saturation that favors deep crimson reds, warm sunlit yellows and saturated postcard-blue skies while keeping greens natural; fine-grained Kodachrome dye look with tight, almost invisible grain and a subtle dense-emulsion sheen; overall look — Kodachrome Postcard, nostalgic and vivid.
  ```
- **영상 추가**: `subtle animated grain shimmer, very mild gate weave on projected frames`
- **주의**: 레드와 채도가 강해 과하게 밀면 피부가 햇볕에 그을린 듯 붉게 떠서 화상 입은 톤처럼 보일 수 있음.

### 1960년대 빛바랜 테크니컬러 / 1960s Faded Technicolor

- **시그널**: magenta-cyan 크로스오버로 색이 빠진 듯하고, red는 dusty crimson으로 가라앉고 블랙이 우유빛으로 들뜬 빈티지 룩.
- **앵커**: `Technicolor three-strip dye-transfer`  ·  **무드**: wistful, faded, melancholic
- **그레이드 블록**:
  ```
  Cool-leaning neutral temperature drifting toward a faded magenta-and-cyan crossover; lowered gentle contrast with milky lifted blacks and a soft compressed highlight rolloff; faded overall saturation where reds have sunk to a dusty crimson and cyans linger in the shadows; aged Technicolor dye-transfer character with mild color crossover and very fine grain; overall look — Faded Technicolor, wistful and sun-bleached.
  ```
- **영상 추가**: `slow color-dye breathing between frames, faint flicker, sparse dust specks`
- **주의**: 시안 시프트가 섀도에 깔려 피부가 창백하고 푸르스름하게 보일 수 있으니 살구톤 미드톤은 살짝 지켜줘야 함.

### 1970년대 따뜻한 그레인 페이드 / 1970s Warm Grainy Faded

- **시그널**: amber-mustard로 누렇게 익은 톤에 올리브·오렌지가 살아나고, 거친 grain과 하이라이트 halation이 끼는 70년대 페이드 룩.
- **앵커**: `1970s Kodacolor / faded Ektachrome`  ·  **무드**: mellow, warm, sun-faded
- **그레이드 블록**:
  ```
  Warm amber-to-brown color temperature with a heavy golden-mustard cast; low-to-medium contrast with brown-tinted lifted blacks and a soft hazy highlight rolloff; muted earthy saturation that boosts oranges, mustard yellows and olive greens while letting blues fall back; pronounced visible film grain with light halation glowing around warm highlights; overall look — Seventies Faded Kodak, mellow and sun-faded.
  ```
- **영상 추가**: `active grain churn, mild gate weave, soft halation bloom pulsing on bright windows`
- **주의**: 전체가 누렇게 떠서 피부가 황달 톤처럼 보일 위험 — 하이라이트와 흰자위는 살짝 중화해 주는 게 안전.

### 1980년대 VHS 네온 비디오 / 1980s VHS Neon Video

- **시그널**: magenta-cyan 비디오 캐스트에 electric blue·hot pink가 번지는, 블랙이 들뜨고 하이라이트가 뭉개지는 아날로그 비디오 룩.
- **앵커**: `VHS analog video`  ·  **무드**: electric, lo-fi, retro
- **그레이드 블록**:
  ```
  Cool electronic color temperature with a magenta-and-cyan analog-video cast; harsh video contrast with muddy lifted blacks and hard clipped, blooming highlights; oversaturated neon palette pushing electric magenta, hot cyan and electric blue with visible chroma bleed; analog video texture with chroma smear and electronic noise instead of film grain; overall look — VHS Neon, electric and lo-fi.
  ```
- **영상 추가**: `horizontal tracking lines, head-switching noise band along the bottom, chroma smear trailing on motion, scanlines, intermittent horizontal jitter and signal roll`
- **주의**: 과채도 + 색 번짐으로 피부가 형광 핑크로 떠 인공적으로 보임 — 인물 클로즈업에서는 마젠타를 약간 빼는 게 좋음.

### 1980년대 글로시 필름 / 1980s Glossy Film

- **시그널**: magenta-teal 악센트에 deep clean black, rim light에 부드러운 bloom이 도는 광택감 있는 35mm 시네마 룩.
- **앵커**: `1980s 35mm Kodak`  ·  **무드**: glamorous, polished, glossy
- **그레이드 블록**:
  ```
  Warm-neutral color temperature with a glossy magenta-and-teal accent in shadows and highlights; high glossy contrast with deep clean blacks and a smooth filmic highlight rolloff that blooms gently around rim lights and practicals; rich punchy saturation that flatters warm skin while letting neon accents stay vivid and clean; clean fine-grain 35mm look with soft halation glow on bright sources; overall look — Eighties Glossy Film, glamorous and polished.
  ```
- **영상 추가**: `subtle animated film grain, gentle halation bloom breathing on moving practical lights`
- **주의**: 깨끗한 글로시라 피부는 안전하나, bloom을 과하게 올리면 하이라이트 디테일이 뭉개져 얼굴이 번들거릴 수 있음.

### 1990년대 초 캠코더 / Early-1990s Camcorder

- **시그널**: green-cyan 가정용 캠코더 틴트에 블랙이 들뜨고 하이라이트가 날아가는, 부드럽고 칙칙한 홈비디오 룩.
- **앵커**: `Hi8 / VHS-C camcorder`  ·  **무드**: candid, homemade, intimate
- **그레이드 블록**:
  ```
  Cool-neutral color temperature with a slight green-cyan consumer-camcorder tint; flat low video contrast with lifted washed blacks and auto-exposure blown highlights; modest, slightly muddy video saturation with hues a touch desaturated; soft electronic video texture with fine analog noise and gentle lens softness; overall look — Nineties Camcorder, homemade and candid.
  ```
- **영상 추가**: `orange date-and-time stamp in the lower corner, auto-focus hunting, auto-exposure pumping, light tape noise and occasional tracking wobble`
- **주의**: 그린 틴트가 깔려 피부가 칙칙하고 병약해 보일 수 있어 미드톤을 살짝 따뜻하게 잡아주는 게 좋음.

### 1990년대 말 뮤직비디오 / Late-1990s Music Video

- **시그널**: cross-process cyan-yellow 분리에 잉크빛 블랙, 채도를 죽이되 악센트 컬러만 쨍하게 남는 고대비 블리치바이패스 룩.
- **앵커**: `bleach bypass / cross-process`  ·  **무드**: edgy, kinetic, gritty
- **그레이드 블록**:
  ```
  Cool steely color temperature split by a cross-processed cyan-and-yellow crossover; very high contrast with inky crushed blacks and harsh clipped highlights; selectively desaturated base with punchy electric accent colors surviving in the cross-process; bleach-bypass silver-retention texture with crisp visible grain; overall look — Nineties Music Video, edgy and kinetic.
  ```
- **영상 추가**: `stepped strobe flicker, gritty grain churn, occasional frame-skip stutter`
- **주의**: 블리치 바이패스 고대비라 피부 톤이 회색빛으로 죽어 창백하고 핏기 없어 보일 수 있으니 살색은 약간 지켜줄 것.

### Y2K 초기 디지털 DV / Y2K Early Digital DV

- **시그널**: blue-leaning 디지털 톤에 green 전자기 틴트, 하이라이트가 딱 잘리고 엣지에 sharpening halo가 끼는 초기 DV 룩.
- **앵커**: `MiniDV / early digital camcorder`  ·  **무드**: clean, clinical, cold
- **그레이드 블록**:
  ```
  Cool blue-leaning digital color temperature with a faintly green electronic tint; brittle digital contrast with slightly crushed shadows and hard clipped highlights that cut off abruptly; mildly oversaturated digital primaries favoring electric blue and clean clinical hues; no film grain — fine digital noise in the shadows with over-sharpened edge halos; overall look — Y2K MiniDV, clean and clinical.
  ```
- **영상 추가**: `interlacing comb artifacts on motion, mild compression blocking in fast areas, faint edge shimmer`
- **주의**: 차가운 블루 톤이라 피부가 핏기 없이 창백하게 보일 수 있어 인물 샷에서는 미드톤 온기를 약간 더해줄 것.

### 무성영화 핸드틴트 / Silent-Era Hand-Tinted

- **시그널**: 흑백 silver 베이스 위에 rose·aqua·amber 파스텔 색이 손으로 얹힌 듯 번지는, 반투명 스텐실 컬러 룩.
- **앵커**: `Pathécolor stencil / hand-tinted nitrate`  ·  **무드**: dreamy, antique, delicate
- **그레이드 블록**:
  ```
  Monochrome silver base overlaid with hand-applied pastel tint washes leaning rose, aqua and amber; soft vintage contrast with lifted gray blacks and a gentle luminous highlight rolloff; translucent pastel color washes sitting unevenly over grayscale rather than true photographic saturation; soft orthochromatic silver emulsion with delicate fine texture and visible hand-coloring; overall look — Hand-Tinted Silent, dreamy and antique.
  ```
- **영상 추가**: `color-wash registration drift, projector flicker, drifting dust and fine scratches, gentle frame jitter`
- **주의**: 파스텔 틴트가 살갗 위에서 어긋나면 피부가 분칠한 듯 떠 보임 — 얼굴 영역엔 색 워시를 옅게 유지할 것.

### 1920년대 세피아 나이트레이트 / 1920s Sepia Nitrate

- **시그널**: amber-brown 단색 세피아에 silver bloom과 halation이 끼고, 거친 grain과 들뜬 브라운 블랙이 깔리는 골동 룩.
- **앵커**: `nitrate silver / sepia-toned print`  ·  **무드**: antique, ghostly, solemn
- **그레이드 블록**:
  ```
  Warm sepia-brown monochrome color temperature with an amber glow; soft vintage contrast with brown-tinted lifted blacks and blooming halated highlights; no true color — a single warm brown sepia tone carried throughout; nitrate silver emulsion with heavy grain, silver bloom and halation around bright areas; overall look — Sepia Nitrate, antique and ghostly.
  ```
- **영상 추가**: `heavy projector flicker, gate weave and frame jitter, drifting dust, vertical scratch hairlines, occasional emulsion blooming`
- **주의**: 세피아 단색이라 피부 톤 개념이 사라짐 — 인물 식별을 위해 명암 대비(톤 분리)는 꼭 유지할 것.

### 2010년대 인스타 필터 룩 / 2010s Instagram Filter

- **시그널**: warm 하이라이트 + teal 섀도의 split-tone에 매트하게 들뜬 블랙, 살짝 죽인 채도의 트렌디한 페이드 룩.
- **앵커**: `VSCO / early Instagram filter`  ·  **무드**: trendy, soft, casual
- **그레이드 블록**:
  ```
  Warm highlights paired with cool teal shadows in a split-toned color temperature; matte low contrast with faded, lifted washed blacks and a soft gentle rolloff; slightly muted saturation with boosted warm midtones and teal-leaning shadows; subtle faux film grain with an optional soft corner vignette and faint light leak; overall look — Insta Matte Fade, trendy and soft.
  ```
- **영상 추가**: `subtle animated grain, faint flickering light leak drifting across the frame`
- **주의**: 매트 페이드라 피부는 안전하지만 워낙 흔한 클리셰라 과하게 밀면 진부하고 평범해 보임.

### 파운드푸티지 손상 테이프 / Found-Footage Degraded Tape

- **시그널**: green-magenta 크로스오버의 병색 톤에 채도가 빠지고, dropout과 chroma noise로 뭉개진 호러풍 손상 비디오 룩.
- **앵커**: `degraded VHS tape`  ·  **무드**: eerie, decayed, unsettling
- **그레이드 블록**:
  ```
  Murky green-and-magenta crossover color temperature with a sickly cast; unstable muddy contrast with crushed murky blacks and smeared blown highlights; desaturated sickly palette with only residual magenta and green dropout color surviving; heavily degraded tape texture with dropout, smear and dense chroma noise; overall look — Degraded Found Footage, eerie and decayed.
  ```
- **영상 추가**: `white dropout streaks, tracking-error tearing, vertical signal roll, ghosting echo on motion, jittering burned-in timecode, heavy chroma noise`
- **주의**: 칙칙한 green-magenta 크로스오버로 피부가 병색/시체 톤처럼 보임 — 호러 의도가 아니라면 절대 인물 룩으로 쓰지 말 것.


## 조명 / 시간대 색 톤

### 골든아워 글로우 / Golden Hour Glow

- **시그널**: 낮게 깔린 햇빛의 허니 골드 캐스트, 따뜻한 앰버와 살짝 들린 섀도, 부드럽게 번지는 하이라이트.
- **앵커**: `Kodak Gold 200`  ·  **무드**: warm, nostalgic
- **그레이드 블록**:
  ```
  Warm low-angle sunlight, honeyed amber-gold cast washing across the frame with a faint rose undertone settling into the shadows; gently lifted blacks and a long creamy highlight rolloff that lets the sun bloom instead of clipping; rich but natural saturation, lifting golds, ambers and warm skin while cool tones sit quiet and muted; subtle fine grain with soft halation around backlit edges; overall look — Golden Hour Glow, warm and nostalgic.
  ```
- **영상 추가**: —
- **주의**: 골든아워는 피부를 예쁘게 살리지만 과하면 주황빛으로 익으니 골드 보정 강도를 절제할 것.

### 블루아워 / 트와일라잇 / Blue Hour Twilight

- **시그널**: 일몰 직후의 인디고-시안 캐스트에 지평선의 옅은 마젠타 잔광, 차분하고 낮은 채도.
- **앵커**: `Fujifilm Eterna`  ·  **무드**: calm, wistful
- **그레이드 블록**:
  ```
  Cool post-sunset twilight, deep indigo-to-cyan cast with a faint magenta band lingering where the last warmth sits near the horizon; moderate contrast with softly lifted, slightly blue-tinted blacks and a gentle highlight rolloff on any remaining skyglow; restrained saturation overall, preserving blues while letting the single warm pop of a practical light glow; light fine grain, smooth and atmospheric; overall look — Blue Hour Twilight, calm and wistful.
  ```
- **영상 추가**: —
- **주의**: 푸른 캐스트로 피부가 창백하게 죽을 수 있어 인물 근처에 따뜻한 실용광을 남겨야 함.

### 한낮 강한 직사광 / Harsh Midday Sun

- **시그널**: 중립~약간 쿨한 정오광, 강한 대비와 깊은 블랙, 쨍한 블루 하늘과 진한 그린.
- **무드**: stark, clinical
- **그레이드 블록**:
  ```
  Neutral-to-slightly-cool high-noon daylight, clean white balance with a faint sky-blue cast pooling in the open shadows; punchy high contrast with deep near-crushed blacks and abruptly clipped specular highlights; vivid saturation with a strong blue sky and dense green foliage; minimal grain, crisp and clinical; overall look — Harsh Midday Sun, stark and unforgiving.
  ```
- **영상 추가**: —
- **주의**: 정수리 그림자와 번들거림이 강조돼 인물 클로즈업에는 가혹하니 사람보다 풍경·건축에 적합.

### 흐린 날 소프트 / Overcast Soft

- **시그널**: 방향성 없는 쿨 뉴트럴-블루, 낮은 대비와 우윳빛 들린 블랙, 회색 위주의 저채도.
- **무드**: quiet, subdued
- **그레이드 블록**:
  ```
  Cool even overcast daylight, soft neutral-blue cast with no directional warmth anywhere; low contrast with milky lifted blacks and a flat, gentle highlight rolloff under a white sky; muted desaturated palette holding only soft greens and skin while greys dominate; very fine grain, smooth and diffuse; overall look — Overcast Soft, quiet and subdued.
  ```
- **영상 추가**: —
- **주의**: 전반적 저채도로 피부가 칙칙하고 평평해 보일 수 있으니 얼굴에 약간의 따뜻함을 더할 것.

### 텅스텐 실내 웜 / Tungsten Interior Warm

- **시그널**: 하이라이트로 모이는 앰버-오렌지 캐스트, 부드러운 대비와 전구 주변 할레이션.
- **무드**: cozy, intimate
- **그레이드 블록**:
  ```
  Warm tungsten interior, amber-orange cast pooling toward the highlights with cooler neutral shadows where daylight leaks in; soft contrast with gently lifted warm-tinted blacks and a smooth highlight rolloff on glowing bulbs; cozy moderate saturation favouring ambers, browns and warm wood tones; faint grain with soft halation around bare bulbs; overall look — Tungsten Warmth, cozy and intimate.
  ```
- **영상 추가**: —
- **주의**: 텅스텐 과보정 시 피부가 누렇게 떠 황달처럼 보일 수 있으니 화이트밸런스를 끝까지 밀지 말 것.

### 형광등 그린 오피스 / Fluorescent Green Office

- **시그널**: 미드톤의 칙칙한 그린-시안 캐스트, 차갑고 평평한 톤, 그린/시안만 부자연스럽게 강조.
- **무드**: clinical, uneasy
- **그레이드 블록**:
  ```
  Flat fluorescent lighting, sickly green-cyan cast across the midtones with a cold, magenta-deficient white point; low-to-medium contrast with murky lifted blacks and a hard, slightly buzzing highlight rolloff on the ceiling panels; desaturated overall except an unpleasant boost in greens and cyans; subtle grain, sterile and even; overall look — Fluorescent Office, clinical and uneasy.
  ```
- **영상 추가**: `faint fluorescent flicker, occasional tube buzz strobing on the panels`
- **주의**: 그린 캐스트가 피부에 병색을 입혀 의도적으로 불쾌·불안한 무드를 줄 때만 사용할 것.

### 나트륨등 오렌지 가로등 / Sodium-Vapor Streetlight

- **시그널**: 단색에 가까운 앰버-오렌지, 갈색 섀도와 램프의 번진 할레이션, 압축된 색감.
- **무드**: gritty, nocturnal
- **그레이드 블록**:
  ```
  Monochromatic sodium-vapor streetlight, intense amber-orange cast that collapses the palette toward a single warm hue with murky brown shadows; medium contrast with crushed warm blacks and a dirty, smeared highlight rolloff around the lamps; heavily compressed saturation where nearly all color folds into orange, only faint cyan surviving in deep shade; gritty grain with soft halation on the lamps; overall look — Sodium Street Glow, gritty and nocturnal.
  ```
- **영상 추가**: —
- **주의**: 거의 단색 주황이라 피부 톤 구분이 사라져 가면처럼 보일 수 있으니 자연스러운 인물엔 부적합.

### 네온 나이트 / Neon Night

- **시그널**: 딥 블루 베이스에 마젠타·시안·핑크 네온이 꽂히는 고채도, 빛나는 할레이션.
- **앵커**: `CineStill 800T`  ·  **무드**: vivid, cinematic
- **그레이드 블록**:
  ```
  Cool tungsten-balanced night, a deep blue ambient base stabbed with saturated magenta, cyan and electric-pink neon casts; high contrast with rich crushed blacks and blooming, glowing highlight rolloff on every light source; high saturation pushing magentas, cyans and reds while wet surfaces mirror the color; pronounced halation and fine grain in the manner of tungsten night film; overall look — Neon Night, vivid and cinematic.
  ```
- **영상 추가**: `neon sign flicker, glowing halation breathing on moving lights, color spill shifting across reflective surfaces`
- **주의**: 네온 색이 피부에 직접 떨어지면 톤이 크게 변하니 얼굴엔 약한 중립 필을 보강할 것.

### 촛불 / 모닥불 / Candle & Firelight

- **시그널**: 흔들리는 불빛의 깊은 앰버-오렌지 코어, 따뜻한 블랙과 불꽃 주변 글로우.
- **무드**: intimate, primal
- **그레이드 블록**:
  ```
  Very warm firelight, a deep amber-orange core falling off into near-black warm shadows with a faint ember-red glow at the edges; high local contrast with crushed warm blacks and a soft, glowing highlight rolloff around the flame; saturated warm hues — oranges, reds, golds — with everything cool drained away; soft grain with gentle halation on the flame; overall look — Candle & Firelight, intimate and primal.
  ```
- **영상 추가**: `animated warm light flicker, subtle exposure breathing, dancing halation on the flame`
- **주의**: 극단적 따뜻함으로 피부가 붉게 익으니 하이라이트가 순주황으로 클립되지 않게 관리할 것.

### 달빛 쿨 / Moonlight Cool

- **시그널**: 은빛 블루-시안 캐스트, 스틸 섀도와 림라이트, 차분한 저채도.
- **무드**: serene, lonely
- **그레이드 블록**:
  ```
  Cool moonlit night, a silvery blue-cyan cast with desaturated steel shadows and a faint teal in the darks; medium contrast with deep but not fully crushed blue-tinted blacks and a delicate highlight rolloff on rim-lit edges; low saturation overall, retaining only muted blues and the faint warm glow of distant windows; fine grain, clean and crisp; overall look — Moonlight Cool, serene and lonely.
  ```
- **영상 추가**: —
- **주의**: 달빛 블루가 피부 혈색을 빼앗으니 정면 필보다 림라이트로 쓰고 얼굴엔 미세한 따뜻함을 남길 것.

### 혼합광 (웜 실용광 + 쿨 앰비언트) / Mixed Practical & Ambient

- **시그널**: 따뜻한 실용광과 쿨 블루-틸 앰비언트가 공존, 웜 풀과 쿨 필드로 분리되는 톤.
- **무드**: layered, modern
- **그레이드 블록**:
  ```
  Dual-temperature mixed lighting, warm amber practicals glowing against a cool blue-teal ambient base so the frame splits into warm pools and cool fields; medium contrast with clean blue shadows and a warm highlight rolloff where the practicals bloom; balanced saturation that lets warm oranges and cool teals coexist without muddying skin; subtle grain, layered and tactile; overall look — Mixed Practical & Ambient, layered and modern.
  ```
- **영상 추가**: —
- **주의**: 인물은 따뜻한 실용광 쪽에 두어야 두 색온도 사이에서 피부 톤이 어긋나지 않음.

### 폭풍우 저채도 / Stormy Desaturated

- **시그널**: 강한 스틸-그레이 블루, 빛이 부족한 흐림, 잿빛으로 빠지는 저채도.
- **무드**: bleak, tense
- **그레이드 블록**:
  ```
  Cold stormlight, a steel-grey blue cast with a heavy light-starved overcast feel and faint green bruising in the clouds; medium-low contrast with murky lifted blacks and a flat, leaden highlight rolloff under thick cloud; strongly desaturated, draining color toward grey while keeping only dull blues and bruised greens; coarse grain, raw and bleak; overall look — Stormy Desaturated, bleak and tense.
  ```
- **영상 추가**: —
- **주의**: 강한 채도 저하로 피부가 잿빛 시체처럼 보일 수 있으니 인물은 약간 혈색을 되살릴 것.

### 안개 저대비 / Foggy Low-Contrast

- **시그널**: 쿨 뉴트럴-그레이의 진주빛 베일, 매우 낮은 대비와 들린 블랙, 거리가 흰색으로 사라짐.
- **무드**: ethereal, hushed
- **그레이드 블록**:
  ```
  Diffused foggy light, a cool neutral-grey cast with a soft pearly white veil flattening all depth; very low contrast with heavily lifted milky blacks and an extremely gentle highlight rolloff that glows into the haze; gently muted saturation holding faint cool tones and soft skin while distance dissolves to white; fine grain, dreamy and atmospheric; overall look — Foggy Low-Contrast, ethereal and hushed.
  ```
- **영상 추가**: `slow drifting fog, soft volumetric light shafts shifting through the haze`
- **주의**: 들린 블랙과 낮은 대비로 전체가 흐려 보이니 전경에 진한 톤 하나는 앵커로 남겨 둘 것.

### 수중 시안 / Underwater Cyan

- **시그널**: 적색이 흡수된 시안-틸 지배, 블루-그린 블랙과 코스틱 광선.
- **무드**: weightless, otherworldly
- **그레이드 블록**:
  ```
  Submerged underwater light, a dominant cyan-teal cast where warm reds are absorbed and shadows deepen into blue-green; medium contrast with dense blue-green blacks and a soft, scattered highlight rolloff in caustic shafts; saturation collapsed toward cyans and greens with reds nearly gone, only shallow warmth surviving near the surface; fine grain with soft light scatter; overall look — Underwater Cyan, weightless and otherworldly.
  ```
- **영상 추가**: `caustic light ripples, drifting particulate, gentle wavering refraction`
- **주의**: 적색이 흡수돼 피부가 초록빛으로 죽으니 자연스러운 톤이 필요하면 얼굴에 따뜻한 보조광을 넣을 것.

### 스크린 / 모니터 글로우 / Monitor Screen Glow

- **시그널**: 아래/정면에서 비추는 쿨 블루-화이트 화면광, 나머지는 웜-다크로 떨어지는 대비.
- **무드**: insomniac, detached
- **그레이드 블록**:
  ```
  Single-source screen glow, a cool blue-white cast lighting the subject from below or front while the rest of the room falls into warm-dark ambient; high local contrast with deep warm-black surroundings and a crisp, slightly clipped highlight rolloff on the bright panel; selective saturation — cold blue on the lit subject, muted warmth elsewhere; subtle grain, modern and isolating; overall look — Monitor Glow, insomniac and detached.
  ```
- **영상 추가**: `subtle screen-refresh flicker, shifting RGB color spill as on-screen content changes`
- **주의**: 아래에서 비추는 모니터 블루가 피부를 피곤하고 창백하게 만드니 고립된 무드용으로만 의도할 것.

### 바이오루미네선스 발광 / Bioluminescent Glow

- **시그널**: 칠흑 속을 뚫는 발광 시안·틸·마젠타, 순수 블랙과 빛에서 번지는 블룸.
- **무드**: mystical, dreamlike
- **그레이드 블록**:
  ```
  Bioluminescent darkness, near-black surroundings pierced by self-emitting cyan, electric-teal and faint magenta light; very high contrast with pure deep blacks and a soft glowing highlight rolloff that blooms outward from each source; selective high saturation on the glowing cyans and greens against an otherwise desaturated dark field; fine grain with gentle bloom and halation; overall look — Bioluminescent Glow, mystical and dreamlike.
  ```
- **영상 추가**: `slow pulsing glow, drifting motes of light, organic shimmer rippling across surfaces`
- **주의**: 발광색만 피부를 비춰 얼굴이 푸르고 어두워지니 생기를 위해 미세한 따뜻한 캐치라이트를 남길 것.

### 아나모픽 블루 렌즈 플레어 / Anamorphic Blue Lens Flare

- **시그널**: 차가운 블루 베이스 위로 하이라이트마다 길게 번지는 일렉트릭 블루 가로 스트릭과 블룸, 살짝 들린 milky 블랙이 시네마틱한 SF 톤을 만든다.
- **앵커**: `Panavision anamorphic flare`  ·  **무드**: dreamy, cinematic
- **그레이드 블록**:
  ```
  Cool neutral base with a deep electric-blue cast that concentrates in the highlights and around point light sources; medium contrast with slightly lifted, milky shadows where the flare bleeds across the frame and a soft, blooming highlight rolloff that smears bright sources into long horizontal streaks; restrained overall saturation but push cyan-blue in speculars and bright edges while keeping midtone skin neutral and lightly warm; subtle optical halation and fine grain hugging the brightest points; overall look — Anamorphic Streak, dreamy and cinematic.
  ```
- **영상 추가**: `horizontal blue flare streak that sweeps and stretches as lights move across frame, animated bloom pulsing on moving highlights, gentle lens breathing`
- **주의**: 쿨 블루 캐스트가 미드톤 피부까지 식혀 차갑게 보일 수 있으니 얼굴은 중성/웜으로 보호할 것. JJ 에이브럼스식 과한 스트릭은 클리셰 위험.

### 정면 직사 플래시 스냅샷 / Direct On-Camera Flash Snapshot

- **시그널**: 정면 직사 플래시 특유의 새하얀 핫스팟 코어와 뚝 떨어지는 배경 블랙, 붉게 상기된 채도 높은 피부가 날것의 파티 스냅 느낌을 준다.
- **앵커**: `Terry Richardson direct flash`  ·  **무드**: raw, candid
- **그레이드 블록**:
  ```
  Neutral-to-cool daylight-balanced flash with a clean white core and a faint cool-green ambient edge; high contrast with a hot, near-clipped specular hot-spot, hard and abrupt highlight rolloff and deep crushed shadows as the background falls off into black; punchy saturation with flushed warm skin and vivid reds, pushed slightly hot overall; flat snapshot grain with a darkening corner vignette from flash falloff; overall look — Direct Flash, raw and candid.
  ```
- **영상 추가**: `occasional flash-pop frames with momentary overexposure and quick recovery, slight per-frame exposure flicker`
- **주의**: 직사 플래시는 피부 질감을 날리고 이마에 번들거리는 핫스팟을 만들며 핫 코어에서 창백해지기 쉬움. 과채도 시 붉은기 과다 주의.

### 콘서트 / 무대 컬러 스포트라이트 / Concert / Stage Colored Spotlight

- **시그널**: 마젠타·시안·레드·일렉트릭 블루 무대 겔이 어둠 속 컬러 풀로 쏟아지는 초고채도 하이콘트라스트, 안개 속에서 글로우하는 빔이 시그니처.
- **앵커**: `CineStill 800T`  ·  **무드**: electric, theatrical
- **그레이드 블록**:
  ```
  Mixed multi-temperature stage lighting with saturated gel casts — magenta, cyan, deep red and electric-blue beams pooling against a dark stage; very high contrast with heavily crushed blacks and bright clipped color pools, with a moderately soft glow rolloff where beams strike haze; intense saturation pushed in the colored beams and rim light while skin reads as a colored wash rather than neutral; faint atmospheric glow blooming around each fixture; overall look — Stage Gel, electric and theatrical.
  ```
- **영상 추가**: `color-changing beams sweeping and chasing, strobe pulses, beam flicker synced to movement, slow haze drift through the light shafts`
- **주의**: 강한 컬러 겔은 피부를 마젠타/시안으로 물들여 자연 톤이 안 나오고, 블루·레드 쪽에서 시체톤이 되기 쉬움. 자연 피부가 필요하면 키 페이스 라이트로 보완할 것.

### 볼류메트릭 갓레이 / 대기 헤이즈 빔 / Volumetric God Rays / Atmospheric Haze Beams

- **시그널**: 안개·먼지 속을 가르는 황금빛 amber 광선과 우윳빛으로 들린 산란 플로어가 만드는 신비롭고 고요한 톤.
- **앵커**: `Roger Deakins atmospheric light`  ·  **무드**: ethereal, serene
- **그레이드 블록**:
  ```
  Warm golden-neutral light with amber-honey beams cutting through a hazy, dust-filled atmosphere; medium-high contrast softened by a milky, slightly lifted haze floor where light scatters, with gentle glowing highlight rolloff along each volumetric shaft; moderate saturation that warms into gold and amber within the beams while shadows fall slightly desaturated and cool; soft diffusion bloom, drifting dust specks and fine grain; overall look — God Rays, ethereal and serene.
  ```
- **영상 추가**: `drifting dust motes and haze swirling inside the beams, slow light-shaft shimmer, atmospheric particle movement, subtle volumetric flicker`
- **주의**: 웜 헤이즈가 피부를 누렇게 띄우고 콘트라스트를 죽여 얼굴 그림자면이 탁해질 수 있으니 키 라이트로 입체감 유지할 것.

### 경찰 / 비상등 레드-블루 야간광 / Police / Emergency Red-Blue Night Light

- **시그널**: 어둠 위로 레드와 블루가 번갈아 덮치는 고채도 비상등 워시, 화면을 따뜻함과 차가움으로 가르는 긴장감 있는 야간 톤.
- **앵커**: `Michael Mann night exterior`  ·  **무드**: tense, nocturnal
- **그레이드 블록**:
  ```
  Cold dark-night base lit by alternating emergency red and blue washes that split the frame into a warm-red and an icy-blue half; high contrast with crushed night blacks and bright, saturated color pools, plus a hard-edged highlight rolloff on the flashing sources; very high saturation concentrated in the red and blue while everything else stays near-desaturated and dim; light grain with reflective wet-street speculars catching the colors; overall look — Red-Blue Strobe, tense and nocturnal.
  ```
- **영상 추가**: `alternating red/blue strobe pulsing across the scene, rotating beacon sweep, flicker timing offsets, colored reflections strobing on wet pavement`
- **주의**: 레드↔블루 교대 워시로 피부가 붉게/차갑게 출렁여 블루 면에서 시체톤이 되기 쉬움. 자연 피부가 필요하면 중성 필을 약간 유지할 것.
