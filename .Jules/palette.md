## 2024-05-13 - Accessibility of nested form elements
**Learning:** Nesting multiple interactive elements (like a <select> and a <input type="submit">) within a single <label> creates an ambiguous association for screen readers. The label should be explicitly associated with one input using the for attribute and id.
**Action:** Use separate <label> elements with for attributes, and use .screen-reader-text classes to hide them visually if they are not needed in the design, rather than nesting multiple inputs.

## 2024-05-13 - Loading states for non-refreshing actions
**Learning:** For actions that trigger a browser download (like CSV exports) without a page reload, a manual timeout is necessary in the JavaScript loading state logic to re-enable buttons and restore their original state, as there is no natural "success" event to hook into.
**Action:** Implement a conservative timeout (e.g., 2000ms) to reset the button state after providing immediate feedback.
