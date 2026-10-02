## 2025-05-18 - CSV Export Form Micro-UX and Accessibility

**Learning:** Nesting form controls (select and submit input) inside a single `<label>` element degrades screen reader accessibility and form interaction ergonomics. Unnesting controls, adding dedicated screen-reader-text labels, adding `aria-label` for symbol-based submit buttons, and providing localized submission loading state feedback ("Exporting...") improves user clarity and prevents accidental double-submits.
**Action:** Always unnest interactive form elements, use explicit `label for="..."`, assign accessible names to symbol buttons, and register localized strings for JS submit state feedback.
