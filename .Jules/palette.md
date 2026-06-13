## 2025-05-15 - Improving Feedback for Non-Navigational Form Submissions
**Learning:** For actions like CSV exports that trigger a file download without a page reload, the UI can feel unresponsive if no feedback is provided. A simple loading state (e.g., "Exporting...") on the button gives immediate confirmation of the user's action. Using a timeout to reset the button is a practical way to handle the lack of a "completion" event from the browser.
**Action:** Always implement a temporary loading state for background/download actions and ensure the button's original value is captured to preserve special characters (like Unicode symbols) during restoration.

## 2025-05-15 - Form Structure and Accessibility in WordPress
**Learning:** Nesting multiple interactive elements (like a select and a submit button) inside a single label is poor for accessibility and can cause confusing screen reader behavior.
**Action:** Use separate labels for each input and associate them via `for` and `id`. Use `.screen-reader-text` for visually redundant but contextually necessary labels.
