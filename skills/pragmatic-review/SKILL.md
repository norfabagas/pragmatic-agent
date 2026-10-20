---
name: pragmatic-review
description: Plan implementation or review code for correctness, robustness, readability, efficiency, maintainability, spaghetti code, and unjustified complexity.
---

# Pragmatic planning and review

Use for planning before implementation or reviewing existing code. Do not edit code unless explicitly asked to implement; use pragmatic-code for execution.

## Planning

1. Understand the requested behavior, constraints, relevant code paths, and existing conventions.
2. Identify important edge cases, security boundaries, compatibility risks, and verification needs.
3. Propose the smallest implementation that meets the requirements. Specify affected components and meaningful trade-offs.
4. Flag tangled control flow, hidden mutable state, circular dependencies, mixed responsibilities, and scattered business rules when they affect the proposed change.
5. Keep the plan proportional to the task; avoid speculative frameworks and unnecessary decomposition.

## Reviewing

1. Compare intended behavior with the implementation, tests, and relevant surrounding code.
2. Prioritize correctness, failure handling, data integrity, security, and compatibility.
3. Assess whether a human can follow state changes, error paths, and dependencies.
4. Investigate spaghetti-code symptoms through a concrete execution path; length alone is not evidence.
5. Identify measurable or plausible efficiency problems, clearly separating evidence from hypotheses.
6. Evaluate coupling, cohesion, testability, and unnecessary abstraction.

## Output

For plans, give actionable steps, assumptions, risks, and verification criteria. For reviews, list findings by severity with location, evidence, consequence, and proportionate remedy. If no actionable findings are supported, say so. Never invent verification results.
