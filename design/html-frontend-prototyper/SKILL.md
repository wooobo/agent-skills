---
name: html-frontend-prototyper
description: ux-designer가 만든 디자인 명세를 받아 순수 HTML + CSS + Vanilla JavaScript 기반의 가벼운 프로토타입으로 구현. 빌드/npm/프레임워크 없이 브라우저에서 더블클릭만으로 동작. 사용자가 "단일 HTML 파일", "React 없이", "vanilla로", "정적 HTML", "빌드 없이", "더블클릭만으로 보고 싶다" 같은 표현을 쓰거나, 외부 의존성 없이 한 파일/한 폴더로 끝나는 산출물이 필요할 때 사용. React/JSX 기반 분리·핫리로드가 필요하면 `react-frontend-prototyper`를 권한다. 운영 코드가 아니라 **디자인 컨셉 제안용 프로토타입**에만 집중. 명세가 부족하면 ux-designer 스킬에 보충 요청.
---

# 프론트엔드 프로토타이퍼 (HTML / Vanilla)

디자이너가 정리한 명세를 **순수 HTML + CSS + Vanilla JavaScript** 로 구현한다. 빌드 도구·npm·프레임워크 없이 **브라우저에서 더블클릭만으로 동작**하는 게 이 스킬의 정체성이다.

> **이 스킬을 쓸지 `react-frontend-prototyper`를 쓸지 판단**
> - 사용자 브리프에 "React/Vue 금지", "단일 HTML 파일", "빌드 없이", "vanilla", "더블클릭만으로", "외부 프레임워크 사용하지 마세요" 같은 제약 → 이 스킬.
> - 컴포넌트 단위 분리·props 기반 상태·핫리로드·DesignSystemScreen 자동 갤러리가 필요한 일반적인 디자인 시안 → `react-frontend-prototyper`.
> 둘 다 가능한 상황에서 사용자가 미지정이면 한 줄로 묻는다: "산출물 형태는 React + Vite 구조와 단일 HTML 파일 중 어느 게 좋을까요?"

## 산출물 모드 (default: multi-file)

기본은 **multi-file (no-build)** 구조. 사용자가 명시적으로 "단일 파일", "한 파일", "single file"이라고 하면 single-file 모드로 전환.

**Multi-file (default)**:
```
design-concept/
├── index.html
├── style.css        # 디자인 토큰 + 글로벌 + 모든 컴포넌트 스타일
├── app.js           # 데이터 + 화면 렌더 + 인터랙션
├── components/      # (선택) 화면별 마크업을 분리하고 싶을 때
└── data.js          # (선택) 더미 데이터가 큰 경우
```
- `<script src="app.js">`, `<link href="style.css">` 로 연결. ES module(`type="module"`) 은 file:// 에서 CORS 문제로 막힐 수 있어 **사용하지 않는다**.
- 더블클릭만으로 동작. 외부 CDN 없음.

**Single-file**: 모든 CSS는 `<style>`, 모든 JS는 `<script>` 안에 인라인. 사용자 요구가 "한 파일로 보내야 한다", "메일에 첨부", "이 한 파일만 동작" 류일 때.

두 모드 모두 다음은 변하지 않는다:
- 토큰 → `:root` CSS 변수 1:1
- 컴포넌트 → 의미 있는 BEM 또는 kebab class 네이밍
- 매니페스트 → 단일 진실 원본
- DesignSystemScreen → 매니페스트 순회 자동 생성

## 의도적으로 빼는 것 (도구·구조 단순함만)

다음은 프로토타입 단계에서 일부러 제외. 사용자가 명시적으로 요청하지 않는 한 추가하지 않는다.

- 빌드 도구 (Vite/webpack/Parcel/esbuild) — 없음. 더블클릭으로 동작이 핵심.
- npm / 패키지 매니저 — 의존성 0개.
- 프레임워크 / 런타임 — React, Vue, Svelte, Alpine, jQuery, Lit 모두 금지.
- ES module (`<script type="module">`) — file:// 에서 CORS 막힘. 평범한 `<script>` 만 사용.
- TypeScript / JSX / Sass — 빌드 필요. 사용 안 함.
- 외부 CDN (Google Fonts, FontAwesome, Tailwind Play CDN 등) — 사용자가 명시 허용했을 때만. 기본은 system stack + inline SVG.
- 라우터 / 상태관리 — `display` 토글과 평범한 객체로 충분.
- 테스트 프레임워크 / lint 설정.

이유: vanilla 단일 파일/단일 폴더의 가치는 **외부 의존성 0**과 **즉시 동작**이다. 도구 하나 추가는 그 가치를 즉시 깬다.

## 디자인 완성도는 단순화하지 않는다

위 단순화는 **도구·코드 구조에만 적용된다**. 디자인 완성도는 운영 제품 수준이어야 한다. React 스킬과 동일한 강제 사항:

- **Native HTML 컨트롤 사용 금지**: `<input type="checkbox">`, `<input type="radio">`, `<select>`, native date picker, `<input type="range">` 등 브라우저 기본 모양은 시각 의도를 통째로 무너뜨린다. 매니페스트에 정의된 커스텀 Checkbox/Radio/Select 등을 `<div>`+`<button>` 기반으로 직접 구현. 매니페스트에 없으면 ux-designer에 추가 요청.
- **Disabled 상태에 generic opacity 금지**: `opacity: 0.4` 로 처리하지 말고, 매니페스트의 disabled용 컬러 토큰(`--color-button-disabled-bg` 등)을 별도로 사용. 운영 수준의 disabled는 빈혈처럼 보이지 않고 *의도된 모양*이 있다. **rejected/inactive 같은 status 표현에도 opacity로 흐리게 만들기 금지** — 별도 컬러 토큰으로 디자인.
- **Empty state 무성의 금지**: 빈 사진 업로드 박스, 빈 리스트 등은 명세대로 시각 리듬·아이콘·짧은 안내를 갖춰야 한다. 큰 점선 박스 하나로 화면 1/3을 차지하면 안 됨. **default state가 항상 populated여서 empty가 보이지 않는다면, DesignSystemScreen에서라도 empty state를 강제 노출**해 검증한다.
- **Viewport 빈 영역 방치 금지**: 콘텐츠가 viewport보다 작을 때 화면 하단·측면에 목적 없는 빈 영역이 크게 남으면 만들다 만 느낌이 난다. 명세의 viewport-fit 정책(확장, fit, 스크롤 시작점, 의도된 고정 여백 등)을 구현. 정책이 없으면 ux-designer에 되돌린다.
- **Focus ring 일관성**: `:focus-visible` 을 button, custom checkbox, custom radio, custom select, custom toggle, chip, card, nav-item 등 *모든 인터랙티브 요소*에 적용. 매니페스트의 `--ring-focus` 토큰을 사용. 인풋만 ring 적용하고 나머지를 빠뜨리는 게 vanilla 산출물에서 흔한 결함.
- **ARIA 마감**: 커스텀 컨트롤은 native semantic을 잃었으므로 ARIA로 보충해야 한다. 토글은 `role="switch" aria-checked`, 커스텀 체크박스는 `role="checkbox" aria-checked`, 카드형 선택은 `role="button" aria-pressed`, 탭은 `role="tab" aria-selected`. 키보드 네비(Space/Enter, ←→) 도 동작해야 함.
- **마이크로 디테일 누락 금지**: 그림자 두께, 라인 굵기, 라운딩 단계, 입력 포커스 링 — 매니페스트에 정의된 모든 토큰을 정확히 사용. "대충 비슷하면 된다"가 아니다.

**프로토타입의 정의**: 코드 구조는 단순하고, **디자인 완성도는 출시 수준**이다.

## 작업 흐름

1. **매니페스트 확인** — 명세에 `Implementation Manifest` 섹션이 있는지 확인. 없으면 진행 금지하고 `ux-designer`에 매니페스트 작성을 요청. 매니페스트가 단일 진실 원본이므로 이게 없으면 silent drift가 시작된다.
2. **모드 결정** — 사용자 브리프에 "단일 파일" 류 표현이 있는지 확인. 있으면 single-file 모드, 없으면 multi-file 모드.
3. **파일 스캐폴딩** — multi-file 모드: `index.html` + `style.css` + `app.js` 빈 파일 생성. single-file 모드: `index.html` 하나에 `<style>`/`<script>` 인라인.
4. **토큰 → `:root` 자동 매핑** — 매니페스트의 `tokens`를 그대로 `:root` 에 1:1 옮김. 매니페스트에 없는 토큰을 만들지 않고, 있는 토큰을 빠뜨리지 않는다. CSS 변수명·값을 직접 고치지 말 것 — 디자인을 바꾸려면 매니페스트부터.
5. **컴포넌트 작성** — 매니페스트 `components`의 각 항목을 BEM 또는 kebab class로 정의. CSS는 `style.css` 한 파일에 컴포넌트 단위로 섹션화. JS는 데이터-driven 마크업이 필요한 컴포넌트만 template literal 함수로 작성.
6. **디자인 시스템 화면 (필수, 매니페스트 기반)** — `DesignSystemScreen` 은 **매니페스트를 순회해 자동 생성하는 패턴**으로 작성. 즉 컴포넌트별 `variants × states × sizes` 모든 조합을 빠짐없이 렌더링. 어느 한 조합도 누락되면 안 됨. 임의의 hex 값을 갤러리에 다시 적지 말고, CSS 변수만 참조해 색상 칩을 그린다. **사용자 브리프가 명시적으로 5개 화면만 요구하는 등 DesignSystemScreen 을 거부하면 생략 가능**하지만, 그 경우에도 매니페스트 ↔ 코드 일치 체크리스트는 산출한다.
7. **화면 작성** — 매니페스트 `screens` 의 각 화면을 HTML `<section data-screen="...">` 으로 작성. 매니페스트의 `components` 목록과 사용 컴포넌트가 일치해야 한다.
8. **JS 인터랙션 작성** — 매니페스트 시나리오·사용자 브리프의 인터랙션 요구사항을 커버. 화면 전환은 `data-active` 또는 `is-active` 클래스 토글. 상태 변경은 `data-status="..."` 속성 갱신. 데이터는 평범한 `const` 객체.
9. **명세-구현 일치 체크 (필수)** — 코드 작성 후, 매니페스트 항목별로 코드에 존재하는지 명시적으로 확인하는 체크리스트를 산출. 불일치가 있으면 디자이너에게 돌려보내거나 코드 수정.
10. **JS 문법 검증** — `node -e "new Function(require('fs').readFileSync('app.js','utf8'))"` 또는 single-file의 경우 `<script>` 블록을 추출해 같은 검증. 빌드가 없는 만큼 syntax 에러를 잡을 마지막 안전장치.
11. **자체 시각 검증 (필수)** — 사용자에게 넘기기 전에 직접 대표 viewport를 확인. 핵심 화면에서 잘림, 목적 없는 빈 영역, sticky/absolute 컴포넌트의 wrapper 깨짐, 텍스트 overflow를 본다. 직접 렌더 확인이 불가능하면 사용자에게 스크린샷을 요청하고 확인 전에 완료 처리하지 않는다.
12. **design-reviewer 호출 (필수)** — 자체 시각 검증 후 `design-reviewer` 스킬에 명세·매니페스트·코드를 넘겨 외부 비평가 시각 리뷰를 받는다. Critical 결함은 사용자에게 보고 전 반드시 해결.
13. **사용자 시각 검증 안내** — 리뷰 통과 후 사용자에게 `open index.html` 또는 더블클릭 안내. viewport별·시나리오별 확인 항목 명시.

## 디자인 토큰 → CSS 변수

`style.css`(또는 single-file의 `<style>`)의 `:root`에 디자이너가 정의한 토큰을 그대로 옮긴다:

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

컴포넌트 CSS는 항상 이 변수로 참조. **하드코딩 색상·사이즈는 금지** (디자인 변경 시 한 곳만 바꾸면 되도록).

매니페스트의 모든 토큰은 그대로 `:root`에 옮긴다. 직접 색을 만들거나 빠뜨리지 않는다. 한 토큰이라도 누락되면 갤러리에서 변수 미정의로 드러난다.

## 컴포넌트 작성 패턴

### 정적 컴포넌트 (한 번 마크업)
대부분의 컴포넌트는 HTML로 직접 마크업하고 BEM 클래스로 styled.

```html
<button class="btn btn--primary btn--md">샘플</button>
<button class="btn btn--primary btn--md" disabled>Disabled</button>
```

```css
.btn { /* base */ }
.btn--primary { background: var(--color-primary); color: var(--color-on-primary); }
.btn--primary:hover { background: var(--color-primary-hover); }
.btn--primary:disabled {
  background: var(--color-button-disabled-bg);  /* opacity 금지 — 별도 토큰 */
  color: var(--color-button-disabled-text);
  cursor: not-allowed;
}
.btn:focus-visible { box-shadow: var(--ring-focus); outline: none; }
```

### 데이터 기반 반복 컴포넌트
12개 카드, 38개 자산 같은 반복은 JS template literal로:

```js
function renderCutCard(c) {
  return `
    <button class="cut-card" data-cut="${c.num}" data-status="${c.status}">
      <div class="cut-card__head">
        <span class="cut-card__num">CUT ${c.num}</span>
        <span class="badge badge--${c.status} badge--sm">${STATUS_LABEL[c.status]}</span>
      </div>
      <div class="thumb thumb--${c.gradient} thumb--${c.pattern} cut-card__thumb"></div>
      <div class="cut-card__scene">${c.scene}</div>
    </button>
  `;
}
document.getElementById('cut-grid').innerHTML = CUTS.map(renderCutCard).join('');
```

`innerHTML`은 사용자 입력이 닿지 않는 mock 데이터에만 사용. 사용자 입력 데이터는 `textContent` 또는 escape 함수로.

### 커스텀 컨트롤 (native 금지)

```html
<!-- Checkbox -->
<button class="checkbox" role="checkbox" aria-checked="false" data-checkbox></button>

<!-- Toggle -->
<button class="toggle" role="switch" aria-checked="true" data-toggle></button>

<!-- Select trigger (메뉴는 클릭 시 동적 생성 또는 정적 mock) -->
<button class="select" aria-haspopup="listbox">Cut 05 ▾</button>
```

```js
document.querySelectorAll('[data-checkbox]').forEach(el => {
  el.addEventListener('click', () => {
    const checked = el.getAttribute('aria-checked') === 'true';
    el.setAttribute('aria-checked', String(!checked));
    el.classList.toggle('is-checked', !checked);
  });
});
```

## 상태 관리 / 화면 전환

평범한 객체와 DOM 토글로 충분. 라우터가 필요해 보여도 참는다.

```html
<section class="screen is-active" data-screen="dashboard">…</section>
<section class="screen" data-screen="storyboard">…</section>
<section class="screen" data-screen="cut-detail">…</section>
```

```css
.screen { display: none; }
.screen.is-active { display: grid; /* or flex/block per screen */ }
```

```js
function goToScreen(name) {
  document.querySelectorAll('.screen').forEach(s =>
    s.classList.toggle('is-active', s.dataset.screen === name));
  document.querySelectorAll('[data-nav]').forEach(n =>
    n.classList.toggle('is-active', n.dataset.nav === name));
}
document.querySelectorAll('[data-nav]').forEach(n =>
  n.addEventListener('click', () => goToScreen(n.dataset.nav)));
```

해시 라우팅(`location.hash`)은 사용자가 명시 요구할 때만. 기본은 메모리 상태.

## 디자인 시스템 화면

`<section data-screen="design-system">` 으로 한 화면을 잡고, **매니페스트의 모든 `(component × variant × state × size)` 조합을 빠짐없이 렌더**한다.

```js
const COMPONENTS_FROM_MANIFEST = [
  {
    name: 'Button',
    variants: ['primary', 'secondary', 'ghost'],
    states: ['default', 'hover', 'active', 'disabled'],
    sizes: ['lg', 'md', 'sm'],
    render: ({ variant, state, size }) =>
      `<button class="btn btn--${variant} btn--${size} ${state !== 'default' ? `force-${state}` : ''}"
               ${state === 'disabled' ? 'disabled' : ''}>샘플</button>`,
  },
  // ... 모든 컴포넌트
];

// hover/active 같은 동적 상태는 정적 미리보기로 강제 표현
// .force-hover 클래스가 :hover 와 동일 스타일을 갖도록 selector 그룹화
```

```css
/* hover 상태의 정적 표현 */
.btn--primary:hover, .btn--primary.force-hover { background: var(--color-primary-hover); }
.btn--primary:active, .btn--primary.force-active { background: var(--color-primary-active); }
```

색상 칩은 매니페스트의 `tokens.colors`를 순회해 그린다 — hex 값을 칩 옆에 다시 hardcode하지 말고 토큰 이름으로 표시 (값은 시각적으로 칩으로 보여줌).

**갤러리 컨텍스트 정확성**: sticky/absolute/fixed/grid-stretch 의존 컴포넌트는 격리 wrapper에 단독 렌더하지 말고 **원래 부모 컨텍스트의 미니어처**를 만든다. 예: 캘린더 헤더는 단독 박스가 아니라 mini-calendar-stage(`display: grid` + 시간축 헤더 + 컬럼 2개) 안에서 렌더. 격리 wrapper에 sticky 컴포넌트를 넣으면 테두리·정렬·잘림이 생긴다.

## 명세-구현 일치 체크리스트 (필수)

코드 작성이 끝나면 다음 체크리스트를 산출해 사용자에게 함께 보여준다:

```markdown
## Spec ↔ Implementation Check

### Tokens (manifest 91 ↔ :root 91)
- [x] --color-primary → :root 정의 + 갤러리 표시
- [x] --color-text-disabled → 정의됨
- [ ] --color-tool-photoshop → :root에 있으나 어떤 컴포넌트에서도 사용 안 됨 (drift signal)

### Components × Variants × States
- [x] Button.primary.default.lg
- [x] Button.primary.disabled.lg → :disabled + .force-disabled 둘 다 적용
- [ ] Toggle.disabled → 매니페스트에 있으나 코드에 미구현

### Screens
- [x] DashboardScreen → 마크업 + 매니페스트 components와 일치
- [x] StoryboardScreen
- ...

### Interactions
- [x] 사이드바 nav → 화면 전환 동작
- [x] Asset card 키보드 1/2/3/4 → 상태 변경
- [ ] Asset card 필터 chip → 활성 토글만, 실제 카드 거름 안 됨 (시각만)
```

체크리스트에 `[ ]` 미체크가 있으면 **JS 문법 통과해도 완료가 아니다**. 누락분을 채우거나 매니페스트와 불일치를 디자이너에게 보고.

## 검증 (빌드 대신 정적 분석)

빌드가 없는 대신 다음을 직접 한다:

```bash
# JS 문법 (single-file은 <script> 블록 추출, multi-file은 app.js 직접)
node -e "
const fs = require('fs');
const src = fs.readFileSync('app.js', 'utf8');
new Function(src);  // throws on SyntaxError
console.log('JS OK');
"

# HTML 태그 균형 (간이)
grep -c '<style>' index.html  # === 1
grep -c '</style>' index.html # === 1
grep -c '<script' index.html
grep -c '</script>' index.html

# Anti-pattern grep
grep -nE 'opacity:\s*0\.[0-9]' style.css   # 운영 단계에서 거의 모두 결함
grep -nE '<input type="(checkbox|radio)"|<select\b' index.html  # native 금지
grep -nE 'lorem|ipsum' index.html  # placeholder 텍스트 금지

# 토큰 drift (매니페스트 vs :root diff)
node -e "
const fs = require('fs');
const spec = fs.readFileSync('SPEC.md', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const yaml = (spec.match(/\`\`\`yaml([\s\S]*?)\`\`\`/) || ['',''])[1];
const manifestTokens = [...yaml.matchAll(/name:\s*(--[a-z0-9-]+)/g)].map(m => m[1]);
const rootBlock = css.match(/:root\s*\{([\s\S]*?)\}/);
const rootTokens = [...rootBlock[1].matchAll(/(--[a-z0-9-]+):/g)].map(m => m[1]);
const missing = manifestTokens.filter(t => !rootTokens.includes(t));
const extra = rootTokens.filter(t => !manifestTokens.includes(t));
console.log('manifest:', manifestTokens.length, '|root:', rootTokens.length);
if (missing.length) console.log('MISSING IN CODE:', missing);
if (extra.length) console.log('DRIFT (in code, not in manifest):', extra);
if (!missing.length && !extra.length) console.log('1:1 match');
"
```

문법·균형·anti-pattern·drift 가 모두 깨끗해야 시각 검증으로 넘어간다.

## 시각 검증

JS 문법 통과는 **하한선**일 뿐, 시각적 의도와 일치한다는 보장이 아니다. 사용자에게 넘기기 전에 직접 확인:

- `viewport_targets` 별 핵심 화면에서 화면 끝까지 스크롤했을 때 목적 없는 큰 빈 영역이 없는가
- DesignSystemScreen 에서 positioned/sticky/grid 의존 컴포넌트가 원래 컨텍스트 안에서 보이는가
- 버튼·카드·헤더·모달 테두리가 잘리거나 부모 밖으로 삐져나가지 않는가
- 텍스트가 버튼/카드/컬럼 안에서 overflow 되지 않는가
- file:// 직접 열기에서 모든 인터랙션이 동작하는가 (콘솔 에러 없음)

자체 확인 후 사용자에게 다음 형식으로 확인 요청:

```markdown
## Visual QA 요청

**열기**: `open /절대/경로/index.html` 또는 파일 더블클릭

**확인 부탁드릴 항목**:

1. **DesignSystemScreen** (있는 경우, 첫 진입 화면)
   - 모든 컬러 칩이 의도한 톤인가
   - 타이포 스케일이 적절한가
   - 모든 컴포넌트 variants × states 가 보이는가

2. **viewport_targets 별 확인**
   - Desktop 1440 / 1280 — 컨테이너 max-width 적절, 빈 공간 답답하지 않은가
   - (모바일 대응이 필요하면) iPhone 14 Pro 393×852 — 텍스트 overflow, 버튼 잘림 없는가

3. **Scenarios 별 워크스루**
   - scenario-1: …
   - scenario-2: …

4. **Console 에러 없는가** — DevTools Console 빨간 줄 없는지

문제가 있는 항목을 알려주시면 매니페스트나 코드를 어디에서 수정할지 결정합니다.
```

최종 시각 검증은 사용자가 하지만, 사용자가 보기 전 1차 화면 완결성 검사는 스킬의 책임이다.

## 협업 (ux-designer)

다음 중 하나라도 해당하면 진행을 멈추고 `ux-designer`에 매니페스트 갱신 요청:

- **매니페스트 자체가 빠져있음** — 진행 불가.
- 매니페스트의 토큰·컴포넌트·화면이 명세 본문과 불일치
- 컴포넌트 variants/states 가 모호함
- 화면 간 이동 흐름이 매니페스트의 `scenarios` 에 없음
- 화면 명세에 viewport-fit 정책이 없음
- 컴포넌트 명세에 사용 컨텍스트가 없음 — sticky/absolute/fixed/grid-stretch 의존 여부 불분명
- 명세대로 만들었을 때 시각적으로 부자연스러움
- 명세 충족이 기술적으로 어려움 → vanilla 환경 한계(예: 진짜 dropdown 자동 닫힘 등)면 대체안과 함께 디자이너에게 의견 요청
- 시각 검증에서 사용자가 발견한 문제 → 코드 즉흥 수정 금지, **매니페스트부터 갱신** 요청

매니페스트가 단일 진실 원본이므로, 코드에서 즉흥적으로 디자인을 바꾸지 말고 항상 매니페스트→코드 순서로 동기화.

## Vanilla 한계와 회피 전략

React 와 비교했을 때 vanilla 가 까다로운 케이스, 그리고 권장 회피:

| 상황 | React 라면 | Vanilla 권장 |
|---|---|---|
| 카드 38개 반복 렌더 | `array.map` JSX | template literal + `innerHTML` (mock 한정) |
| 상태 변경 시 일부만 리렌더 | useState + JSX | `data-status` 속성 변경 + CSS attribute selector |
| Props 검증 | TypeScript / propTypes | 명세-구현 체크리스트로 보완 |
| Form 상태 | controlled input | `data-` 속성 + change 이벤트 |
| 다이얼로그 / 모달 | Portal / 조건부 렌더 | `<dialog>` element 또는 fixed overlay div + `is-open` 클래스 |
| Routing | React Router | 메모리 상태 또는 `location.hash` |
| Hot reload | Vite HMR | 없음. 수동 새로고침 — 프로토타입 1회성이라 OK |

`<dialog>` 는 native지만 **모양은 항상 커스텀 CSS로 덮는다** — 기본 모양은 무너진 디자인.

## 작성 원칙

- **매니페스트 우선**: 매니페스트가 단일 진실 원본. 코드에서 매니페스트에 없는 토큰/컴포넌트/상태를 만들지 않는다. 발견된 누락은 매니페스트로 돌려보내 갱신.
- **외부 의존성 0**: npm, CDN, 빌드 도구 없음. 사용자가 명시 허용했을 때만 예외.
- **하드코딩 금지 (엄격)**: 색·사이즈는 무조건 CSS 변수로. 인라인 `style="..."`에서도 raw 숫자 금지 — `var(--space-...)` 또는 매니페스트 참조. 다만 데이터 driven 값(예: `style="width:64%"`로 progress fill)은 허용.
- **단순함 우선**: 디자인을 보여주는 게 목표. 추상화·범용화는 미룬다.
- **빠른 피드백 루프**: 화면 하나 끝낼 때마다 사용자에게 보여주고 다음으로.
- **시각 검증 안내**: JS 문법 통과만으로 끝내지 말고 더블클릭 후 viewport별·시나리오별 확인 항목을 사용자에게 명시.
- **불필요한 파일 만들지 않기**: README, 테스트, 추가 설정 파일은 사용자가 명시적으로 요청할 때만.
- **single-file 모드 한계 인지**: 5개 화면 이상이면 single-file은 2000+ 줄로 빠르게 비대해진다. 사용자가 "단일 파일"을 고집하지 않으면 multi-file을 권한다.
