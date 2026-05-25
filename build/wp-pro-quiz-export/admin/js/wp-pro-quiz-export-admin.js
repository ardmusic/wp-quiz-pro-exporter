(function ($) {
    'use strict';

    $(function () {
        var $btCSV = $("#btCSV");
        var originalBtnVal = $btCSV.val();

        if ($("select[id$='-quiz']").val() == 0) {
            $btCSV.hide();
        }

        $("select[id$='-quiz']").change(function () {
            if ($(this).val() == 0) {
                $btCSV.fadeOut(100);
            }
            else {
                $btCSV.fadeIn(300);
                // Reset button state if quiz selection changes
                $btCSV.prop("disabled", false).val(originalBtnVal);
            }
        });

        $btCSV.click(function () {
            var $btn = $(this);
            $btn.prop("disabled", true).val(wpProQuizExportAdmin.l10n_exporting);

            // CSV downloads via admin-post.php don't reload the page.
            // Reset button after 5 seconds to provide feedback and allow another export.
            setTimeout(function () {
                $btn.prop("disabled", false).val(originalBtnVal);
            }, 5000);
        });
    });

    /**
     * All of the code for your admin-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * $(function() {
     *
     * });
     *
     * When the window is loaded:
     *
     * $( window ).load(function() {
     *
     * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */

})(jQuery);
