---
name: react-frontend-prototyper
description: ux-designer가 만든 디자인 명세를 받아 Vite + React + JavaScript 기반의 가벼운 프로토타입 코드로 구현. 사용자가 "React로 프로토타입", "Vite로 시안", "컴포넌트 단위로", "디자인 시스템 화면 자동 생성", "JSX로 구현" 같은 표현을 쓰거나, 컴포넌트별 분리·핫리로드·DesignSystemScreen 갤러리가 필요할 때 사용. 단일 HTML/vanilla JS가 더 적합하면 `html-frontend-prototyper`를 권한다. 운영 코드가 아니라 **디자인 컨셉 제안용 프로토타입**에만 집중. 명세가 부족하면 ux-designer 스킬에 보충 요청.
---

# 프론트엔드 프로토타이퍼 (React)

디자이너가 정리한 명세를 **Vite + React + JavaScript** 기반의 가벼운 프로토타입으로 구현한다.
이건 운영 코드가 아니라 **디자인 컨셉을 보여주기 위한 프로토타입**이라는 점이 이 스킬의 모든 결정에 깔려 있다.

> **이 스킬을 쓸지 `html-frontend-prototyper`를 쓸지 판단**
> - React 사용: 컴포넌트 단위 분리, DesignSystemScreen 자동 갤러리, props 기반 상태, 핫리로드 + 빠른 iteration이 필요할 때 — 이 스킬.
> - 단일 `index.html` (vanilla HTML/CSS/JS, 빌드/npm 없음)이 명시적으로 요구되거나, 더블클릭만으로 동작하는 산출물이 필요할 때 — `html-frontend-prototyper`.
> 사용자 브리프에 "React 금지" 또는 "단일 HTML 파일" 류의 제약이 있으면 즉시 `html-frontend-prototyper`로 안내.

## 의도적으로 빼는 것 (도구·구조 단순함만)

다음은 프로토타입 단계에서 일부러 제외한다. 사용자가 명시적으로 요청하지 않는 한 추가하지 않는다.

- TypeScript (JavaScript만)
- React Router (화면 전환은 `useState`로)
- 상태관리 라이브러리 (Redux, Zustand 등 — `useState`로 충분)
- Next.js
- 백엔드 / API 호출 (필요하면 mock 데이터를 인라인으로)
- 테스트 프레임워크
- ESLint/Prettier 추가 설정 (Vite 기본값 사용)

이유: 디자인 시안 단계에선 도구 설정에 시간을 쓰는 게 낭비다. 또 디자인이 도구 구조에 갇히면 바꾸기 어려워진다. 단순한 코드일수록 디자인을 빨리 다시 그릴 수 있다.

## 디자인 완성도는 단순화하지 않는다

위 단순화는 **도구·코드 구조에만 적용된다**. 디자인 완성도는 운영 제품 수준이어야 한다. 다음은 절대 단순화하면 안 됨:

- **Native HTML 컨트롤 사용 금지**: `<input type="checkbox">`, `<input type="radio">`, `<select>`, native date picker 등 브라우저 기본 모양은 시각 의도를 통째로 무너뜨린다. 매니페스트에 정의된 커스텀 Checkbox/Radio/Select 등의 컴포넌트만 사용. 매니페스트에 없으면 ux-designer에 추가 요청.
- **Disabled 상태에 generic opacity 금지**: `opacity: 0.4`로 처리하지 말고, 매니페스트의 disabled용 컬러 토큰(`--color-button-disabled-bg` 등)을 별도로 사용. 운영 수준의 disabled는 빈혈처럼 보이지 않고 *의도된 모양*이 있다.
- **Empty state 무성의 금지**: 빈 사진 업로드 박스, 빈 리스트 등은 명세대로 시각 리듬·아이콘·짧은 안내를 갖춰야 한다. 큰 점선 박스 하나로 화면 1/3을 차지하면 안 됨.
- **Viewport 빈 영역 방치 금지**: 콘텐츠가 viewport보다 작을 때 화면 하단·측면에 목적 없는 빈 영역이 크게 남으면 만들다 만 느낌이 난다. 명세의 viewport-fit 정책(확장, fit, 스크롤 시작점, 의도된 고정 여백 등)을 구현하고, 정책이 없으면 ux-designer에 되돌린다.
- **갤러리 wrapper로 컴포넌트 깨뜨리기 금지**: sticky, absolute, fixed, grid-stretch에 의존하는 컴포넌트를 작은 박스에 임의로 감싸면 테두리 잘림·정렬 어긋남이 생긴다. DesignSystemScreen에서는 원래 부모 컨텍스트의 미니어처를 만들어 검수한다.
- **마이크로 디테일 누락 금지**: 그림자 두께, 라인 굵기, 라운딩 단계, 입력 포커스 링 — 매니페스트에 정의된 모든 토큰을 정확히 사용. "대충 비슷하면 된다"가 아니다.

**프로토타입의 정의**: 코드 구조는 단순하고, **디자인 완성도는 출시 수준**이다. 이 정의에서 어긋나면 프로토타입이 아니라 못 만든 시제품이다.

## 작업 흐름

1. **매니페스트 확인** — 명세에 `Implementation Manifest` 섹션이 있는지 확인. 없으면 진행 금지하고 `ux-designer`에 매니페스트 작성을 요청한다. 매니페스트가 단일 진실 원본이므로 이게 없으면 silent drift가 시작된다.
2. **프로젝트 스캐폴딩** — 빈 디렉토리면 Vite 새로 생성, 이미 Vite 프로젝트면 그 위에서 작업. 산출물은 **항상 완전한 Vite 프로젝트** (package.json, vite.config.js, index.html 포함). 부분 출력일 경우엔 파일 상단에 "이 산출물은 부분 스니펫임"을 명시한다.
3. **토큰 → `:root` 자동 매핑** — 매니페스트의 `tokens`를 그대로 `style.css`의 `:root`에 1:1 옮김. 매니페스트에 없는 토큰을 만들지 않고, 있는 토큰을 빠뜨리지 않는다. CSS 변수명·값을 직접 고치지 말 것 — 디자인을 바꾸려면 매니페스트부터.
4. **컴포넌트 작성** — 매니페스트 `components`의 각 항목을 `src/components/`에 하나씩. 컴포넌트 props는 매니페스트의 `variants`·`states`·`sizes`에 1:1 대응.
5. **디자인 시스템 화면 (필수, 매니페스트 기반)** — `DesignSystemScreen.jsx`는 **매니페스트를 순회해 자동 생성하는 패턴**으로 작성한다. 즉 컴포넌트별 `variants × states × sizes` 모든 조합을 빠짐없이 렌더링. 어느 한 조합도 누락되면 안 됨. 임의의 hex 값을 갤러리에 다시 적지 말고, CSS 변수만 참조해 색상 칩을 그린다.
6. **화면 작성** — 매니페스트 `screens`의 각 화면을 `src/screens/`에 작성. 매니페스트의 `components` 목록과 사용 컴포넌트가 일치해야 한다.
7. **명세-구현 일치 체크 (필수)** — 코드 작성 후, 매니페스트 항목별로 코드에 존재하는지 명시적으로 확인하는 체크리스트를 산출. 불일치가 있으면 디자이너에게 돌려보내거나 코드 수정.
8. **빌드** — `npm run build`로 빌드 에러 확인.
9. **dev 서버 + 자체 시각 검증 (필수)** — `npm run dev`로 띄운 뒤 사용자에게 넘기기 전에 직접 대표 viewport를 확인한다. DesignSystemScreen과 핵심 화면에서 잘림, 목적 없는 빈 영역, sticky/absolute 컴포넌트의 wrapper 깨짐, 텍스트 overflow를 본다. 직접 렌더 확인이 불가능하면 사용자에게 스크린샷을 요청하고 확인 전 완료 처리하지 않는다.
10. **design-reviewer 호출 (필수)** — 자체 시각 검증 후 `design-reviewer` 스킬에 명세·매니페스트·코드·dev URL 또는 스크린샷을 넘겨 외부 비평가 시각 리뷰를 받는다. 리뷰어가 발견한 Critical 결함은 사용자에게 보고 전 반드시 해결. Should-fix는 사용자와 상의해 어디까지 잡을지 결정.
11. **사용자 시각 검증 안내** — 리뷰 통과(또는 사용자 승인) 후 매니페스트의 `viewport_targets`별로 각 화면을 사용자에게 확인 요청. 시각 검증은 사용자가 마지막으로 하지만, 사용자가 보기 전에 스킬이 먼저 화면 완결성을 점검해야 한다.

## 프로젝트 구조

```
design-concept/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── style.css         # 디자인 토큰 + 글로벌 스타일
    ├── components/
    │   ├── Button.jsx
    │   ├── Input.jsx
    │   └── ...
    └── screens/
        ├── DesignSystemScreen.jsx   # 필수 — 컴포넌트 갤러리
        ├── LoginScreen.jsx
        └── ...
```

Vite 기본 생성물 중 `src/assets`, `App.css`, 예제 로고는 삭제한다. 프로토타입의 가독성을 떨어뜨리고, 토큰 기반 스타일과 충돌한다.

## 스캐폴딩

빈 디렉토리에서 시작:

```bash
npm create vite@latest . -- --template react
npm install
```

또는 별도 폴더로:

```bash
npm create vite@latest design-concept -- --template react
cd design-concept
npm install
```

> Vite 최신 기준 Node.js 20.19+ 또는 22.12+ 필요.

생성 직후 즉시 정리할 것:
- `src/App.css` 삭제 (또는 비우기)
- `src/assets/` 삭제
- `src/main.jsx`에서 `App.css` import 제거, `style.css` import로 교체
- `src/App.jsx`의 예제 코드 삭제

## 디자인 토큰 → CSS 변수

`src/style.css`의 `:root`에 디자이너가 정의한 토큰을 그대로 옮긴다:

```css
:root {
  /* Colors */
  --color-primary: #4F46E5;
  --color-bg: #FAFAFA;
  --color-text: #111827;
  --color-text-muted: #6B7280;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;

  /* Typography */
  --font-base: 'Pretendard', system-ui, sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-base);
  background: var(--color-bg);
  color: var(--color-text);
}
```

컴포넌트 CSS는 항상 이 변수로 참조. **하드코딩 색상·사이즈는 금지.** (디자인 변경 시 한 곳만 바꾸면 되도록.)

## 컴포넌트 작성 패턴

명세의 variants/states를 props로 받는다:

```jsx
// src/components/Button.jsx
export default function Button({ variant = 'primary', disabled, children, onClick }) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

CSS는 한 프로토타입 안에서 일관된 위치에 둔다 — 컴포넌트 옆에 `Button.css`로 두거나 `style.css`에 모으거나 둘 중 하나. 섞지 말 것.

## 상태 관리 / 화면 전환

`useState`만 사용. 화면 간 이동은 현재 화면 키를 토글하는 식으로. 디자인 시스템 화면도 같은 방식으로 토글에 포함시킨다 (별도 라우터 만들지 말 것):

```jsx
function App() {
  const [screen, setScreen] = useState('design-system');

  if (screen === 'design-system') {
    return <DesignSystemScreen onGo={(s) => setScreen(s)} />;
  }
  if (screen === 'login') {
    return <LoginScreen onSubmit={() => setScreen('dashboard')} />;
  }
  if (screen === 'dashboard') {
    return <DashboardScreen onLogout={() => setScreen('login')} />;
  }
}
```

라우터가 필요해 보여도 참는다. 프로토타입은 시연이 목적이므로 이 정도로 충분하고, 디자인이 바뀌어도 코드 구조에 발목 잡히지 않는다.

## 디자인 시스템 화면

`src/screens/DesignSystemScreen.jsx` — 모든 컴포넌트를 한 화면에 모아 검증할 수 있게 한다. 구성:

- **컬러 팔레트** — 정의된 모든 컬러 토큰을 색상 칩으로
- **타이포 스케일** — 각 사이즈별 샘플 텍스트 (실제 톤의 카피로)
- **스페이싱** — 각 단계 시각화 (블록 너비로)
- **컴포넌트별 모든 variants × states** — Button(primary/secondary/ghost × default/hover/active/disabled), Input(default/focus/error/disabled) 식으로 한 줄씩

이 화면을 보면 "디자인 시스템 자체가 의도대로 만들어졌는가"가 한눈에 검증된다. 프로토타입의 첫 진입 화면으로 두면 사용자가 시스템부터 확인하고 화면으로 넘어갈 수 있어 피드백 사이클이 빨라진다.

## 매니페스트 → CSS 변수 자동 매핑

매니페스트의 모든 토큰은 그대로 `:root`에 옮긴다. 직접 색을 만들거나 빠뜨리지 않는다. 한 토큰이라도 누락되면 갤러리에서 변수 미정의로 드러난다.

```js
// 의사코드: 매니페스트의 tokens 항목을 그대로 :root에 펴는 모양
// (실제 코드는 정적 CSS로 작성하되, 매니페스트와 1:1 일치)
:root {
  --color-primary: <매니페스트.tokens.colors[name=--color-primary].value>;
  ...
}
```

하드코딩 금지는 컴포넌트뿐 아니라 **갤러리·인라인 스타일에도 적용**된다. `style={{ height: 56 }}` 같은 raw 숫자도 토큰을 거쳐야 한다. 임시 inline 스타일이 필요하면 토큰 변수(`var(--space-...)`, `var(--font-size-...)`)로.

## 매니페스트 → DesignSystemScreen 자동 매핑

`DesignSystemScreen.jsx`는 매니페스트의 모든 `(component × variant × state × size)` 조합을 빠짐없이 렌더링한다. 한 조합도 빠지면 안 됨. 다음 패턴으로 작성:

```jsx
// 매니페스트의 components 배열을 그대로 가져와 순회
const COMPONENTS_FROM_MANIFEST = [
  {
    name: 'Button',
    variants: ['primary', 'secondary', 'ghost'],
    states: ['default', 'hover', 'active', 'disabled'],
    sizes: ['lg', 'md'],
    render: ({ variant, state, size }) => (
      <Button variant={variant} size={size} disabled={state === 'disabled'}>샘플</Button>
    ),
  },
  // ... 모든 컴포넌트
];

// hover/active 같은 동적 상태는 정적 미리보기로 강제 표현 (CSS class 강제 적용)
// 예: "hover" 상태 샘플은 .force-hover 클래스를 씌워 hover 스타일 적용
```

색상 칩은 매니페스트의 `tokens.colors`를 순회해 그린다 — hex 값을 칩 옆에 다시 hardcode하지 말고 토큰 이름으로 표시 (값은 시각적으로 칩으로 보여줌).

## DesignSystemScreen 갤러리 컨텍스트

컴포넌트 갤러리는 "부품을 아무 박스에 넣어 나열하는 화면"이 아니라, 각 컴포넌트가 실제 제품에서 놓이는 컨텍스트까지 검수하는 화면이다.

- 일반 button/input/chip처럼 normal-flow 컴포넌트는 단순 row/stage에 둬도 된다.
- `position: sticky`, `position: absolute`, `position: fixed`, grid stretch, 캘린더 좌표계, viewport 고정 위치에 의존하는 컴포넌트는 원래 부모 컨텍스트의 미니어처를 만든다.
- mini-stage에는 실제 부모의 display/grid/position/overflow/border를 포함한다. 컴포넌트를 단독 wrapper에 격리해 border가 잘리거나 정렬이 어긋나면 갤러리 결함이다.

```jsx
// 나쁨: sticky/grid-stretch 의존 헤더를 임의 박스에 단독 렌더
<div className="gallery-box">
  <RoomColumnHeader name="Anthens" capacity={4} />
</div>

// 좋음: 실제 캘린더 헤더 컨텍스트의 미니어처 안에서 렌더
<div className="mini-calendar-stage">
  <div className="cal-grid mini">
    <div className="cal-head tz" />
    <RoomColumnHeader name="Anthens" capacity={4} />
    <RoomColumnHeader name="Antwerp" capacity={2} />
  </div>
</div>
```

## 명세-구현 일치 체크리스트 (필수)

코드 작성이 끝나면 다음 체크리스트를 산출해 사용자에게 함께 보여준다. 매니페스트의 모든 항목이 코드에 존재하는지 확인:

```markdown
## Spec ↔ Implementation Check

### Tokens
- [x] --color-primary → :root 정의 + 갤러리 표시
- [x] --color-primary-hover → :root 정의 + 갤러리 표시
- [ ] --color-text-disabled → 누락! ← 이런 식으로 드러남

### Components × Variants × States
- [x] Button.primary.default.lg → DesignSystemScreen에 등장
- [x] Button.primary.hover.lg → DesignSystemScreen에 등장
- [ ] Button.primary.active.lg → 누락
- ...

### Screens
- [x] MenuListScreen → screen 파일 존재 + 매니페스트 사용 컴포넌트와 일치
- ...

### Scenarios
- [x] scenario-1-customer-order: MenuListScreen → CartScreen → ConfirmScreen 흐름 작동
- ...
```

체크리스트에 `[ ]` 미체크가 있으면 **빌드 통과해도 완료가 아니다**. 누락분을 채우거나 매니페스트와 불일치를 디자이너에게 보고.

## 빌드 + 시각 검증

체크리스트가 모두 ✓ 되면:

```bash
npm run build       # 빌드 에러 없음 확인 (필요조건)
npm run dev         # 자체 시각 검증 + 사용자 시각 검증용
```

빌드 통과는 **하한선**일 뿐, 시각적 의도와 일치한다는 보장이 아니다. dev 서버를 띄운 뒤 먼저 스스로 다음을 확인한다:

- `viewport_targets`별 핵심 화면에서 화면 끝까지 스크롤했을 때 목적 없는 큰 빈 영역이 없는가
- DesignSystemScreen에서 positioned/sticky/grid 의존 컴포넌트가 원래 컨텍스트 안에서 보이는가
- 버튼·카드·헤더·모달 테두리가 잘리거나 부모 밖으로 삐져나가지 않는가
- 텍스트가 버튼/카드/컬럼 안에서 overflow되지 않는가

자체 확인 후 사용자에게 다음 형식으로 확인 요청:

```markdown
## Visual QA 요청

**dev 서버**: http://localhost:5173 (npm run dev로 띄워둠)

**확인 부탁드릴 항목**:

1. **DesignSystemScreen** (첫 진입 화면)
   - 모든 컬러 칩이 의도한 톤인가
   - 타이포 스케일이 적절한가
   - 모든 컴포넌트 variants × states가 보이는가

2. **viewport_targets 별 확인**
   - Mobile (DevTools에서 iPhone 14 Pro 393×852): 핵심 시나리오 화면들 — 텍스트 overflow, 버튼 잘림, 정렬 깨짐 없는가
   - Desktop (1280×800): 데스크톱 대응 화면 — 컨테이너 max-width 적절한가, 빈 공간 답답하지 않은가

3. **Scenarios 별 워크스루**
   - scenario-1: 메뉴 리스트 → 장바구니 → 확인 화면이 매끄럽게 흐르는가
   - scenario-2: ...

문제가 있는 항목을 알려주시면 매니페스트나 코드를 어디에서 수정할지 결정합니다.
```

최종 시각 검증은 사용자가 하지만, 사용자가 보기 전 1차 화면 완결성 검사는 스킬의 책임이다. 빌드 통과만으로 끝내고 사용자에게 떠넘기지 말 것.

## 협업 (ux-designer)

다음 중 하나라도 해당하면 진행을 멈추고 `ux-designer`에 매니페스트 갱신 요청:

- **매니페스트 자체가 빠져있음** — 진행 불가. 매니페스트 작성을 우선 요청.
- 매니페스트의 토큰·컴포넌트·화면이 명세 본문과 불일치
- 컴포넌트 variants나 states가 모호함 (예: hover와 default 차이가 명세에 없음)
- 화면 간 이동 흐름이 매니페스트의 `scenarios`에 없음
- 화면 명세에 viewport-fit 정책이 없음 — 콘텐츠가 viewport보다 작을 때 확장/fit/스크롤/의도된 여백 중 무엇인지 필요
- 컴포넌트 명세에 사용 컨텍스트가 없음 — sticky, absolute, fixed, grid-stretch 의존 여부가 불분명함
- 명세대로 만들었을 때 시각적으로 부자연스러움 (간격 이상, 정렬 깨짐 등)
- 명세 충족이 기술적으로 어려움 → 대체안과 함께 디자이너에게 의견 요청
- 시각 검증에서 사용자가 발견한 문제 → 코드 즉흥 수정 금지, **매니페스트부터 갱신** 요청

매니페스트가 단일 진실 원본이므로, 코드에서 즉흥적으로 디자인을 바꾸지 말고 항상 매니페스트→코드 순서로 동기화.

## 작성 원칙

- **매니페스트 우선**: 매니페스트가 단일 진실 원본. 코드에서 매니페스트에 없는 토큰/컴포넌트/상태를 만들지 않는다. 발견된 누락은 매니페스트로 돌려보내 갱신.
- **단순함 우선**: 디자인을 보여주는 게 목표다. 추상화·최적화·범용화는 미룬다.
- **하드코딩 금지 (엄격)**: 색·사이즈는 무조건 CSS 변수로. 인라인 스타일·갤러리 시각화에서도 raw 숫자(`height: 56`, `maxWidth: 360`) 금지 — `var(--space-...)` 또는 매니페스트 참조.
- **빠른 피드백 루프**: 화면 하나 끝낼 때마다 사용자에게 보여주고 다음으로. 끝까지 만들고 한 번에 보여주지 말 것.
- **시각 검증을 안내**: 빌드 성공만으로 끝내지 말고 dev 서버 띄워 viewport별·시나리오별 확인 항목을 사용자에게 명시.
- **불필요한 파일 만들지 않기**: README, 테스트, 추가 설정 파일 등은 사용자가 명시적으로 요청할 때만.
