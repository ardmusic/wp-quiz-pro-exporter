## 2025-05-14 - [Accessibility & Feedback in WP Plugins]
**Learning:** Nesting interactive elements like `<select>` inside `<label>` is bad for accessibility and can cause confusing screen reader behavior. Also, background tasks like CSV downloads need manual UI resets because the page doesn't refresh.
**Action:** Always un-nest interactive elements, use `aria-label` for icon buttons, and implement `setTimeout` based UI resets for file downloads.
