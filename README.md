# Pragmatic Agent

Coding skills for your AI agent.

Pragmatic Agent provides two instructions for coding agents: `pragmatic-code` for implementation and `pragmatic-review` for planning or code review. Both inspect code complexity and focus on changes that are understandable, reliable, and maintainable.

## Install

Once the package is published to npm, run this from your project:

```sh
npx pragmatic-agent
```

Select your agent when prompted. To skip the prompt:

```sh
npx pragmatic-agent --agent claude
npx pragmatic-agent --agent codex
npx pragmatic-agent --agent antigravity
```

Use `--dir /path/to/project` to install elsewhere or `--scope global` for user-level installation. Modified skills are preserved unless you pass `--force`.

The command installs instruction files. It does not run an agent or analyze code itself.

## Skills

| Skill | What it does | Complexity output |
| --- | --- | --- |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Implement, debug, and refactor with focused changes | Before/after complexity for affected code, measured using the same method |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Plan changes or review existing code | Current complexity, hotspots, and evidence-based tuning suggestions |

Complexity measurement uses tools already available in the target project when possible. The skills prefer per-function cyclomatic and cognitive complexity, plus relevant duplication or coupling indicators. If a tool is unavailable, the agent reports a qualitative assessment instead of inventing scores. Lower complexity is not an end in itself: necessary branching and domain constraints may justify a higher score.

Both skills use KISS, DRY, SOLID, YAGNI, and Clean Code as aids to engineering judgment, not rigid rules.

## Agent locations

| Agent | Project skills directory |
| --- | --- |
| Claude Code | `.claude/skills` |
| Codex | `.agents/skills` |
| Antigravity | `.agents/skills` |

Start a new agent session after installation if necessary. See [compatibility](docs/compatibility.md) for global paths and limitations.

## Development

The npm package has not been published yet. From a checkout, run `node bin/pragmatic-agent.mjs --agent codex` instead.

```sh
npm test
npm run validate
npm pack --dry-run
```

Development commits go to `dev`; the maintainer manually merges releases into `main` through a pull request.

[Contributing](CONTRIBUTING.md) · [License](LICENSE)
