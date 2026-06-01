## 2025-05-15 - Capturing original button values with symbols
**Learning:** When a button contains Unicode symbols or HTML entities (like ➔), setting its value programmatically in JavaScript (e.g., `$btn.val('➔ CSV')`) might render the literal text instead of the symbol depending on how the script is encoded or how the DOM interprets it.
**Action:** Capture the original value on page load using `$btn.val()` and store it in a variable. Use this variable to restore the button state instead of hardcoding the string in JavaScript.

## 2025-05-15 - Label nesting and accessibility
**Learning:** Nesting both a `<select>` and a submit button within a single `<label>` tag is invalid HTML and confuses screen readers, as the label is associated with multiple interactive elements.
**Action:** Use the `for` attribute on the label to associate it with the specific form element ID, and place other elements (like submit buttons) outside the label.

## 2025-05-15 - Mocking WordPress Database Constants
**Learning:** When mocking the WordPress environment for frontend testing, failing to define constants like `ARRAY_A` used in `$wpdb->get_results()` will cause PHP notices or errors that can break the rendered output.
**Action:** Always define common WordPress constants (e.g., `define('ARRAY_A', 'ARRAY_A');`) in the mock setup script.
