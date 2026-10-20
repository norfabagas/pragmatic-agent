---
name: pragmatic-review
description: Review code changes for correctness, security, maintainability, compatibility, and unjustified complexity, with evidence-based findings.
---

# pragmatic-review

Use when reviewing a diff, pull request, or implementation.

## Canonical rules

When available, consult `principles/core-rules.md`, especially PA-06–PA-10 and PA-16–PA-20.

## Workflow

1. Identify intended behavior and inspect the diff plus necessary surrounding code.
2. Prioritize demonstrable correctness, security, data integrity, and compatibility problems.
3. Check whether the change introduces avoidable complexity or hidden side effects.
4. Ground each finding in a specific file, location, and concrete impact.
5. Distinguish defects from preferences and explain trade-offs if a pattern is contextually questionable.
6. Note verification gaps without suggesting that unrun tests failed.

## Output

Report findings in descending severity, including the affected location, impact, and practical fix. If no actionable findings are supported, say so plainly and mention relevant verification limitations.

Avoid praise, cosmetic nitpicks, and generic advice without evidence.
