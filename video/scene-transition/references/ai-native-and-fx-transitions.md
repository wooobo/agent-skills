# AI 생성 워크플로 & FX 구동 전환 (AI-Native Workflows & FX-Driven Transitions)

실제 T2V/I2V 생성모델(Kling·Runway·Pika·Luma·Veo·Seedance 등)에서 실무적으로 통하는 전환 프롬프트 기법(눈·문·거울 줌스루, 오브젝트/머티리얼/아이덴티티/스타일 모프, 스타트-엔드 프레임 인터폴레이션)과, 이펙트 자체를 컷포인트로 쓰는 유기적 FX 전환(필름번·잉크 와이프·파티클·리퀴드 모프·셔터·라이트버스트)을 다룬다.

> 각 항목 구성: **시그널**(전환 시그니처) / **앵커**(짧은 영어 태그) / **의도**(무드 단어) / **전환 블록**(영어, 바로 붙여쓰기) / **페어링**(어울리는 다른 전환·요소) / **주의**.
>
> 전환 블록은 [샷A 전체 스택] ↔ [샷B 전체 스택] 사이의 "경계"를 묘사하는 문단이다. 샷A 지시문의 꼬리 / 샷B 지시문의 머리에 붙이거나, 지속시간이 있는 전환은 별도의 짧은 "전환 전용 클립"으로 생성해 둘 사이에 끼운다. 사용법·삽입 방식·안 통하는 것은 SKILL.md 참고.

## 줌스루 & 프레임 워크플로

### 아이(눈) 줌스루 / Eye · Pupil Zoom-Through

- **시그널**: 인물의 눈을 클로즈업하며 줌인해 동공 속에서 다음 장면이 리빌되는 전환.
- **앵커**: `eye pupil zoom-through` · **의도**: immersive, dreamlike, revelatory
- **전환 블록**:
  ```
  The camera pushes into an extreme close-up of the subject's eye, the iris and pupil filling the frame as focus tightens on the dark center; the pupil's black surface holds a faint reflected glimmer that blooms outward and dissolves into darkness, before resolving into the next scene, as though the eye itself were a doorway the camera passed through.
  ```
- **페어링**: 감정적 전환, 몽타주 도입·회상, 드림 시퀀스.
- **주의**: 동공이 화면을 완전히 채우기 전에 컷하면 이음매가 보인다; 눈 클로즈업 직전 프레임의 밝기·조명이 다음 장면 초반 톤과 부드럽게 이어지도록 노출 곡선을 맞출 것.

### 도어웨이/스레숄드 줌스루 / Doorway · Threshold Zoom-Through

- **시그널**: 문·입구·좁은 틈이나 불투명한 사물을 향해 줌인/푸시해 통과하는 순간 다음 장면으로 넘어가는 전환.
- **앵커**: `doorway threshold zoom-through` · **의도**: transitional, immersive, propulsive
- **전환 블록**:
  ```
  The camera pushes steadily toward the doorway ahead, the frame's edges darkening as the opening fills more and more of the shot until the threshold swallows the lens entirely into black; out of that darkness the next scene emerges, the camera continuing its forward push as it settles into the new space beyond.
  ```
- **페어링**: 장소 이동, 시간 경과 몽타주, 공간을 잇는 내러티브.
- **주의**: 통과할 틈이 카메라 시야를 완전히 가릴 만큼 좁아야 한다 — 안 그러면 배경이 새어 보여 전환이 매끄럽지 않다; 진입 각도가 다음 장면의 진입 각도·방향과 맞아야 자연스럽다.

### 미러 리플렉션 줌스루 / Mirror-Reflection Zoom-Through

- **시그널**: 거울·유리·화면 속 이미지 등 반사·프레임 표면으로 줌인해 그 안이 실제 다음 장면으로 확장되는 전환.
- **앵커**: `mirror reflection zoom-through` · **의도**: layered, uncanny, revelatory
- **전환 블록**:
  ```
  The camera pushes in on the reflective surface until the reflection fills the entire frame, the mirror's edge vanishing from view; what was a contained reflected image seamlessly expands to become the full, unbounded next scene, as if the camera had stepped through the glass itself.
  ```
- **페어링**: 판타지·초현실 톤, 회상·평행세계 리빌, 콘셉추얼 광고.
- **주의**: 반사면의 테두리가 화면 안에 남아있으면 위화감이 생기므로 완전히 사라질 때까지 밀고 들어가야 한다; 반사상의 원근·각도가 다음 장면의 시작 각도와 어긋나면 이음매가 어색해진다.

### 스타트-엔드 프레임 인터폴레이션 / Start–End Frame Interpolation

- **시그널**: 시작·끝 참조 이미지 두 장을 지정하면 그 사이를 AI가 보간해 채우는 image-to-video 워크플로 (Kling/Luma/Pika/Runway 공통). 텍스트 전환 문구가 아니라 모델의 이미지 입력 슬롯을 쓰는 별개의 도구.
- **앵커**: `start/end frame interpolation` · **의도**: precise, controlled
- **워크플로**:
  ```
  두 장의 레퍼런스 이미지(샷A의 마지막 프레임 / 샷B의 시작 프레임)를 모델의 시작-프레임·끝-프레임 슬롯에 각각 넣는다. 프롬프트에는 그 사이에서 무엇이 어떻게 변하는지(카메라 무브, 조명 변화, 오브젝트 변형)를 문장으로 짧게 지시한다: "the camera slowly pushes in as the lighting shifts from daylight to dusk" 같은 식.
  ```
- **페어링**: 모프 전환 계열 전부와 결합 가능 — 모프 블록을 이 워크플로의 "사이에서 무엇이 변하는지" 지시문으로 그대로 쓴다.
- **주의**: 두 이미지가 포즈·구도·색 중 하나 이상 공통점이 없으면 인터폴레이션이 왜곡되거나 실패한다; 모델이 이 기능(start/end frame)을 지원하는지 먼저 확인해야 한다.

### 시임리스 루프 (퍼펙트 루프) / Seamless Loop (Perfect Loop)

- **시그널**: 시작과 끝 프레임을 동일하게 하거나 왕복 재생으로 맞춰 무한 반복이 가능하게 만드는 전환 처리.
- **앵커**: `seamless perfect loop` · **의도**: hypnotic, continuous, ambient
- **전환 블록**:
  ```
  The clip's final frame returns to match its opening frame exactly in framing, pose, lighting and color, so that where the sequence ends it re-begins without any visible seam — the motion completing one full cycle (a pendulum returning to start, a stride of walking, a gust completing its sweep) so playback can repeat indefinitely with no jump or flicker at the join.
  ```
- **페어링**: 앰비언트 배경 영상, 디지털 사이니지, 소셜 루프 클립, 시네마그래프 스타일 반복.
- **주의**: 시작=끝 프레임의 조명·그림자·색까지 프레임 단위로 일치해야 한다 — 미세한 밝기·그림자 차이가 있으면 반복 재생 시 이음매에서 튄다; 왕복(ping-pong) 재생을 쓰는 경우 되감기 구간의 모션이 부자연스럽지 않은지 확인할 것.

## 모프 전환

### 오브젝트 모프 / Object Morph Transition

- **시그널**: 한 사물이 다른 사물로 형태·표면이 매끄럽게 변형되며 넘어가는 전환.
- **앵커**: `smooth object morph` · **의도**: fluid, transformative, magical
- **전환 블록**:
  ```
  The subject's form begins to soften and flow, its silhouette gradually reshaping — surface, edges and proportions melting into a new configuration — until it fully resolves into the next object, the transformation reading as one continuous, unbroken metamorphosis rather than a cut.
  ```
- **페어링**: 콘셉추얼 광고, 마법·판타지 톤, 제품 리빌.
- **주의**: 두 대상의 실루엣·비율이 어느 정도 겹쳐야 중간 프레임이 뭉개지지 않는다 (예: 사람→자동차처럼 형태 대응점이 없으면 실패); 급격한 크기 차이는 피할 것.

### 머티리얼 모프 / Material Morph Transition

- **시그널**: 형태는 유지한 채 표면 재질만(피부→석상, 금속→물 등) 바뀌는 전환.
- **앵커**: `material morph transition` · **의도**: transformative, tactile, uncanny
- **전환 블록**:
  ```
  The subject's silhouette and proportions stay completely fixed while its surface material begins to change — texture, sheen and color transmuting continuously from the first material into the second (skin turning to stone, metal turning to liquid) as the underlying form holds its exact shape and pose throughout, the transformation reading purely as a material shift rather than any change in structure.
  ```
- **페어링**: 제품 리빌(소재 전환 광고), 마법·저주 변신, 캐릭터 파워업.
- **주의**: 형태(실루엣·비율)는 고정하고 재질(질감·반사율·색)만 바뀐다는 것을 반드시 명시할 것 — 형태까지 같이 바뀌면 오브젝트 모프와 구분이 사라진다; 재질 간 광택도·반사 성질이 극단적으로 다르면 중간 단계가 뭉갤 수 있다.

### 아이덴티티/에이지 모프 / Identity · Age Morph Transition

- **시그널**: 동일한 포즈·구도를 유지한 채 인물의 정체성(얼굴)이나 나이만 다르게 바뀌며 다음 장면으로 이어지는 전환.
- **앵커**: `identity age morph transition` · **의도**: revelatory, poignant, transformative
- **전환 블록**:
  ```
  The camera framing, pose and lighting remain fixed exactly as they are while only the subject's face and identity shift — features, bone structure and age gradually reshaping and resolving into the next person (or an older or younger version of the same person) — the body position and composition never moving so the change reads entirely as identity, not staging.
  ```
- **페어링**: 세대 서사, 회상·성장 몽타주, 미스터리 리빌(정체 밝혀짐).
- **주의**: 포즈·구도·조명은 반드시 고정, 얼굴(정체성·나이)만 바뀐다고 명시할 것; 두 인물의 얼굴 각도·프레임 내 크기가 겹치지 않으면 중간 프레임이 뭉개진다.

### 크로스-스피시즈 모프 / Cross-Species · Object Morph

- **시그널**: 서로 다른 생물·사물 사이(꽃→나비, 구름→동물 등)를 자연스럽게 형태 변형시키는 전환.
- **앵커**: `cross-species object morph` · **의도**: whimsical, magical, fluid
- **전환 블록**:
  ```
  The first form's silhouette gradually reorganizes — its outline and mass reshaping point by point into the second form's anatomy, colors and surface patterns migrating along corresponding regions (petals stretching into wings, a curve of cloud thinning into a limb) — the transformation tracking one continuous, unbroken shape-change rather than a dissolve between two unrelated images.
  ```
- **페어링**: 동화적 톤, 자연 다큐 스타일 그래픽, 콘셉추얼 광고.
- **주의**: 두 대상 사이 실루엣 대응점(비슷한 비율·곡선, 예: 꽃잎↔날개)이 있어야 이어붙는다; 대응점 없는 조합(예: 자갈→코끼리)은 형태 대응이 없어 중간 프레임이 뭉개진 덩어리로 붕괴한다.

### 시대·시간대 모프 / Era · Time-of-Day Morph Transition

- **시그널**: 동일한 구도를 유지한 채 시대·계절·낮과 밤 등 배경 조건만 바뀌며 넘어가는 환경 모프 전환.
- **앵커**: `era time-of-day morph transition` · **의도**: nostalgic, atmospheric, sweeping
- **전환 블록**:
  ```
  The camera position, framing and any static architecture stay locked in place while the environment around it transforms — light shifting gradually from one time of day to another, or the setting aging and de-aging through eras as signage, vehicles, foliage and surface wear change — the composition never moving so the passage of time reads purely through the changing world within the same fixed frame.
  ```
- **페어링**: 세월의 흐름 몽타주, 브랜드·장소의 역사 리빌, 계절 전환.
- **주의**: 카메라 위치·구도(건물 윤곽·지평선 같은 고정 요소)는 반드시 고정하고 조명·색·디테일(간판·식생·사물)만 바뀐다고 명시할 것; 전경 요소가 대응점 없이 갑자기 사라지거나 나타나면 흐름이 아니라 컷처럼 보인다.

### 아트-스타일 모프 / Art-Style · Medium Morph Transition

- **시그널**: 동일 장면이 실사→일러스트→3D 렌더 등 화풍이나 미디엄만 바뀌며 이어지는 전환.
- **앵커**: `art-style medium morph transition` · **의도**: conceptual, painterly, stylistic
- **전환 블록**:
  ```
  The composition, pose and framing stay exactly the same while the rendering medium itself transforms — brushstroke texture, line quality, color palette and material rendering gradually shifting from the first style into the second, photoreal skin turning to painterly strokes or flat illustration resolving into rendered 3D volume — the scene's content and staging never changing, only how it is depicted.
  ```
- **페어링**: 콘셉트아트 리빌, 브랜드 스토리텔링(그림에서 실사로), 크리에이티브 프로세스 영상.
- **주의**: 구도·포즈는 고정, 화풍·미디엄만 바뀐다고 명시할 것; 스타일 간 형태 왜곡 정도 차이가 크면(예: 극단적 카툰 비율 ↔ 사실적 비율) 중간 단계에서 형태가 무너져 보인다.

## 오가닉 FX 구동 전환

### 플래시/화이트아웃 컷 / Flash · Whiteout Cut

- **시그널**: 컷 순간 화면 전체가 흰빛·검정·단색으로 한두 프레임 번쩍이거나 잠기며 다음 장면으로 튀어넘어가는 전환.
- **앵커**: `flash whiteout cut` · **의도**: jarring, punchy, kinetic
- **전환 블록**:
  ```
  The screen flashes to a blinding solid white, or black, for an instant, the prior frame overexposing into pure light almost too fast to register before the next scene snaps in already in motion, the flash reading as a sharp visual percussion rather than a gradual fade.
  ```
- **페어링**: 액션 컷, 비트 드롭 싱크, 임팩트 있는 리빌.
- **주의**: 지속시간이 너무 길면 화이트아웃이 페이드처럼 보여 임팩트가 사라진다 — 한두 프레임 수준으로 짧게 유지할 것; 플래시 색(백색/흑색/단색)을 샷A의 하이라이트·섀도 톤과 맞추면 자연스럽게 튄다.

### 필름번 (플레임 와이프) / Film Burn · Flame Wipe

- **시그널**: 필름이 타들어가거나 화염이 번지듯 프레임 가장자리부터 화면을 태우며 넘어가는 전환.
- **앵커**: `film burn flame wipe` · **의도**: nostalgic, visceral, dramatic
- **전환 블록**:
  ```
  An orange-white burn spreads inward from the edge of frame, the image warping and bubbling as if the film emulsion itself were scorching — the burning edge glowing hottest at its leading line, charring the picture to black behind it — until the entire frame is consumed, and the next scene emerges from the fading embers of the burn.
  ```
- **페어링**: 빈티지 필름 룩, 회상 시퀀스, 드라마틱한 장 전환.
- **주의**: 번 라인이 화면 전체를 균일하게 뒤덮으면 안 된다 — 한쪽 모서리에서 시작해 한 방향으로 번져야 필름번 특유의 유기적 불규칙성이 산다; `color-grade`의 빈티지 필름 룩·그레인과 페어링하면 궁합이 좋다.

### 페인트/잉크 와이프 / Paint · Ink Wipe

- **시그널**: 잉크·물감·핏물 등이 번지거나 튀어 화면을 덮으며 다음 장면을 드러내는 전환.
- **앵커**: `paint ink wipe` · **의도**: expressive, visceral, painterly
- **전환 블록**:
  ```
  A wash of ink, or paint, or blood, spreads across the frame from one point of contact, blooming and bleeding outward in organic tendrils that swallow the image entirely in saturated color; as the liquid thins and recedes toward the edges, the next scene is revealed showing through the retreating stain.
  ```
- **페어링**: 아트하우스 톤, 감정적 전환(트라우마·폭력 암시), 콘셉추얼 뮤직비디오.
- **주의**: 액체가 퍼지는 방향과 중력이 일관되어야 한다 — 무작위로 사방에서 번지면 합성처럼 보인다; 색(잉크의 검정·컬러, 핏물의 적색)이 장르 톤과 맞아야 한다.

### 파티클 오버레이 와이프 / Particle Overlay Wipe

- **시그널**: 연기·먼지·꽃잎·눈·컨페티 등 파티클이 화면을 스치듯 뒤덮었다 걷히며 다음 장면을 드러내는 전환.
- **앵커**: `particle overlay wipe` · **의도**: atmospheric, textural, ephemeral
- **전환 블록**:
  ```
  A drift of particles — smoke, dust, falling petals or snow — sweeps across the frame from one side, thickening until it briefly obscures the entire image in a soft moving veil; as the particles thin and clear past the far edge, the next scene is already there behind them, the cut hidden inside the density of the passing drift.
  ```
- **페어링**: 계절감 있는 전환, 로맨틱·노스탤직 톤, 자연 다큐.
- **주의**: 파티클은 피사체 자체가 아니라 화면을 가로지르는 "커튼"이어야 한다 — 피사체가 직접 붕괴·분해되는 재로 흩어짐(스냅)과 혼동하지 말 것; 파티클 밀도가 화면을 완전히 가리는 순간이 있어야 이음매가 숨는다.

### 리퀴드 모프/리플 전환 / Liquid Morph · Ripple Transition

- **시그널**: 물·수은·기름 등 액체가 흐르고 물결치며 화면이 다음 장면 형태로 서서히 녹아 변형되는 전환.
- **앵커**: `liquid morph ripple transition` · **의도**: fluid, mesmerizing, transformative
- **전환 블록**:
  ```
  The image begins to ripple and liquefy, its surface behaving like mercury or water — rippling waves distorting the picture as it melts and flows across the frame — until the liquid settles and resolves into the next scene, the transformation reading as one continuous fluid motion rather than a cut.
  ```
- **페어링**: 제품 리빌(액체 소재 광고), 꿈·기억 전환, 럭셔리 브랜드 톤.
- **주의**: 물결의 방향과 중력이 일관되어야 하며, 다음 장면으로 "흘러 들어가는" 방향이 카메라 무브(있다면)와 맞아야 자연스럽다; 화면 전체가 변형되는 이 전환과 피사체 표면만 물로 바뀌는 머티리얼 모프를 혼동하지 말 것.

### 셔터(파편) 전환 / Shatter · Fragment Transition

- **시그널**: 화면이 유리·거울처럼 산산조각나거나 다각형 조각으로 갈라지며 그 틈 사이로 다음 장면이 드러나는 전환.
- **앵커**: `shatter fragment transition` · **의도**: violent, dramatic, kinetic
- **전환 블록**:
  ```
  The frame fractures into a spiderweb of glass-like shards, each polygon splitting apart and flying outward from the point of impact, the widening gaps between fragments revealing the next scene behind them; the shards accelerate away until the last piece clears frame and the new scene stands fully revealed.
  ```
- **페어링**: 임팩트 있는 리빌, 액션·스릴러 톤, 파괴적 전환.
- **주의**: 조각이 균일한 격자로 쪼개지면 인공적으로 보인다 — 충격점에서 방사형으로 불규칙하게 갈라지는 금이 자연스럽다; 파편의 반사·굴절에 다음 장면의 빛이 살짝 비치면 이음매가 부드러워진다.

### 라이트버스트/플레어 와이프 / Light Burst · Flare Wipe

- **시그널**: 광원에서 뿜어나온 강렬한 빛이나 플레어가 화면을 가로지르며 화이트아웃시키고 다음 장면으로 넘어가는 전환.
- **앵커**: `light burst flare wipe` · **의도**: euphoric, radiant, sweeping
- **전환 블록**:
  ```
  A burst of light flares from a point in frame and sweeps outward, the beam's bloom overexposing the image into streaking white as it washes across the entire frame; the flare recedes to reveal the next scene already lit and settled, as if the light itself carried the cut through.
  ```
- **페어링**: 감성 광고, 골든아워 톤, 희망적·절정 리빌.
- **주의**: 플레어의 광원(태양, 조명 등)이 샷A 안에 이미 존재해야 갑자기 나타난 빛처럼 보이지 않는다; 화이트아웃 강도가 과하면 플래시/화이트아웃 컷과 구분이 안 되니 방사형 스트릭·헤일레이션 특유의 결을 살릴 것.

## VFX 링크 (링크 전용, 🔗)

### 디지털 디졸브 / Digital Dissolve 🔗

- **시그널**: 피사체가 RGB 채널 분리와 블록 깨짐으로 디지털하게 찢어지며 사라지는 글리치성 소멸.
- **링크**: 새로 쓰지 않는다 — `vfx/references/energy-scifi-magic.md`의 "글리치 / 디지털 디졸브 (Glitch / Digital Dissolve)" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 샷A 끝에서 피사체(또는 화면 전체)가 이 블록대로 RGB 채널이 찢어지고 블록 노이즈로 사라지며, 그 글리치 잔상이 걷히는 지점에서 샷B가 시작되는 컷포인트로 쓴다.
- **주의**: 디지털·테크·SF 톤에 한정 — 사실적이거나 따뜻한 톤의 장면 전환에 쓰면 부조화스럽다.

### 포탈/웜홀 / Portal · Wormhole 🔗

- **시그널**: 빛나는 포탈이 열려 다음 장면으로 빨려 들어가는 SF 리빌.
- **링크**: 새로 쓰지 않는다 — `vfx/references/energy-scifi-magic.md`의 "포탈/웜홀" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 줌스루 전환의 SF 버전으로 쓴다 — 피사체가 포탈을 향해 다가가거나 포탈이 확장되며 화면 전체를 채우는 순간 컷포인트로 삼는다.
- **주의**: SF·판타지 톤에 한정 — 현실적 톤의 장면 전환에 쓰면 어울리지 않는다.

### 텔레포트 분해 / Teleport Disintegration 🔗

- **시그널**: 피사체가 빛 입자로 분해되어 위로 흩어지며 순간이동하는 전송 소멸.
- **링크**: 새로 쓰지 않는다 — `vfx/references/energy-scifi-magic.md`의 "텔레포트 디머터리얼라이즈 (전송 소멸) (Teleport Dematerialize)" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 샷A의 피사체가 발끝부터 빛 입자로 분해되어 사라지는 순간을 컷포인트로 삼고, 샷B는 그 입자가 다른 장소에서 모여 재구성되는 도착 장면(또는 완전히 새로운 장면)으로 잇는다.
- **주의**: SF·판타지 톤에 한정; 도착(재구성) 장면까지 보여주고 싶다면 `vfx/references/destruction-transform.md`의 "텔레포트 리어셈블리"를 샷B 머리에 짝지어 쓰는 것도 고려할 것.

### 재로 흩어짐(스냅) / Ash Disintegration (Snap) 🔗

- **시그널**: 피사체가 가장자리부터 잿가루 입자로 부스러져 바람에 실려 사라지는 소멸.
- **링크**: 새로 쓰지 않는다 — `vfx/references/destruction-transform.md`의 "재로 흩어짐 / 디스인티그레이션 (스냅) (Ash Disintegration (Snap))" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 샷A의 피사체가 이 블록대로 한쪽 가장자리부터 재로 흩어지며 완전히 사라지는 순간을 컷포인트로 삼아 샷B로 넘어간다 — 이별·소멸·상실의 감정적 전환에 적합.
- **주의**: 피사체 자체가 직접 붕괴하는 전환이므로, 화면을 스치는 파티클 커튼인 파티클 오버레이 와이프와 혼동하지 말 것.

### 픽셀/복셀 분해 / Pixel · Voxel Dissolve 🔗

- **시그널**: 피사체가 정육면체 복셀/픽셀로 분해되어 떠오르며 흩어지는 디지털 비물질화.
- **링크**: 새로 쓰지 않는다 — `vfx/references/destruction-transform.md`의 "픽셀·복셀 분해 / 디지털 디스인티그레이션 (Pixel / Voxel Disintegration)" 블록을 그대로 가져와 쓴다.
- **전환에 쓰는 법**: 샷A의 피사체가 한쪽 가장자리부터 복셀 큐브로 쪼개져 떠오르며 흩어지는 순간을 컷포인트로 삼는다 — 디지털 디졸브(글리치)보다 더 정돈된, 하이테크·가상현실 톤의 소멸에 적합.
- **주의**: 디지털 디졸브와 톤이 겹치므로 한 프로젝트에서 두 개를 같이 쓰면 구분이 약해질 수 있다 — 하나만 골라 일관되게 쓸 것.
