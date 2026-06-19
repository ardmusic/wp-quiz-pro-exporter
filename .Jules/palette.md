## 2025-05-14 - [Async Feedback for Downloads]
**Learning:** For actions like CSV downloads that don't trigger page navigation, users need immediate feedback to know the process started. Disabling the button prevents double-clicks. Using `setTimeout(..., 0)` in the submit handler ensures the browser captures the submit button's value before it's disabled.
**Action:** Implement a "Loading" state with a temporary disable and a timeout-based reset for file download buttons.

## 2025-05-14 - [WordPress Template Accessibility]
**Learning:** Nesting interactive elements like `<select>` inside `<label>` is common in older WP code but problematic for some screen readers and inconsistent. Separating them with `for` and `id` attributes is better. Hidden labels (`.screen-reader-text`) should be used when the visual context is clear but an explicit label is missing.
**Action:** Separate labels from inputs and use `.screen-reader-text` for accessible-only labels.
