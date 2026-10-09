## 2023-10-09 - Form Control Label Nesting & ARIA Labels in WordPress Admin Views
**Learning:** Avoid wrapping multiple interactive elements inside a single `<label>` tag in WordPress templates as screen readers misinterpret form control context.
**Action:** Use distinct `<label for="...">` tags with `.screen-reader-text` for visual cleanliness, and add descriptive `aria-label` attributes to icon-only or symbol-only submit buttons.
