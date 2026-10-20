# Pragmatic Agent

**Engineering judgment over rigid rules.**

Pragmatic Agent is a provider-agnostic collection of engineering principles and Agent Skills for AI coding agents. It encourages simple, maintainable, testable software built for the actual problem—not an imagined future one.

## Why

AI assistants can produce working software with unnecessary layers, speculative abstractions, avoidable dependencies, and unverified claims. Pragmatic Agent provides a consistent decision framework without enforcing one architecture or coding style on every project.

## Philosophy

- **Context over convention.** Inspect the codebase and constraints before selecting a pattern.
- **Simplicity over abstraction.** Choose the simplest adequate implementation.
- **Maintainability over cleverness.** Optimize for the next engineer.
- **Evidence over assumption.** Verify outcomes; do not invent test results.
- **Incremental over speculative.** Implement today's requirements without premature extensibility.
- **Trade-offs over dogma.** KISS, YAGNI, DRY, SOLID, and Clean Code are tools—not mandates.

## Available skills (v0.1)

| Skill | Purpose |
| --- | --- |
| [pragmatic-core](skills/pragmatic-core/SKILL.md) | Context-aware decisions and delivery |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Implementation choices, readability, and maintainability |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Evidence-based, prioritized code review |

The canonical principles live in [principles/](principles/). Individual skills reference rules by ID rather than rewriting them.

## Installation (manual, v0.1)

Copy the desired `skills/pragmatic-*/` directories into your coding agent's documented skills directory, then ask your agent to use the relevant skill for the task. Check the specific agent's version and installation conventions; skill discovery and automatic activation vary.

**No NPM CLI is published yet.** `npx pragmatic-agent` is a planned distribution mechanism, not a working installation command.

For agents without Agent Skills support, use [the core principles](principles/core-rules.md) as an explicit project instruction. This provides guidance, not a guarantee that the agent will enforce it.

## Compatibility

Designed for use across models and agent hosts. Initial compatibility targets are Claude Code, OpenAI Codex, Cursor, and Gemini CLI; these integrations have **not yet been validated**. The repository does not proxy model requests or expose a provider-independent model API.

## Scope

Pragmatic Agent is not a linter, formatter, static analyzer, or a replacement for automated tests and engineering review. It should reduce unnecessary complexity without weakening correctness, security, or explicit requirements.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md). Run `node scripts/validate-skills.mjs` with Node.js 18+ to validate the current skill metadata and canonical rule references.

## License

MIT. See [LICENSE](LICENSE).
