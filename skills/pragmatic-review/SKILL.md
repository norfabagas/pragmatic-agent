---
name: pragmatic-review
description: Review patches and pull requests for correctness, robustness, readability, efficiency, maintainability, spaghetti code, and unnecessary complexity.
---

# Code review

Read the requested behavior, diff, and relevant surrounding code. Identify defects before preferences.

## Review order

1. Correctness, error handling, data integrity, security, and compatibility.
2. Spaghetti-code risks: hard-to-follow branches, hidden mutable state, cross-module cycles, mixed responsibilities, scattered rules, and high change ripple.
3. Efficiency: repeated I/O, unnecessary work, expensive operations in hot paths; distinguish measurements from suspicions.
4. Maintainability: names, cohesion, coupling, testability, and unjustified abstractions.

## Findings

Report only actionable issues supported by code evidence. For each: severity, file and location, concrete failure or maintenance consequence, and a proportionate fix. Do not infer a defect from line count or style alone.

If no supported findings exist, say so. List tests actually run and relevant gaps; never fabricate execution results. Avoid compliments, generic best-practice lists, and speculative rewrites.

For a dedicated untangling assessment, use `pragmatic-spaghetti`.
