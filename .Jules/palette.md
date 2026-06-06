## 2025-05-14 - Accessible Form Labels and Loading States

**Learning:** Nesting interactive elements like `<select>` and `<button>` inside a single `<label>` is bad for accessibility and screen readers. Also, Unicode-only buttons (like `&#8680;`) need an `aria-label` to be meaningful.

**Action:** Always use the `for` attribute to associate labels with specific IDs, and ensure icon-only or symbol-only buttons have descriptive `aria-label` attributes. Use `wp_localize_script` to provide translatable loading states for buttons.
