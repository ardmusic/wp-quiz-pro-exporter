## 2025-08-24 - Accessible Submit Button & Form Submissions

**Learning:** Nesting submit buttons and form inputs inside `<label>` tags confuses screen reader navigation. Additionally, handling loading states on form submit requires using `setTimeout(..., 0)` to allow the browser submit event to fire before setting `disabled = true`.
**Action:** Unnest submit buttons from `<label>` elements, use `for` attributes for input association, and attach `setTimeout(..., 0)` disabling logic on form submit events.
