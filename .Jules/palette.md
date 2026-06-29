## 2025-05-14 - Loading State for CSV Downloads
**Learning:** For CSV downloads triggered by form submissions (admin-post.php), providing a loading state on the button improves feedback. A 2000ms timeout to restore the button state is a good balance for perceived performance.
**Action:** Use `setTimeout(..., 0)` to disable buttons on submit to allow the browser to initiate the request, and use a timed restoration for non-refreshing actions like downloads.

## 2025-05-14 - Accessibility in WordPress Admin
**Learning:** Nesting select and button inside a single label is a common but poor UX pattern that confuses screen readers.
**Action:** Separate interactive elements, use `for`/`id` for labels, and use `.screen-reader-text` for visually redundant but contextually necessary labels.
