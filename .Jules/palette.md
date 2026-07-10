## 2026-07-10 - Micro-UX for CSV Exports
**Learning:** CSV exports in WordPress admin (via admin-post.php) trigger a browser download without page reload. Without feedback, users may click multiple times.
**Action:** Implement a temporary loading state (e.g., 2s timeout) that disables the button and updates its text to 'Exporting...' to provide immediate visual feedback.
