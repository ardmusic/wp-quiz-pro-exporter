## 2025-05-14 - Interactive Feedback for CSV Downloads
**Learning:** CSV exports triggered via form submission don't reload the page, leaving users without feedback. Using `setTimeout(..., 0)` in the `submit` handler allows the browser to initiate the request before the button is disabled, providing a smooth "loading" state without breaking the form submission.
**Action:** Always use a short timeout when disabling submit buttons to ensure the form data (including the button's own name/value) is correctly sent.

## 2025-05-14 - Accessibility for Symbol-only Buttons
**Learning:** Buttons using Unicode symbols (like `&#8680;`) are not descriptive for screen readers.
**Action:** Use `aria-label` with localized text to provide a clear description of the action, while keeping the visual symbol for sighted users.
