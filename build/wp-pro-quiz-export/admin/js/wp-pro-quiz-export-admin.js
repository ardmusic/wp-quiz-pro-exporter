(function ($) {
    'use strict';

    $(function () {
        var $quizSelect = $("select[id$='-quiz']");
        var $exportBtn = $("#btCSV");

        if ($quizSelect.val() == 0) {
            $exportBtn.hide();
        }

        $quizSelect.change(function () {
            if ($(this).val() == 0) {
                $exportBtn.fadeOut(100);
            }
            else {
                $exportBtn.fadeIn(300);
            }
        });

        $exportBtn.closest('form').on('submit', function () {
            var originalValue = $exportBtn.val();
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting) ? wpProQuizExportAdmin.exporting : 'Exporting...';

            setTimeout(function () {
                $exportBtn.prop('disabled', true).val(exportingText);
            }, 0);

            setTimeout(function () {
                $exportBtn.prop('disabled', false).val(originalValue);
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
