## 2025-05-14 - Loading states for file downloads
**Learning:** File downloads in WordPress (often handled via `admin-post.php`) don't trigger a page reload. This can leave the user wondering if their click worked.
**Action:** Use a short `setTimeout` (e.g., 2000ms) to re-enable the submit button and restore its original text after providing a loading state. This prevents duplicate submissions while ensuring the UI doesn't remain "stuck" in a loading state if the download fails or finishes.

## 2025-05-14 - Capture original button values
**Learning:** When using buttons with HTML entities (like Unicode arrows), setting the `value` programmatically in JS can be tricky if the encoding doesn't match perfectly.
**Action:** Always capture the original value of the button (e.g., `var originalBtnValue = $btn.val();`) on page load and restore it from this variable to ensure visual consistency.

## 2025-05-14 - Proper label association
**Learning:** Nesting interactive elements like `<select>` and `<input>` inside a single `<label>` is bad for accessibility and can cause confusing behavior in screen readers.
**Action:** Use the `for` attribute to associate labels with specific IDs and keep the elements separate in the DOM.
