## 2025-05-15 - Unnesting Interactive Elements in WordPress Admin Forms
**Learning:** Wrapping both `<select>` and `<input type="submit">` inside a single `<label>` tag breaks screen reader navigation and standard form element associations in WordPress admin views.
**Action:** Always separate `<label>` elements so they associate strictly with a single control, using `.screen-reader-text` for visual cleanlines when appropriate, and add `aria-label` to symbol-only submit buttons.
