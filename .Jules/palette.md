## 2025-05-14 - [Micro-UX Feedback for File Downloads]
**Learning:** For actions like CSV downloads that don't trigger a page refresh, users often lack feedback on whether their click was registered. Updating the button text to a loading state and briefly disabling it provides immediate visual confirmation and prevents duplicate submissions.
**Action:** Implement "Exporting..." loading states on download buttons and use `wp_localize_script` to pass translatable strings to the frontend.

## 2025-05-14 - [Label and Interactive Element Separation]
**Learning:** Nesting multiple interactive elements (like a select and a button) within a single label tag can cause accessibility issues and confusing behavior for screen readers.
**Action:** Always separate labels from their inputs, use the `for` attribute for explicit association, and ensure buttons have descriptive `aria-label` attributes if they use symbols/icons.
