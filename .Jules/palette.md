## 2025-05-14 - Visual feedback for non-reloading actions
**Learning:** When a button triggers an action that doesn't reload the page (like a file download in WordPress), users may be unsure if anything happened. Disabling the button and changing its text provides clear feedback, but it MUST be re-enabled after a timeout to prevent the interface from becoming permanently stuck.
**Action:** Use a 2-second timeout to restore button state for download actions, and always capture the original button value on page load to ensure accurate restoration.

## 2025-05-14 - Accessible labels for grouped controls
**Learning:** Nesting multiple interactive elements (like a select and a button) inside a single label tag is confusing for screen readers and breaks standard interaction patterns.
**Action:** Use explicit labels with the `for` attribute and keep interactive elements as siblings or in separate containers.
