## 2025-01-20 - Non-Reload Loading State with 2000ms Restore for CSV Downloads
**Learning:** For actions like CSV generation triggered via WordPress standard form posting which downloads files in the background without reloading the page, standard disabled loading states stay stuck. Restoring the button text and enabling it after a 2000ms timeout provides excellent user feedback of "action initiated" without locking the user out indefinitely.
**Action:** Use a 2000ms setTimeout to restore the button to its initial enabled state when dealing with non-reload file generation/download triggers.
