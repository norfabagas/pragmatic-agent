# Contributing

Changes should address a specific implementation or review failure. Include an example that shows why the current guidance is insufficient.

## Branches

Commit changes to `dev`. The maintainer opens and merges release pull requests from `dev` into `main`. Do not push directly to `main`.

## Proposing a change

1. Describe the problematic agent behavior and the desired result.
2. Update the relevant skill or canonical rule without adding duplicate instructions.
3. Add a test if the change affects the installer or validation script.
4. Run `npm test` and `npm run validate`. Report any checks you could not run.

Prefer specific language and testable claims. Do not require an architecture, pattern, or dependency without an actual need.

## Release checks

Before publishing the npm package, run `npm pack --dry-run` and verify the tarball contents. Agent discovery and activation must be checked in the target application; file installation alone does not establish that the skill is active.

The GitHub Actions validation workflow is currently manual because earlier runs failed. Do not describe CI as passing unless a successful run is available.
