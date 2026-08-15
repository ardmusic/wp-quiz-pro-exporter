## 2025-08-15 - Explicit Form Field Labels and Unnested Controls
**Learning:** Nesting form controls (selects, buttons, hidden inputs) inside a single `<label>` tag breaks screen reader announcements and standard label-control association. Using a dedicated `<label>` element with `for` and `screen-reader-text` ensures full accessibility while keeping visual layout intact.
**Action:** Always unnest buttons and non-label controls from `<label>` elements and assign specific labels using `for` matching the target input `id`.
