---
name: pragmatic-review
description: Review code and pull requests for correctness, robustness, human readability, efficiency, maintainability, spaghetti code, and unjustified complexity.
---

# Pragmatic review

Review the requested behavior, relevant code, and diff without making edits unless asked.

## Examine

1. Correctness, failure handling, security, data integrity, and compatibility.
2. Human comprehension: explicit state changes, meaningful names, cohesive responsibilities, and traceable execution paths.
3. Spaghetti code: deeply tangled branches, hidden shared state, cyclic dependencies, scattered domain rules, mixed concerns, and unnecessary change ripple. Trace a concrete path and explain the consequence; line count alone is not evidence.
4. Efficiency: repeated I/O, avoidable computation, resource misuse, or hot-path overhead. Separate measured problems from hypotheses.
5. Maintainability: coupling, testability, speculative abstractions, unnecessary dependencies, and scope creep.

## Findings

List actionable findings in severity order. For each include the location, evidence, concrete risk, and smallest proportionate remedy. Distinguish defects from style preferences and justified domain complexity. Do not recommend broad rewrites without a demonstrated need.

If no actionable findings are supported, say so. Report checks actually performed and important verification gaps. Do not claim unrun tests passed.
