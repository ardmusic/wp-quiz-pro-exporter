## 2026-05-21 - Avoiding Nested Interactive Elements in Labels
**Learning:** Nesting multiple interactive elements (like a `<select>` and a submit button) inside a single `<label>` tag is poor for accessibility and can confuse screen readers. Labels should ideally point to a single form control using the `for` attribute.
**Action:** Always un-nest interactive elements from `<label>` tags and use the `for` attribute to associate the label with its primary input.

## 2026-05-21 - Descriptive ARIA Labels for Symbol-based Buttons
**Learning:** Buttons that use Unicode symbols or icons (e.g., &#8680;) without descriptive text are not accessible to screen reader users unless they have an `aria-label`.
**Action:** Always add a descriptive `aria-label` to any button that doesn't have clear text content.
