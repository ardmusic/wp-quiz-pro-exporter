## 2025-10-19 - Unnesting Form Controls for Accessible Screen Reader Navigation
**Learning:** Wrapping multiple interactive controls (such as a `<select>` dropdown and a `<input type="submit">`) inside a single `<label>` element causes screen readers to misannounce element boundaries and accessible names.
**Action:** Unnest interactive elements from `<label>` tags and use explicit `for` and `id` attributes alongside `.screen-reader-text` labels for form controls.
