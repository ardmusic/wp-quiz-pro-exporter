## 2026-07-05 - [Accessible Symbol Buttons & Loading States]
**Learning:** Icon-only or symbol-only buttons (like `&#8680;`) require explicit `aria-label` for screen readers. For file downloads where the browser handles the response, a manual timeout (e.g., 2000ms) to reset the loading state provides necessary visual feedback without breaking the user flow.
**Action:** Always include `aria-label` for buttons using Unicode symbols/icons and use timed loading states for non-AJAX form submissions.
