## 2025-07-25 - Managing Async/Download Button States and Form Submission in WordPress
**Learning:** For background tasks like CSV downloads (via admin-post.php) that do not trigger page reloads, standard click-based loaders block button submission name/value from being posted. To prevent this, always bind to the form's `submit` event, use `setTimeout(..., 0)` to defer disabling the button until after submission starts, and use a 2000ms timeout to restore the button state once the download is initiated.
**Action:** Apply this form submission deferral pattern and restoration timeout for all file download and background task buttons in WordPress plugins.

## 2025-07-25 - Associating Screen-Reader Labels Without Nesting Interactive Elements
**Learning:** Nesting select dropdowns and action buttons inside a single `<label>` element breaks accessibility standards and confuses assistive devices. Instead, separate the elements, explicitly link them using `for` and `id`, and provide a nested `<span class="screen-reader-text">` inside the label to supply necessary context to screen readers without affecting the visual layout.
**Action:** Never nest interactive elements inside label tags. Use explicit associations and `.screen-reader-text` helper spans for a natively accessible and clean WordPress interface.
