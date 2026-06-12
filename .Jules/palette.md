## 2024-12-16 - [Capturing Button Values with Entities]
**Learning:** When a button's `value` attribute contains HTML entities (like `&#8680;`), setting the value back programmatically in JavaScript (e.g., `$btn.val('&#8680; CSV')`) might render the entity as literal text if not handled carefully.
**Action:** Capture the `originalBtnValue` using jQuery's `.val()` on page load and use that variable to restore the button's state.

## 2024-12-16 - [Repository Structure and Build Artifacts]
**Learning:** In some WordPress plugins, the `build/` directory might actually contain the primary source code instead of being a transient artifact, especially if there's no visible build script in the root.
**Action:** Always check `README.md` and the contents of `src/` to determine if `build/` is the source of truth before assuming it's a generated artifact.
