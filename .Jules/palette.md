## 2025-05-15 - Loading Feedback for File Downloads
**Learning:** For actions that trigger file downloads (like CSV exports), there is often no page reload or immediate visual feedback. This can lead to users clicking multiple times or feeling uncertain if the action started.
**Action:** Implement a micro-UX loading state on the submit button. Use `setTimeout(..., 0)` to disable the button and update its text (e.g., "Exporting...") upon form submission, and a longer timeout (e.g., 2000ms) to reset it. This provides enough feedback for the user to understand the process has begun.

## 2025-05-15 - Semantic HTML and Interactive Elements
**Learning:** Nesting multiple interactive elements (like a `<select>` and a `<input type="submit">`) within a single `<label>` is not semantically correct and can confuse screen readers.
**Action:** Use the `for` attribute on `<label>` to associate it specifically with the input it describes, and keep other interactive elements (like submit buttons) outside of it. Use `.screen-reader-text` for hidden but accessible descriptive text when needed.
