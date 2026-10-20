# Pragmatic Agent

Coding skills for your AI agent.

Pragmatic Agent provides two instructions for coding agents: `pragmatic-code` for implementation and `pragmatic-review` for planning or code review. The skills focus on readable control flow, deliberate error handling, measured performance, and changes that are easy to maintain.

## Install

Once the package is published to npm, run this from your project:

```sh
npx pragmatic-agent
```

Select your agent when prompted. To skip the prompt, specify it directly:

```sh
npx pragmatic-agent --agent claude
npx pragmatic-agent --agent codex
npx pragmatic-agent --agent antigravity
```

Use `--dir /path/to/project` to install in another directory or `--scope global` for a user-level install. The installer will not replace modified skills unless you pass `--force`.

This command installs instruction files. It does not start an agent, run a model, or check that the agent has loaded the skills.

## Skills

| Skill | When to use |
| --- | --- |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Implement features, fix bugs, and refactor. Inspect the existing code first, avoid unnecessary layers, check for tangled control flow, and test what changed. |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Plan a change or review a diff. Identify concrete risks, explain trade-offs, and prioritize actionable findings. |

Both skills treat KISS, DRY, SOLID, YAGNI, and Clean Code as tools for choosing an approach, not rules that require a specific structure.

## Agent locations

| Agent | Project skills directory |
| --- | --- |
| Claude Code | `.claude/skills` |
| Codex | `.agents/skills` |
| Antigravity | `.agents/skills` |

Restart the agent session after installation if necessary. See [compatibility](docs/compatibility.md) for global paths and limitations.

## Development

The package has not been published to npm yet. From a local checkout, run `node bin/pragmatic-agent.mjs --agent codex` instead.

```sh
npm test
npm run validate
npm pack --dry-run
```

Development commits go to `dev`. The maintainer merges `dev` into `main` through a manual pull request for each release.

[Contributing](CONTRIBUTING.md) · [License](LICENSE)
