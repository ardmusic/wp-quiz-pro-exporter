## 2026-03-31 - Label Un-nesting & CSV Download Loading Feedback
**Learning:** Nesting a `<input type="submit">` inside a `<label>` element breaks proper input labeling semantics and screen reader accessibility in WordPress admin interfaces. Additionally, background downloads like CSV exports need micro-UX feedback (disabling + "Exporting...") since they don't trigger a full page reload.
**Action:** Always un-nest submit buttons from `<label>` tags, use explicit `for` and `id` attributes, add `aria-label` for symbol/icon buttons, and use a timed reset for file download submit buttons.
