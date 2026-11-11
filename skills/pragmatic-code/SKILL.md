---
name: pragmatic-code
description: Implement, debug, or refactor code; compare relevant quality metrics before and after without costly broad analysis.
---

# pragmatic-code

Implement requested changes without obscuring behavior or error handling.

## First step: ask for scope

Before reading code, running tools, or making changes, ask the user:

> Choose scope for pragmatic-code:
> 1. **Current changes** — only the files and behavior involved in the task.
> 2. **Whole codebase** — assess the repository, then implement improvements in agreed priorities.
>
> Which scope: 1 or 2?

Wait for the answer; never assume a scope. If the request specifies one, confirm it without asking again. Agree on whole-codebase changes before editing. Do not refactor solely to improve scores.

## Workflow

1. Read code paths, tests, and contracts within the selected scope. Record a **before** baseline before editing.
2. Inspect five core indicators in the affected scope: **cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface** (files/modules affected by the behavior). Use existing analyzers and available evidence; do not install tooling solely for metrics.
3. Use numeric measurements when available; otherwise report qualitative evidence. Never invent values. Inspect whole-codebase scope in batches and prioritize hotspots.
4. Implement the smallest sound change. Check for tangled branching, hidden state, circular dependencies, scattered rules, and avoidable work. Treat metric increases as signals to explain, not automatic failures.
5. Repeat comparable measurements **after** the change. Include added or removed functions in the explanation. Run relevant tests.
6. Report only meaningful changes or risks, using one compact table: **Metric | Before | After | Note**. Name the measurement scope and tool. State unavailable baselines and checks not run.

## Optional checks

Use coverage and static-analysis findings if already available. Run mutation tests, performance benchmarks, memory or I/O profiling, and deeper cohesion analysis **only** when the task warrants them; avoid expensive checks by default.

## Token budget

Reuse tool output and measurements. For whole-codebase scope, inspect hotspots rather than reading every file. Report changed metrics, risks, and verification without overall scores, exhaustive tables, or generic advice. Avoid stock praise and repetitive conclusions; preserve technical caveats.
