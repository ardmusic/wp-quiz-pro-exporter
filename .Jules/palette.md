## 2024-07-17 - Asynchronous CSV Downloads and UI Feedback
**Learning:** In WordPress or other traditional MVC architectures where file exports/downloads (like CSV) are handled through form posts (e.g., `admin-post.php`), the browser triggers a file download stream instead of a full page reload. This leaves any triggered "loading/disabled" button state permanently active.
**Action:** Always implement a self-restoring timeout (e.g., 2000ms) inside the JavaScript submit handler to re-enable the button and restore the original button label, giving the user feedback without locking the interface.
