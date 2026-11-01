## 2025-05-15 - Export Button Accessible Label and Download State Feedback
**Learning:** Screen readers reading buttons with symbol prefixes like `&#8680; CSV` benefit greatly from explicit `aria-label` attributes describing the exact action. Additionally, file download submit actions without full-page navigation require temporary button disabled/loading states via JavaScript to give users confidence and prevent duplicate requests.
**Action:** Pair icon/symbol buttons with descriptive `aria-label`s and attach timeout-based loading states to download forms.
