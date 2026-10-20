# Engineering philosophy

**Engineering judgment over rigid rules.**

Pragmatic Agent exists to help coding agents choose suitable engineering approaches for real constraints.

1. **Context before convention.** Read relevant code, constraints, and requirements first.
2. **Simplicity over abstraction.** Prefer the least complex implementation that satisfies requirements and safeguards.
3. **Maintainability over cleverness.** Favor explicit, understandable behavior over novelty.
4. **Evidence over assumption.** Make verifiable claims; avoid invented tests, API behavior, or performance benefits.
5. **Incremental over speculative.** Keep the change focused and avoid future-proofing without evidence.
6. **Trade-offs over dogma.** Principles support judgment; they do not replace it.

## Examples

- DRY concerns shared knowledge, not every matching line of code.
- SOLID does not require an interface per class or layer.
- Clean Code does not mandate tiny functions or maximal decomposition.
- KISS is not an excuse to ignore error handling, compatibility, or security.
- YAGNI does not prohibit safeguards required today.

## Rule precedence

1. Safety, security, explicit requirements, and behavioral correctness.
2. Repository conventions and documented compatibility contracts.
3. Contextual design principles and maintainability preferences.

If principles conflict, choose the trade-off that best supports the real requirements and explain only material consequences.
