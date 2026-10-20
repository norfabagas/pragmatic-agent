# Installation and compatibility

The installer copies the same four `SKILL.md` bundles into the documented project or personal skill locations. It does not install an agent, configure a model, or guarantee automatic activation.

| Host | Project directory | Personal directory |
| --- | --- | --- |
| Claude Code | `.claude/skills` | `~/.claude/skills` |
| Codex | `.agents/skills` | `~/.agents/skills` |
| Antigravity app | `.agents/skills` | `~/.gemini/config/skills` |

Antigravity CLI personal skills live under `~/.gemini/antigravity-cli/skills`, which this installer does not currently target. Antigravity also accepts legacy `.agent/skills`, but new installations use `.agents/skills`.

## Usage

Run `node bin/pragmatic-agent.mjs install --agent <host>` from this checkout while inside the target project, or provide `--dir`. For global installation add `--scope global`. Run `doctor` with the same options to check the files.

On first use, start a new agent session and request `pragmatic-core` for a feature change or `pragmatic-spaghetti` for a code-flow review. The agent may discover skills based on their descriptions without explicit invocation.

## Limits

File installation and local script tests can be verified without access to running agent hosts. End-to-end activation and compliance on Claude Code, Codex, and Antigravity must still be tested in each installed application. This repository does not route model API calls.

Documentation: [Claude Code skills](https://code.claude.com/docs/en/skills), [Codex](https://developers.openai.com/blog/skills-agents-sdk), [Antigravity skills](https://www.antigravity.google/docs/skills).
