# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-09-11 - Label Nesting and Unambiguous Submit Button ARIA Labels
**Learning:** Nesting both a `<select>` dropdown and a `<submit>` button inside a single `<label>` element breaks standard accessibility trees and confuses screen readers. Furthermore, symbol-only buttons (like `⇨ CSV`) require an explicit `aria-label`.
**Action:** Unnest inputs and submit buttons, use explicit `for` attribute matching input `id`, and add descriptive `aria-label` to submit buttons with non-text characters.
