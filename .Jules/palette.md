## 2025-01-24 - CSV Export Feedback Pattern
**Learning:** In WordPress admin UIs, CSV exports via `admin-post.php` often trigger downloads without page reloads, which can leave a "loading" button stuck if not manually reset.
**Action:** Implement a short timeout (e.g., 2000ms) in JavaScript to restore the export button's state after the download has likely been initiated, providing both immediate feedback and continued usability.
