## 2025-05-15 - Capturing Button Values with Unicode Entities
**Learning:** When a button's value contains Unicode entities (like &#8680;), setting the value programmatically in JavaScript using the entity string (e.g., `$btn.val('&#8680; CSV')`) will render the literal text instead of the symbol.
**Action:** Capture the original DOM value (e.g., `var originalValue = $btn.val();`) on page load and use that variable to restore the button's state, ensuring visual consistency.
