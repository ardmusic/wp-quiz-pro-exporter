## 2025-09-22 - Un-nesting Form Controls from Labels
**Learning:** Nesting multiple interactive controls like `<select>` and `<input type="submit">` inside a single `<label>` element creates an invalid HTML DOM structure and confuses assistive technologies.
**Action:** Always separate `<label>` elements using the `for` attribute referencing the target input ID, and use `.screen-reader-text` for accessibility when visually implicit.
