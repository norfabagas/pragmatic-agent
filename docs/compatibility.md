# Agent compatibility

Pragmatic Agent v0.1 targets three coding-agent environments:

| Environment | Status | Current approach |
| --- | --- | --- |
| Claude Code | Not verified | Use the skill text through documented project/session instructions or skills support |
| OpenAI Codex | Not verified | Use the skill text through documented project/session instructions or skills support |
| Google Antigravity | Not verified | Use the skill text through documented project/session instructions or skills support |

These are integration targets, not confirmed support claims. Installation paths and skill discovery behavior may change between agent versions.

## Validation needed

For each environment:

1. Confirm how that version loads skills or project instructions.
2. Install or explicitly provide `pragmatic-core`.
3. Start a fresh session and request a small change in a test repository.
4. Check whether the agent actually read and applied the skill.
5. Verify that output remains correct and does not add unnecessary architecture.
6. Record the agent version, steps, and outcome.

This project does not route inference requests to Claude, OpenAI, or Gemini models. It ships instructions intended to work through their respective agent hosts.
