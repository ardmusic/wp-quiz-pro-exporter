## 2024-05-14 - Accessibility of Unicode-symbol buttons
**Learning:** Buttons using Unicode symbols (like ⇨) for visual flair need explicit `aria-label` attributes because screen readers might not announce the symbol meaningfully or at all.
**Action:** Always provide `aria-label` or `screen-reader-text` for buttons that rely on icons or Unicode symbols for their primary meaning.

## 2024-05-14 - Loading states for non-navigating actions (CSV downloads)
**Learning:** When a button triggers a file download (e.g., CSV export via admin-post.php), the browser doesn't reload the page. Standard loading states that rely on page transitions won't reset. Providing a temporary loading state (e.g., 2 seconds) gives the user immediate feedback that the process has started without leaving them with a permanently disabled button.
**Action:** Use a timeout to reset the button state for download actions, and ensure the button is re-enabled if the user changes form inputs.
