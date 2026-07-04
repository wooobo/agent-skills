# 시네마틱 컬러 그레이드 (Cinematic Color Grades)

헐리우드/LUT팩에서 실제로 쓰는 컬러 그레이드, 유명 영화 시그니처 룩, 무드·장르 그레이드, 스타일라이즈드/실험적 룩.

> 각 항목 구성: **시그널**(색 시그니처) / **그레이드 블록**(영어, 바로 붙여쓰기) / **영상 추가**(영상 생성 시에만) / **앵커**(있으면 룩을 고정하는 키워드) / **무드** / **주의**.
>
> 그레이드 블록은 이미지·영상 **공용**이다. 영상은 블록을 그대로 쓰고 *영상 추가* 토큰을 덧붙인다. 사용법·삽입 순서·안 통하는 것은 `SKILL.md` 참고.



## 헐리우드 / 블록버스터 그레이드

### 틸 앤 오렌지 블록버스터 / Teal & Orange Blockbuster

- **시그널**: 피부와 미드톤은 따뜻한 orange로, 그림자와 배경은 teal-cyan으로 밀어낸 전형적인 헐리우드 보색 대비 룩.
- **앵커**: `Michael Bay teal-orange blockbuster`  ·  **무드**: epic, polished
- **그레이드 블록**:
  ```
  Neutral-to-warm base with a warm orange bias pushed through midtones and skin while shadows and backgrounds drift toward teal-cyan; punchy contrast with deep but not fully crushed blacks and a smooth filmic highlight rolloff; rich saturation overall, boosting orange skin warmth and teal-cyan in shadows while taming greens; clean digital finish with a faint fine grain; overall look — Blockbuster Teal & Orange, epic and polished.
  ```
- **영상 추가**: `subtle anamorphic highlight bloom drift on moving practicals`
- **주의**: 과하게 밀면 피부가 형광 주황으로 뜨고 그림자가 청록으로 물들어 자연스러움이 깨짐; 인물은 강도를 낮출 것.

### 블리치 바이패스 / Bleach Bypass

- **시그널**: 은입자 잔류 기법처럼 채도를 빼고 대비를 극대화한 은빛 회녹색 거친 전쟁영화 톤.
- **앵커**: `Bleach bypass (Saving Private Ryan)`  ·  **무드**: harsh, steely
- **그레이드 블록**:
  ```
  Cool-neutral base with a slight silvery green-grey cast; very high contrast with crushed inky blacks, retained metallic highlights and a hard rolloff that clips toward white; heavily reduced saturation leaving only muted skin and the faintest residual color; emulating silver-retention bleach bypass with gritty grain; overall look — Bleach Bypass, harsh and steely.
  ```
- **영상 추가**: `animated coarse grain texture, faint highlight clipping shimmer on motion`
- **주의**: 채도를 너무 빼면 피부가 잿빛 시체톤이 됨; 살색은 최소한의 온기를 남겨 둘 것.

### 크로스 프로세스 / Cross-Process

- **시그널**: 현상액을 바꿔 인화한 듯 그린-옐로 미드톤과 시안 그림자, 산성톤 레드가 어긋나는 실험적 룩.
- **앵커**: `Cross-processed E-6/C-41 film`  ·  **무드**: acidic, offbeat
- **그레이드 블록**:
  ```
  Mixed temperature with a green-yellow midtone shift and cyan-pushed shadows over warm muddy highlights; elevated contrast with slightly milky blacks and blown, color-shifted highlight rolloff; uneven saturation exaggerating acidic yellow-greens and cyans while reds turn sour; emulating C-41-in-E6 cross-processed film with visible grain; overall look — Cross-Process, acidic and offbeat.
  ```
- **영상 추가**: `shifting grain, subtle channel-misregistration flicker`
- **주의**: 그린-옐로 캐스트가 피부를 병색으로 만들기 쉬움; 클로즈업에서는 강도를 크게 낮출 것.

### 데이 포 나이트 / Day-for-Night

- **시그널**: 낮 촬영분을 짙은 파란 달빛으로 어둡게 깔아 밤처럼 보이게 하는 차가운 야경 룩.
- **앵커**: `Day-for-night blue moonlight`  ·  **무드**: nocturnal, tense
- **그레이드 블록**:
  ```
  Strongly cool base with a deep blue moonlight cast across the whole frame; lifted-yet-dim exposure with rich blue-black shadows and gently rolled, underexposed highlights to fake darkness; low desaturated color keeping only cold blue and a hint of steel green while draining warmth; clean with faint grain in the shadows; overall look — Day-for-Night, nocturnal and tense.
  ```
- **영상 추가**: —
- **주의**: 파란색을 과하게 깔면 피부가 얼어붙은 청록 시체톤이 됨; 하이라이트와 눈 캐치라이트는 약간 살릴 것.

### 하이키 브라이트 & 에어리 / High-Key Bright & Airy

- **시그널**: 크리미한 화이트에 블랙을 살짝 들어올린 저대비 파스텔의 밝고 산뜻한 라이프스타일 톤.
- **앵커**: `Bright & airy lifestyle`  ·  **무드**: fresh, dreamy
- **그레이드 블록**:
  ```
  Warm-neutral base with a soft creamy white cast; low contrast with gently lifted milky blacks and a long delicate highlight rolloff that keeps the glow soft; light pastel saturation favoring peach skin, soft pinks and warm whites; clean fine-grain finish; overall look — Bright & Airy, fresh and dreamy.
  ```
- **영상 추가**: —
- **주의**: 너무 들어올리면 디테일이 날아가 밋밋해짐; 피부가 핑크로 과포화되지 않게 주의.

### 로우키 무디 다크 / Low-Key Moody Dark

- **시그널**: 깊게 짓눌린 블랙과 빛 웅덩이만 남기는 고대비 명암대비의 어둡고 내밀한 톤.
- **앵커**: `Chiaroscuro low-key`  ·  **무드**: brooding, intimate
- **그레이드 블록**:
  ```
  Cool-neutral base with a faint blue-grey cast in the shadows; very high contrast with deep crushed blacks, isolated pools of light and a controlled highlight rolloff; restrained saturation with warm accents only where light falls and shadows nearly monochrome; subtle fine grain in the darkness; overall look — Low-Key Moody, brooding and intimate.
  ```
- **영상 추가**: —
- **주의**: 블랙을 과하게 눌러 디테일이 뭉개지면 윤곽이 사라짐; 키라이트 닿는 피부톤은 따뜻하게 유지.

### 페이디드 인디 (리프트 블랙) / Faded Lifted-Blacks Indie

- **시그널**: 블랙을 매트하게 들어올린 빛바랜 필름톤에 채도를 죽인 감성 인디 룩.
- **앵커**: `Faded film / A24 matte indie`  ·  **무드**: wistful, understated
- **그레이드 블록**:
  ```
  Slightly warm base with a dusty cream cast; low contrast with noticeably lifted matte blacks and soft compressed highlights; gently muted saturation with desaturated teal-leaning shadows and warm faded skin; emulating aged faded film stock with soft grain; overall look — Faded Indie, wistful and understated.
  ```
- **영상 추가**: `gentle grain movement, faint gate weave`
- **주의**: 리프트가 과하면 전체가 뿌옇게 흐려짐; 채도까지 함께 빼면 생기 없어 보일 수 있음.

### 스플릿톤 (웜 하이라이트 / 쿨 섀도우) / Split-Tone Warm/Cool

- **시그널**: 하이라이트는 앰버, 섀도우는 블루-시안으로 나누고 미드톤은 중립으로 둔 균형 잡힌 시네마틱 룩.
- **앵커**: `Split-tone amber/teal grade`  ·  **무드**: cinematic, balanced
- **그레이드 블록**:
  ```
  Dual-temperature base with warm amber highlights and cool blue-cyan shadows meeting in neutral midtones; medium-high contrast with clean deep blacks and a smooth warm highlight rolloff; moderate saturation reinforcing the amber/teal split while keeping skin natural in the midtones; clean finish with optional faint grain; overall look — Split-Tone, cinematic and balanced.
  ```
- **영상 추가**: —
- **주의**: 스플릿 경계가 피부 중간톤을 침범하면 얼굴 절반이 푸르게 물듦; 미드톤은 반드시 중립으로 유지.

### 70년대 웜 노스탤지어 / Warm Nostalgic '70s

- **시그널**: 황금빛 담배색 캐스트에 오커-머스터드 어스톤, 헐레이션과 그레인이 깔린 70년대 코닥 필름 룩.
- **앵커**: `1970s Kodak warm film`  ·  **무드**: warm, faded
- **그레이드 블록**:
  ```
  Warm base with a golden amber-tobacco cast and a slight green-gold tint; soft contrast with milky lifted blacks and a warm hazy highlight rolloff; muted earthy saturation favoring ochre, mustard, burnt orange and warm browns while cooling blues; emulating 1970s Kodak stock with heavy halation glow and visible grain; overall look — '70s Nostalgia, warm and faded.
  ```
- **영상 추가**: `animated grain, halation bloom on warm practicals, subtle flicker`
- **주의**: 옐로-그린 캐스트가 강하면 피부가 누렇게 떠 황달톤이 됨; 따뜻함은 유지하되 과한 황색은 피할 것.

### 콜드 디새추레이티드 스릴러 / Cold Desaturated Thriller

- **시그널**: 스틸블루-시안으로 차갑게 깔고 채도를 빼 음울하고 임상적인 핀처 스타일 스릴러 톤.
- **앵커**: `Fincher cold desaturated (Se7en, Zodiac)`  ·  **무드**: clinical, bleak
- **그레이드 블록**:
  ```
  Cold base with a steel-blue and cyan cast throughout; high contrast with hard near-crushed blacks and a clinical highlight rolloff; heavily desaturated palette where only sickly blue-greens and muted skin survive and all warmth is drained; clean sharp digital finish with minimal grain; overall look — Cold Thriller, clinical and bleak.
  ```
- **영상 추가**: —
- **주의**: 채도 제거와 블루 캐스트가 겹쳐 피부가 창백한 회청색이 되기 쉬움; 살색에 최소한의 온기는 남길 것.

### 글로시 뮤직비디오 하이콘트라스트 / Glossy Music-Video High-Contrast

- **시그널**: 고채도 비비드 컬러에 깊고 광택 있는 블랙, 네온 팝이 살아 있는 매끈한 뮤직비디오 룩.
- **앵커**: `Music-video glossy hi-con`  ·  **무드**: slick, electric
- **그레이드 블록**:
  ```
  Neutral base with vivid saturated color and a faint magenta-cyan pop in the highlights; very high contrast with deep glossy blacks and crisp specular highlight rolloff; bold high saturation across reds, magentas, cyans and electric blues with punchy glowing skin; ultra-clean glossy digital finish with no grain; overall look — Glossy Music-Video, slick and electric.
  ```
- **영상 추가**: `neon highlight bloom on moving lights, punchy contrast pulse on beats`
- **주의**: 고채도+고대비가 피부를 번들거리는 오렌지로 만들 수 있음; 레드 채도 클리핑에 주의.

### 선블리치드 오버익스포저 / Sun-Bleached Overexposed

- **시그널**: 햇빛에 바랜 화이트골드 캐스트와 날아간 하이라이트, 먼지 낀 파스텔의 사막 오버노출 룩.
- **앵커**: `Sun-bleached desert overexposed`  ·  **무드**: hazy, scorched
- **그레이드 블록**:
  ```
  Warm base with a bleached white-gold cast and hot blown skies; low-to-medium contrast with washed lifted blacks and deliberately overexposed clipped highlights; faded sun-drained saturation with warm yellows and dusty pastels over desaturated shadows; emulating sun-faded film with soft grain and gentle halation; overall look — Sun-Bleached, hazy and scorched.
  ```
- **영상 추가**: `heat-haze shimmer, halation bloom on highlights, soft grain drift`
- **주의**: 하이라이트를 과하게 날리면 피부 디테일이 통째로 사라짐; 살색 하이라이트는 약간만 보존할 것.

### 어시 뮤티드 내추럴리스틱 / Earthy Muted Naturalistic

- **시그널**: 올리브-탄 어스톤 베이스에 채도를 절제한 자연광 그대로의 사실적 다큐멘터리 톤.
- **앵커**: `Deakins naturalistic earthy`  ·  **무드**: grounded, organic
- **그레이드 블록**:
  ```
  Neutral-warm base with an earthy olive-tan cast; medium contrast with soft natural blacks and a gentle organic highlight rolloff; muted naturalistic saturation favoring greens, browns, ochre and soft skin while restraining vivid primaries; clean filmic finish with subtle fine grain; overall look — Earthy Naturalistic, grounded and organic.
  ```
- **영상 추가**: —
- **주의**: 그린-올리브 캐스트가 강하면 피부가 칙칙해짐; 살색은 따뜻함을 유지하며 중립 근처로 둘 것.

### 골든아워 웜 그레이드 / Golden Hour Warm

- **시그널**: 꿀빛 골든-앰버 캐스트와 부드러운 오렌지 글로우가 감싸는 따뜻하고 로맨틱한 매직아워 룩.
- **앵커**: `Magic-hour golden warm`  ·  **무드**: warm, romantic
- **그레이드 블록**:
  ```
  Very warm base with a honeyed golden-amber cast and a soft orange glow; medium contrast with gently lifted warm shadows and a soft glowing highlight rolloff; rich warm saturation boosting golds, ambers and warm skin while keeping cool tones minimal; emulating warm film with light halation and fine grain; overall look — Golden Hour, warm and romantic.
  ```
- **영상 추가**: `halation bloom on backlight, soft lens flare drift`
- **주의**: 과한 앰버는 피부를 주황빛으로 태워 보이게 함; 따뜻함과 자연스러운 살색 사이의 균형을 유지할 것.


## 유명 영화 시그니처 룩

### 코드 그린 / Code Green

- **시그널**: 모든 그림자와 미드톤에 bottle-green이 스며든 차갑고 인공적인 디지털 모노크롬, 녹색만 살고 적·청은 회색으로 빠짐.
- **무드**: claustrophobic, synthetic, cold
- **그레이드 블록**:
  ```
  Cool neutral base flooded with a pervasive bottle-green cast that creeps into every shadow and midtone; high contrast with deeply crushed inky blacks and hard clipped specular highlights; overall saturation pulled down except the green channel — emerald and yellow-green pushed forward while reds and blues are drained toward gray; faint fine digital grain with a subtle CRT phosphor sheen; overall look — Code Green, claustrophobic and synthetic.
  ```
- **영상 추가**: `subtle CRT scanline flicker, faint phosphor trailing on bright moving edges`
- **주의**: 영화 제목만 넣으면 모델이 무시하거나 저작권 스타일로 필터링해 불안정하다; 'bottle-green 그림자 + 채도 죽은 베이스' 같은 색 단어가 룩을 실제로 결정한다. 녹색 캐스트가 강해 얼굴이 병색·시체톤이 되기 쉬우니 피부 영역은 녹색을 약하게 잡을 것.

### 더스트 앰버 & 틸 / Dust Amber & Teal

- **시그널**: 주황빛 실내와 강철 같은 teal 실외를 극단으로 가르는 거대하고 황량한 디스토피아 팔레트, 안개가 하이라이트를 부드럽게 감싼다.
- **무드**: monumental, desolate, dystopian
- **그레이드 블록**:
  ```
  Split palette swinging between dense orange-amber interiors and steel teal-cyan exteriors, with a heavy color cast on each end; medium-high contrast, soft lifted-but-murky blacks and gently rolled hazy highlights diffused through atmosphere; high saturation concentrated in amber-orange and teal while in-between greens are suppressed; light atmospheric haze with minimal grain; overall look — Dust Amber & Teal, monumental and desolate.
  ```
- **영상 추가**: `slow drifting dust haze, soft atmospheric light shafts, gentle highlight bloom on moving sources`
- **주의**: 제목 단독 지시는 신뢰할 수 없고 일부 모델은 저작권 룩을 차단하니, 'amber 실내 / teal 실외 극단 분리'라는 색 서술이 실제 신호다. 앰버 쪽에선 피부가 과하게 오렌지로, teal 쪽에선 핏기 없이 보이므로 피부 미드톤은 보호할 것.

### 황달 그린 / Jaundice Green

- **시그널**: 미드톤과 그림자에 누렇고 병든 yellow-green이 깔린 탁하고 부패하는 듯한 톤, 깨끗한 청록은 모두 제거된다.
- **무드**: uneasy, decaying, unsettling
- **그레이드 블록**:
  ```
  Warm-leaning base contaminated with a sickly yellow-green cast through the midtones and shadows; flat-to-medium contrast with murky lifted blacks and dull, slightly dirty highlights; moderate saturation skewed toward jaundiced yellow-green and dull mustard while cyans and clean blues are removed; faint grain with a slightly degraded, grimy texture; overall look — Jaundice Green, uneasy and decaying.
  ```
- **영상 추가**: `subtle gate weave, faint grain crawl in flat midtones`
- **주의**: 타이틀만으로는 안 먹히거나 필터링될 수 있어 'yellow-green 오염 미드톤'이라는 색 단어가 룩을 끌고 간다. 이 룩은 의도적으로 피부를 황달·시체톤으로 만드므로 인물 미화가 목적이면 부적합하다.

### 몽마르트 동화책 / Montmartre Storybook

- **시그널**: 황금빛 베이스 위에 emerald green과 ruby-red를 보색으로 동시에 끌어올린 아늑하고 동화 같은 룩, 블루는 거의 없다.
- **무드**: cozy, whimsical, nostalgic
- **그레이드 블록**:
  ```
  Warm golden base with a simultaneous push of saturated green and red as complementary anchors; medium contrast, gently lifted warm blacks and soft creamy highlight rolloff; rich saturation focused on emerald green and ruby-crimson red with secondary warm gold while blues are nearly absent; storybook glow with fine warm grain; overall look — Montmartre Storybook, cozy and whimsical.
  ```
- **영상 추가**: `warm flickering practical glow, soft halation on golden lamps`
- **주의**: 영화명 단독은 불안정한 힌트이고 모델이 스타일을 거를 수 있어 'emerald + ruby 보색에 골든 베이스'라는 색 묘사가 핵심이다. 녹+적 조합이 피부를 올리브빛으로 끌 수 있으니 피부는 따뜻한 골드 쪽으로 유지할 것.

### 스파이스 사막 / Spice Desert

- **시그널**: 온 화면이 ochre·tan·앰버로 수렴하는 거의 단색에 가까운 뜨겁고 건조한 사막 톤, 차가운 색은 사실상 사라진다.
- **무드**: vast, austere, epic
- **그레이드 블록**:
  ```
  Hot arid warm base collapsed toward a near-monochrome sand-amber palette; medium contrast with soft sandy blacks and bright bleached highlight rolloff; low chromatic variety — nearly everything reduced to ochre, tan and dusty amber while cool tones are almost eliminated; fine grain with airborne dust haze; overall look — Spice Desert, vast and austere.
  ```
- **영상 추가**: `drifting fine sand particulate, shimmering heat-haze distortion on horizon`
- **주의**: 제목만으로는 재현이 들쭉날쭉하고 일부 모델이 차단하므로 'ochre/tan 단색 사막 + 차가운 색 제거'라는 색 서술이 신호를 만든다. 모노 앰버가 태닝 피부엔 어울리나 햇볕에 탄 듯·획일적으로 보이니 미세한 톤 변화를 줄 것.

### 미드나잇 키아로스쿠로 / Midnight Chiaroscuro

- **시그널**: cyan-teal 그림자와 magenta-violet 하이라이트가 맞물려 짙은 피부를 보랏빛·푸른빛으로 빛나게 하는 야간 톤.
- **무드**: tender, luminous, intimate
- **그레이드 블록**:
  ```
  Cool nocturnal base balancing cyan-teal shadows against magenta-violet highlights; medium contrast with rich deep blacks and soft glowing highlight rolloff; vivid saturation in cyan and magenta with luminous, boosted skin that glistens purple-blue on deep complexions; subtle filmic grain with faint bloom on point lights; overall look — Midnight Chiaroscuro, tender and luminous.
  ```
- **영상 추가**: `soft glow bloom drifting on moving lights, gentle low-light grain shimmer`
- **주의**: 타이틀 자체는 불안정한 힌트이고 모델이 스타일을 거를 수 있어 'cyan 그림자 + magenta 하이라이트, 짙은 피부 발광'이라는 색 단어가 룩을 운반한다. 이 조합은 짙은 피부를 빛나게 설계됐지만 밝은 피부엔 녹·병색이 끼므로 휘도를 높게 유지할 것.

### 테크니컬러 뮤지컬 / Technicolor Musical

- **시그널**: 장면마다 royal blue·ruby·emerald·golden yellow 보석 톤을 순수하고 강렬하게 띄우는 로맨틱하고 화사한 룩.
- **앵커**: `Technicolor`  ·  **무드**: romantic, exuberant, vivid
- **그레이드 블록**:
  ```
  Clean warm base with bold primary color casts isolated per scene; punchy high contrast, solid blacks and bright clean highlight rolloff; very high saturation in jewel tones — royal blue, ruby red, emerald and golden yellow held vivid and pure; glossy clean sheen with minimal grain; overall look — Technicolor Musical, romantic and exuberant.
  ```
- **영상 추가**: `smooth saturated color sweeps across dusk-sky gradients`
- **주의**: 영화명 단독은 신뢰 못 할 힌트이고 일부 모델이 거르므로 'jewel-tone 고채도 + 장면별 단색 캐스트'라는 색 서술이 실제 신호다. 극단 채도가 피부를 주황·붉게 끌 수 있으니 화려한 배경 속에서도 피부는 자연스럽게 둘 것.

### 웨이스트랜드 틸-오렌지 / Wasteland Teal-Orange

- **시그널**: 낮엔 극단의 orange, 밤엔 electric teal로 뒤집히는 초고대비 사막 룩, 중간 탁색은 전부 제거된다.
- **무드**: frenzied, scorching, kinetic
- **그레이드 블록**:
  ```
  Blazing warm desert base by day pushed to extreme orange, flipping to electric teal-blue by night; very high contrast with crushed punchy blacks and blown hot highlights; hyper-saturated orange and teal at maximum push while all muddy in-between hues are scrubbed away; crisp clean digital texture with faint dust; overall look — Wasteland Teal-Orange, frenzied and scorching.
  ```
- **영상 추가**: `fast dust streaks, aggressive heat-shimmer, day-to-night color whip on cuts`
- **주의**: 제목만으로는 결과가 들쭉날쭉하고 'extreme orange 낮 / electric teal 밤'이라는 색 단어가 룩을 결정한다. 영화계 최다 클리셰 그레이드라 과하면 싸구려로 보이고 피부가 호박빛 오렌지로 뜨니 얼굴에선 강도를 낮출 것.

### 프로즌 윌더니스 / Frozen Wilderness

- **시그널**: 차가운 blue-grey 자연광 베이스에 채도를 절제한 사실적 톤, 불빛에서만 미약한 온기가 도는 거칠고 원초적인 룩.
- **무드**: harsh, elemental, raw
- **그레이드 블록**:
  ```
  Cold blue-grey daylight base with a desaturated naturalistic cast, faint warmth only from firelight; medium-low contrast, soft natural blacks and gentle airy highlight rolloff lit by available light; restrained muted saturation retaining cold blues, slate greys and dull forest greens; fine naturalistic grain with no stylization; overall look — Frozen Wilderness, harsh and elemental.
  ```
- **영상 추가**: `drifting breath-fog and snow, flickering firelight warmth on faces`
- **주의**: 영화명만 넣으면 불안정하고 모델이 거를 수 있어 'cold blue-grey + 절제된 자연 채도'라는 색 서술이 룩을 운반한다. 차가운 디새추레이션이 피부를 창백·푸르게 만들어 시체톤이 될 수 있으니 불빛 온기를 얼굴에 허용할 것.

### 네온 레버리 / Neon Reverie

- **시그널**: electric magenta·ultraviolet·cyan 네온이 얼굴 위로 번지는 몽환적이고 도취된 글로우 룩, 하이라이트는 강하게 피어오른다.
- **무드**: dreamy, intoxicated, hazy
- **그레이드 블록**:
  ```
  Mixed-temperature base layered with saturated neon casts — electric magenta, ultraviolet purple and cyan washing across faces; medium contrast with lifted glowing blacks and heavy bloom on highlights; intense lush saturation in magenta, violet, blue and neon pink; soft diffusion glow with gentle halation around light sources and fine grain; overall look — Neon Reverie, dreamy and intoxicated.
  ```
- **영상 추가**: `pulsing neon flicker, light-streak smear on movement, drifting bokeh glow`
- **주의**: 제목 단독은 불안정한 힌트이고 일부 모델이 차단하므로 'magenta·violet·cyan 네온 글로우 + 강한 블룸'이라는 색 단어가 핵심이다. 네온 젤이 피부를 분홍·보라로 칠해 멍든 듯 보일 수 있으니 깨끗한 피부 하이라이트를 일부 남길 것.

### 느와르 셀렉티브 컬러 / Noir Selective Color

- **시그널**: 극단 대비의 순수 흑백 위에 단 하나의 채도 가득한 컬러(핏빛 red 등)만 남기는 그래픽하고 잔혹한 룩.
- **무드**: brutal, graphic, stark
- **그레이드 블록**:
  ```
  Pure high-key monochrome base — stark black-and-white with no overall temperature — punctuated by a single isolated pure-color accent (blood red, or one vivid hue) left fully saturated; extreme contrast with total inky blacks and blown white highlights and almost no midtones; global saturation removed except the one selective accent hue held at full intensity; clean graphic texture with slight grain; overall look — Noir Selective Color, brutal and graphic.
  ```
- **영상 추가**: `high-contrast flicker, the lone accent hue trailing on movement`
- **주의**: 타이틀만으로는 재현이 불안정하고 모델이 거를 수 있어 '순수 흑백 + 단일 고채도 액센트'라는 색 서술이 룩을 만든다. 완전 흑백이라 피부가 순수 명암값이 되니 색보다 조명이 중요하고, 액센트 색 선택이 룩을 좌우한다.

### 콘펙셔너리 파스텔 / Confectionery Pastel

- **시그널**: 분 바른 듯한 pink·lilac·mint·butter-yellow가 화면을 덮는 아기자기하고 향수 어린 파스텔 룩.
- **무드**: quaint, whimsical, nostalgic
- **그레이드 블록**:
  ```
  Soft warm base with a powdery pastel cast across the frame; low-to-medium contrast with gently lifted milky blacks and soft pillowy highlight rolloff; medium saturation skewed to confectionery pinks, lilac, mint and butter-yellow kept chalky rather than vivid; fine soft grain with a slightly faded vintage feel; overall look — Confectionery Pastel, quaint and whimsical.
  ```
- **영상 추가**: —
- **주의**: 영화명 단독은 불안정하고 모델이 스타일을 필터링할 수 있어 'chalky pink·mint·butter-yellow 파스텔 + 들린 블랙'이라는 색 단어가 룩을 운반한다. 파스텔 워시는 피부를 부드럽게 하나 가루처럼 평평해 보일 수 있어 파스텔 팔레트 자체가 핵심이다.

### 코럴 텐더니스 / Coral Tenderness

- **시그널**: coral·salmon·soft red가 화면 전체에 크리미하게 깔린 친밀하고 애틋한 따뜻한 톤, 블루는 거의 빠진다.
- **무드**: intimate, melancholic, tender
- **그레이드 블록**:
  ```
  Warm tender base bathed in coral, salmon and soft red casts with creamy warmth throughout; gentle low-medium contrast with soft lifted warm blacks and dreamy diffused highlight rolloff; medium saturation focused on coral-red, peach and warm rose while blues are nearly removed; soft diffusion with fine warm grain; overall look — Coral Tenderness, intimate and melancholic.
  ```
- **영상 추가**: `soft diffusion breathing on highlights, gentle warm flare on bright sources`
- **주의**: 제목만으로는 신뢰가 낮고 일부 모델이 거르므로 'coral·salmon·soft red 크리미 워시 + 블루 제거'라는 색 서술이 룩을 결정한다. 따뜻한 코럴은 대체로 피부에 유리하나 과하면 붉게 떠 홍조가 도니 얼굴에선 red를 약간 빼줄 것.

### 네온 느와르 핑크 / Neon Noir Pink

- **시그널**: hot magenta-pink 네온과 cold cyan-blue 그림자가 갈리는 차갑고 위험한 야간 느와르, 어둠은 거의 단색이다.
- **무드**: cool, dangerous, sleek
- **그레이드 블록**:
  ```
  Cool night base split between hot magenta-pink neon and cold cyan-blue shadow, electric and nocturnal; high contrast with deep crushed blacks and glowing bloomed highlights; saturation concentrated in hot pink, magenta and cyan against near-monochrome darkness; light halation on neon with subtle grain; overall look — Neon Noir Pink, cool and dangerous.
  ```
- **영상 추가**: `soft neon halation drifting on motion, slow flicker on signage`
- **주의**: 타이틀 단독은 불안정한 힌트이고 모델이 차단할 수 있어 'hot magenta 네온 + cold cyan 그림자, 단색 어둠'이라는 색 단어가 룩을 운반한다. 마젠타 네온이 피부를 분홍으로, 시안 그림자가 핏기를 빼므로 얼굴엔 따뜻한 키라이트를 남겨 생기를 지킬 것.

### 멕시코 / 국경 스릴러 옐로 필터 / Mexico / Border-Thriller Yellow Filter

- **시그널**: 사막 햇볕에 구운 듯 golden-yellow 캐스트가 미드톤을 적시고 blue는 헤이지한 회색으로 빠지는, 건조하고 답답한 국경 톤.
- **무드**: oppressive, arid
- **그레이드 블록**:
  ```
  Warm sun-baked color temperature pushed toward golden-yellow, with a dusty amber cast soaking the midtones and a faint olive tint in the shadows; medium-high contrast with gently crushed warm-brown blacks and soft compressed highlights that bloom into the heat haze; moderate saturation that favors ochre, tan and brick-red while muting blues toward a hazy gray; fine dry grain like heat-baked 35mm; overall look — Border Sun-Bake, oppressive and arid.
  ```
- **영상 추가**: `drifting heat-haze shimmer, fine floating dust motes, subtle gate weave`
- **주의**: 옐로를 과하게 밀면 피부가 황달처럼 떠 보이므로 하이라이트 부근 살색은 약간 빼주고, 블루 의상과는 색이 충돌하니 주의.

### 문라이트 시안-마젠타 야경 / Chromatic Midnight

- **시그널**: cyan-blue 그림자와 magenta 하이라이트 사이에서 피부만 luminous bronze로 띄우는 모던 야경 룩.
- **무드**: intimate, luminous
- **그레이드 블록**:
  ```
  Cool night color temperature with deep cyan-blue shadows and a soft magenta-purple bloom living in the highlights; smooth medium contrast with rich but still-detailed blacks and silky highlight rolloff; restrained saturation that lets cyan and magenta breathe while holding a luminous bronze in the skin midtones; clean digital capture with subtle chroma surfacing only in the deepest shadows; overall look — Chromatic Midnight, intimate and luminous.
  ```
- **영상 추가**: `soft magenta highlight bloom on moving lights, gentle low-light chroma noise in the deepest shadows`
- **주의**: 시안 그림자가 어두운 피부의 디테일을 먹을 수 있으니 살색 미드톤의 따뜻한 브론즈를 지켜 분리할 것.


## 무드 / 장르 그레이드

### 로맨스 웜 드리미 / Romance Warm Dreamy

- **시그널**: 골든 핑크빛 따뜻한 톤에 부드러운 하이라이트 글로우와 낮은 대비가 더해져 꿈결 같은 로맨스 분위기.
- **앵커**: `Kodak Portra 400`  ·  **무드**: tender, dreamy
- **그레이드 블록**:
  ```
  Warm golden temperature with a soft rosy-peach cast in the highlights; gently lowered contrast with milky lifted blacks and a long feathered highlight rolloff that blooms into a soft glow; medium saturation favoring warm peach, blush pink and honey tones while greens stay muted; fine subtle grain with a faint halation around bright edges; overall look — Soft Romance, tender and dreamy.
  ```
- **영상 추가**: `subtle gentle halation bloom drifting on backlit highlights`
- **주의**: 하이라이트 글로우가 과하면 디테일이 뭉개지고 피부가 번지니 블룸 강도를 절제할 것.

### 호러 시클리 그린틸 / Horror Sickly Green-Teal

- **시그널**: 병든 듯한 그린-틸 캐스트와 깊게 눌린 블랙으로 불안하고 음산한 호러 톤.
- **무드**: oppressive, queasy
- **그레이드 블록**:
  ```
  Cold temperature pushed toward a sickly green-teal cast that bleeds into the shadows and midtones; high contrast with crushed inky blacks and a hard clipped highlight rolloff; desaturated overall except for a clinging green-teal in the shadows and a sour yellow-green in dim light; coarse gritty grain with no halation; overall look — Sickly Dread, oppressive and queasy.
  ```
- **영상 추가**: `faint flickering shadow noise and creeping grain on dark moving areas`
- **주의**: 그린-틸 캐스트가 피부에 그대로 닿으면 시체처럼 창백해지니, 피부는 따로 분리해 약간의 살구빛 온기를 남길 것.

### 사이코 스릴러 콜드 / Psychological Thriller Cold

- **시그널**: 차갑고 푸른 회청색 톤에 높은 대비와 단단한 블랙으로 긴장감 있고 임상적인 스릴러 분위기.
- **무드**: clinical, uneasy
- **그레이드 블록**:
  ```
  Cold blue-grey temperature with a steely cyan cast across the whole frame; firm contrast with deep but controlled blacks and a crisp slightly hard highlight rolloff; low muted saturation holding only cold blue and slate tones while reds and warms are pulled back; clean image with very fine restrained grain and no halation; overall look — Cold Tension, clinical and uneasy.
  ```
- **영상 추가**: —
- **주의**: 푸른 회청색이 피부를 시체처럼 차갑게 만드니 피부는 따로 보정해 미세한 따뜻함을 유지할 것.

### SF 클리니컬 화이트블루 / Sci-Fi Clinical White-Blue

- **시그널**: 깨끗한 화이트-블루 톤에 밝은 노출과 부드러운 하이라이트로 미래적이고 멸균된 느낌.
- **무드**: sterile, pristine
- **그레이드 블록**:
  ```
  Cool temperature with a clean white-blue cast and bright neutral whites; slightly lifted blacks for an airy bright tone with a smooth soft highlight rolloff that keeps whites pristine; restrained saturation favoring cool blue and cyan accents while skin stays neutral; pristine clean image with no grain and a faint clean bloom on the brightest sources; overall look — Clinical Future, sterile and pristine.
  ```
- **영상 추가**: `subtle clean bloom pulsing on bright light sources`
- **주의**: 화이트-블루가 강하면 피부가 창백하고 병약해 보이니 피부 톤은 중립으로 따로 잡아줄 것.

### 판타지 러시 채도 / Fantasy Lush Saturated

- **시그널**: 에메랄드 그린·골드·딥 블루가 살아있는 풍성한 채도로 마법적이고 장대한 판타지 톤.
- **무드**: magical, epic
- **그레이드 블록**:
  ```
  Balanced-to-warm temperature with a luminous golden-green cast in the light; rich rounded contrast with deep but readable blacks and a glowing soft highlight rolloff; high lush saturation boosting emerald greens, deep forest tones, golden sunlight and royal blues; clean cinematic image with very light grain and gentle halation on magical highlights; overall look — Lush Fantasy, magical and epic.
  ```
- **영상 추가**: `soft halation shimmer on glowing magical highlights`
- **주의**: 채도를 과하게 올리면 피부가 붉거나 형광 그린이 번지니 피부와 식생 채도를 분리해 관리할 것.

### 다큐멘터리 뉴트럴 / Documentary Neutral Naturalistic

- **시그널**: 중립적이고 정확한 색과 균형 잡힌 대비로 사실적이고 진솔한 다큐 톤.
- **무드**: neutral, truthful
- **그레이드 블록**:
  ```
  Neutral accurate temperature with no color cast and faithful white balance; natural moderate contrast with true blacks and a gentle organic highlight rolloff; honest natural saturation with accurate skin and lifelike greens and skies, nothing pushed; clean image with the faintest natural grain and no halation; overall look — Honest Document, neutral and truthful.
  ```
- **영상 추가**: —
- **주의**: 색을 너무 건드리면 사실감이 깨지니 채도와 대비를 최소한으로 유지하고 피부는 정확하게 유지할 것.

### 누아르 흑백 하이콘트라스트 / Noir B&W High-Contrast

- **시그널**: 깊은 블랙과 빛나는 화이트의 강한 흑백 대비로 그림자가 지배하는 클래식 누아르 톤.
- **앵커**: `Ilford HP5 Plus`  ·  **무드**: dramatic, shadowy
- **그레이드 블록**:
  ```
  Monochrome with no color and a neutral-to-slightly-cool tonal feel; dramatic high contrast with deep crushed blacks and bright controlled whites and a hard highlight rolloff that lets shadows dominate; zero saturation by definition with strong tonal separation between light and dark; classic silver-gelatin grain with no halation; overall look — Classic Noir, dramatic and shadowy.
  ```
- **영상 추가**: `subtle film grain breathing in deep shadow areas`
- **주의**: 블랙을 과하게 누르면 그림자 속 인물 디테일이 사라지니, 얼굴 명암은 톤 분리를 유지하도록 따로 살릴 것.

### 디스토피아 그레이 / Dystopian Desaturated Grey

- **시그널**: 색이 빠진 회색 톤에 차가운 콘크리트빛 캐스트와 무거운 대비로 황폐하고 억압적인 분위기.
- **무드**: bleak, oppressive
- **그레이드 블록**:
  ```
  Cool neutral temperature with a flat concrete-grey cast and a faint cold green-grey tint; heavy contrast with murky blacks that sit between lifted and crushed and a dull compressed highlight rolloff; heavily desaturated with only weak cold blues and dirty yellows surviving; gritty visible grain with no halation; overall look — Grey Dystopia, bleak and oppressive.
  ```
- **영상 추가**: `heavy static-like grain crawling across flat grey midtones`
- **주의**: 채도를 과하게 빼면 피부가 잿빛 시체처럼 보이니 피부에는 최소한의 혈색을 따로 남길 것.

### 코지 어텀 웜 / Cozy Autumn Warm

- **시그널**: 호박색과 단풍빛이 어우러진 따뜻한 톤에 부드러운 대비로 포근하고 아늑한 가을 분위기.
- **앵커**: `Kodak Gold 200`  ·  **무드**: warm, snug
- **그레이드 블록**:
  ```
  Warm amber temperature with a golden-orange cast in the light; soft inviting contrast with gently lifted warm blacks and a smooth highlight rolloff; medium-high saturation favoring amber, rust, burnt orange and warm olive while cooling nothing; soft fine grain with a faint warm halation on lamplight; overall look — Cozy Autumn, warm and snug.
  ```
- **영상 추가**: `faint warm halation glow flickering on candle and lamp light`
- **주의**: 호박빛이 과하면 피부가 누렇게 뜨니 골든 캐스트를 절제하고 피부의 자연스러운 핑크를 남길 것.

### 멜랑콜릭 블루 / Melancholic Blue

- **시그널**: 가라앉은 채도의 차분한 블루 톤과 부드러운 대비로 쓸쓸하고 사색적인 분위기.
- **무드**: wistful, somber
- **그레이드 블록**:
  ```
  Cool temperature with a soft muted blue cast through shadows and midtones; low gentle contrast with softly lifted blacks and a tender highlight rolloff; subdued saturation keeping melancholy blues and dusty teals while warm tones are quieted to a faint amber; soft fine grain with no halation; overall look — Blue Melancholy, wistful and somber.
  ```
- **영상 추가**: —
- **주의**: 블루 캐스트가 피부 그림자에 스며들면 차갑고 병약해 보이니 피부 하이라이트엔 약간의 온기를 따로 남길 것.

### 서머 바이브런트 펀치 / Summer Vibrant Punchy

- **시그널**: 쨍한 채도와 푸른 하늘, 선명한 대비로 밝고 활기찬 한여름 분위기.
- **무드**: bright, energetic
- **그레이드 블록**:
  ```
  Warm-neutral temperature with bright clean light and a sunny golden cast; punchy contrast with solid blacks and a crisp bright highlight rolloff; high vivid saturation boosting sky blues, turquoise water, lush greens and a warm skin glow; clean crisp image with no grain and no halation; overall look — Vibrant Summer, bright and energetic.
  ```
- **영상 추가**: —
- **주의**: 채도를 과하게 올리면 피부가 주황빛으로 타 보이니 스킨 채도는 따로 절제할 것.

### 노스탤직 페이디드 메모리 / Nostalgic Faded Memory

- **시그널**: 바랜 파스텔 톤과 들린 블랙, 누런 캐스트로 오래된 기억 같은 향수 분위기.
- **앵커**: `expired Kodak film`  ·  **무드**: nostalgic, wistful
- **그레이드 블록**:
  ```
  Warm faded temperature with a yellowed-cream cast; flat low contrast with heavily lifted milky blacks and a soft washed highlight rolloff; faded muted saturation with gently desaturated pastels and a slight magenta-shifted skin warmth; heavy organic film grain with light halation on highlights; overall look — Faded Memory, nostalgic and wistful.
  ```
- **영상 추가**: `animated film grain flicker and subtle gate weave on the frame`
- **주의**: 블랙을 너무 들면 화면이 뿌옇게 죽으니 리프트를 절제하고, 누런 캐스트로 피부가 칙칙해지지 않게 살구빛을 남길 것.

### 다크 페어리테일 주얼톤 / Dark Fairytale Desaturated Jewel

- **시그널**: 어둡게 가라앉은 배경 위로 딥 루비·에메랄드·사파이어가 빛나는 음울하면서 화려한 톤.
- **무드**: gothic, enchanting
- **그레이드 블록**:
  ```
  Cool-leaning temperature with a dusky desaturated base and a faint blue-green cast in the shadows; moody contrast with deep rich blacks and a soft controlled highlight rolloff; overall muted except for glowing jewel accents — deep ruby reds, emerald greens and sapphire blues that pop against the gloom; subtle fine grain with gentle halation on jewel-toned highlights; overall look — Dark Fairytale, gothic and enchanting.
  ```
- **영상 추가**: `soft halation glow blooming on jewel-toned light sources`
- **주의**: 전체 채도를 빼면 피부가 잿빛으로 가라앉으니 피부는 따로 분리해 은은한 혈색을 유지할 것.

### 네오누아르 네온 / Neo-Noir Neon

- **시그널**: 칠흑 같은 블랙 위로 마젠타·시안 네온이 충돌하는 젖은 도시의 야경 톤.
- **앵커**: `CineStill 800T`  ·  **무드**: sleek, seductive
- **그레이드 블록**:
  ```
  Cool night temperature with a split magenta-and-cyan neon cast — warm pink-magenta in the highlights and cold cyan-blue in the shadows; high contrast with deep crushed blacks and a glowing highlight rolloff that lets neon sources bloom; saturation pushed in the neon hues — electric magenta, hot pink and cyan — while everything else stays dark and muted; faint grain with strong halation around neon signage; overall look — Neon Noir, sleek and seductive.
  ```
- **영상 추가**: `pulsing neon halation bloom and faint reflection shimmer on wet surfaces`
- **주의**: 마젠타-시안 분리 조명이 피부를 보랏빛 시체처럼 물들이니, 피부엔 네온 반사 정도만 남기고 따로 톤을 잡을 것.


## 스타일라이즈드 / 실험적 룩

### 테크니컬러 3-스트립 / Technicolor Three-Strip

- **시그널**: 원색을 극단적으로 순수하게 끌어올린 염료전사 특유의 진한 crimson red·cobalt blue·green, 광택 있는 극장형 dye-transfer 룩.
- **앵커**: `Technicolor dye-transfer`  ·  **무드**: lush, theatrical
- **그레이드 블록**:
  ```
  Neutral-to-slightly-cool base balance carrying the hyper-pure primary cast of dye-transfer printing, reds pushed toward crimson and blues toward cobalt; punchy theatrical contrast with deep but not crushed blacks and a glossy, slightly hard highlight rolloff; richly saturated across the frame with emphatic separation of red, green and blue while midtones stay clean; emulating Technicolor dye-imbibition stock with fine, almost grainless texture; overall look — Three-Strip Technicolor, lush and theatrical.
  ```
- **영상 추가**: `subtle projector flicker, faint dye-layer registration shimmer between primaries`
- **주의**: 피부가 과하게 붉어져 볼연지처럼 보일 수 있음 — 인물보다 세트·의상·풍경에서 가장 강하다.

### 듀오톤 / Duotone Press

- **시그널**: 전체 계조를 두 가지 잉크(섀도우 indigo + 하이라이트 paper-cream)로만 매핑한 그래픽 스크린프린트 톤.
- **무드**: graphic, editorial
- **그레이드 블록**:
  ```
  Tonality remapped onto two inks only, deep indigo occupying the shadows and a warm paper-cream filling the highlights with no true neutral gray; medium-high contrast with inky blacks lifted toward the dark tint and a soft paper-white rolloff; saturation collapsed to the single shadow-to-highlight gradient with no competing hues; matte poster / screen-print feel with subtle paper tooth; overall look — Duotone Press, graphic and editorial.
  ```
- **영상 추가**: —
- **주의**: 피부가 자연색이 아닌 평면 틴트로 떨어짐 — 사실적 인물용이 아닌 스타일라이즈드 전용.

### 웜 톤 모노크롬 / Warm-Tone Monochrome

- **시그널**: 거의 흑백에 가까운 무채 베이스에 은은한 amber 웜 워시를 얹은 차분한 warm-tone 톤.
- **무드**: gentle, nostalgic
- **그레이드 블록**:
  ```
  Warm balance overall, a gentle amber wash laid over a near-grayscale desaturated base; soft-to-medium contrast with gently lifted warm-gray blacks and a creamy highlight rolloff; saturation almost fully pulled out leaving only a faint warm undertone and no distinct color hues; mild fine grain like a warm-toned silver print; overall look — Warm-Tone Mono, gentle and nostalgic.
  ```
- **영상 추가**: —
- **주의**: 효과가 매우 미세함 — 창백한 피부에 과하게 넣으면 약간 누렇게 떠 보일 수 있다.

### 쿨 톤 모노크롬 / Cool-Tone Monochrome

- **시그널**: 무채 흑백 베이스에 차가운 steel-blue 캐스트를 입힌 서늘하고 임상적인 cool-tone 톤.
- **무드**: somber, clinical
- **그레이드 블록**:
  ```
  Cool balance, a quiet steel-blue cast over a desaturated grayscale base; crisp medium contrast with clean cool blacks and a controlled bluish highlight rolloff; saturation stripped to near zero leaving only a cold blue-gray undertone and no other hues; faint fine grain like a selenium-toned print; overall look — Cool-Tone Mono, somber and clinical.
  ```
- **영상 추가**: —
- **주의**: 피부가 잿빛으로 생기 없어짐 — 차가운 무드 의도이며 화사한 인물 포트레이트엔 부적합.

### 세피아 / Antique Sepia

- **시그널**: 전체를 따뜻한 brown 단색으로 변환한 클래식 앤티크 톤.
- **무드**: aged, wistful
- **그레이드 블록**:
  ```
  Warm balance with a rich brown antique cast through the whole frame; gentle contrast with softly lifted brown blacks and a warm faded highlight rolloff; full conversion to monochrome brown with no surviving color hues beyond the sepia tone; aged emulsion feel with visible fine grain and slight edge fade; overall look — Antique Sepia, aged and wistful.
  ```
- **영상 추가**: `animated dust, scratches and gentle gate weave with light frame flicker`
- **주의**: 모든 것이 갈색이라 현대 피사체도 옛날 사진처럼 보임 — 시대감이 강제된다.

### 적외선 폴스컬러 (에어로크롬) / Infrared False-Color

- **시그널**: 식물은 pink·magenta로, 하늘은 짙은 cyan으로 뒤바뀌는 초현실 위색(僞色) 적외선 룩.
- **앵커**: `Kodak Aerochrome`  ·  **무드**: dreamlike, otherworldly
- **그레이드 블록**:
  ```
  Surreal balance where foliage glows and skies deepen, a magenta-pink cast across vegetation with cyan-darkened skies; high contrast with deep skies, near-white plants and a glowing hot highlight rolloff; intensely saturated false hues with greens remapped to pink and red while blues deepen, keeping eerie luminous whites; reminiscent of color-infrared Aerochrome film with dreamy halation around bright leaves; overall look — Aerochrome False-Color, dreamlike and otherworldly.
  ```
- **영상 추가**: `shimmering halation bloom on bright foliage as it moves, gentle channel breathing`
- **주의**: 피부가 예측 불가하게 왁스처럼 핑크빛으로 변함 — 풍경·식물에 최적이고 인물엔 위험.

### 셀렉티브 컬러 팝 / Selective Single-Color Pop

- **시그널**: 전체를 흑백으로 빼고 단 하나의 색(대표적으로 red)만 선명히 남기는 그래픽 강조.
- **무드**: bold, graphic
- **그레이드 블록**:
  ```
  Neutral balance over a fully desaturated grayscale frame with one chosen hue, classically red, left in full color; medium contrast with neutral blacks and a natural highlight rolloff; global saturation removed everywhere except the single isolated hue, which stays vivid and pure; clean digital texture with no grain required; overall look — Selective Color Pop, bold and graphic.
  ```
- **영상 추가**: —
- **주의**: '빨간 코트'식 진부함 위험이 큼 — 의미 있는 색 하나만 절제해서 골라야 한다.

### 포스터라이즈드 (팝아트) / Posterized Pop-Art

- **시그널**: 계조를 몇 단계 색면으로 끊어 평면화한 screen-print식 팝아트 톤.
- **무드**: punchy, pop-art
- **그레이드 블록**:
  ```
  Neutral balance with a banded, flattened color cast; tone collapsed into hard stepped bands rather than smooth gradients, with crushed blacks and abrupt clipped highlight steps; high saturation quantized into solid blocks of a few hues like screen-print separation; flat poster-ink feel with no grain; overall look — Posterized Pop-Art, punchy and pop-art.
  ```
- **영상 추가**: `stepped color-band crawl marching along moving gradients`
- **주의**: 계조가 끊겨 피부가 만화 셀처럼 분리됨 — 의도적 그래픽 효과로만 사용.

### 하이콘트라스트 흑백 / High-Contrast B&W

- **시그널**: 블랙을 깊게 뭉개고 화이트를 날린 거친 고대비 black-and-white.
- **앵커**: `Kodak Tri-X 400`  ·  **무드**: stark, dramatic
- **그레이드 블록**:
  ```
  Neutral monochrome with no color cast; severe contrast with deeply crushed blacks, clean blown whites and an abrupt hard rolloff; fully desaturated with zero surviving hue; gritty high-speed black-and-white film feel with pronounced grain; overall look — Hard B&W, stark and dramatic.
  ```
- **영상 추가**: `animated coarse film grain, faint gate weave`
- **주의**: 하이라이트가 날아가고 섀도우가 막힘 — 섬세한 피부 표현엔 부적합.

### 밀키 로우콘 흑백 / Soft Milky Low-Contrast B&W

- **시그널**: 블랙을 들어올려 뿌옇고 부드러운 저대비 silver-print 흑백.
- **무드**: dreamy, tender
- **그레이드 블록**:
  ```
  Neutral monochrome with the faintest cool-neutral cast; very low contrast with markedly lifted milky blacks, hazy mid-grays and a gentle feathered highlight rolloff; fully desaturated with no color; classic low-contrast silver print with delicate fine grain over a softly fogged base; overall look — Milky Mono, dreamy and tender.
  ```
- **영상 추가**: `fine moving grain, soft fog flicker`
- **주의**: 피부에 부드럽고 화사함 — 다만 원본이 이미 저대비면 밋밋해 보일 수 있다.

### 시아노타입 블루 / Cyanotype Blue

- **시그널**: 전체를 Prussian-blue cyan 단색으로 매핑한 앤티크 청사진(blueprint) 톤.
- **무드**: antique, contemplative
- **그레이드 블록**:
  ```
  Cold balance dominated entirely by a Prussian-blue cyan cast; medium contrast with deep blue shadows, paper-white highlights and a slightly uneven rolloff; monochrome mapped to a single cyan-blue ink with no other hues; antique photographic-print texture with paper grain and brushed irregular edges; overall look — Cyanotype Blueprint, antique and contemplative.
  ```
- **영상 추가**: —
- **주의**: 피부가 차갑게 파래짐 — 역사적·예술적 의도이며 자연스러운 인물 촬영용이 아니다.

### 골드 틴트 / Gold-Tinted

- **시그널**: 하이라이트와 미드톤에 metallic-gold 캐스트를 입힌 호화로운 warm 톤.
- **무드**: opulent, warm
- **그레이드 블록**:
  ```
  Warm balance with a luminous metallic-gold cast concentrated in highlights and midtones; rich medium-high contrast with warm amber-brown blacks and a glowing soft-gilt highlight rolloff; low overall saturation lifted into a unified gold-amber range with other hues subdued; subtle warm halation and fine grain like a gold-toned print; overall look — Gilded Gold-Tone, opulent and warm.
  ```
- **영상 추가**: `drifting halation bloom on moving highlights, faint warm flicker`
- **주의**: 피부를 청동빛으로 과하게 누렇게 만들 수 있음 — 소량은 화사하지만 과하면 촌스러워진다.

### 애너글리프 / 글리치 색수차 / Anaglyph / Glitch Chromatic Aberration

- **시그널**: red·cyan 채널을 어긋나게 분리해 가장자리에 색번짐(fringe)을 만드는 전자적 글리치 룩.
- **무드**: electric, disorienting
- **그레이드 블록**:
  ```
  Neutral base split into mis-registered red and cyan channels with colored fringing at edges; punchy contrast with crushed blacks and clipped highlights, channels offset so the rolloff smears into colored ghosts; saturation concentrated in the red/cyan fringe while the body of the image stays muted; digital-glitch texture with scanline and datamosh artifacts; overall look — Anaglyph Glitch, electric and disorienting.
  ```
- **영상 추가**: `animated red/cyan channel jitter, RGB split wobble, datamosh smear on motion, rolling tracking lines`
- **주의**: 얼굴 윤곽이 이중으로 갈라져 보임 — 의도적 파손 효과이므로 인물엔 신중히 적용.

### 핸드 틴트 빈티지 / Hand-Tinted Vintage

- **시그널**: sepia-cream 단색 위에 pastel 수채를 손으로 칠한 듯 얹은 초기 사진 톤.
- **무드**: delicate, romantic
- **그레이드 블록**:
  ```
  Warm aged balance with a sepia-to-cream base and patches of hand-painted pastel color floating over near-monochrome; soft low contrast with faded lifted blacks and a delicate creamy rolloff; mostly desaturated antique base with selectively applied translucent watercolor blush on cheeks, lips and accents; early photographic emulsion feel with paper grain, dust and gentle fade; overall look — Hand-Tinted Antique, delicate and romantic.
  ```
- **영상 추가**: `gate weave, dust and scratch flicker, slight color-wash shimmer drifting off the forms`
- **주의**: 틴트가 형태와 살짝 어긋나게 칠해짐(의도된 효과) — 피부는 사실적이 아닌 발그레한 채색으로 떨어진다.

### 투-스트립 테크니컬러 / Two-Strip Technicolor

- **시그널**: blue가 거의 없는 red-cyan 2색 프로세스로 salmon-pink와 muted teal만 남는 앤티크 톤.
- **앵커**: `Two-Strip Technicolor`  ·  **무드**: antique, theatrical
- **그레이드 블록**:
  ```
  Restricted vintage color temperature built only from red-orange and cyan-green records, with blue and pure yellow almost entirely absent; soft contrast with milky, slightly faded blacks and gentle blooming highlights; limited two-tone saturation where everything resolves into salmon-pink, brick-red and muted teal-green, skies turning pale grayish-cyan instead of true blue; soft early photochemical emulsion with fine vintage grain and a slight registration softness between the two records; overall look — Two-Strip Antique, antique and theatrical.
  ```
- **영상 추가**: `vintage gate weave and frame jitter, slight color-fringe registration wobble between the two records, faint flicker`
- **주의**: 피부가 핑크-오렌지로 익은 듯 보이고 블루 채널이 없어 중립 화이트가 teal-pink로 흔들리니 의상 색 관리가 필요하다.
