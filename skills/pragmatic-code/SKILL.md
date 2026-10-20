---
name: pragmatic-code
description: Implement features, fix bugs, and refactor code; measure and report code complexity before and after changes.
---

# pragmatic-code

Implement the requested behavior without unnecessary complexity. Make code understandable to maintainers, reliable under expected failures, and efficient where evidence supports optimization.

## Before editing

1. Read the relevant code, tests, contracts, and conventions. Trace the affected execution path.
2. Establish a **before** complexity baseline for the affected functions or modules. Record the files, measurement method, and values.
3. Use the project's existing analyzer when available. Prefer cyclomatic complexity per function, cognitive complexity, and duplication or dependency indicators when supported. Do not install a new dependency solely to produce a metric without permission.
4. If no suitable analyzer is available, inspect branching, nesting, mutable state, dependencies, and responsibility boundaries manually. Label the result **qualitative**, not a numeric score. Do not invent numbers.
5. Identify compatibility, error, and security constraints. Choose the smallest change that meets the requirements.

## While editing

- Keep state changes and control flow explicit. Use meaningful names and related responsibilities.
- Handle expected errors, validation, and resource cleanup.
- Inspect for spaghetti-code symptoms: tangled branches, hidden shared state, implicit ordering, circular dependencies, scattered domain rules, and excessive change ripple.
- Fix complexity when it creates a concrete correctness, comprehension, or maintenance problem. Do not chase lower scores at the cost of clear code.
- Avoid speculative abstractions, unnecessary I/O, and unrelated refactoring. Measure before claiming runtime improvements.

## After editing

1. Re-run the **same** complexity method on the same scope. Include newly introduced functions in the after result, and identify added or removed functions rather than silently dropping them.
2. Compare before and after. Explain increases when they reflect necessary behavior, and note remaining hotspots.
3. Run relevant tests and checks. Keep measured complexity separate from test outcomes and performance claims.
4. Report the results in this format:

| Scope / metric | Before | After | Change |
| --- | --- | --- | --- |
| Function or module / metric name | Measured value or qualitative observation | Same method | Difference or explanation |

State the analyzer and scope, actual verification, and limitations. If a before snapshot was not available, say so and do not fabricate a comparison.
