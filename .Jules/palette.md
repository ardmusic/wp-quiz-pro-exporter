## 2025-05-15 - [CSV Export UX & Accessibility]
**Learning:** CSV exports in WordPress plugins often trigger a browser download without a page reload. This requires managing UI feedback (like loading states) manually in JavaScript, typically using a timeout to restore the button state after a few seconds.
**Action:** Implement a localized loading state ("Exporting...") and disable the submit button upon form submission, using `setTimeout` to restore it.

**Learning:** Nesting multiple interactive elements (like a `<select>` and a `<submit>` button) inside a single `<label>` tag is an accessibility anti-pattern.
**Action:** Move buttons outside of `<label>` tags and use the `for` attribute to explicitly link labels to their corresponding inputs.

**Learning:** Icon-only buttons or those using Unicode symbols (like ⇨) for actions need descriptive `aria-label` attributes to be accessible to screen reader users.
**Action:** Always add an `aria-label` to buttons that don't have clear text labels.
