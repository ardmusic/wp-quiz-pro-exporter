## 2025-05-14 - [Feedback for Background Downloads]
**Learning:** For actions like CSV exports that trigger a file download without a page reload, providing immediate visual feedback (loading state) and disabling the button prevents duplicate submissions and user confusion. However, the button must be re-enabled after a short timeout (e.g., 2 seconds) since the browser won't navigate away.
**Action:** Use a `setTimeout` to restore the button state in background-only interactions.

## 2025-05-14 - [Icon-only Button Accessibility]
**Learning:** Buttons containing only symbols or icons (like Unicode arrows) are invisible to screen readers without an explicit `aria-label`.
**Action:** Always add `aria-label` to symbolic or icon buttons.
