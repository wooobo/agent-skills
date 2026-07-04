# 매치 컷 & 클래식 옵티컬 전환 (Match Cuts & Classic Optical Transitions)

화면 안 시각적 유사성(형태·색·시선·포즈·사물의 동작)을 매개로 두 샷을 잇는 매치 컷 계열과, 필름 시대부터 내려온 고전 광학 전환(디졸브·페이드·슈퍼임포즈)과 실물이 렌즈를 가리며 컷을 숨기는 오클루전/와이프 계열을 다룬다.

> 각 항목 구성: **시그널**(전환 시그니처) / **앵커**(짧은 영어 태그) / **의도**(무드 단어) / **전환 블록**(영어, 바로 붙여쓰기) / **페어링**(어울리는 다른 전환·요소) / **주의**.
>
> 전환 블록은 [샷A 전체 스택] ↔ [샷B 전체 스택] 사이의 "경계"를 묘사하는 문단이다. 샷A 지시문의 꼬리 / 샷B 지시문의 머리에 붙이거나, 지속시간이 있는 전환은 별도의 짧은 "전환 전용 클립"으로 생성해 둘 사이에 끼운다. 사용법·삽입 방식·안 통하는 것은 SKILL.md 참고.

## 매치 컷 계열

### 그래픽 매치 컷 / Graphic Match Cut

- **시그널**: 앞뒤 샷의 형태·구도·실루엣이 화면 안에서 겹치도록 이어 붙이는 컷. 카메라 무브가 아닌 정지 구도·형태 매칭.
- **앵커**: `graphic match cut, shape continuity` · **의도**: clever, connective
- **전환 블록**:
  ```
  The outgoing shot's dominant silhouette or shape — its position, scale and outline in the frame — is held constant as the cut lands, so the incoming shot's subject fills that exact same shape and screen position, the two forms rhyming across the edit as if one dissolved directly into the other's outline.
  ```
- **페어링**: 콘셉추얼 몽타주, 시적 연결, 아이디어 사이의 은유적 도약.
- **주의**: 겹칠 실루엣·형태를 두 샷 모두 명확히 설계해야 함 — 어느 한쪽이 애매하면 매치가 안 보이고 그냥 컷으로 읽힌다.

### 컬러 매치 컷 / Color Match Cut

- **시그널**: 앞뒤 샷의 지배색이나 색채 배치를 맞춰 시각적으로 자연스럽게 넘어가는 컷. 두 공간이 실제로 이어져 있지 않아도 색조 하나로 심리적 연속성을 만든다.
- **앵커**: `color match cut, dominant hue continuity` · **의도**: seamless, associative
- **전환 블록**:
  ```
  The outgoing shot's dominant color field — the exact hue, saturation and tonal value pooling across its largest surface — is held at the cut, and the incoming shot opens on a surface of that same hue occupying a comparable share of the frame, so the color itself carries unbroken across the edit even as the subject and location change completely.
  ```
- **페어링**: 몽타주 시퀀스, 테마별 연상 편집, 색으로 감정을 잇는 챕터 전환.
- **주의**: 고정할 색을 하나로 좁혀야 함 — 여러 색이 후보로 뜨면 어떤 색이 매치축인지 애매해져 그냥 우연한 컷으로 읽힌다.

### 아이라인 매치 / Eyeline Match

- **시그널**: 인물의 시선 방향과 그 시선이 향하는 대상의 샷을 연결해 공간을 봉합하는 컷. 관객이 "저 사람이 보고 있는 게 이거구나"를 자동으로 연결하게 만든다.
- **앵커**: `eyeline match cut, gaze continuity` · **의도**: connective, spatial
- **전환 블록**:
  ```
  The outgoing shot holds on a character's face as their eyes settle on and track toward something off-frame, the head angle and gaze direction fixed at the cut; the incoming shot opens on exactly what that gaze was aimed at, framed and angled as if seen from the character's approximate eyeline, so the look and its object snap together into one continuous line of sight.
  ```
- **페어링**: 리액션 컷, 숏/리버스숏 대화, 서스펜스 리빌.
- **주의**: 두 샷의 시선 각도가 어긋나면(예: 인물은 화면 오른쪽 위를 보는데 대상은 화면 왼쪽 아래에 있는 식) 공간감이 깨진다 — 좌우·상하 방향을 반드시 맞출 것.

### 사운드 매치 컷 / Sound Match Cut

- **시그널**: 원래 오디오 편집 기법 — 서로 다른 두 소리의 음색·리듬이 닮아 있어 그 유사성을 매개로 이어 붙이는 컷(예: 시계 초침 소리 → 발소리). 순수 영상 생성 모델은 오디오 트랙을 직접 다루지 못하므로, 화면 안 반복되는 시각 패턴으로 그 유사성을 대신 표현해 근사한다.
- **앵커**: `rhythmic visual echo, sound-match approximation` · **의도**: rhythmic, clever
- **전환 블록**:
  ```
  The outgoing shot closes on a small repeating motion or pulse — a tapping foot, a blinking light, a wave breaking rhythmically against a shore — its beat held steady and visible right up to the cut; the incoming shot opens on a different subject repeating that exact same rhythm in its own visual form, so the pattern itself, not the object, appears to carry across the edit unbroken.
  (오디오 생성이 가능한 모델이면: 두 소리의 음색·템포를 실제로 유사하게 맞춰 컷포인트 전후로 오버랩시켜 진짜 사운드 매치를 구현한다.)
  ```
- **페어링**: 몽타주, 시간 경과 시퀀스, 콘셉추얼 연출.
- **주의**: 시각 근사만으로는 효과가 약할 수 있음을 사용자에게 알릴 것 — 진짜 사운드 매치 컷의 쾌감은 청각적 유사성에서 나오므로, 오디오 트랙을 직접 다루지 않는 한 이 블록은 "그럴듯한 리듬 연결" 정도로만 작동한다.

### 다이제틱 오브젝트 매치 / Diegetic Object Match

- **시그널**: 문, 창문, 거울 등 이야기 속 사물의 동작을 매개로 서로 다른 공간을 자연스럽게 잇는 전환. 사물 자체가 매치축이 된다.
- **앵커**: `diegetic object match, door/window/mirror bridge` · **의도**: seamless, spatial
- **전환 블록**:
  ```
  The outgoing shot ends on a diegetic object mid-action — a door swinging closed, a window shutter falling shut, a mirror catching a passing reflection — framed so the object fills a consistent portion of the screen; the incoming shot picks up that same object's motion completing itself in a new space, the door opening onto a different room, the shutter rising on a different sky, the mirror now reflecting a different scene, so the object's continuous action stitches the two locations into one gesture.
  ```
- **페어링**: 공간 도약 몽타주, 시간 경과, 사운드 브릿지와 결합.
- **주의**: 사물의 크기·화면상 위치·동작 진행 방향(닫히다/열리다)이 두 샷에서 어긋나면 매치가 깨진다 — 동일한 오브젝트 종류와 동작 궤적을 양쪽 지시문에 명시할 것.

### 매치-포즈 (실루엣 오버랩) / Match-Pose (Silhouette Overlap)

- **시그널**: 인물의 포즈·실루엣이 다음 장면 인물의 포즈와 겹치도록 맞춰 이어 붙이는 컷. AI 생성 연속성 확보에 특히 유용 — 서로 다른 인물·시대·장소라도 포즈 하나로 정서적 연속성을 만든다.
- **앵커**: `match-pose cut, silhouette overlap` · **의도**: continuous, emotive
- **전환 블록**:
  ```
  The outgoing shot holds on a figure locked in a specific pose — the tilt of the head, the angle of the limbs, the exact silhouette against the background — at the moment of the cut; the incoming shot opens on a different figure, in a different setting, occupying that identical pose and silhouette in the same screen position, so the body shape itself is the thread the edit follows, the two figures rhyming as if one had simply stepped into the other's outline.
  ```
- **페어링**: 세대·시대를 넘나드는 몽타주, 캐릭터 병치, 정서적 연결 시퀀스. AI로 두 스틸/샷을 각각 생성할 때 "동일 실루엣" 지시를 양쪽 프롬프트에 반복해 넣으면 매치 정확도가 크게 오른다.
- **주의**: 포즈의 어느 관절·각도가 고정축인지 구체적으로 적어야 함(팔의 각도, 머리 기울기 등) — 뭉뚱그려 "비슷한 포즈"라고만 하면 AI가 각 샷을 따로 생성해 실루엣이 어긋난다.

## 클래식 옵티컬 전환

### 크로스 디졸브 (랩 디졸브) / Cross Dissolve · Lap Dissolve

- **시그널**: 두 장면이 서서히 겹치며 자리를 바꾸는 고전 광학 전환. 시간의 경과나 부드러운 연상 관계를 암시한다. 글리치·디지털 디졸브 VFX와 구별되는 전통적 크로스 디졸브.
- **앵커**: `slow cross dissolve` · **의도**: gentle, connective, elapsing
- **전환 블록**:
  ```
  The outgoing shot gently fades in opacity while the incoming shot simultaneously rises beneath it, the two frames overlapping and blending together for a brief suspended moment before the first image dissolves away completely and the second stands alone, clear and settled.
  ```
- **페어링**: 시간 경과 몽타주, 회상, 감정적 연결이 필요한 장면 전환.
- **주의**: 디졸브 구간에서 두 장면의 주요 피사체가 화면상 비슷한 위치에 있어야 겹침이 지저분하지 않다; 너무 길게 끌면 몽환적으로 읽혀 현실적인 톤과 충돌.

### 블러 디졸브 / Blur Dissolve (Motion-Blur Cross-Fade)

- **시그널**: 전환 중간 지점에서 화면을 강하게 블러시켜 두 장면을 섞은 뒤 다시 포커스를 되찾는 디졸브. AI 생성 이음매의 어색함을 가리는 데 유용.
- **앵커**: `blur dissolve, motion-blur cross-fade` · **의도**: smooth, concealing
- **전환 블록**:
  ```
  The outgoing shot loses focus rapidly into a heavy directional blur, its forms streaking and smearing until the frame is an abstract wash of color and motion; the incoming shot emerges from that same blurred wash, its own forms resolving out of the streaks and sharpening back into focus, the two images never overlapping in sharp detail but only ever meeting inside the blur itself.
  ```
- **페어링**: 액션 시퀀스 전환, 빠른 무브(스피드램프·휩팬) 뒤 이어지는 컷, 몽타주.
- **주의**: 블러 강도가 약하면 그냥 초점 나간 실패 샷처럼 보인다 — 블러가 화면을 완전히 뒤덮는 지점을 명확히 지나가게 할 것; 이음매를 가리는 용도로 쓸 때는 블러 구간의 길이를 짧게(수 프레임) 유지.

### 슈퍼임포즈 전환 / Superimpose Transition

- **시그널**: 두 이미지를 극히 짧게 겹쳐 인쇄하듯 포갠 뒤 한 장면만 남기는 편집상의 일시적 오버랩. 지속적인 이중노출 VFX 룩과 구별되는 컷 시점의 순간적 겹침.
- **앵커**: `brief superimpose, print-through overlap` · **의도**: momentary, layered
- **전환 블록**:
  ```
  For a brief instant at the cut point, the outgoing and incoming frames are printed one over the other, both fully visible and equally weighted like two exposures stacked on the same strip of film; the overlap holds for only a moment before the outgoing image recedes and lifts away, leaving the incoming frame standing alone, sharp and singular.
  ```
- **페어링**: 회상 삽입, 정보를 압축해서 보여주는 편집(신문 헤드라인+얼굴 등), 클래식 스릴러 오프닝.
- **주의**: 오버랩 지속시간을 짧게(전환 전체의 일부) 제한해야 한다 — 길게 끌면 이중노출 VFX 룩이 되어버려 "전환"이 아니라 "무드"로 읽힌다.

### 페이드 투 블랙 / Fade to Black

- **시그널**: 화면이 검게 잠기며 장(scene/act)이 마무리되는 고전적 막 내림. 이야기의 챕터·장(場)이 끝났다는 신호로 가장 강하게 읽힌다.
- **앵커**: `fade to black, act close` · **의도**: conclusive, final
- **전환 블록**:
  ```
  The shot's brightness drains evenly across the entire frame, color and detail sinking together into darkness until nothing remains but flat, uniform black; the image holds there, fully extinguished, before the next scene is allowed to begin.
  ```
- **페어링**: 장/챕터의 끝, 엔딩, 시간의 긴 도약(하루 → 다음 날, 계절 변화).
- **주의**: 자주 쓰면 매 컷마다 이야기가 끝나는 듯한 무게감이 생겨 리듬이 늘어진다 — 실제 구획(장 전환)에서만 쓸 것.

### 페이드 투 화이트/컬러 / Fade to White · Fade to Color

- **시그널**: 화면이 하얗게 또는 특정 색으로 번지며 잠기고, 다음 장면이 그 색에서 떠오르며 전환되는 편집. 페이드 투 블랙보다 가볍고 몽환적이거나, 특정 색(예: 붉은색 = 위협)으로 정서를 못박을 때 쓴다.
- **앵커**: `fade to white/color, tonal wash-out` · **의도**: dreamy, thematic
- **전환 블록**:
  ```
  The shot's tones lift and bloom evenly across the frame, detail and contrast bleaching away into a single flat field of color — white, or a specific hue carrying the scene's emotional charge — until the image is fully replaced by that solid wash; the next scene then rises up out of that same color, its shapes gradually gaining contrast and detail until the wash resolves into a clear picture.
  ```
- **페어링**: 꿈·기억·초자연적 시퀀스, 강한 정서적 색(붉은색 = 경고, 흰색 = 계시)을 테마로 쓰는 장.
- **주의**: 어떤 색으로 잠기는지 반드시 명시할 것 — "white" 대신 색을 비워두면 AI가 임의의 밝은 톤을 골라 의도한 정서가 안 산다.

### 페이드 인 (블랙에서) / Fade In (from Black)

- **시그널**: 어둠 또는 단색에서 서서히 장면이 떠오르며 시작되는 오프닝형 전환. 페이드 투 블랙의 반대 극.
- **앵커**: `fade in from black, scene rise` · **의도**: emerging, opening
- **전환 블록**:
  ```
  The frame begins as flat, featureless black; gradually, faint shapes and tones rise up out of the darkness, brightness and contrast building evenly across the image until the scene resolves into a fully lit, clear picture, as if the world itself were being switched on.
  ```
- **페어링**: 시퀀스/영화의 오프닝, 장의 시작, 페이드 투 블랙과 짝을 이루는 챕터 경계.
- **주의**: 페이드 인 단독으로는 "어디서 왔는지" 맥락이 없다 — 직전 컷이 페이드 투 블랙으로 끝났을 때 가장 자연스럽다.

## 오클루전 & 실물 커버 전환

### 오클루전 컷 (바디/오브젝트 패스) / Occlusion Cut (Object/Body Pass)

- **시그널**: 전경 사물이나 인물의 몸이 렌즈를 스치듯 가리는 찰나에 장면이 바뀌는, 컷을 숨기는 편집 트릭.
- **앵커**: `occlusion cut, foreground body pass` · **의도**: concealed, kinetic
- **전환 블록**:
  ```
  A foreground object or the body of a passing figure sweeps directly across the lens, its dark mass filling the frame completely and blacking out the image for a single beat; in that instant of total occlusion the scene changes, and as the obstruction clears the frame, an entirely different scene is revealed continuing on the other side, the cut hidden inside the blackout itself.
  ```
- **페어링**: 트래킹/팔로우 샷, 핸드헬드, 스매시컷·매치 온 액션과 결합해 컷을 완전히 숨김.
- **주의**: 가리는 순간이 너무 짧으면 컷이 그대로 노출된다 — 전경 사물이 프레임을 완전히 채우는 한두 프레임을 확보해야 함.

### 포어그라운드 스와이프 와이프 / Foreground Swipe Wipe

- **시그널**: 사물이나 인물이 프레임을 빠르게 가로지르며 그 뒤로 다음 장면을 드러내는 와이프. 오클루전 컷과 달리 완전한 블랙아웃 없이 스치듯 지나가며 드러난다.
- **앵커**: `foreground swipe wipe, passing reveal` · **의도**: kinetic, transitional
- **전환 블록**:
  ```
  A foreground shape — a passing vehicle, a swinging arm, a figure striding past camera — sweeps rapidly across the frame from one side to the other; as its leading edge clears the lens, it drags the next scene into view behind it, the new frame revealed in a fast diagonal or lateral swipe as if the passing object had wiped the old image away.
  ```
- **페어링**: 휩팬 전환, 스위시 리프레임과 결합, 액션·추격 시퀀스.
- **주의**: 전경 사물의 이동 속도와 카메라 셔터감이 맞아야 자연스러운 모션 블러가 생긴다 — 너무 느리면 그냥 사물이 지나가는 샷으로만 읽히고 와이프로 안 읽힌다.

### 패브릭/커튼 와이프 / Fabric/Curtain Wipe

- **시그널**: 천이나 커튼이 스치듯 프레임을 덮으며 전환되는 와이프. 무대·연극적 느낌이나 부드러운 질감의 전환에 쓴다.
- **앵커**: `fabric wipe, curtain sweep` · **의도**: soft, theatrical
- **전환 블록**:
  ```
  A sweep of fabric — a curtain, a length of cloth, a flag of drapery — billows across the frame from one edge, its folds catching the light as it engulfs the image completely for a moment; as the fabric continues its motion and clears the other side of the frame, it draws back to reveal an entirely new scene standing in place of the old one.
  ```
- **페어링**: 무대/공연 장면, 회상으로 들어가는 도입, 로맨틱하거나 동화적인 톤.
- **주의**: 천의 질감·색이 두 장면 어느 쪽과도 안 어울리면 갑자기 이질적인 오브젝트가 낀 것처럼 보인다 — 장면의 팔레트에 맞는 재질(실크·벨벳·리넨 등)을 지정할 것.

## VFX 링크 (링크 전용, 🔗)

### 이중노출 / Double Exposure 🔗

- **시그널**: 두 이미지가 지속적으로 겹쳐 보이는 룩.
- **링크**: 새로 쓰지 않는다 — `vfx/references/optical-light-glitch.md`의 "이중 노출 블렌드 (Double Exposure Blend)" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: vfx 블록을 컷포인트 전후 1~2초 구간에만 짧게 걸어 두 샷을 겹쳐 보여준 뒤 하나로 정착시키면 슈퍼임포즈 전환처럼 기능한다. 지속적인 이중노출 룩(무드 전체에 까는 것)과 헷갈리지 말 것.
- **주의**: 전체 무드로 깔면 vfx 원래 용도(스타일)가 되어버려 전환이 아니게 된다. 지속시간을 컷포인트 앞뒤로 명확히 제한.

### 라이트 릭 / Light Leak 🔗

- **시그널**: 필름 가장자리로 빛이 새 들어와 화면 한쪽을 번지듯 물들이는 빈티지 광학 효과.
- **링크**: 새로 쓰지 않는다 — `vfx/references/optical-light-glitch.md`의 "시네마틱 라이트 리크 (빛 샘) (Cinematic Light Leak)" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: vfx 블록의 빛 샘이 컷포인트에서 화면 전체를 잠깐 뒤덮도록 강도를 끌어올려 걸면, 빛이 번지는 동안 장면이 바뀌고 빛이 걷히면서 새 장면이 드러나는 전환으로 기능한다(페이드 투 화이트/컬러의 변형).
- **주의**: vfx 원래 용법은 한쪽 가장자리에만 은은하게 번지는 "양념" 강도다 — 전환으로 쓸 때는 화면을 거의 다 덮을 만큼 강도를 올려야 컷이 가려진다. 그대로 약하게 쓰면 그냥 스타일 효과로 남고 장면 전환이 일어나지 않는다.
