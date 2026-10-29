## 2024-10-29 - Unnesting interactive form controls from label tags
**Learning:** Nesting interactive controls (e.g. submit buttons) inside a `<label>` element breaks standard accessibility and DOM behavior, causing screen readers to misread control contexts and clicks on buttons to trigger label focus.
**Action:** Always separate `<label>` and `<input type="submit">` tags, using explicit `for` and `id` bindings along with `.screen-reader-text` where visual labels are omitted.
