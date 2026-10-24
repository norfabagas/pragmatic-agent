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

## Improvement Potential Chart (required)

End every completed review with exactly **one** compact chart titled **Improvement Potential**. The chart illustrates what the recommended changes could improve, not what has already improved.

1. Use a **horizontal grouped bar chart** with **Current** and **Potential after changes** series. Include at most five relevant metrics from cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface. Prefer metrics with a meaningful numeric baseline and a defensible projected value.
2. Derive **Current** from actual scoped measurements. Derive **Potential** only from a concrete proposed change and an explainable calculation or existing analyzer result. Label all potential values as **estimates, not measured outcomes**. Never invent percentages, scores, or projections.
3. Plot only comparable measurements with the same unit, scope, and direction. If different units are needed, use small multiples within the **single chart** rather than one shared numeric axis. Never normalize disparate metrics to arbitrary 0–100 scores. For a metric where lower is not inherently better, explain the desired direction or omit it.
4. If only one defensible metric pair exists, show just that pair. If no numeric projection can be defended, still render **one qualitative improvement chart**: up to three labeled opportunities with categorical **Expected impact: Low / Medium / High**, justified by findings. Clearly mark it **qualitative**, without numeric bars, fake scales, or fabricated values.
5. Use chart or diagram capabilities already supported by the agent's output environment (for example, Mermaid xychart for comparable numeric data, or a concise text-based bar chart). Do not install packages, generate image files, or run new tooling solely for visualization. If graphical rendering is unavailable, use a single aligned monospace chart as the fallback. The chart must be visible in the final response, not merely promised or described.
6. Directly below the chart, state the measurement scope, source/tool, assumptions behind estimates, and any unavailable baselines in at most two sentences. Do not repeat the same chart as a second table.

## Output

Give a concise **Metric | Current | Evidence** summary for relevant indicators, followed by at most **three** highest-value tuning suggestions with location, proposed change, expected benefit, and risk. If nothing warrants tuning, say so. State which checks actually ran. Finish with the required Improvement Potential chart and its brief evidence note.

## Optional checks and token budget

Consider coverage and static-analysis findings when available. Mutation testing, performance benchmarks, profiling, and cohesion analysis are opt-in based on the task. Avoid unnecessary repository-wide scans, new dependencies, repeated file reads, long metric tables, and arbitrary overall quality scores unless explicitly requested. For whole-codebase scope, prefer tool summaries and targeted hotspot inspection.
