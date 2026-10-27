## 2026-10-27 - Un-nesting interactive elements inside labels and adding button export feedback
**Learning:** Interactive elements such as `<input type="submit">` should never be nested inside a `<label>` element. Separating inputs with proper `for` attribute and `aria-label` improves screen reader navigation and semantics. Additionally, background file downloads trigger without page reloads, so updating submit button text briefly provides critical visual feedback.
**Action:** Always verify label associations and interactive button states in WordPress admin forms.
