---
name: pragmatic-review
description: Plan changes or review code; assess code complexity and recommend evidence-based tuning without modifying code.
---

# pragmatic-review

Use for implementation planning or code review. Inspect the relevant code and provide a complexity assessment with specific tuning opportunities. Do not edit files unless explicitly asked to execute; use pragmatic-code for implementation.

## Inspect

1. Define the review scope and trace the relevant execution paths. Read tests, contracts, and project conventions.
2. Measure current complexity using an existing project analyzer where available. Prefer cyclomatic complexity per function, cognitive complexity, and duplication or dependency indicators when supported.
3. Name the tool, scope, and actual values. If measurement is unavailable, give a **qualitative** assessment of branching, nesting, hidden state, coupling, and responsibility boundaries. Never invent numeric scores.
4. Examine correctness, failure handling, security, compatibility, readability, and avoidable work. Treat high complexity as a signal to investigate, not proof of a defect.
5. Identify concrete tuning opportunities, including simplifying control flow, localizing state, reducing unnecessary coupling, removing repeated I/O, or separating unrelated responsibilities.
6. Estimate impact and implementation risk as judgments, not measurements. Avoid speculative rewrites and recommend leaving justified complexity alone.

## Planning

Propose a proportionate sequence of changes with affected files, assumptions, trade-offs, and verification criteria. Use the complexity findings to prioritize work, not to mandate refactoring.

## Output

Always include:

**Complexity assessment**

| Scope / metric | Current result | Evidence / method |
| --- | --- | --- |
| Function or module / metric name | Measured value or qualitative observation | Analyzer or code path |

**Tuning suggestions**

| Priority | Location | Issue and evidence | Suggested change | Expected benefit / risk |
| --- | --- | --- | --- | --- |

Use **None supported** if no actionable tuning is justified. For a code review, report correctness and security findings before style or complexity concerns. State which checks actually ran and which could not be run. Do not claim measured speedups or passing tests without evidence.
