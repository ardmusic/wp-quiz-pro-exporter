# Palette Journal

## 2024-06-24 - Loading states for CSV exports
**Learning:** CSV exports in this plugin are handled via admin-post.php which triggers a browser download without a page reload. Standard form submission patterns that expect a page refresh for UI reset will leave the button in a loading/disabled state indefinitely.
**Action:** Use a setTimeout (e.g., 2000ms) in JavaScript to restore the export button to its original state after providing a loading feedback to the user.
