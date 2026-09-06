## 2025-09-06 - Unnesting interactive elements from label tags
**Learning:** Wrapping both a select element and a submit button inside a single `<label>` tag degrades screen reader accessibility and breaks explicit label associations in WordPress admin forms.
**Action:** Use an explicit `<label for="...">` with `.screen-reader-text` for inputs/selects and place submit buttons alongside them with clear `aria-label` attributes.
