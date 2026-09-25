## 2025-09-25 - Avoid Nesting Multiple Controls in HTML Form Labels

**Learning:** Nesting both `<select>` and `<input submit>` inside a single `<label>` tag creates confusing screen reader behavior and invalid form accessibility markup.
**Action:** Un-nest form controls, associate `<label for="...">` explicitly with the input/select, and add explicit `aria-label` to icon- or symbol-based submit buttons.
