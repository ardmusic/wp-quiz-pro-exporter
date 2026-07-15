## 2025-05-14 - Loading states for file downloads

**Learning:** File downloads in WordPress admin (via admin-post.php) don't trigger a page reload, leaving the user without feedback for long-running exports. A micro-UX pattern of disabling the button and showing a "Loading..." state with a 2-second timeout provides immediate feedback and prevents double-submissions while ensuring the UI doesn't get stuck if the download starts or fails silently.

**Action:** Implement a 2000ms timeout reset for any action that triggers a browser download but doesn't navigate away from the page.

## 2025-05-14 - Accessibility of icon-only buttons

**Learning:** Buttons using Unicode symbols (like &#8680;) or icons are inaccessible to screen readers without explicit labels.

**Action:** Always add an `aria-label` to icon-only or symbol-based buttons, and use `esc_attr_e()` for translatable labels in WordPress.
