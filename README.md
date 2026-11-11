# Pragmatic Agent

Two coding skills for Claude Code, Codex, and Antigravity: `pragmatic-code` edits code; `pragmatic-review` assesses it without edits.

## Installation

After the package is published to npm, run from your project directory:

```sh
npx pragmatic-agent
```

To skip agent selection:

```sh
npx pragmatic-agent --agent claude
npx pragmatic-agent --agent codex
npx pragmatic-agent --agent antigravity
```

Use `--dir PATH` to target another project, `--scope global` for a user-level installation, or `--force` to replace existing skill files.

The installer copies the skills. Analysis runs only when you invoke a skill in your agent.

## Usage

### `pragmatic-code`

Implements changes, compares available quality metrics before and after, and reports tests actually run.

Example prompt:

```text
Use pragmatic-code to refactor the order processing service.
Keep existing behavior and report quality metrics before and after.
```

### `pragmatic-review`

Reviews code or plans changes without editing files. Reports concrete risks, up to three recommendations, and one **Improvement Potential** chart.

Example prompt:

```text
Use pragmatic-review to assess the authentication module.
Identify maintainability risks and recommend the three most useful improvements.
```

## Scope

If the request does not specify a scope, the agent asks you to choose:

- **Current changes:** inspect the code involved in the current task.
- **Whole codebase:** assess the repository in stages, focusing on significant hotspots.

Example prompts with explicit scope:

```text
Use pragmatic-review on the whole codebase.
Use pragmatic-code for current changes in the payment handler.
```

For whole-codebase implementation, the agent confirms the intended improvements before editing.

## Data flow and storage

When changes involve stored data, both skills check the relevant read/write paths, database queries, migrations, transactions, caches, and file, object, or local storage. Existing records and data flow are compatibility constraints.

`pragmatic-code` favors backward-compatible migrations and checks old and new data paths after changes. Destructive schema changes and production data operations require explicit approval. `pragmatic-review` remains read-only and may include measured query or storage metrics in its chart.

## Quality indicators

Both skills assess cognitive complexity, cyclomatic complexity, duplication, coupling, and change surface where relevant. They reuse existing tools and describe findings qualitatively when measurements are unavailable. Coverage, static analysis, and profiling are optional.

### Review chart

**Improvement Potential** compares measured values with justified estimates. If numeric projections are unavailable, it lists evidence-backed opportunities with qualitative impact (Low / Medium / High). Estimates are not verified improvements. No chart dependency is required.

## Supported agents

| Agent | Project installation directory |
| --- | --- |
| Claude Code | `.claude/skills` |
| Codex | `.agents/skills` |
| Antigravity | `.agents/skills` |

See [compatibility](docs/compatibility.md) for global installation paths.

[License](LICENSE)
