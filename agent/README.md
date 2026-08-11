# Agent Infrastructure Skills

[Korean version](README.ko.md)

Skills that let an agent operate **other agents** instead of doing the work
itself. Where the `design/` set is a pipeline of roles inside one session, this
set is about crossing process boundaries: spawning worker agents in separate
terminal panes, briefing them, watching them, and collecting what they produced.

---

## Core Philosophy

1. **The orchestrator does not touch code.** The moment it starts editing files
   itself, it stops being able to watch the workers. Delegation and execution are
   different jobs.
2. **Workers start with zero context.** A worker is usually a different vendor's
   agent. It cannot read this project's `CLAUDE.md` or `.claude/skills/`.
   Everything it needs to know has to be inlined into the prompt.
3. **State is not proof of completion.** A worker being `idle` may mean it
   finished, or it may mean it crashed. Completion is proven by a result file
   existing on disk, never by a terminal status.
4. **Retrieval must survive the terminal.** Full-screen agents render to an
   alternate screen that leaves nothing in scrollback, so results are written to
   files rather than read off the display.
5. **Policy here, syntax elsewhere.** These skills decide what is allowed. The
   CLI's own `--help` output is the authority on how to spell it.

---

## Skills

### `herdr-orchestrate` - Parallel Delegation Over herdr Panes

**Purpose**: Split a request into independent units, spawn one worker agent per
unit in its own [herdr](https://github.com/wooobo/herdr) pane, brief each with the
context it needs, handle approval prompts while they run, and report the merged
result.

**Requires**: `HERDR_ENV=1` — it must run inside a herdr pane, because it splits
the caller's own pane to make room for workers.

**Input**: A task description, plus optional project configuration at
`.claude/orchestrator/registry.md` (target registry) and
`.claude/orchestrator/rules.md` (project rules). Without those it runs in a
generic mode against the current repository.

**Output**: One markdown result file per worker, written inside that worker's own
working directory, then merged into a single report that surfaces each worker's
"needs review" items.

**Use when**:

- Several repositories or several independent tasks should move at once.
- A different vendor's model should cross-check the same work.
- A long job should run in a background pane while the session continues.

**Skip when**:

- The task is a few file reads, a single-file edit, or anything under five
  minutes. Spawning a worker costs more than doing it.
- The work cannot be split into units that own separate directories.

**Trigger phrases**: "in parallel", "spawn it separately", "have codex do it",
"attach a worker", "run it in the background", "work on A and B together", "fan
out", "second opinion", "cross-check".

**Hard rules**:

- One worker per working directory. Two workers in one directory corrupt each
  other's files.
- Concurrency is capped by the number of independent directories and any
  `max_concurrent` the project sets — not by pane geometry. When a split would
  fall below a readable size, the worker goes into its own tab instead, which is
  always full size. Geometry decides placement, not headcount.
- Workers placed in tabs are invisible on screen. They still have to appear in
  the final report, or they get forgotten and left running.
- Result files live inside the worker's own directory. A worker sandboxed to its
  workspace cannot write anywhere else, and its briefing forbids it anyway.
- Workers never commit. Approval prompts for commit, push, branch creation, new
  dependencies, or nested agent spawning are refused.
- Panes the orchestrator did not create are never closed.

---

## Directory

```text
agent/
├── README.md
├── README.ko.md
└── herdr-orchestrate/
    ├── SKILL.md                  policy and the 0-5 flow
    ├── scripts/
    │   └── orchestrate.mjs       spawn / prompt / unstick / status / collect
    └── reference/
        ├── briefing.md           what to tell a context-free worker
        ├── gotchas.md            accumulated failures (the only file written back)
        └── kinds/
            ├── codex.md          codex approval judgement and traps
            └── claude.md         claude worker handling, alternate-screen problem
```

`SKILL.md` is the only file always in context. Everything under `reference/` is
read on demand: `briefing.md` when assembling a prompt, `kinds/<kind>.md` when a
worker blocks or behaves strangely, `gotchas.md` at the start of every run.

## What Is Code And What Is Prose

The split is not file-by-file. It runs through the middle of the work:

| Concern | Owner | Why |
| --- | --- | --- |
| Spawn flags per vendor | `orchestrate.mjs` | Pure data. A doc that needs a "don't forget this flag" warning should have been a function. |
| Pane split direction and size floor | `orchestrate.mjs` | Arithmetic with a hard refusal below 80x20, because an unreadable pane makes its worker impossible to supervise. |
| Result path and retrieval contract | `orchestrate.mjs` | Computed the same way every time, and got it wrong when assembled by hand. |
| Worker to cwd to pane mapping | `orchestrate.mjs` (manifest) | State outlives the model's context. Twenty minutes of waiting should not be able to lose it. |
| Whether to approve what a worker asks | `SKILL.md` + `kinds/` | Semantic judgement over an arbitrary command string. A script can tell which key the UI wants; it cannot tell whether the command should run. |
| What a worker needs to know | `briefing.md` | Compression with taste. The rule is "only what it will get wrong without knowing", which is not expressible as a function signature. |

Scripts fail at a cliff: an unmatched pattern leaves the caller with no policy at
all. Prose degrades gently: an unlisted screen string still has a stated
principle and an escape hatch to the user. So anything that changes when a vendor
ships a new TUI stays prose, and anything that is the same every single time
becomes code.
