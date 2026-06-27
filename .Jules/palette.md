## 2025-01-24 - Submit Feedback Loop for CSV Downloads
**Learning:** For actions like CSV exports that don't trigger a page reload, UI feedback must be manually managed. Using `setTimeout(..., 0)` within a form's `submit` event allows the browser to initiate the request with the button's data before it is disabled. A heuristic timeout (e.g., 2000ms) to re-enable the button provides a good balance between preventing double-clicks and restoring interactivity.
**Action:** Always use `setTimeout(..., 0)` to disable submit buttons on form submission to avoid stripping button values from POST data, and implement an auto-reset for background-task buttons.

## 2025-01-24 - Preserving Unicode/HTML Entities in JS
**Learning:** Buttons using HTML entities (like `&#8680;`) lose their rendered appearance if their value is restored via a literal string in JavaScript (it renders as the literal text).
**Action:** Capture the rendered value using `.val()` or `.innerText` on page load and store it in a variable to ensure accurate UI restoration.
