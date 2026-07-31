(function ($) {
    'use strict';

    $(function () {
        var $quizSelect = $("select[id$='-quiz']");
        var $btnCSV = $("#btCSV");

        if ($quizSelect.val() == 0) {
            $btnCSV.hide();
        }

        $quizSelect.change(function () {
            if ($(this).val() == 0) {
                $btnCSV.fadeOut(100);
            }
            else {
                $btnCSV.fadeIn(300);
            }
        });

        $btnCSV.closest('form').on('submit', function () {
            var originalVal = $btnCSV.val();
            var loadingVal = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting)
                ? wpProQuizExportAdmin.exporting
                : 'Exporting...';

            setTimeout(function () {
                $btnCSV.prop('disabled', true).val(loadingVal);
            }, 0);

            setTimeout(function () {
                $btnCSV.prop('disabled', false).val(originalVal);
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
