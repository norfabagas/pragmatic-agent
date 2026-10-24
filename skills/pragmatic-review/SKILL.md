---
name: pragmatic-review
description: Plan or review code; identify relevant quality risks and prioritized tuning opportunities with minimal analysis overhead.
---

# pragmatic-review

Plan changes or review existing code without editing files.

## First step: ask for scope

Before reading code or running analysis, ask the user:

> Choose scope for pragmatic-review:
> 1. **Current changes** — review only the files and behavior involved in the task.
> 2. **Whole codebase** — review the repository and identify the most important hotspots.
>
> Which scope: 1 or 2?

Wait for the answer. Do not silently default to either option. If the user already specified the scope, confirm it briefly instead of asking again. Whole-codebase review uses staged inspection and existing tooling; avoid dumping every file into context.

## Workflow

1. Use the selected scope to identify relevant files and execution paths. Read nearby tests and contracts only as needed.
2. Assess five core indicators: **cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface**. Prefer existing analyzer results. Use qualitative evidence when numbers are unavailable; never invent scores.
3. Prioritize correctness, security, error handling, and compatibility before maintainability or performance concerns.
4. Trace concrete hotspots: nested control flow, hidden state, circular dependencies, scattered business rules, or repeated expensive operations. High metric values alone are not defects.
5. Suggest only changes supported by evidence. For planning, give a small implementation sequence and verification criteria; for review, give findings ordered by risk.

## Improvement Potential chart

End every completed review with exactly **one** compact chart titled **Improvement Potential**. The chart illustrates what the recommended changes could improve, not what has already improved.

1. For defensible numeric projections, show **Current** and **Potential after changes** as horizontal grouped bars for up to five relevant metrics.
2. Measure **Current** in the selected scope. Estimate **Potential** only when a specific proposed change supports a reproducible calculation. Label projections as estimates, never measured outcomes.
3. Compare like-for-like units and scope. For different units, use separate axes/panels within the one chart or omit the extra metric. Never use arbitrary normalized scores.
4. If no numeric projection is defensible, show one **qualitative** chart listing up to three evidence-backed opportunities and expected impact (Low / Medium / High). Do not turn these categories into numeric scores.
5. Use the agent's existing chart support; otherwise use one aligned text chart. Do not install dependencies or generate files solely for this chart.
6. Below the chart, briefly identify scope, measurement source, projection assumptions, and missing data. Do not duplicate it in another table.

## Output

Give a concise **Metric | Current | Evidence** summary for relevant indicators, followed by at most **three** highest-value tuning suggestions with location, proposed change, expected benefit, and risk. If nothing warrants tuning, say so. State which checks actually ran. Finish with the Improvement Potential chart and its evidence note.

## Optional checks and token budget

Consider coverage and static-analysis findings when available. Mutation testing, performance benchmarks, profiling, and cohesion analysis are opt-in based on the task. Avoid unnecessary repository-wide scans, new dependencies, repeated file reads, long metric tables, and arbitrary overall quality scores unless explicitly requested. For whole-codebase scope, prefer tool summaries and targeted hotspot inspection.
