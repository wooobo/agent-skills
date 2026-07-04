---
name: product-swap
description: >-
  모델/장면 사진에서 인물·배경·포즈·조명은 그대로 두고 "들고 있거나 놓여 있는 제품만" 다른 제품으로
  자연스럽게 교체(스왑)할 때 사용하는 스킬. infision MCP의 Nano Banana Pro
  (gemini-3-pro-image-preview)로 두 장(① 장면 사진 ② 교체할 제품 컷)을 합성한다.
  "제품만 바꿔줘", "이 모델이 다른 제품 들고 있게", "배경/모델 그대로 두고 제품 교체",
  "다른 제품으로 갈아끼워줘", "product swap", "replace the product",
  "model holding a different product" 같은 요청에서 반드시 이 스킬을 사용할 것.
  단순 텍스트→이미지 생성이 아니라 "기존 사진의 제품 부분만 교체"하는 작업이면,
  사용자가 '스왑'이라는 단어를 쓰지 않아도 이 스킬을 적용한다.
---

# Product Swap (제품만 교체 합성)

기존 장면 사진(모델이 제품을 들고 있는 광고컷 등)에서 **인물·표정·헤어·배경·포즈·조명·구도는 100% 유지**하고, **제품만** 다른 제품으로 교체하는 합성을 수행한다. infision MCP의 **Nano Banana Pro = `gemini-3-pro-image-preview`** 를 사용한다.

이 작업의 어려움은 "그럴듯하게 붙이기"가 아니라 **"같은 카메라로 한 번에 함께 촬영한 것처럼 보이게 통합"** 하는 데 있다. 가장 흔한 두 가지 실패가 (1) 제품이 너무 크게 나옴, (2) 따로 찍어 붙인 합성처럼 보임 — 이 스킬의 프롬프트 구조는 이 둘을 막기 위해 설계되었다.

## 입력 (필요한 것)

1. **장면 사진(base scene)** — 유지할 사진. 보통 모델이 기존 제품을 들고 있는 컷.
2. **교체할 제품 컷(new product)** — 새로 넣을 제품 사진. 라벨/디자인이 선명한 단독 제품 샷이 가장 좋다.

둘 다 공개 URL 또는 로컬 파일. 로컬 파일이면 먼저 `upload_media`로 URL을 만든다.

> 둘 중 하나라도 없으면 사용자에게 요청한다. 제품 컷이 없고 "이런 제품으로"라는 설명만 있으면, 먼저 `generate_image`로 **여백 있는 단독 제품 샷**(아래 "제품 레퍼런스 팁" 참고)을 만든 뒤 그것을 교체 컷으로 사용한다.

## 워크플로우

1. **모델 확인**: `mcp__claude_ai_infision_dev__list_models`는 매번 부를 필요 없음. 기본적으로 `gemini-3-pro-image-preview`(Nano Banana Pro)를 사용한다.
2. **레퍼런스 순서 고정**: `reference_images` 배열에 **반드시 [장면 사진, 제품 컷] 순서**로 넣는다. 프롬프트에서 `[image 1]`(장면), `[image 2]`(제품)으로 지칭한다 — 순서가 바뀌면 결과가 망가진다.
3. **생성 호출**: `mcp__claude_ai_infision_dev__generate_image`
   - `model`: `gemini-3-pro-image-preview`
   - `aspect_ratio`: 장면 사진의 비율에 맞춘다(세로 인물컷이면 보통 `9:16`).
   - `size`: `2K` 권장.
   - `prompt`: 아래 **프롬프트 템플릿**을 채워서 사용.
   - `reference_images`: `[{ "url": 장면 }, { "url": 제품 }]`
4. **폴링**: 비동기다. `get_job`으로 `state`가 `succeeded`가 될 때까지 확인하거나, `result_url`이 뜰 때까지 기다린다.
   - foreground `sleep`은 막혀 있으니, 대기는 `until curl -sf "<예상 result_url>" -o out.jpg; do sleep 3; done` 같은 폴링 루프를 쓰거나 `get_job`을 몇 차례 호출한다.
5. **검수**: 결과 이미지를 Read로 직접 본다. 아래 **검수 체크리스트**로 실패 모드를 확인하고, 필요하면 보정 재생성한다.
6. **결과 전달**: `result_url`을 사용자에게 전달하고, 무엇이 좋아졌는지 / 남은 이슈(있으면)를 간단히 보고한다.

## 프롬프트 템플릿 (핵심)

영어 프롬프트가 이미지 모델에서 더 안정적이다. 아래를 장면에 맞게 채워서 쓴다. **세 블록(SIZE / LIGHT INTEGRATION / SEAMLESS INTEGRATION)이 품질의 핵심**이므로 빼지 말 것.

```
Use [image 1] as the base scene. Keep the model's face, expression, hair, <배경 묘사>
background, lighting, camera zoom, composition and crop 100% unchanged — do not zoom
in or recompose.

Replace ONLY the product the model is holding with the <제품 종류, 예: serum dropper bottle>
from [image 2], but do NOT make it look pasted-in: fully re-render the product in the
scene's own light so it looks photographed together in a single shot.

[SIZE — important]
- This is a <실제 크기, 예: small 30ml serum dropper bottle, ~9-10cm tall>.
- The bottle height should be <장면 기준 상대 크기, 예: under half the model's face height
  (chin to forehead), just slightly longer than her palm>, fitting neatly in her hand.
- Do NOT render it large like the original product.
- Subtly adjust only the fingers to wrap naturally around the product.

[LIGHT INTEGRATION — most important]
- Match the product lighting to the scene: <장면의 광원 방향, 예: warm rim light from the
  back-right plus soft main light from the left>.
- Color-grade the product to the scene's <색온도, 예: warm beige/gold> temperature
  (remove any neutral white / cool studio tone from the product photo).
- Add <환경 반사, 예: warm golden> environment reflections on the glass and cap.

[SEAMLESS INTEGRATION]
- Add soft contact shadows where the fingers press the product, and a subtle cast shadow
  from the product onto the hand, chest and arm.
- Render the product edges with the same soft focus as the scene (not overly sharp).
- Apply the same shallow depth of field and the same film texture / grain as the camera.

Keep the label, design and text from [image 2] (<브랜드/제품명/일러스트>) crisp and
undistorted. Change nothing other than the product. <비율, 예: Vertical 9:16>, luxury
beauty advertising editorial, shot together in one frame.
```

제품이 **손에 들린 게 아니라 테이블/배경에 놓인** 경우엔 "the product the model is holding" → "the product placed on the table/surface" 로 바꾸고, SIZE 블록의 손 기준을 주변 사물(예: "about the same height as the coffee cup beside it") 기준으로 바꾼다.

## 왜 이렇게 쓰는가 (실패 모드와 대응)

이 구조는 실제 시행착오에서 나왔다. 각 블록이 막는 실패가 있다:

- **제품이 너무 크게 나옴** → 원인은 보통 ① 제품 레퍼런스가 프레임을 꽉 채운 사진(모델이 "크게 그려야 한다"고 추정함), ② "원래 제품을 교체"라는 지시가 원래 제품의 큰 footprint를 그대로 물려받음.
  - 대응: **SIZE 블록에서 절대 크기 + 얼굴/손바닥/주변 사물 대비 상대 크기를 모두 명시**한다. cm 단독보다 "얼굴 높이의 절반 이하", "손바닥보다 살짝 큰 정도" 같은 **상대 비교**가 훨씬 잘 먹는다. 그래도 크면 결과를 다시 입력해 "제품을 30% 작게, 손 위치 유지"로 축소 보정한다.

- **따로 찍어 붙인 합성처럼 보임(컷아웃)** → 원인은 제품이 장면의 빛으로 재렌더링되지 않고 원본 제품컷의 스튜디오 조명/화이트밸런스/샤프함을 그대로 가져옴. 구체적으로: 조명 방향 불일치, 차가운 흰빛 vs 따뜻한 장면, 과도하게 샤프한 엣지, 접촉/캐스트 그림자 부재, 환경 반사 불일치.
  - 대응: **LIGHT INTEGRATION + SEAMLESS INTEGRATION 블록**을 반드시 포함. "fully re-render in the scene's own light", "shot together in one frame" 문구가 핵심.

- **라벨 텍스트가 뭉개짐** → 작은 라벨일수록 글자가 흐려진다.
  - 대응: 프롬프트에 "label and text crisp, readable and undistorted, correct spelling"을 명시. 그래도 깨지면 결과를 다시 입력해 **"라벨 텍스트만 선명하게, 철자 정확히, 나머지는 그대로"** 로 리파인한다. 광고컷에서 작은 라벨은 흐릿해도 무방한 경우가 많으니 사용자에게 보정 여부를 묻는다.

## 검수 체크리스트

결과 이미지를 Read로 직접 보고 확인:

- [ ] 모델 얼굴/표정/헤어/배경/구도가 원본과 동일한가 (장면 재구성·줌 안 됐는가)
- [ ] 제품 크기가 실제 제품에 맞게 자연스러운가 (너무 크지 않은가)
- [ ] 제품 색온도/조명 방향이 장면과 일치하는가 (붙인 느낌 없는가)
- [ ] 접촉/캐스트 그림자가 있어 손/장면과 상호작용하는가
- [ ] 라벨/브랜드명/텍스트가 읽히고 철자가 맞는가
- [ ] 손 그립이 자연스러운가 (손가락 깨짐 없는가)

하나라도 실패면 해당 블록을 강화해 재생성하거나, 결과를 입력으로 다시 넣어 국소 보정한다.

## 제품 레퍼런스 팁

교체할 제품 컷을 새로 만들거나 고를 때:

- **여백 있는 단독 샷**(병이 프레임의 30~40%만 차지)이 크기 추정에 유리하다. 프레임을 꽉 채운 제품 컷은 결과가 커지는 주된 원인이다.
- 라벨/텍스트가 또렷한 정면 컷이 합성 품질을 높인다.
- 흰 배경/중성 조명 제품컷이어도 괜찮다 — LIGHT INTEGRATION 블록이 장면 톤으로 색을 입혀준다.

## 반복 보정(remix)

한 번에 완벽하지 않을 때는 **나온 결과를 다시 `reference_images`로 입력**해 국소 지시만 준다. 예:
- "Keep everything identical, only make the product ~30% smaller and keep the hand position."
- "Keep everything identical, only sharpen the label text and fix the spelling to '<정확한 텍스트>'."

전체를 다시 생성하기보다 이렇게 좁혀서 보정하면 다른 부분이 흔들리지 않는다.
