---
name: pragmatic-review
description: Plan or review code; identify relevant quality risks and prioritized tuning opportunities with minimal analysis overhead.
---

# pragmatic-review

Review code or plan changes without editing files.

## First step: ask for scope

Before reading code or running analysis, ask the user:

> Choose scope for pragmatic-review:
> 1. **Current changes** — review only the files and behavior involved in the task.
> 2. **Whole codebase** — review the repository and identify the most important hotspots.
>
> Which scope: 1 or 2?

Wait for the answer; never assume a scope. If the request specifies one, confirm it without asking again. Inspect whole-codebase scope in stages using existing tools.

## Workflow

1. Use the selected scope to identify relevant files and execution paths. Read nearby tests and contracts only as needed.
2. Assess five core indicators: **cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface**. Prefer existing analyzer results. Use qualitative evidence when numbers are unavailable; never invent scores.
3. Prioritize correctness, security, error handling, and compatibility before maintainability or performance concerns.
4. Trace concrete hotspots: nested control flow, hidden state, circular dependencies, scattered business rules, or repeated expensive operations. High metric values alone are not defects.
5. Suggest only changes supported by evidence. For planning, give a small implementation sequence and verification criteria; for review, give findings ordered by risk.

## Improvement Potential chart

End each completed review with exactly one **Improvement Potential** chart showing possible gains, not verified improvements.

1. For defensible numeric projections, show **Current** and **Potential after changes** as horizontal grouped bars for up to five relevant metrics.
2. Measure **Current** in the selected scope. Estimate **Potential** only when a specific proposed change supports a reproducible calculation. Label projections as estimates, never measured outcomes.
3. Compare like-for-like units and scope. For different units, use separate axes/panels within the one chart or omit the extra metric. Never use arbitrary normalized scores.
4. If no numeric projection is defensible, show one **qualitative** chart listing up to three evidence-backed opportunities and expected impact (Low / Medium / High). Do not turn these categories into numeric scores.
5. Use the agent's existing chart support; otherwise use one aligned text chart. Do not install dependencies or generate files solely for this chart.
6. Below the chart, briefly identify scope, measurement source, projection assumptions, and missing data. Do not duplicate it in another table.

## Output

Summarize relevant indicators as **Metric | Current | Evidence**. Give at most three recommendations with location, proposed change, benefit, and risk. If none are justified, say so. Report checks actually run. The chart and its evidence note come last.

## Optional checks and token budget

Reuse available coverage and static-analysis results. Run mutation tests, benchmarks, profiling, or cohesion analysis only when warranted. For whole-codebase scope, use tool summaries and inspect hotspots. Avoid unnecessary scans, new dependencies, repeated reads, overall scores, stock praise, and repetitive conclusions. Preserve technical caveats.
