## 2024-10-13 - Accessible Form Control Structure in Admin Templates
**Learning:** Legacy WordPress admin templates often nest multiple controls (`<select>`, `<input>`) inside a single `<label>` element, causing screen readers to misassociate inputs and announce incorrect labels.
**Action:** Un-nest form controls, associate `<label>` with its target control using `for` and `id`, and use `.screen-reader-text` for visually implicit labels while adding `aria-label` to icon/symbol buttons.
