# Contributing

Contributions should make agent behavior measurably more useful without adding unnecessary complexity.

## Proposing changes

1. Open an issue describing the concrete failure mode, intended improvement, and an example task.
2. Keep changes focused. Prefer extending a relevant existing skill over inventing another one.
3. Update the canonical principle once; other skills should reference its PA-ID.
4. Add or update an evaluation scenario when changing behavior.
5. Run `node scripts/validate-skills.mjs` and explain any manual checks in your PR.

## Style

- Write concise, testable instructions rather than aspirational slogans.
- Use examples for genuinely ambiguous principles.
- Avoid mandatory architecture, library, framework, or language choices.
- Do not claim a provider is supported without verifying its actual discovery and activation behavior.

## Releases

Semantic versions will track changes to guidance and agent integrations. CLI distribution and cross-agent compatibility remain planned work.
