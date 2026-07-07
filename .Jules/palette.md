
## 2026-07-07 - Accessibility: Avoid nesting multiple interactive elements in labels
**Learning:** Nesting a `<select>` and a `submit` button within a single `<label>` tag confuses screen readers and violates semantic HTML principles. Even if the legend provides context, each interactive element should have its own accessible name or a correctly associated label.
**Action:** Always unnest interactive elements from a single label. Use `.screen-reader-text` for labels that should be visually hidden but present for assistive technology, and ensure they are correctly linked via the `for` attribute.

## 2026-07-07 - UX: Feedback for non-reloading actions (CSV downloads)
**Learning:** Actions like CSV exports that trigger a browser download via `admin-post.php` do not reload the page, leaving the UI in a "stale" state if a loading indicator is used.
**Action:** Implement a timeout (e.g., 2000ms) to restore the submit button's original state and enable it after providing immediate visual feedback ("Exporting...") upon submission. Use `setTimeout(..., 0)` within the form's submit event to ensure the browser processes the form submission before the button is disabled.
