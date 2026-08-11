# Agent Skills

A collection of reusable agent skills, organized by domain.

Documentation is written in English by default. Korean versions are kept next to
the English files as `README.ko.md`.

## Skill Sets

- [Design pipeline skills](design/README.md) ([Korean](design/README.ko.md))
- [Agent infrastructure skills](agent/README.md) ([Korean](agent/README.ko.md))
- Video prompt library skills — `video/`

## Repository Structure

```text
agent-skills/
├── README.md
├── README.ko.md
├── design/
│   ├── README.md
│   ├── README.ko.md
│   ├── product-concept/
│   ├── ux-designer/
│   ├── react-frontend-prototyper/
│   ├── html-frontend-prototyper/
│   └── design-reviewer/
├── agent/
│   ├── README.md
│   ├── README.ko.md
│   └── orchestrate/
└── video/
    ├── camera-motion/
    ├── color-grade/
    ├── composition/
    ├── product-shot/
    ├── product-swap/
    ├── scene-transition/
    └── vfx/
```

Each skill directory contains a `SKILL.md` file with its workflow, constraints,
handoff rules, and quality requirements.
