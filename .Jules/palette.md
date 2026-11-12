## 2024-11-12 - Form submit button disabling vs browser request initiation
**Learning:** For actions like CSV downloads triggered via POST to `admin-post.php`, immediately disabling the submit button on `click` or synchronous `submit` can prevent form data (or the request itself) from dispatching in some browsers.
**Action:** Use `setTimeout(..., 0)` inside the `submit` event handler to defer button disabling and label updates until after the browser dispatches the submission, and auto-restore state via timeout since page unload does not occur on file downloads.
