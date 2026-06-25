## 2026-06-25 - CSV Export Feedback Pattern
**Learning:** For CSV exports triggered via admin-post.php (which download a file without page reload), providing a temporary loading state on the submit button significantly improves UX. Capturing the original button value on load is necessary if it contains HTML entities (like &#8680;), as setting them via JS val() renders them as literal text.
**Action:** Use a 2000ms timeout to reset export buttons to their original value and enabled state to ensure the UI remains functional after the download initiates.
