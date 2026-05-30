## 2024-05-30 - [Label nesting and CSV download UX]
**Learning:** Nesting interactive elements like `<select>` or `<input>` inside a `<label>` can cause accessibility issues and unexpected behavior with screen readers. Additionally, providing feedback for browser-triggered downloads (like CSVs) is tricky because they don't trigger a page reload or a standard AJAX completion.
**Action:** Always un-nest interactive elements from labels and use the `for` attribute for association. For CSV downloads, implement a temporary loading state with a timeout to re-enable the UI.
