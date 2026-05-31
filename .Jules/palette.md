## 2025-05-14 - [Form Accessibility and Feedback]
**Learning:** Nesting interactive elements like `<select>` inside a `<label>` is bad for accessibility and can cause issues with screen readers. Also, Unicode symbols in buttons need `aria-label` for screen reader clarity.
**Action:** Always un-nest interactive elements from labels and use the `for` attribute. Provide `aria-label` for buttons that use symbols or icons.

## 2025-05-14 - [Playwright Verification in Mock Environment]
**Learning:** When verifying frontend changes via Playwright in a mock PHP environment, form submissions can trigger navigation that makes elements disappear, causing assertion failures.
**Action:** Prevent form submissions from triggering navigation in mock environments (e.g., by setting `action="javascript:void(0);"` or intercepting the submit event) to ensure elements remain present for post-interaction assertions.
