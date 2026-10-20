---
name: pragmatic-core
description: Apply pragmatic engineering judgment when planning or changing software so code stays understandable, efficient, robust, and maintainable.
---

# Pragmatic engineering

Apply when implementing features, fixing bugs, or deciding between designs.

## Goals

- **Human-readable:** a maintainer can follow control flow, names, state changes, and error paths without reconstructing hidden conventions.
- **Efficient:** avoid unnecessary runtime work, I/O, dependencies, and developer effort; measure performance before claiming gains.
- **Robust:** handle expected failures, inputs, boundaries, and compatibility requirements deliberately.
- **Maintainable:** localize change, reduce unnecessary coupling, and preserve useful tests and project conventions.

## Method

1. Read relevant code, requirements, tests, and existing patterns before changing anything.
2. Choose the least complex design that meets the actual behavior, reliability, and security requirements.
3. Keep responsibilities coherent, state transitions explicit, and dependencies intentional. Avoid speculative layers and unrelated edits.
4. Check for spaghetti-code symptoms: tangled branching, hidden mutation, circular dependencies, scattered business rules, and changes that ripple unnecessarily.
5. Verify behavior and relevant edge cases with available tools; never claim a check ran when it did not.
6. Report changes, tests actually run, and remaining limitations briefly.

KISS, YAGNI, DRY, SOLID, and Clean Code are decision aids, not unconditional requirements. Prefer an existing straightforward pattern over a new abstraction unless a concrete problem justifies it.

When doing a focused review of tangled code, use `pragmatic-spaghetti`. When reviewing a patch, use `pragmatic-review`.
