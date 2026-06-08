## 2025-05-15 - [A11y and Interaction Feedback for CSV Export]
**Learning:** CSV exports triggered via `admin-post.php` in WordPress don't cause a page reload, leaving the user without feedback during the download. Disabling the button and changing text to "Exporting..." provides clear feedback and prevents duplicate submissions.
**Action:** Use a `setTimeout(..., 0)` inside the form `submit` handler to allow the browser to initiate the request before disabling the button. Use a 2000ms timeout to restore the button state since there's no "success" event for file downloads.

## 2025-05-15 - [Accessible Icon Buttons]
**Learning:** Icon-only buttons (or those using Unicode symbols like ⇨) are inaccessible to screen readers without an `aria-label`.
**Action:** Always provide an `aria-label` for buttons that don't have descriptive text, and ensure labels are properly associated with inputs using `for` and `id` rather than nesting everything in a single `<label>`.
