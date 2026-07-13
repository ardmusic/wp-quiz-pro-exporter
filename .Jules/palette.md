## 2025-07-13 - Download button loading states
**Learning:** For actions like CSV exports that trigger a file download without a page reload, the UI needs a manual reset. Using `setTimeout(..., 0)` to disable the button ensures the browser includes the button's data in the form submission before it's disabled.
**Action:** Always use a combination of immediate submission interception and a delayed UI reset (e.g., 2000ms) for non-navigating form actions.
