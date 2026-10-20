# Decision process

Use only as much of this process as the change requires.

1. **Inspect:** Find the behavior, code path, tests, constraints, and existing contracts (PA-01–PA-05).
2. **Choose:** Compare the simplest workable approaches. Justify new abstractions or dependencies with a concrete need (PA-06–PA-10).
3. **Change:** Keep state transitions and error paths clear. Avoid unrelated refactoring (PA-11–PA-15).
4. **Check:** Run relevant tests, consider edge cases, and examine compatibility and security boundaries (PA-16–PA-19).
5. **Report:** State the changes, checks actually run, and unresolved limitations (PA-18, PA-20).

When a decision is low risk and reversible, state the assumption and proceed. Ask before making a change that affects an uncertain public contract.
