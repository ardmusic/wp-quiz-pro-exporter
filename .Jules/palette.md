# Palette Journal - WP-Pro-Quiz Export

## 2025-05-14 - Initial Setup and Observation
**Learning:** The plugin uses a simple admin interface for CSV export. Interactive elements are nested within labels, which is an accessibility anti-pattern. CSV downloads via `admin-post.php` don't trigger page reloads, making UI feedback (like loading states) slightly more complex but essential for good UX.
**Action:** Un-nest interactive elements from labels and implement a timed loading state for the export button to provide feedback without getting stuck.
