## 2025-09-27 - Micro-UX Loading Feedback for Non-Reloading Form Exports
**Learning:** File export submissions handled via admin-post or download headers don't trigger page reloads, leaving users without visual feedback unless state is temporarily managed in JS.
**Action:** On form submission, set button text to "Exporting...", temporarily disable via `setTimeout(..., 0)`, and auto-restore state after a 2-second timeout.
