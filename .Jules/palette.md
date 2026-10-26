## 2025-05-15 - Un-nesting Interactive Elements in Legacy WP Templates
**Learning:** Legacy WordPress admin templates often wrap multiple inputs (select, submit button, hidden nonce) inside a single `<label>` tag. This causes screen readers to read all controls together and breaks input association.
**Action:** Always extract interactive elements into sibling controls, add an explicit `<label class="screen-reader-text" for="...">` for `<select>`, and add `aria-label` to icon/symbol submit buttons.
