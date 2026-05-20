## 2026-05-20 - [Accessibility and Internationalization Improvements]
**Learning:** Found that the admin interface had non-semantic labels wrapping multiple interactive elements, which is poor for accessibility. Also noted the lack of internationalization in user-facing strings and the use of raw `die()` for error handling.
**Action:** Un-nested interactive elements from `<label>`, added `aria-label` to icon buttons, implemented WordPress i18n functions (`__()`, `_e()`, etc.), and replaced `die()` with `wp_die()`.
