## 2025-01-24 - Loading states for non-reloading form submissions

**Learning:** When a form submission triggers a browser download (like a CSV export) without a page reload, the user lacks feedback. Disabling the button and changing its text provides this, but must be done within a `setTimeout(..., 0)` in the submit handler to ensure the browser captures the submit button's name/value before it's disabled.

**Action:** Use the `setTimeout(..., 0)` pattern for background tasks and re-enable the UI after a reasonable timeout (e.g., 2000ms) to allow for subsequent actions without requiring a refresh.
