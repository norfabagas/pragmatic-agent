---
name: pragmatic-code
description: Implement and improve code with proportional design, meaningful names, explicit error handling, and minimal unnecessary abstraction.
---

# pragmatic-code

Use for implementation and code quality work.

## Canonical rules

When available, consult `principles/core-rules.md`, particularly PA-06 through PA-15. Otherwise apply the guidance below.

## Workflow

1. Inspect analogous existing implementations and local conventions.
2. Select a structure proportional to the task; avoid default layers or interfaces without purpose.
3. Keep names intentional and flow explicit. Add comments for rationale and non-obvious constraints.
4. Distinguish repeated syntax from duplicated domain knowledge before extracting helpers.
5. Handle errors and external inputs according to existing contracts.
6. Keep edits focused; avoid unrelated reformatting, optimizations, and new dependencies.
7. Run relevant tests or checks when possible and describe their actual results.

## Anti-patterns

- Interfaces with one implementation created only by habit.
- Generic repositories or factories for a single simple use case.
- One-line helper functions with no meaningful abstraction benefit.
- Silent exception swallowing or invented success paths.
- Large refactors disguised as small feature work.

These are warning signs, not absolute prohibitions. Respect legitimate project-specific needs.
