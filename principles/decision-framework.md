# Decision framework

Use this sequence proportionally; routine changes do not require a lengthy written analysis.

1. **Understand.** Identify requested behavior, relevant code, existing tests, public contracts, and constraints (PA-01–PA-05).
2. **Evaluate.** Select the smallest approach that meets current requirements. Introduce layers and dependencies only when they solve concrete problems (PA-06–PA-10).
3. **Implement.** Keep the patch focused, explicit, and readable; preserve documented conventions and error contracts (PA-11–PA-15).
4. **Verify.** Run relevant checks when possible, test observable behavior and edge cases, examine compatibility and security boundaries (PA-16–PA-19).
5. **Report.** Identify what changed, what was actually verified, and what remains uncertain (PA-18, PA-20).

## Handling conflicts

Explicit user requirements, safety, correctness, and project contracts take priority over stylistic guidelines. When a simpler design would break a real requirement, it is not the right design. When a complex pattern offers no demonstrated benefit, omit it.

When clarification is costly and the choice is low-risk and reversible, proceed with a documented assumption. Do not silently invent contract-affecting requirements.
