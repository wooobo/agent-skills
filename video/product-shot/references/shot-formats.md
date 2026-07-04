# 제품샷 포맷 레시피 (Shot Format Recipes)

이커머스에서 실제로 쓰는 15가지 제품 촬영 포맷. 각 항목은 **용도 / 권장 비율 / 프롬프트 레시피(영어) / 주의점**으로 구성된다.

레시피의 `{중괄호}`는 제품 설명으로 채운다. 모든 포맷에 SKILL.md의 **"공통 프롬프트 원칙"**(제품 충실도, 사람 배제, 상업적 마감, 적절한 조명·배경, 소재 렌더링)을 함께 반영한다. 레시피는 출발점이며, 제품 특성에 맞게 다듬는다.

## 목차

**제품만 보여주는 컷 (기본/카탈로그)**
1. 누끼컷 (Cut-out / Pack-shot)
2. 고스트 마네킹 (Ghost Mannequin) — 의류
3. 행어샷 (Hanger Shot) — 의류
4. 스탠딩 마네킹 (Standing Mannequin) — 의류
5. 플랫레이 (Flat Lay)
6. 디테일·클로즈업 (Detail / Macro)
7. 3/4 회전컷 (3-Quarter View)
8. 세트컷 (Front·Back·Side)

**분위기·연출 컷 (모델 없이)**
9. 스타일링 플랫레이 (Styled Flat Lay / 코디 제안)
10. 무드컷 (Lifestyle Still-life)
11. 프롭컷 (Prop Styling)
12. 컬러웨이 나열컷 (Colorway Lineup)

**기능 강조 컷**
13. 폴디드 (Folded Stack)
14. 안감컷 (Inside-out / Lining) — 의류
15. 사이즈 비교 (Scale Reference)

---

## 1. 누끼컷 (Cut-out / Pack-shot)

- **용도**: 썸네일·목록·상세의 기본 컷. 배경을 완전히 날린 흰 배경 정면 단독.
- **권장 비율**: `1:1`(목록 썸네일) 또는 `3:4`.
- **레시피**:
  ```
  Professional e-commerce pack-shot of {제품 + 색/소재/디테일}. Centered, shot
  straight-on at eye level, isolated on a pure seamless white background (#FFFFFF),
  soft even studio lighting, no harsh shadows, only a subtle soft contact shadow
  directly beneath the product, ultra-sharp focus, true-to-life color, clean catalog
  product photography, high resolution. No model, no props, no text overlay. Keep any
  logo/label crisp, readable and correctly spelled.
  ```
- **주의**: 그림자가 과하면 합성 티가 난다 → "subtle soft contact shadow only". 완전 누끼(투명 배경)가 필요하면 흰 배경으로 뽑은 뒤 후처리하거나 `output_format: png`로.

## 2. 고스트 마네킹 (Ghost Mannequin) — 의류

- **용도**: 의류 메인컷. 마네킹·사람 없이 옷이 **입은 형태(3D 볼륨)**를 유지한 채 속이 비어 보이는 컷.
- **권장 비율**: `3:4`.
- **레시피**:
  ```
  Ghost mannequin (invisible mannequin) product photo of {의류 + 색/소재/디테일}.
  The garment holds a worn 3D shape with natural volume in the shoulders, chest and
  sleeves as if worn by an invisible person, but the body is completely hollow and
  transparent — show the inner back collar visible through the neck opening. Floating
  on a pure white background (#FFFFFF), soft even studio lighting, sharp focus,
  realistic {소재} texture, true color, premium apparel catalog photography. No person,
  no mannequin visible. Logo/label crisp and correct.
  ```
- **주의**: 목 안쪽(inner back collar)이 보이는 게 고스트 마네킹의 핵심 시그널 — 빠지면 그냥 누끼처럼 나온다. 어깨·소매의 자연스러운 볼륨도 강조.

## 3. 행어샷 (Hanger Shot) — 의류

- **용도**: 가장 저렴·빠른 의류 메인 대안. 옷걸이에 건 정면.
- **권장 비율**: `3:4`.
- **레시피**:
  ```
  {의류 + 색/소재/디테일} hanging on a simple {wooden / thin metal} clothes hanger
  against a clean light-grey studio wall, front view, natural drape and soft folds,
  soft even lighting, sharp focus, realistic fabric texture, true color, e-commerce
  apparel photography. No person. Logo/label crisp.
  ```
- **주의**: 옷걸이 종류(원목/메탈)와 벽 톤을 지정하면 일관성↑.

## 4. 스탠딩 마네킹 (Standing Mannequin) — 의류

- **용도**: 가장 저렴·빠름. 마네킹을 지우지 않고 그대로 보여준다.
- **권장 비율**: `3:4`.
- **레시피**:
  ```
  {의류 + 색/소재/디테일} displayed on a {matte white / matte grey} headless
  dress-form mannequin, front view, standing in a clean studio, soft even lighting,
  natural fit and drape, sharp focus, realistic fabric texture, e-commerce apparel
  photography. Neutral seamless background.
  ```
- **주의**: headless(머리 없는) dress-form을 명시하면 사람 얼굴이 끼어드는 걸 막는다.

## 5. 플랫레이 (Flat Lay)

- **용도**: 톱다운 평면 정렬컷. 깔끔한 목록/상세.
- **권장 비율**: `1:1` 또는 `4:5`.
- **레시피**:
  ```
  Top-down flat lay of {제품 + 색/소재/디테일}, neatly laid flat and symmetrically
  arranged on a {clean white / light linen} surface, shot directly from above (90°
  overhead), soft even diffused lighting, gentle natural shadows, sharp focus, true
  color, minimal e-commerce styling. No model, no clutter.
  ```
- **주의**: "directly from above (90°)"를 안 넣으면 비스듬한 앵글로 샌다. 의류는 소매·밑단을 가지런히.

## 6. 디테일·클로즈업 (Detail / Macro)

- **용도**: 원단 질감·스티치·골지·드로우코드 팁·포켓·지퍼·단추 등 **부분 확대**.
- **권장 비율**: `1:1` 또는 `3:2`.
- **레시피**:
  ```
  Extreme close-up macro detail shot of {확대할 부분, 예: the ribbed knit cuff /
  the topstitching / the drawcord tip / the zipper pull / the fabric weave} of
  {제품 + 색/소재}. The detail fills the frame, very shallow depth of field, crisp
  focus on the texture, soft directional studio light raking across the surface to
  reveal material texture, true color, premium product detail photography.
  ```
- **주의**: **무엇을 확대할지 반드시 구체 지정**(원단/스티치/지퍼…). 한 컷에 여러 부위를 욱여넣지 말 것 — 다객체로 흐려진다.

## 7. 3/4 회전컷 (3-Quarter View)

- **용도**: 입체감과 측면 윤곽을 보여주는 45° 앵글. 턴테이블 세트의 대표 한 컷.
- **권장 비율**: `3:4` 또는 `1:1`.
- **레시피**:
  ```
  {제품 + 색/소재/디테일} shown at a 3/4 angle (rotated about 45 degrees) to reveal
  depth and the side profile, {ghost-mannequin form for apparel / standing on the
  surface for objects}, on a pure white background, soft even studio lighting, sharp
  focus, realistic material, true color, e-commerce product photography. No model.
  ```
- **주의**: "rotated about 45 degrees"로 각도를 못박는다. 진짜 360° 인터랙티브가 필요하면 여러 각도를 각각 생성.

## 8. 세트컷 (Front·Back·Side) — 다객체 주의

- **용도**: 정면/후면/측면을 한 프레임에 묶음.
- **권장 비율**: `16:9` 또는 `3:2`(가로 나열).
- **레시피(한 프레임)**:
  ```
  Three views of the exact same {제품 + 색/소재/디테일} arranged side by side in one
  frame on a pure white background — front view, back view, and side view from left to
  right, the identical product repeated with consistent shape/color/scale, evenly
  spaced, soft even studio lighting, sharp focus, e-commerce catalog layout. No model.
  ```
- **주의**: 한 프레임 3뷰는 개체 일관성이 깨지기 쉽다. **각도별로 따로 3컷 생성**(정면/후면/측면 각 1회)이 훨씬 안정적이며 보통 더 낫다.

## 9. 스타일링 플랫레이 (Styled Flat Lay / 코디 제안)

- **용도**: 코디 제안 — 메인 제품 + 어울리는 소품/아이템을 함께 펼쳐 연출.
- **권장 비율**: `1:1` 또는 `4:5`.
- **레시피**:
  ```
  Styled top-down flat lay: {메인 제품} as the clear hero, tastefully coordinated with
  {어울리는 아이템들, 예: folded trousers, sneakers, a cap, sunglasses} arranged around
  it on a {neutral textured, 예: warm linen} surface, shot directly from above, cohesive
  color palette, soft natural diffused lighting, lifestyle e-commerce styling, sharp
  focus, true color. The {메인 제품} remains the focal point.
  ```
- **주의**: 메인 제품이 묻히지 않게 "clear hero / focal point" 강조. 소품 수는 3~4개로 절제.

## 10. 무드컷 (Lifestyle Still-life)

- **용도**: 의자에 걸치거나 침대에 올려둔 자연스러운 라이프스타일 정물(모델 없이).
- **권장 비율**: `4:5` 또는 `3:4`.
- **레시피**:
  ```
  Lifestyle mood still-life of {제품 + 색/소재/디테일} {casually draped over a wooden
  chair / laid on a linen bed / resting folded on a stool}, in a warm natural-light
  interior, soft directional window light with gentle shadows, shallow depth of field,
  cozy editorial atmosphere, true color, premium lifestyle product photography. No person.
  ```
- **주의**: 연출 컷이라 누끼와 달리 자연광·따뜻한 톤·얕은 심도를 허용한다. 그래도 제품 형태·색은 정확히 유지.

## 11. 프롭컷 (Prop Styling)

- **용도**: 커피·책·식물 등 소품과 함께 분위기 있게 배치.
- **권장 비율**: `1:1` 또는 `4:5`.
- **레시피**:
  ```
  {제품 + 색/소재/디테일} styled together with complementary props ({예: a ceramic
  coffee cup, an open book, sunglasses, dried flowers}) on a {neutral, 예: stone or
  light wood} surface, soft natural lighting, balanced composition with the {제품} as
  the hero, warm lifestyle mood, shallow depth of field, editorial e-commerce photography.
  ```
- **주의**: 소품이 제품을 가리지 않게 "product as the hero". 제품군과 어울리는 소품을 고른다.

## 12. 컬러웨이 나열컷 (Colorway Lineup) — 다객체 주의

- **용도**: 같은 제품의 여러 색상을 한 프레임에.
- **권장 비율**: `16:9` 또는 `3:2`.
- **레시피**:
  ```
  The exact same {제품 + 소재/디테일} shown in {N}개 colorways ({색 나열, 예: black,
  cream, navy, sage green}) lined up evenly side by side in one frame on a pure white
  background, the identical product shape repeated for every color, only the color
  differs, consistent identical lighting and camera angle across all of them, soft even
  studio lighting, sharp focus, e-commerce catalog. No model.
  ```
- **주의**: "형태 동일, 색만 다름 + 동일 앵글/조명"이 핵심이자 가장 어려운 부분. 색은 **3~4개**로 제한하는 게 안정적. 어긋나면 색별 누끼컷을 따로 뽑아 나란히 붙이는 방식도 고려.

## 13. 폴디드 (Folded Stack)

- **용도**: 매대처럼 각잡아 갠 모습(단품 또는 작은 스택).
- **권장 비율**: `1:1` 또는 `4:5`.
- **레시피**:
  ```
  {의류/잡화 + 색/소재/디테일} neatly folded into a crisp clean rectangle as in a
  premium retail display, {a single folded piece / a small tidy stack of 2-3}, on a
  {clean white / light wood} surface, {top-down / slight 3/4 angle}, sharp creased
  folds, soft even lighting, realistic fabric texture, true color, e-commerce photography.
  ```
- **주의**: "crisp clean rectangle / sharp creased folds"로 각진 매대 느낌을 살린다.

## 14. 안감컷 (Inside-out / Lining) — 의류

- **용도**: 루프백 안감·기모·이너 디테일을 보여주기.
- **권장 비율**: `3:4` 또는 `1:1`.
- **레시피**:
  ```
  {의류 + 외피 색} turned partially inside-out to reveal the {inner lining / brushed
  fleece interior / loop-back terry}, clearly showing the {안감 색/질감} interior fabric
  texture, on a pure white background, soft even lighting, sharp focus highlighting the
  inside material, true color, e-commerce detail photography. No model.
  ```
- **주의**: 어떤 안감(기모/루프백/메시 등)인지 명시. 외피와 안감 색 대비가 보이게.

## 15. 사이즈 비교 (Scale Reference) — 다객체 주의

- **용도**: 실제 크기 가늠 — 손이나 일상 사물 옆에 배치.
- **권장 비율**: `1:1` 또는 `3:4`.
- **레시피**:
  ```
  {제품 + 색/소재/디테일} placed next to a common size-reference object ({예: a human
  hand / a smartphone / an A4 sheet / a coffee cup}) on a clean neutral surface to
  convey real-world scale, accurate relative proportions between the product and the
  reference, even soft lighting, sharp focus, true color, e-commerce product photography.
  ```
- **주의**: 상대 크기 정확도가 가장 어렵다 — 결과 검수 필수. 손을 쓰면 손가락 왜곡이 생길 수 있으니 사물(스마트폰/카드) 기준이 더 안전할 때가 많다.
