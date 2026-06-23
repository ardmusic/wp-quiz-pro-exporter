## 2025-05-14 - [Accessibility] Label Wrapping Multiple Inputs
**Learning:** In WordPress admin templates, sometimes `<label>` tags incorrectly wrap multiple interactive elements (like a `<select>` and a `<submit>` button). This is confusing for screen readers.
**Action:** Always decouple the label so it only wraps or targets (via `for`) a single input. Use `.screen-reader-text` for additional context if needed.

## 2025-05-14 - [UX] Feedback for File Downloads
**Learning:** File downloads (e.g., via `admin-post.php`) don't trigger a page reload, leaving the user wondering if anything happened.
**Action:** Implement a temporary loading state (disable button, update text) with a ~2s timeout to provide immediate visual feedback that the request was initiated.
