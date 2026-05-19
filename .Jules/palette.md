## 2025-01-24 - Avoid nesting multiple interactive elements in labels
**Learning:** Nesting interactive elements like `<select>` and submit buttons within a single `<label>` tag can cause confusion for screen readers and inconsistent behavior across browsers.
**Action:** Always use the `for` attribute on `<label>` tags to associate them with a specific input's ID, and keep interactive elements outside of the label if there are more than one.
