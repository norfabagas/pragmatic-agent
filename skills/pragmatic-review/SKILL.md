---
name: pragmatic-review
description: Plan or review code; identify relevant quality risks and prioritized tuning opportunities with minimal analysis overhead.
---

# pragmatic-review

Plan changes or review existing code without editing files.

## Workflow

1. Scope the request to relevant files and execution paths. Read nearby tests and contracts only as needed.
2. Assess five core indicators: **cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface**. Prefer existing analyzer results. Use qualitative evidence when numbers are unavailable; never invent scores.
3. Prioritize correctness, security, error handling, and compatibility before maintainability or performance concerns.
4. Trace concrete hotspots: nested control flow, hidden state, circular dependencies, scattered business rules, or repeated expensive operations. High metric values alone are not defects.
5. Suggest only changes supported by evidence. For planning, give a small implementation sequence and verification criteria; for review, give findings ordered by risk.

## Output

Give a concise **Metric | Current | Evidence** summary for relevant indicators, followed by at most **three** highest-value tuning suggestions with location, proposed change, expected benefit, and risk. If nothing warrants tuning, say so. State which checks actually ran.

## Optional checks and token budget

Consider coverage and static-analysis findings when available. Mutation testing, performance benchmarks, profiling, and cohesion analysis are opt-in based on the task. Avoid repository-wide scans, new dependencies, repeated file reads, long metric tables, and arbitrary overall quality scores unless explicitly requested.
