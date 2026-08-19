# Palette Journal

## 2025-05-18 - Unnesting interactive form controls from `<label>` tags
**Learning:** Wrapping `<select>` and `<input type="submit">` together inside a single `<label>` element breaks standard accessibility object modeling and screen reader associations.
**Action:** Always scope `<label>` elements strictly to their target `<select>`/`<input>` via explicit `for` attributes and separate submit buttons outside labels.
