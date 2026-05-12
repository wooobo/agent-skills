# Design Pipeline Skills

[Korean version](README.ko.md)

This is a five-skill pipeline for moving from product concept to validated
prototype. The system deliberately separates roles instead of asking one LLM to
own every stage. Each skill has a bounded point of view, knows when to hand work
off, and knows when to send work back to an earlier stage.

---

## Core Philosophy

1. **Single source of truth, manifest-driven** - All design decisions are
   recorded in a YAML manifest. Code follows the manifest and does not improvise
   design changes.
2. **Role separation finds defects** - Designers are bad at validating their own
   specs, and developers are bad at validating their own implementations. A
   separate reviewer skill catches those gaps from the outside.
3. **Prototype definition** - Code structure stays simple, but visual quality is
   production-level. "It is only a prototype" applies to tooling and scale, not
   to polish.
4. **Stage-specific artifacts** - Concept -> specification + manifest -> code ->
   review report. Each artifact becomes the input for the next stage.

---

## Pipeline At A Glance

```text
+-----------------+    +-------------+    +--------------------------+    +-----------------+
| product-concept | -> | ux-designer | -> | react-frontend-prototyper | -> | design-reviewer |
|                 |    |             |    | or html-frontend-         |    |                 |
| brief .md       |    | spec .md    |    | prototyper               |    | review report   |
|                 |    | + manifest  |    | code folder or index.html |    | .md             |
+-----------------+    +-------------+    +--------------------------+    +-----------------+
     "what to build"       "how it looks"        "working screen"              "defects"

If the starting point is vague:
  product-concept

If implementation reveals missing design detail:
  return to ux-designer and update the manifest

If the reviewer reports critical defects:
  return to the responsible producer skill
```

Each skill defines when it should hand work to the next stage and when it should
send work back to a previous stage.

---

## Skills

### 1. `product-concept` - Concept Brief

**Purpose**: When what to build, who it is for, or why it matters is still vague,
this skill runs a short interview and produces a one-page project brief.

**Input**: A rough user idea, such as "I want to build something like..." or "What
should I make?"

**Output**: A one-page brief that a designer can use immediately. It includes the
target user, core value, scenario, tone, constraints, and styles to avoid.

**It does not create design or code.**

**Use when**:

- The product idea is not clear yet.
- The user needs a short interview to expose ambiguity or contradiction.
- The team needs a shared starting document.

**Skip when**:

- A clear brief already exists, such as `PROJECT_PLAN.md`. Go directly to
  `ux-designer`.

**Trigger phrases**: "start a project", "define the concept", "what should I
build", "plan this", "write requirements", "brief", "I am not sure what app/site
to make".

**Next step**: `ux-designer`

---

### 2. `ux-designer` - UX/UI Specification

**Purpose**: Turn a brief or user request into a design specification in this
order: design system -> components -> screens. The specification ends with a
machine-readable YAML manifest that the prototyper treats as the single source of
truth.

**Input**: Project brief or user request.

**Output**:

- Design system tokens: color, typography, spacing, radius, shadow.
- Component specifications: variants x states x sizes x usage context.
- Screen composition and viewport-fit policy.
- Reference traceability table showing how brief/tone decisions became design
  decisions.
- **Implementation Manifest (YAML)** as the single source of truth.

**It does not create code.**

**Hard requirements**:

- Do not use native HTML controls such as checkbox, radio, or select. Define
  custom components.
- Do not express disabled states with opacity. Use separate color tokens.
- Empty states must be intentionally designed, not large dashed boxes.
- Usage context must be specified for sticky, absolute, and grid-stretch
  components.

**Use when**:

- A new screen, app, page, or interaction model needs to be defined.
- A design system should be built from tokens upward.
- A component catalog is needed.

**Trigger phrases**: "design mockup", "UI design", "design system", "screen
design", "storybook", "define tokens", "component specification".

**Next step**: `react-frontend-prototyper` or `html-frontend-prototyper`,
depending on the requested output format.

---

### 3. `react-frontend-prototyper` - React Prototype

**Purpose**: Implement the `ux-designer` manifest as a lightweight
**Vite + React + JavaScript** prototype. This skill is useful when component
separation, hot reload, and an automatic design-system gallery matter.

**Input**: Specification + manifest.

**Output**:

- Complete Vite project: `package.json`, `vite.config.js`, and `src/`.
- `src/components/` mapped one-to-one with the manifest.
- `src/screens/` mapped one-to-one with the manifest screen list.
- **`DesignSystemScreen.jsx`**, automatically rendering every
  variant x state x size combination from the manifest.
- Specification-to-implementation checklist.

**Intentionally excluded**:

TypeScript, React Router, state management libraries, Next.js, backend code,
tests, and additional lint configuration.

Reason: prototype speed matters. More tooling can trap design iteration inside
tooling concerns.

**Use when**:

- Component separation and reuse are natural.
- Every component combination should be verified through an automatic
  `DesignSystemScreen`.
- Fast iteration through hot reload is useful.
- The prototype may later move toward production React code.

**Trigger phrases**: "prototype in React", "Vite mockup", "component-based",
"DesignSystemScreen", "implement in JSX".

**Next step**: `design-reviewer` (required)

---

### 4. `html-frontend-prototyper` - Vanilla HTML/CSS/JS Prototype

**Purpose**: Implement the `ux-designer` manifest with **plain HTML, CSS, and
vanilla JavaScript**. Its defining trait is that the result works by double
clicking in a browser, with no build step, npm, or framework.

**Input**: Specification + manifest.

**Output modes**:

- **Multi-file (default)**: `index.html` + `style.css` + `app.js`.
- **Single-file**: all CSS and JS inlined into `index.html`, only when the user
  explicitly asks for it.

**Intentionally excluded**:

Build tools, npm, frameworks, ES modules, TypeScript/JSX/Sass, external CDNs,
and routers.

Reason: the value of a vanilla prototype is **zero external dependencies** and
immediate execution.

**Vanilla-specific requirements**:

- No ES modules, because `file://` CORS behavior breaks them.
- No external CDN. Use system fonts and inline SVG.
- Custom controls must include ARIA semantics, such as
  `role="switch" aria-checked`.
- Validate JavaScript syntax with `node -e "new Function(fs)"` because there is
  no build step.

**Use when**:

- The brief says "no React", "single HTML", "vanilla", or "no build".
- The artifact must be sent by email, USB drive, or another file-only channel.
- External dependencies are forbidden by policy.
- A demo must work by double-clicking.

**When to recommend React**:

If the user did not specify a format, ask one short question: "Would you prefer a
React + Vite structure or a single HTML file?" In general, React is better for
five or more screens.

**Trigger phrases**: "vanilla", "single HTML file", "without React", "without a
build step", "double-click only", "static one-file HTML".

**Next step**: `design-reviewer` (required)

---

### 5. `design-reviewer` - External Critique

**Purpose**: Review the `ux-designer` and prototyper outputs from an outside
critic's perspective. It reports omissions, defects, and weak spots. It does not
create new product artifacts; it evaluates.

**Input**: Specification + manifest + code, optionally with a dev URL or
screenshots.

**Output**: A defect report grouped into Critical, Should-fix, and Nice-to-have.
Each finding names the skill that should receive the work back:
`ux-designer`, `react-frontend-prototyper`, or `html-frontend-prototyper`.

**Four review dimensions**:

1. **Spec <-> Manifest consistency (mechanical)** - Every item mentioned in the
   written spec exists in the manifest.
2. **Manifest <-> Code consistency (mechanical)** - Tokens, components, and
   screens map one-to-one; React builds pass or vanilla JS syntax passes.
3. **Polish & production quality (judgmental, most important)** - No
   opacity-disabled shortcuts, dashed-box empty states, missing focus rings, or
   empty viewport dead zones.
4. **Reference fidelity (judgmental)** - The brief's tone and references are
   actually visible in the result.

**Core rules**:

- No self-defense. Even if the same session produced the work, review it from
  the outside.
- Stated is not the same as working. Placeholder interactions are defects.
- Code is not the same as rendered output. Measure the result, not only the
  source.
- Do not excuse defects because "it is a prototype". Production-level polish is
  the baseline.

**Use when**:

- A prototype has been produced and should be checked before showing it to the
  user.
- The user asks "is this okay?", "what did we miss?", or similar.
- The design pipeline needs final validation across spec and code artifacts.

**Trigger phrases**: "review", "QA", "is this okay?", "does this look
professional?", "anything missing?", "design check".

**Next step**: Send Critical and Should-fix findings back to the responsible
producer skill.

---

## Usage Patterns

### Pattern A: Full Pipeline When The Concept Is Vague

```text
I want to build a pickup-ordering app for a solo cafe owner.
The target user is a self-employed owner in their 50s.
The core value is "see all orders at once".
The tone should feel like Toss + Ohouse.
Build the output with React + Vite.

Run:
product-concept -> ux-designer -> react-frontend-prototyper -> design-reviewer
```

### Pattern B: Skip Concept When A Brief Exists

```text
Use /path/to/PROJECT_PLAN.md.
Create the specification with ux-designer.
Build a single index.html with html-frontend-prototyper.
Review it with design-reviewer.
```

### Pattern C: Use One Skill Directly

```text
/ux-designer  Define a design system for five Toss-style payment screens.
/design-reviewer  Review /path/to/index.html and SPEC.md.
```

---

## Best Prompt Template

```markdown
# What to build
[one-line product definition]

# Who it is for
[age, role, situation - be specific]

# Why / Core value
[the problem it solves - 1 or 2 sentences]

# Tone / References
- Likes: [Linear / Toss / Notion / Frame.io, etc. + why]
- Avoid: [overdone gradients, cafe = beige cliche, etc.]

# Output format
[ ] React + Vite (component separation, hot reload, DesignSystemScreen)
[ ] Single index.html (vanilla, double-click)
[ ] Multi-file vanilla (index.html + style.css + app.js)

# Constraints
- viewport: [mobile / desktop 1440 / both]
- [dark/light mode, external CDN, font rules, etc.]

# Scenarios (optional)
1. ...
2. ...

# Process
product-concept -> ux-designer -> [react|html]-frontend-prototyper -> design-reviewer
(If the concept is already clear, start from ux-designer.)
```

---

## Single Source Of Truth: The Manifest

The YAML manifest produced by `ux-designer` is the common source of truth for all
skills.

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

Rules:

- Everything mentioned in the written specification must appear in the manifest,
  and vice versa.
- The prototyper copies every manifest token into `:root` one-to-one and renders
  every component combination in `DesignSystemScreen`.
- Design changes start in the manifest, not directly in code.

---

## Directory

```text
design/
├── README.md
├── README.ko.md
├── product-concept/SKILL.md
├── ux-designer/SKILL.md
├── react-frontend-prototyper/SKILL.md
├── html-frontend-prototyper/SKILL.md
└── design-reviewer/SKILL.md
```

Each `SKILL.md` describes that skill's workflow, requirements, and collaboration
conditions.

---

## Anti-Patterns Shared By All Skills

Do not produce any of the following at any stage:

- Native controls: `<input type="checkbox">`, `<input type="radio">`, or
  `<select>`.
- Disabled or inactive states expressed with `opacity: 0.4`; use separate color
  tokens.
- Empty states filled with large dashed boxes; design the empty state
  intentionally.
- Content smaller than the viewport with unmanaged dead space; apply a
  viewport-fit policy.
- Sticky or absolutely positioned components rendered alone in isolated wrappers;
  use a miniature of their original parent context.
- Lorem ipsum; use real copy that matches the brief.
- Tokens created in code but missing from the manifest.
- Manifest items silently omitted from code.
- Improvised design changes in code; update the manifest first.
- Treating build or syntax success as completion; visual validation is required.
- Showing the result to the user without calling `design-reviewer`.

The shorter this list becomes in an output, the closer that output is to
production-level quality.
