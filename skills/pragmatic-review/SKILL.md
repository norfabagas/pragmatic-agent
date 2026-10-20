---
name: pragmatic-review
description: Plan a code change or review existing code for correctness, security, readability, reliability, and maintainability.
---

# pragmatic-review

Use before implementation to plan work, or after implementation to review code. Do not edit files unless asked to execute the change.

## Planning

1. Read the request, relevant code, tests, and project conventions.
2. Identify behavior changes, error cases, compatibility constraints, and security boundaries.
3. Propose the smallest workable sequence of changes. Name affected components and checks that would establish correctness.
4. Note trade-offs only when they affect the decision. Avoid speculative architecture and checklists unrelated to the task.

## Reviewing

1. Compare the change with intended behavior and nearby code.
2. Prioritize correctness, data integrity, security, failure handling, and compatibility.
3. Trace any difficult control flow. Look for hidden state changes, cyclic dependencies, mixed responsibilities, and scattered business rules. Explain how they create a concrete risk; length alone is not a defect.
4. Check for avoidable I/O or computation. Distinguish measured problems from suspected ones.
5. Check whether a maintainer can follow the code and make a localized change without navigating unnecessary indirection.

## Response

For a plan, give actionable steps and verification criteria. For a review, report findings by severity with file, location, consequence, and focused remedy. If no actionable finding is supported, say so.

State which checks actually ran and which did not. Do not claim tests passed without evidence.
