## 2025-05-15 - Improving Form Accessibility and Semantics
**Learning:** Avoid nesting multiple interactive elements (like a <select> and a submit button) within a single <label> tag. This can confuse screen readers and lead to poor keyboard navigation experiences. Additionally, buttons using only symbols or icons should always have an explicit `aria-label`.
**Action:** Always use the `for` attribute to associate labels with specific input IDs, and keep other interactive elements as siblings within the same container (like a `fieldset`). Use `aria-label` for any non-textual buttons.
