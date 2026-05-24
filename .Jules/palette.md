## 2025-05-14 - Loading states for browser downloads
**Learning:** Browser downloads via `admin-post.php` do not trigger a page reload, so any UI feedback (like disabling a button or changing its text) remains indefinitely unless manually reset.
**Action:** Always provide a way to reset the UI state (e.g., on selection change or via a timeout) when implementing loading states for download actions.
