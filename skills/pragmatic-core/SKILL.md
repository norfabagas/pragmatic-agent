---
name: pragmatic-core
description: Apply contextual engineering principles when planning, implementing, debugging, refactoring, or delivering code.
---

# pragmatic-core

Use this skill when a coding task needs engineering judgment or the appropriate implementation approach is unclear.

## Canonical references

Read `principles/philosophy.md`, `principles/core-rules.md`, and `principles/decision-framework.md` when they are available in the repository. If they are not available, use the self-contained workflow below; do not assume the agent can read files outside the installed skill directory.

## Workflow

1. Inspect the relevant codebase and requirements before choosing a solution.
2. Favor the simplest adequate change and follow existing conventions.
3. Add abstractions and dependencies only for concrete needs.
4. Preserve behavior, compatibility, and relevant security boundaries.
5. Verify what can actually be verified.
6. Report changes, executed checks, and any unresolved uncertainty.

## Trade-offs

Treat DRY, SOLID, Clean Code, KISS, and YAGNI as contextual tools. Avoid speculative extensibility and unrelated rewrites. Do not invent results from commands or tests you have not executed.

## Delivery

State what changed, what checks were run, and meaningful limitations. Do not generate an extended checklist for trivial work.
