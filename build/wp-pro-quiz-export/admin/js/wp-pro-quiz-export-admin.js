(function ($) {
    'use strict';

    $(function () {
        var $btn = $("#btCSV");
        var $quizSelect = $("select[id$='-quiz']");
        var originalBtnValue = $btn.val();

        if ($quizSelect.val() == 0) {
            $btn.hide();
        }

        $quizSelect.on('change', function () {
            if ($(this).val() == 0) {
                $btn.fadeOut(100);
            }
            else {
                $btn.fadeIn(300);
            }
            // Reset button state if quiz changes
            $btn.prop('disabled', false).val(originalBtnValue);
        });

        $btn.closest('form').on('submit', function () {
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined') ? wpProQuizExportAdmin.exporting : 'Exporting...';

            // Use setTimeout to allow the form to submit before disabling the button
            setTimeout(function () {
                $btn.prop('disabled', true).val(exportingText);
            }, 0);

            // Re-enable after a while since CSV export is a download and won't reload the page
            setTimeout(function () {
                $btn.prop('disabled', false).val(originalBtnValue);
            }, 2000);
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
