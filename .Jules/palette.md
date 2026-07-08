## 2025-05-15 - Capturing original button values for UI restoration
**Learning:** When a button contains HTML entities or Unicode symbols (like `&#8680;`), setting its value programmatically in JavaScript (e.g., `$btn.val('...')`) and then trying to restore it with the same entity string might result in the literal entity string being displayed instead of the rendered character.
**Action:** Capture the rendered value from the DOM on page load (e.g., `var originalValue = $btn.val()`) and use that variable for restoration to ensure the UI remains consistent.

## 2025-05-15 - UI feedback for non-reloading background tasks
**Learning:** Background tasks that trigger file downloads (like CSV exports) don't provide native browser feedback because the page doesn't reload. Users may be confused if they don't see immediate feedback after clicking a button.
**Action:** Implement a micro-UX pattern that updates the button to a loading state (e.g., 'Exporting...') and disables it upon click. Use a reasonable timeout (e.g., 2000ms) to restore the button state if the download completion cannot be tracked directly.
