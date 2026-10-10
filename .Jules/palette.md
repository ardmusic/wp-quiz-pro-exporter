## 2025-10-10 - Un-nest submit buttons from label tags
**Learning:** Nesting interactive form controls like submit buttons inside `<label>` elements causes screen readers to misannounce input controls and creates buggy click targets.
**Action:** Keep submit buttons outside `<label>` elements and assign an explicit `aria-label` to icon or symbol buttons.
