## 2025-05-18 - Form Input Nesting in WordPress Admin Views
**Learning:** Wrapping multiple interactive elements (`<select>`, submit buttons, hidden fields) within a single `<label>` tag produces invalid HTML and degrades screen reader navigation.
**Action:** Unnest inputs into separate elements, using dedicated `<label>` tags with `.screen-reader-text` for inputs without visual labels and adding explicit `aria-label` attributes to icon or symbol submit buttons.
