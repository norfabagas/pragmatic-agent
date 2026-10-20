# Engineering principles

The goal is code that a maintainer can understand, run reliably, and change without unnecessary work.

1. Read existing code and constraints before choosing an approach.
2. Prefer the least complex solution that meets current requirements.
3. Make data flow, state changes, and error paths understandable.
4. Keep responsibilities cohesive and dependencies intentional.
5. Preserve security and compatibility requirements.
6. Verify behavior before making claims about correctness or performance.

DRY concerns duplicated knowledge, not merely similar lines. SOLID does not require an interface for every class. Small functions are not inherently clearer. KISS does not justify missing error handling. YAGNI does not eliminate safeguards needed now.

When rules conflict, explicit requirements, safety, and existing contracts take precedence over style.
