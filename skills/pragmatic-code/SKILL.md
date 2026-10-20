---
name: pragmatic-code
description: Execute coding tasks, implement features, fix bugs, and refactor using pragmatic principles; prevent and untangle spaghetti code without changing behavior unnecessarily.
---

# Pragmatic execution

Deliver correct code that a human can understand, that uses resources deliberately, handles failures, and remains easy to change.

## Before editing

1. Trace the relevant execution path and read nearby tests and conventions.
2. Identify actual requirements, compatibility constraints, and security boundaries.
3. Prefer a focused change over a new architecture. Use KISS, DRY, SOLID, YAGNI, and Clean Code as judgment tools, not rules to maximize.

## During implementation

- Make control flow and state transitions explicit. Use meaningful names and cohesive responsibilities.
- Handle invalid input, expected failures, and resource cleanup deliberately.
- Avoid unnecessary I/O, allocations, dependencies, and indirection. Measure before claiming speedups.
- Keep edits localized. Do not refactor unrelated code or invent future requirements.

## Detect and prevent spaghetti code

Inspect the affected execution path for:
- deeply nested branches that obscure outcomes;
- hidden mutations, shared mutable state, or implicit call ordering;
- cyclic dependencies or business rules scattered across unrelated modules;
- functions mixing unrelated responsibilities;
- a small behavior change requiring coordinated edits across many files.

Do not classify code as spaghetti solely because a function is long or has a high complexity score. Establish a concrete readability, defect, testing, or change-cost problem.

For tangled code, make the smallest safe improvement: guard clauses, named intermediate values, isolating state, separating responsibilities, or removing a justified dependency. Preserve observable behavior. Add characterization tests before risky restructuring where practical; verify after each step. Do not introduce a generic framework as the cure.

## Finish

Test observable behavior and relevant edge cases when possible. State what changed, checks actually run, and remaining limitations. Never invent verification results.
