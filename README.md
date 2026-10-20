# Pragmatic Agent

Coding skills for your AI agent.

Two skills: `pragmatic-code` for implementation and `pragmatic-review` for planning or code review. Both favor understandable, reliable, maintainable code and assess relevant quality indicators without exhaustive analysis.

## Install

Once published to npm, run in your project:

```sh
npx pragmatic-agent
```

Select the agent when prompted, or pass `--agent claude|codex|antigravity` to skip the prompt. Use `--dir PATH` for another project or `--scope global` for user-level installation. Modified skills are preserved unless `--force` is passed.

The installer copies skill instructions; it does not execute an AI agent or analyze code.

## Skills

| Skill | Purpose | Output |
| --- | --- | --- |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Implement, debug, refactor | Relevant before/after quality metrics and verification |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Plan or review | Current metrics and up to three evidence-based tuning suggestions |

Both skills consider **cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface**. They reuse existing tools, inspect affected code rather than the whole repository, and report qualitative observations when numeric measurements are unavailable. Only relevant findings appear in the response.

Coverage and static-analysis results are used when already available. Mutation testing, profiling, and performance benchmarks run only when justified. No arbitrary combined quality score is produced.

## Analysis scope

When a skill starts, the agent asks whether to work on **current changes** or the **whole codebase**. If the request already states the scope, the agent confirms it without asking again.

- **Current changes:** inspect the affected files and behavior only.
- **Whole codebase:** use existing repository-wide tool summaries, then inspect hotspots in batches. For `pragmatic-code`, agree on the intended improvements before editing; a broad scope is not permission for indiscriminate refactoring.

The selected scope determines the baseline, comparison, and report. Whole-codebase work may require more analysis, so the skills avoid reading every file into context.

## Agent locations

| Agent | Project skills directory |
| --- | --- |
| Claude Code | `.claude/skills` |
| Codex | `.agents/skills` |
| Antigravity | `.agents/skills` |

Restart the agent session after installation if needed. See [compatibility](docs/compatibility.md).

## Development

The npm package has not been published yet. From a checkout, use `node bin/pragmatic-agent.mjs --agent codex`.

```sh
npm test
npm run validate
npm pack --dry-run
```

Changes go to `dev`; the maintainer merges releases into `main` through a manual pull request.

[Contributing](CONTRIBUTING.md) · [License](LICENSE)
