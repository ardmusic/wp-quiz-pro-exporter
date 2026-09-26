## 2024-09-26 - Form Submit Button Loading Feedback & Label Unnesting
**Learning:** Nesting interactive controls (`<select>`, `<input>`) inside a single `<label>` breaks HTML accessibility tree expectations for screen readers, and CSV exports triggered via `admin-post.php` lack default browser page transition feedback.
**Action:** Associate `<label>` elements specifically via `for` and `id`, and provide instant button loading feedback via `setTimeout(..., 0)` on form submission.
