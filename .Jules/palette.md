# Palette's Journal - Critical UX/A11y Learnings

## 2024-07-22 - Non-reloading CSV Export Interactions & Proper Label Nesting
**Learning:** For background tasks like CSV downloads triggered via admin-post.php, standard browser submits do not reload the page. Disabling the submit button upon submit without a restoration timeout leaves the interface broken and unusable. Additionally, nesting `<select>` within `<label>` tags breaks proper screen-reader association and layout consistency in native WordPress dashboard components.
**Action:** Always separate the `<select>` tag from `<label>` using explicit `id` and `for` associations. For non-navigating submits, implement a `setTimeout(..., 0)` to disable/update the button immediately after form submission, and restore the state via a timeout (e.g., 2000ms) so users can export again if desired.
