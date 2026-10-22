# Pragmatic Agent

Coding skills for your AI agent.

Pragmatic Agent provides two skills for Claude Code, Codex, and Antigravity. They help agents implement and review code with attention to maintainability, correctness, and measurable code quality.

## Installation

Run from your project directory:

```sh
npx pragmatic-agent
```

Choose your coding agent when prompted, or specify it directly:

```sh
npx pragmatic-agent --agent claude
npx pragmatic-agent --agent codex
npx pragmatic-agent --agent antigravity
```

Use `--dir PATH` to target another project, `--scope global` for a user-level installation, or `--force` to replace existing skill files.

The installer copies instructions into the agent's skills directory. It does not run code analysis by itself.

## Usage

Invoke a skill in your coding agent's conversation.

### `pragmatic-code`

Implements features, fixes bugs, and refactors code. It inspects the selected scope, records relevant quality indicators before editing, implements the change, and compares results afterward. It also reports which tests actually ran.

Example prompt:

```text
Use pragmatic-code to refactor the order processing service.
Keep existing behavior and report quality metrics before and after.
```

### `pragmatic-review`

Reviews code or prepares an implementation plan without editing files. It identifies concrete risks, assesses quality indicators, and provides up to three prioritized tuning suggestions.

Example prompt:

```text
Use pragmatic-review to assess the authentication module.
Identify maintainability risks and recommend the three most useful improvements.
```

## Scope

When a skill starts, it asks which scope to use unless you already specified one:

- **Current changes:** inspect the code involved in the current task.
- **Whole codebase:** assess the repository in stages, focusing on significant hotspots.

Example prompts with explicit scope:

```text
Use pragmatic-review on the whole codebase.
Use pragmatic-code for current changes in the payment handler.
```

For whole-codebase implementation, the agent confirms the intended improvements before editing.

## Quality indicators

Both skills consider cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface. They use existing project tooling when available; otherwise, they describe findings qualitatively rather than inventing numeric scores.

Additional checks such as test coverage, static analysis, and performance profiling are used when relevant. Reports focus on meaningful findings instead of exhaustive metrics.

## Supported agents

| Agent | Project installation directory |
| --- | --- |
| Claude Code | `.claude/skills` |
| Codex | `.agents/skills` |
| Antigravity | `.agents/skills` |

See [compatibility](docs/compatibility.md) for global installation paths.

[License](LICENSE)
