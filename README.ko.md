# 에이전트 스킬

도메인별로 재사용 가능한 에이전트 스킬을 모아두는 저장소입니다.

기본 문서는 영어 `README.md`로 작성하고, 한국어 버전은 같은 위치에
`README.ko.md`로 둡니다.

## 스킬셋

- [디자인 파이프라인 스킬](design/README.ko.md) ([English](design/README.md))

## 저장소 구조

```text
agent-skills/
├── README.md
├── README.ko.md
└── design/
    ├── README.md
    ├── README.ko.md
    ├── product-concept/
    ├── ux-designer/
    ├── react-frontend-prototyper/
    ├── html-frontend-prototyper/
    └── design-reviewer/
```

각 스킬 폴더에는 작업 흐름, 제약, 협업 조건, 품질 기준을 담은
`SKILL.md`가 들어 있습니다.
