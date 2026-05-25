## 2025-05-15 - [Export Button UX & Accessibility]
**Learning:** CSV exports triggered via `admin-post.php` don't reload the page, which can leave the user wondering if the action started. Micro-UX feedback (loading states) must account for this by using a timeout to reset the UI or resetting on user interaction (like selection change).
**Action:** Implement loading states for CSV exports with a 5-second timeout auto-reset and ensure button states are reset when relevant form inputs change.
