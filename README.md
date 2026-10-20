# Pragmatic Agent

Pragmatic engineering rules for AI coding agents.

AI can write working code and still make a small change harder to maintain: a new interface for one implementation, a generic repository for one table, or a refactor unrelated to the request. Pragmatic Agent helps agents recognize when those additions are warranted—and when they are not.

It is a set of instructions, not a code analyzer. It cannot guarantee that an agent follows every rule.

## What it changes

**Request:** Add an endpoint to retrieve a product by ID.

**Without context:** Introduce a base repository, service interface, mapper, and dependency injection wiring before implementing the endpoint.

**With Pragmatic Agent:** Read the current routing and data-access patterns. Add the endpoint using the existing structure, handle missing products, and test its behavior. Introduce a new layer only if the codebase actually needs one.

The goal is not fewer lines at any cost. It is code that fits the problem and the repository.

## Rules

The rules cover understanding existing code, choosing proportional abstractions, naming, duplication, error handling, compatibility, security, and verification. Their source is [core-rules.md](principles/core-rules.md), with a short [decision process](principles/decision-framework.md).

Three principles govern the rest:

- Read before changing.
- Avoid complexity without a demonstrated benefit.
- Never claim verification that did not happen.

Clean Code, SOLID, DRY, KISS, and YAGNI are useful when applied with judgment. None is a reason to ignore a project's actual requirements.

## Skills

| Skill | Use it for |
| --- | --- |
| [pragmatic-core](skills/pragmatic-core/SKILL.md) | Making implementation decisions against existing constraints |
| [pragmatic-code](skills/pragmatic-code/SKILL.md) | Writing or improving code without unnecessary abstraction |
| [pragmatic-review](skills/pragmatic-review/SKILL.md) | Reviewing changes for concrete defects and avoidable complexity |

The skills are readable Markdown files. Their current versions are self-contained so a copied skill does not require the source repository to be installed alongside it.

## Agents

The initial scope is **Claude Code, OpenAI Codex, and Google Antigravity**. These are agent environments, not model API integrations.

| Agent | Status |
| --- | --- |
| Claude Code | Targeted; installation and activation not yet tested |
| OpenAI Codex | Targeted; installation and activation not yet tested |
| Google Antigravity | Targeted; installation and activation not yet tested |

For now, open the relevant `SKILL.md` and provide it to your agent as project or session instructions using the mechanism supported by your installed version. You can also copy skill directories into the agent's documented skills location. **No automatic installer is available yet**, and copying a file alone does not establish that an agent will discover or follow it.

## Repository

```text
principles/   Canonical engineering rules and decision process
skills/       Core, code, and review instructions
scripts/      Skill metadata validation
.github/      CI validation
```

Run the repository's structural check with Node.js 18 or newer:

```sh
node scripts/validate-skills.mjs
```

This checks skill metadata and rule identifiers. It does not test agent behavior. Cross-agent activation tests and an installer are future work, not current features.

## Contributing

Changes to a rule should describe a failure case, not just a style preference. See [CONTRIBUTING.md](CONTRIBUTING.md).

MIT license. See [LICENSE](LICENSE).
