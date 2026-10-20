# Pragmatic Agent

Coding skills for your AI agent.

Pragmatic Agent guides coding agents toward code that people can understand and change. It favors straightforward control flow, deliberate error handling, proportionate abstractions, and verified behavior. It also flags spaghetti code: hidden state, tangled branching, mixed responsibilities, and dependencies that make small changes expensive.

It is guidance for an AI agent, not a linter or a guarantee of code quality.

## Install

Requires Node.js 18+. Clone this repository, then run the installer from its root. Replace `/path/to/your-project` with the project that should receive the skills:

```sh
node bin/pragmatic-agent.mjs install --agent claude --dir /path/to/your-project
node bin/pragmatic-agent.mjs install --agent codex --dir /path/to/your-project
node bin/pragmatic-agent.mjs install --agent antigravity --dir /path/to/your-project
```

Each command installs the same two skills into the **specified project's** agent skills directory. Without `--dir`, the installer uses the current working directory. Run the command for each agent you use. Codex and Antigravity share `.agents/skills`, so a second install should be a no-op.

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

Uninstall removes only the two current skills if they match the bundled version. It refuses to delete edited files. Older installations may still contain `pragmatic-core` or `pragmatic-spaghetti`; remove those directories manually after checking for local changes.

## Skills

| Skill | What it does |
| --- | --- |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Executes changes with pragmatic design, readable flow, error handling, and spaghetti-code prevention |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Reviews correctness, efficiency, spaghetti code, and maintainability |

Restart the agent session after installation if the skills are not discovered. You can request a skill explicitly, for example: `Use pragmatic-review to review the order processing flow.`

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
