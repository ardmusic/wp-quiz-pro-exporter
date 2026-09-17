## 2025-05-18 - Unnesting Interactive Elements in Label Tags
**Learning:** Wrapping `<select>`, `<input type="submit">`, and hidden inputs inside a single `<label>` tag breaks accessibility tree associations and leads to unexpected focus behavior for assistive technologies.
**Action:** Keep `<label>` tags tightly scoped to individual form controls using `for` and `id` attributes, placing submit buttons and hidden inputs alongside or outside the label.
