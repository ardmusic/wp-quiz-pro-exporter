## 2025-05-14 - Loading states for CSV downloads
**Learning:** CSV exports in WordPress via `admin-post.php` trigger a browser download without a page reload, leaving the UI in an ambiguous state if feedback isn't provided. Disabling the submit button and showing a "Exporting..." label for a short duration (e.g., 2000ms) provides necessary feedback while preventing double-submissions.
**Action:** Use a timeout-based reset for buttons triggering file downloads to ensure the UI remains responsive and informative after the action is initiated.
