## 2025-05-14 - [CSV Export Loading State and A11y]
**Learning:** For background tasks like CSV downloads that don't trigger a page reload, providing immediate visual feedback (disabling button, changing text to "Exporting...") is essential. To prevent blocking the browser's form submission when disabling the button, wrap the UI update in a `setTimeout(..., 0)`.
**Action:** Always use `setTimeout(..., 0)` inside submit handlers when disabling the trigger button, and use a pragmatic timeout (e.g., 2000ms) to restore the state if no completion event is available.
