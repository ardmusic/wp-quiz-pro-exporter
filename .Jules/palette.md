# Palette's Journal

## 2023-11-20 - Non-nested Interactive Label Associator
**Learning:** Nesting interactive form elements (like dropdowns and submit buttons) inside a single `<label>` element confuses screen readers and impairs accessibility. It's much better to separate them, use the `for` attribute for proper input/select association, and add precise descriptive labels or `aria-label`s for screen readers.
**Action:** Always un-nest `<select>` and `<input>` elements from `<label>`s, and explicitly link labels using `for` matching the element's `id`.
