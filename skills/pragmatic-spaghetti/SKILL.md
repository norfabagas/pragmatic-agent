---
name: pragmatic-spaghetti
description: Detect and untangle spaghetti code, tangled control flow, hidden coupling, excessive branching, and hard-to-follow dependencies during review or refactoring.
---

# Spaghetti code review

Use when reviewing or refactoring code that is hard to trace, change, or test. Do not equate file length or complexity metrics alone with a defect.

## Investigate

1. Identify the requested behavior and trace a concrete execution path end to end.
2. Look for deeply nested branches, repeated state mutations, cyclic dependencies, hidden side effects, mixed responsibilities, and functions whose outcomes depend on distant mutable state.
3. Check whether the same business rule is scattered across unrelated files or whether changes routinely require synchronized edits in many places.
4. Distinguish necessary complexity (domain constraints, performance, compatibility) from avoidable coupling.
5. Cite the exact functions or paths involved, with an example of how the structure causes bugs, slows comprehension, or complicates tests.
6. Suggest the smallest safe improvement: guard clauses, named intermediate values, separating independent responsibilities, localizing state, or isolating a dependency.
7. Preserve observable behavior. Add characterization tests before risky restructuring when feasible; verify after each step.

## Report

For each actionable finding, give location, evidence, consequence, and a focused remedy. Prioritize correctness and reliability risks over stylistic concerns. Do not recommend a new architecture or a broad rewrite solely because the code looks messy.

Use `pragmatic-review` for a full code review and `pragmatic-code` for implementation guidance.
