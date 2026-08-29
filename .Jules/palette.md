## 2026-08-29 - Form Label Un-nesting & ARIA Labels
**Learning:** Wrapping `<select>` and `<input type="submit">` inside a single `<label>` element breaks HTML semantics and creates confusing accessibility behavior for screen reader users.
**Action:** Un-nest interactive form controls, provide explicit `<label>` elements linked via `for`/`id`, and supply descriptive `aria-label` attributes for icon/symbol buttons.
