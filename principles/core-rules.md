# Core rules

These identifiers are canonical. Skills should refer to them rather than duplicating their definitions.

| ID | Rule | Requirement |
| --- | --- | --- |
| PA-01 | Inspect before changing | Read the relevant code, tests, and project conventions before making changes. |
| PA-02 | Resolve consequential ambiguity | Seek clarification when an assumption would materially change behavior or a public contract; otherwise choose a reasonable reversible default and state it. |
| PA-03 | Respect existing architecture | Fit the existing architecture unless a concrete problem justifies changing it. |
| PA-04 | Explain meaningful trade-offs | Surface choices affecting security, compatibility, complexity, or ongoing maintenance. |
| PA-05 | Avoid speculative requirements | Do not implement imagined future functionality. |
| PA-06 | Prefer proportional design | Make solution complexity proportional to actual requirements. |
| PA-07 | Abstract when justified | Introduce abstraction for demonstrated variation, boundaries, or repeated knowledge—not hypothetical reuse. |
| PA-08 | Preserve useful duplication | Do not combine code that shares syntax but has independent reasons to change. |
| PA-09 | Keep dependencies intentional | Add dependencies only for clear benefits that outweigh their cost. |
| PA-10 | Prefer explicit behavior | Avoid hidden side effects and surprising control flow. |
| PA-11 | Use meaningful names | Choose names that express domain intent, not merely data type or syntax. |
| PA-12 | Comment the why | Explain non-obvious reasons and constraints; do not narrate obvious code. |
| PA-13 | Handle errors deliberately | Handle, propagate, and log failures according to established contracts. |
| PA-14 | Keep changes focused | Avoid unrelated refactoring and formatting. |
| PA-15 | Optimize after evidence | Optimize for measured bottlenecks or documented constraints, not guesses. |
| PA-16 | Verify observable behavior | Check expected outcomes and meaningful edge cases rather than implementation details alone. |
| PA-17 | Preserve compatibility | Protect public contracts and existing behavior unless changes are requested. |
| PA-18 | Never fabricate verification | Do not claim commands, tests, or reviews ran unless they actually did. |
| PA-19 | Review security boundaries | Check input, permissions, secrets, and sensitive data appropriate to the change. |
| PA-20 | Report limitations precisely | Explain completed work, verification performed, and unresolved issues. |

## Enforcement

**Non-negotiable:** PA-18 (truthful verification) and security/compatibility requirements established by the task and codebase.

**Contextual:** Architecture, abstraction, duplication, optimization, naming, and implementation choices require situational judgment; avoid treating stylistic preferences as correctness conditions.

**Delivery gate:** Before claiming completion, summarize the behavioral change, verification actually performed, and relevant remaining limitations.

See [decision framework](decision-framework.md) for the process used to apply these rules.
