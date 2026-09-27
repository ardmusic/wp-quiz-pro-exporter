(function ($) {
    'use strict';

    $(function () {
        var $select = $("select[id$='-quiz']");
        var $btCSV = $("#btCSV");

        if ($select.val() == 0) {
            $btCSV.hide();
        }
        $select.change(function () {
            if ($(this).val() == 0) {
                $btCSV.fadeOut(100);
            }
            else {
                $btCSV.fadeIn(300);
            }
        });

        $btCSV.closest('form').on('submit', function () {
            var originalVal = $btCSV.val();
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting)
                ? wpProQuizExportAdmin.exporting
                : 'Exporting...';

            setTimeout(function () {
                $btCSV.val(exportingText).prop('disabled', true);
            }, 0);

            setTimeout(function () {
                $btCSV.val(originalVal).prop('disabled', false);
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
