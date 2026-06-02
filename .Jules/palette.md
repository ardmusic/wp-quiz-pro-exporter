## 2026-06-02 - [Micro-UX: CSV Export Feedback & Accessibility]
**Learning:** For background tasks like file downloads that don't reload the page, a timed loading state on the button provides crucial feedback. Also, using symbols in buttons requires explicit ARIA labels for screen readers.
**Action:** Implement 'loading' states with timeouts for non-navigational actions and always add `aria-label` to icon-only or symbol-heavy buttons.
