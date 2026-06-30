## 2025-05-14 - Loading states for non-navigating actions
**Learning:** For actions like CSV exports that trigger a download without a page reload, a temporary loading state (e.g., 2 seconds) provides essential feedback while ensuring the interface doesn't remain locked in a disabled state.
**Action:** Use `setTimeout` in JavaScript to restore button states for background tasks that don't trigger navigation.

## 2025-05-14 - Preserving Unicode symbols in UI updates
**Learning:** Capturing original DOM values on page load is more reliable than hardcoding strings in JavaScript when dealing with buttons containing HTML entities or Unicode symbols, ensuring accurate UI restoration.
**Action:** Store `$element.val()` in a variable before modifying it for loading states.
