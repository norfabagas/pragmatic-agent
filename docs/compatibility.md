# Installation and compatibility

Run `npx pragmatic-agent` from the target project after the npm package has been published. Choose the agent interactively, or pass `--agent claude|codex|antigravity` to avoid a prompt.

The package installs exactly two skills: `pragmatic-code` for execution and `pragmatic-review` for planning and review.

| Host | Project directory | Personal directory |
| --- | --- | --- |
| Claude Code | `.claude/skills` | `~/.claude/skills` |
| Codex | `.agents/skills` | `~/.agents/skills` |
| Antigravity app | `.agents/skills` | `~/.gemini/config/skills` |

Use `--scope global` for personal installation or `--dir PATH` for a different project. Existing modified skills are not overwritten without `--force`. Previous installs may contain obsolete `pragmatic-core` or `pragmatic-spaghetti` directories; inspect them before removing them manually.

Installation only copies instruction files. The agent must support loading them. End-to-end activation and compliance still require tests in each host.
