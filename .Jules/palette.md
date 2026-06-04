## 2025-05-15 - Capturing original button values for UI restoration
**Learning:** Captured original DOM values (e.g., `$btn.val()`) on page load when dealing with buttons containing HTML entities or Unicode symbols to ensure accurate UI restoration, as setting entity strings programmatically in JavaScript renders them as literal text.
**Action:** Use a variable to store the initial value of a button before modifying it for loading states, especially if it contains special characters.

## 2025-05-15 - Managing UI states for browser downloads
**Learning:** CSV exports handled via `admin-post.php` trigger a browser download without a page reload; UI states (like loading buttons) must be managed accordingly in JavaScript (e.g., resetting via timeout).
**Action:** Use a `setTimeout` to re-enable and restore submit buttons after a few seconds when the action results in a file download rather than a page navigation.
