---
name: pragmatic-code
description: Implement features, fix bugs, and refactor existing code with clear control flow, deliberate error handling, and proportional design.
---

# pragmatic-code

Use for implementation work. Favor code that another developer can read, test, and change without tracing unnecessary layers.

## Before editing

1. Read the relevant implementation, tests, and conventions. Follow the execution path affected by the request.
2. Identify what must remain compatible, which failures are expected, and where inputs cross a security boundary.
3. Choose the smallest change that meets the requirements. Do not introduce a new interface, layer, or dependency without a reason specific to this codebase.

## While editing

- Keep responsibilities related, names descriptive, and data flow explicit.
- Handle expected errors and clean up resources where needed.
- Look for tangled branches, hidden shared state, implicit call order, circular dependencies, and business rules spread across unrelated modules.
- When those patterns cause a concrete problem, reduce the coupling or simplify the flow in small steps. Add characterization tests before risky refactoring when practical.
- Do not treat long files or complexity scores as sufficient evidence of spaghetti code.
- Avoid repeated I/O and needless work, but measure before claiming a performance improvement.
- Leave unrelated code alone. Do not split straightforward logic into helpers merely to shorten a function.

## Before finishing

Check behavior and relevant edge cases. Report what changed, what you actually tested, and anything left unresolved. Do not invent test results.
