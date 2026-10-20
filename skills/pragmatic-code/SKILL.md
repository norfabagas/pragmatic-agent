---
name: pragmatic-code
description: Write and improve understandable, efficient, robust, maintainable code while avoiding needless abstraction, hidden state, and tangled control flow.
---

# Implementation guidance

1. Inspect existing modules and the narrowest relevant behavior.
2. Implement the requested change within established boundaries. Prefer explicit data flow, meaningful names, cohesive functions, and predictable errors.
3. Keep the number of concepts a reader must track small. Reduce unnecessary nesting with guard clauses where they clarify logic; do not fragment every line into helpers.
4. Avoid spaghetti code: no unrelated responsibilities in one flow, hidden shared mutations, implicit ordering dependencies, or duplicated domain rules spread across modules.
5. Do not introduce interfaces, layers, factories, caching, or dependencies without a demonstrated need.
6. Consider failure cases, validation, compatibility, resource usage, and relevant security boundaries.
7. Test behavior and edge cases. Measure before asserting a performance improvement.
8. Keep the diff focused and state exactly what was verified.

Useful duplication may be clearer than premature generalization. Short code is not necessarily simple code; optimize for a human understanding what happens and why.
