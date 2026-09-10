## 2025-09-10 - Unnesting Interactive Elements in WordPress Admin Forms
**Learning:** Nesting form controls like `<select>` and `<input type="submit">` inside a single `<label>` tag breaks screen reader label associations and keyboard navigation standard behaviors.
**Action:** Always separate `<select>` controls and submit `<input>` elements into distinct siblings and use explicit `for` attributes with `.screen-reader-text` labels for screen-reader accessibility in WordPress forms.
