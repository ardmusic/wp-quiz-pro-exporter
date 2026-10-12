## 2023-10-12 - CSV Export Loading State & Form A11y

**Learning:** Nesting form controls (`<select>`, `<input>`) inside a single `<label>` element without explicit `for`/`id` mapping or `screen-reader-text` labels creates confusion for screen readers. Additionally, CSV export forms triggering browser downloads without page reload require JS loading feedback (disabling button & localized 'Exporting...' string) with a fallback timer to restore button state.
**Action:** Unnest form controls, add explicit `screen-reader-text` labels and `aria-label` attributes on icon/symbol buttons, and provide localized submission loading feedback via `wp_localize_script`.
