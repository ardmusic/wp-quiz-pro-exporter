## 2025-08-31 - Unnesting submit buttons from label tags in WordPress admin forms
**Learning:** Wrapping both a `<select>` dropdown and `<input type="submit">` inside a single `<label>` tag creates invalid HTML and accessibility confusion for screen readers, while also making it harder to target label-input relationships.
**Action:** Always unnest submit buttons from `<label>` tags, give form controls dedicated `<label class="screen-reader-text">` or visual labels with `for` attributes, and add `aria-label` to icon-based submit buttons.
