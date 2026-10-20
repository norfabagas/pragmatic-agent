# Agent installation

After publication to npm, run `npx pragmatic-agent` in the target project. Select an agent or pass `--agent claude|codex|antigravity`.

The installer copies `pragmatic-code` and `pragmatic-review` into the selected skills directory.

| Agent | Project | Global |
| --- | --- | --- |
| Claude Code | `.claude/skills` | `~/.claude/skills` |
| Codex | `.agents/skills` | `~/.agents/skills` |
| Antigravity app | `.agents/skills` | `~/.gemini/config/skills` |

Use `--dir PATH` for another project or `--scope global` for a user-level installation. Existing modified skills are preserved unless `--force` is passed.

Older installs may contain `pragmatic-core` and `pragmatic-spaghetti`. Inspect those directories before removing them manually; the installer leaves them alone.

The installer has no integration with model APIs. Automatic discovery and skill execution have not been tested end to end in each agent.
