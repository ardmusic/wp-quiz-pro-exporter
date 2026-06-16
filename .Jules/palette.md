## 2025-05-14 - Loading states for direct file downloads
**Learning:** For actions that trigger a file download (like CSV exports) without a page reload, the browser doesn't provide built-in feedback. Users may click the button multiple times if they don't see immediate action.
**Action:** Implement a temporary loading state (e.g., 2000ms) on the submit button that disables it and changes its text to "Exporting..." to provide immediate feedback and prevent duplicate submissions.

## 2025-05-14 - Accessibility in WordPress Admin
**Learning:** Legacy WordPress plugins often nest interactive elements inside labels or omit them entirely.
**Action:** Decouple labels from inputs using `for` and `id` attributes, and ensure icon-only buttons (or those with Unicode symbols) have `aria-label` attributes and visible label text when possible.
