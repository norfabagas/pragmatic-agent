# Pragmatic Agent

Coding skills for **Claude Code, Codex, and Antigravity**.

Pragmatic Agent guides coding agents toward code that people can understand and change. It favors straightforward control flow, deliberate error handling, proportionate abstractions, and verified behavior. It also flags spaghetti code: hidden state, tangled branching, mixed responsibilities, and dependencies that make small changes expensive.

It is guidance for an AI agent, not a linter or a guarantee of code quality.

## Install

Requires Node.js 18+. Clone this repository and run the installer from its root:

```sh
node bin/pragmatic-agent.mjs install --agent claude
node bin/pragmatic-agent.mjs install --agent codex
node bin/pragmatic-agent.mjs install --agent antigravity
```

Each command installs the same four skills into the **current project's** agent skills directory. Run the command for each agent you use. Codex and Antigravity share `.agents/skills`, so a second install should be a no-op.

To install for all projects, add `--scope global`. Use `--dir /path/to/project` to select a different project. Installation refuses to overwrite changed skills; `--force` explicitly replaces them.

| Agent | Project | Global |
| --- | --- | --- |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex | `.agents/skills/` | `~/.agents/skills/` |
| Antigravity (app) | `.agents/skills/` | `~/.gemini/config/skills/` |

The Antigravity CLI has a different global skills directory; this installer currently targets the Antigravity **app**. See [compatibility](docs/compatibility.md).

## Check or remove

```sh
node bin/pragmatic-agent.mjs doctor --agent codex
node bin/pragmatic-agent.mjs uninstall --agent codex
```

Uninstall removes only skills identical to the bundled version. It refuses to delete edited files.

## Skills

| Skill | What it does |
| --- | --- |
| [pragmatic-core](skills/pragmatic-core/SKILL.md) | Weighs requirements, simplicity, robustness, and maintainability |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Guides implementation with readable flow and explicit error handling |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Reviews correctness, efficiency, and code structure |
| [pragmatic-spaghetti](skills/pragmatic-spaghetti/SKILL.md) | Traces tangled control flow, coupling, and hidden state |

Restart the agent session after installation if the skills are not discovered. You can request a skill explicitly, for example: `Use pragmatic-spaghetti to review the order processing flow.`

## Engineering standard

- **Readable:** make intent, state changes, and failure paths understandable to a human.
- **Efficient:** avoid wasted work; substantiate performance claims.
- **Robust:** account for failure modes, security boundaries, and compatibility.
- **Maintainable:** prefer cohesive modules and focused changes over unnecessary indirection.

The [core rules](principles/core-rules.md) describe the underlying principles. They are not an excuse for broad refactoring or dogmatic application of SOLID or DRY.

## Development

```sh
npm test
npm run validate
```

All development goes to `dev`. The maintainer manually opens and merges a PR to `main` for releases. GitHub Actions validation remains manual until the pipeline issue is resolved.

MIT. [Contributing](CONTRIBUTING.md) · [Compatibility](docs/compatibility.md)
