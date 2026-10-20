# Pragmatic Agent

Coding skills for your AI agent.

Two skills: **pragmatic-code** for execution, and **pragmatic-review** for planning and code review. Both favor code that is understandable to humans, efficient, robust, and maintainable. They check for unnecessary abstractions, hidden state, and tangled control flow.

## Install

Run this in the project where you want the skills:

```sh
npx pragmatic-agent
```

Select the agent when prompted. The installer adds both skills to that project's skill directory. Restart your agent session to load them.

For scripts or non-interactive environments, specify the agent:

```sh
npx pragmatic-agent --agent claude
npx pragmatic-agent --agent codex
npx pragmatic-agent --agent antigravity
```

The same two skills are installed in each case. Use `--dir /path/to/project` to target another project or `--scope global` for personal installation. Existing modified skills are preserved unless you explicitly pass `--force`.

| Agent | Project directory |
| --- | --- |
| Claude Code | `.claude/skills` |
| Codex | `.agents/skills` |
| Antigravity | `.agents/skills` |

The CLI installs skills; it does not run an AI model or execute code on its own.

## Skills

| Skill | Use |
| --- | --- |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Implement, debug, and refactor with pragmatic engineering judgment |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Plan changes or review code for correctness, efficiency, maintainability, and spaghetti code |

Ask your agent to use `pragmatic-code` when implementing a change, or `pragmatic-review` when planning or reviewing one.

## Development

```sh
npm test
npm run validate
npm pack --dry-run
```

The package is prepared for npm publishing; `npx pragmatic-agent` requires the package to be published under that name. Until then, run `node bin/pragmatic-agent.mjs` from a checkout.

Development changes go to `dev`; releases are merged manually into `main`. See [compatibility](docs/compatibility.md) and [contributing](CONTRIBUTING.md).

MIT. [License](LICENSE)
