# 디자인 파이프라인 스킬

[English version](README.md)

제품 컨셉부터 검증된 프로토타입까지 한 흐름으로 만드는 5개 스킬 묶음입니다. 단일 LLM이 모든 단계를 맡지 않고 **역할을 분리**해, 각 단계에서 자신의 시각 한계를 인정하고 다음 스킬로 넘기게 설계되었습니다.

---

## 핵심 철학

1. **단일 진실 원본 (Manifest-driven)** — 디자인 결정은 모두 yaml 매니페스트에 기록되고, 코드는 매니페스트를 따르기만 한다. 코드에서 디자인을 즉흥 변경하면 안 됨.
2. **역할 분리 = 결함 발견** — 디자이너가 자기 명세를 검증하지 못하고, 개발자가 자기 코드를 검증하지 못하는 문제를, 별도의 리뷰어 스킬이 외부 시각으로 잡아낸다.
3. **프로토타입의 정의** — 코드 구조는 단순하고, **디자인 완성도는 출시 수준**. "프로토타입이라 OK"는 도구·스케일에만 적용되고 시각 마감에는 적용 안 됨.
4. **단계별 산출물** — 컨셉 → 명세(+매니페스트) → 코드 → 리뷰 리포트. 각 단계의 산출물이 다음 단계의 입력이 된다.

---

## 파이프라인 한눈에

```
┌─────────────────┐    ┌──────────────┐    ┌──────────────────────────┐    ┌────────────────┐
│ product-concept │ →  │ ux-designer  │ →  │ react- 또는              │ →  │ design-reviewer│
│                 │    │              │    │ html-frontend-prototyper │    │                │
│ 브리프 .md      │    │ 명세 .md     │    │ 코드 (폴더 또는          │    │ 리뷰 리포트    │
│                 │    │ + 매니페스트 │    │  index.html)             │    │ .md            │
└─────────────────┘    └──────────────┘    └──────────────────────────┘    └────────────────┘
   "뭘 만들지"            "어떻게 보일지"          "동작하는 화면"              "결함·누락"

       ↓ 시작점이 흐릿하면              ↓ 진행 중 명세 부족 발견 시
       product-concept                   ux-designer로 매니페스트 갱신 요청
                                                          ↑
                                                   리뷰어가 결함 보고하면
                                                   해당 스킬로 되돌림
```

각 단계의 스킬은 **다음 단계로 넘기는 시점**과 **앞 단계로 되돌리는 조건**을 자기 안에 명시한다.

---

## 스킬 목록

### 1. `product-concept` — 컨셉 정리

**목적**: 무엇을 / 누구를 / 왜 만들지가 흐릿할 때, 짧은 인터뷰로 한 페이지짜리 프로젝트 브리프를 만든다.

**입력**: 사용자의 막연한 아이디어 ("뭐 만들까…", "이런 거 만들고 싶은데")
**출력**: 디자이너가 받아서 바로 일할 수 있는 한 페이지 브리프 — 타깃·핵심 가치·시나리오·톤·제약·피해야 할 스타일 포함.
**디자인이나 코드는 만들지 않음**.

**언제 쓰나**:
- 만들 게 명확하지 않을 때
- 사용자에게 짧게 인터뷰하면서 모순·모호함을 드러낼 필요가 있을 때
- 여러 사람이 같이 봐야 하는 출발점 문서가 필요할 때

**언제 건너뛰나**:
- 이미 PROJECT_PLAN.md 같은 명확한 브리프가 있을 때 → ux-designer로 직행

**트리거 표현**: "프로젝트 시작", "컨셉 정리", "뭐 만들까", "기획해줘", "요구사항 정리", "브리프", "어떤 앱/사이트 만들지 모르겠어"

**다음 단계**: `ux-designer`

---

### 2. `ux-designer` — UX/UI 명세 작성

**목적**: 브리프(또는 사용자 요구)를 받아 **디자인 시스템 → 컴포넌트 → 화면** 순서로 명세를 만든다. 명세 끝에는 기계가 읽을 수 있는 yaml 매니페스트를 둬서 프로토타이퍼가 단일 진실 원본으로 쓰게 한다.

**입력**: 프로젝트 브리프 또는 사용자 요구
**출력**:
- 디자인 시스템 토큰 (컬러·타이포·스페이싱·radius·shadow)
- 컴포넌트 명세 (variants × states × sizes × 사용 컨텍스트)
- 화면 조합 + viewport-fit 정책
- Reference Traceability 표 (브리프의 어떤 톤이 어떤 결정으로 번역됐는지)
- **Implementation Manifest (yaml)** — 단일 진실 원본
- **코드는 만들지 않음**.

**핵심 강제**:
- Native HTML 컨트롤(checkbox/radio/select) 사용 금지 → 커스텀 컴포넌트 정의
- Disabled에 opacity 사용 금지 → 별도 컬러 토큰
- Empty state는 의도된 디자인 (큰 점선 박스 금지)
- 사용 컨텍스트(sticky/absolute/grid-stretch) 명세에 명시

**언제 쓰나**:
- 새 화면/앱/페이지 형태와 인터랙션을 정해야 할 때
- 디자인 시스템부터 토큰 단위로 쌓을 때
- 컴포넌트 카탈로그가 필요할 때

**트리거 표현**: "디자인 시안", "UI 설계", "디자인 시스템", "화면 디자인", "스토리북", "토큰 정리", "컴포넌트 명세"

**다음 단계**: `react-frontend-prototyper` 또는 `html-frontend-prototyper` (사용자가 산출물 형태로 결정)

---

### 3. `react-frontend-prototyper` — React 기반 프로토타입

**목적**: ux-designer의 매니페스트를 받아 **Vite + React + JavaScript** 기반의 가벼운 프로토타입으로 구현한다. 컴포넌트 단위 분리·핫리로드·DesignSystemScreen 자동 갤러리가 강점.

**입력**: 명세 + 매니페스트
**출력**:
- 완전한 Vite 프로젝트 (`package.json`, `vite.config.js`, `src/`)
- `src/components/` 매니페스트와 1:1
- `src/screens/` 매니페스트 화면 목록과 1:1
- **`DesignSystemScreen.jsx`** — 매니페스트 순회로 모든 (variant × state × size) 자동 렌더링
- 명세-구현 일치 체크리스트

**의도적으로 빼는 것**:
TypeScript, React Router, 상태관리 라이브러리, Next.js, 백엔드, 테스트, 추가 lint 설정.
이유: 프로토타입은 디자인 변경 속도가 핵심. 도구가 늘어나면 디자인이 도구에 갇힘.

**언제 쓰나**:
- 컴포넌트 단위 분리·재사용이 자연스러울 때
- DesignSystemScreen 자동 갤러리로 모든 조합 검증이 필요할 때
- 핫리로드로 빠른 iteration이 필요할 때
- 추후 운영 React 코드로 옮길 가능성이 있을 때

**트리거 표현**: "React로 프로토타입", "Vite로 시안", "컴포넌트 단위로", "DesignSystemScreen", "JSX로 구현"

**다음 단계**: `design-reviewer` (필수 호출)

---

### 4. `html-frontend-prototyper` — Vanilla HTML/CSS/JS 프로토타입

**목적**: ux-designer의 매니페스트를 받아 **순수 HTML + CSS + Vanilla JavaScript** 로 구현한다. 빌드/npm/프레임워크 없이 **브라우저에서 더블클릭만으로 동작**하는 게 정체성.

**입력**: 명세 + 매니페스트
**출력 (2가지 모드)**:
- **Multi-file (default)**: `index.html` + `style.css` + `app.js` (빌드 없음)
- **Single-file**: 모든 CSS/JS를 `index.html`에 인라인 (사용자가 명시 요구할 때)

**의도적으로 빼는 것**:
빌드 도구, npm, 프레임워크, ES module, TypeScript/JSX/Sass, 외부 CDN, 라우터.
이유: vanilla 단일 파일/단일 폴더의 가치는 **외부 의존성 0**과 **즉시 동작**.

**Vanilla 특수 강제**:
- ES module 금지 (file:// CORS 깨짐)
- 외부 CDN 금지 (system 폰트 + inline SVG)
- 커스텀 컨트롤은 ARIA로 semantic 보충 (`role="switch" aria-checked` 등)
- `node -e "new Function(fs)"`로 JS 문법 검증 (빌드 없는 대신)

**언제 쓰나**:
- 사용자 브리프에 "React 금지", "단일 HTML", "vanilla", "빌드 없이" 류 제약이 있을 때
- 메일 첨부·USB 전달 등으로 한 파일이 필요할 때
- 외부 의존성이 정책상 금지일 때
- 데모를 더블클릭만으로 보여줘야 할 때

**언제 react를 추천하나**:
사용자가 미지정이면 한 줄로 묻는다: "산출물 형태는 React + Vite 구조와 단일 HTML 파일 중 어느 게 좋을까요?" 일반적으로 5화면 이상이면 react가 유리.

**트리거 표현**: "vanilla로", "단일 HTML 파일", "React 없이", "빌드 없이", "더블클릭만으로", "정적 HTML 한 파일"

**다음 단계**: `design-reviewer` (필수 호출)

---

### 5. `design-reviewer` — 외부 비평 검토

**목적**: ux-designer + 프로토타이퍼의 산출물을 **외부 비평가의 시각**으로 검토해, 누락·결함·부족함을 항목별로 보고한다. **새 산출물은 만들지 않음** — 평가만.

**입력**: 명세 + 매니페스트 + 코드 (+ 선택: dev URL 또는 스크린샷)
**출력**: Critical / Should-fix / Nice-to-have 3단계로 분류된 결함 리포트. 각 결함은 어느 스킬(`ux-designer` / `react-frontend-prototyper` / `html-frontend-prototyper`)로 돌아갈지 명시.

**4가지 검사 차원**:
1. **Spec ↔ Manifest 일관성** (mechanical) — 본문에 등장한 항목이 매니페스트에 다 있는가
2. **Manifest ↔ Code 일관성** (mechanical) — 토큰·컴포넌트·화면이 1:1인가, 빌드 통과(React) / JS 문법 통과(HTML)
3. **Polish & Production-Quality** (judgmental, 가장 중요) — opacity-disabled, 점선 empty state, focus ring 누락, 빈 viewport 영역 등
4. **Reference Fidelity** (judgmental) — 브리프의 톤·레퍼런스가 결과에 진짜 묻어났는가

**핵심 원칙**:
- 자기 옹호 금지 (같은 세션에서 producer 작업했어도 외부 시각으로 본다)
- 명시된 것 ≠ 작동하는 것 (placeholder만 있는 인터랙션은 결함)
- 코드 ≠ 렌더 결과 (정적 분석만으로 끝내지 말고 실측 확인)
- "프로토타입이라 OK" 변명 금지 (운영 수준이 기준)

**언제 쓰나**:
- 프로토타이퍼 작업 후 사용자에게 보여주기 전 (필수)
- 사용자가 "이거 괜찮아?", "놓친 거 없어?" 등 검증 요청
- 디자인 파이프라인의 마지막 단계로 명세·코드 산출물을 검증할 때

**트리거 표현**: "리뷰", "검토", "QA", "이거 괜찮아?", "프로페셔널해 보여?", "놓친 거 없어?", "디자인 점검"

**다음 단계**: 발견된 Critical/Should-fix를 producer 스킬로 되돌려 수정

---

## 사용 패턴

### 패턴 A: 풀 파이프라인 (컨셉이 흐릿할 때)

```
"한 명 운영 카페 사장님용 픽업 주문 앱"을 만들고 싶어.
타깃은 50대 자영업자, 핵심 가치는 "주문 한 번에 보기".
톤은 토스 + 오늘의집 느낌.
산출물은 React + Vite로.

product-concept → ux-designer → react-frontend-prototyper → design-reviewer
순서로 진행해주세요.
```

### 패턴 B: 브리프 있을 때 (컨셉 단계 스킵)

```
/path/to/PROJECT_PLAN.md 를 받아서
ux-designer로 명세 정리하고,
html-frontend-prototyper로 단일 index.html 만들고,
design-reviewer로 검토해주세요.
```

### 패턴 C: 단일 스킬

```
/ux-designer  토스풍 결제 화면 5개 디자인 시스템 정리해줘
/design-reviewer  /path/to/index.html 와 SPEC.md 검토해줘
```

---

## 베스트 프롬프트 템플릿

```markdown
# 만들 것
[1줄 제품 정의]

# 누구 위해
[연령·직업·상황 — 구체적으로]

# 왜 (핵심 가치)
[해결하는 문제 — 1~2문장]

# 톤 / 레퍼런스
- 좋아하는: [Linear / 토스 / Notion / Frame.io 등 + 이유]
- 피하고 싶은: [예: 과한 그라데이션, 카페=베이지 클리셰]

# 산출물 형태
[ ] React + Vite (컴포넌트 분리, 핫리로드, DesignSystemScreen)
[ ] 단일 index.html (vanilla, 더블클릭)
[ ] Multi-file vanilla (index.html + style.css + app.js)

# 제약
- viewport: [모바일 / 데스크톱 1440 / 둘 다]
- [다크/라이트, 외부 CDN, 폰트 등]

# 시나리오 (선택)
1. ...
2. ...

# 진행
product-concept → ux-designer → [react|html]-frontend-prototyper → design-reviewer
(컨셉 명확하면 ux-designer 부터)
```

---

## 결과물의 단일 진실 원본 — 매니페스트

ux-designer가 만드는 yaml 매니페스트가 모든 스킬의 **공통 진실 원본**입니다.

```yaml
tokens:
  colors:
    - { name: --color-primary, value: "#7B5BFF" }
    # ...
  typography: [...]
  spacing: [...]

components:
  - name: Button
    variants: [primary, secondary, ghost]
    states: [default, hover, active, disabled]
    sizes: [sm, md, lg]
    context: normal-flow

screens:
  - name: DashboardScreen
    components: [...]
    viewport_fit: scroll-canvas

scenarios:
  - id: scenario-1
    flow: [Screen1, Screen2, Screen3]
```

규칙:
- 본문에 등장한 항목은 매니페스트에 빠짐없이 등록 (반대도 마찬가지)
- 프로토타이퍼는 매니페스트의 모든 토큰을 `:root` 에 1:1 옮기고, 모든 컴포넌트 조합을 DesignSystemScreen에 자동 렌더
- 디자인 변경은 코드부터 고치지 말고 **항상 매니페스트부터** 갱신

---

## 디렉토리

```
design/
├── README.md
├── README.ko.md                    ← 이 문서
├── product-concept/SKILL.md
├── ux-designer/SKILL.md
├── react-frontend-prototyper/SKILL.md
├── html-frontend-prototyper/SKILL.md
└── design-reviewer/SKILL.md
```

각 SKILL.md 안에 해당 스킬의 작업 흐름·강제 사항·협업 조건이 자세히 적혀 있습니다.

---

## 안티 패턴 (모든 스킬 공통)

다음은 어느 단계에서도 만들지 말 것:

- `<input type="checkbox">`, `<input type="radio">`, `<select>` (native 컨트롤)
- `opacity: 0.4` 같은 disabled/inactive 표현 (별도 컬러 토큰 사용)
- 큰 점선 박스로 empty state 채우기 (의도된 디자인 필요)
- viewport보다 작은 콘텐츠 + 빈 영역 방치 (viewport-fit 정책 적용)
- 격리 wrapper에 sticky/absolute 컴포넌트 단독 렌더 (원래 부모 컨텍스트의 미니어처 사용)
- Lorem ipsum (브리프 톤에 맞는 실제 카피)
- 매니페스트에 없는 토큰을 코드에서 만들기 (drift)
- 매니페스트에 있는 항목을 코드에서 빠뜨리기 (silent omission)
- 코드에서 즉흥적으로 디자인 변경 (매니페스트부터 갱신)
- 빌드/JS 문법 통과만으로 완료 처리 (시각 검증 필수)
- design-reviewer 호출 없이 사용자에게 결과 전달

이 리스트가 짧을수록 산출물이 운영 수준에 가까워집니다.
