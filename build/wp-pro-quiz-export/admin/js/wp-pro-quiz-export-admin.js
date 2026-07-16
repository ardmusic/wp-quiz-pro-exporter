(function ($) {
    'use strict';

    $(function () {
        var $select = $("select[id$='-quiz']");
        var $button = $("#btCSV");

        if ($select.val() == 0) {
            $button.hide();
        }

        $select.change(function () {
            if ($(this).val() == 0) {
                $button.fadeOut(100);
            }
            else {
                $button.fadeIn(300);
            }
        });

        $button.closest('form').on('submit', function () {
            var originalValue = $button.val();
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting) ? wpProQuizExportAdmin.exporting : 'Exporting...';

            // Use setTimeout to ensure the button is disabled AFTER the form submission has been initiated
            setTimeout(function () {
                $button.prop('disabled', true).val(exportingText);
            }, 0);

            // Re-enable after 2 seconds (CSV download doesn't trigger page reload)
            setTimeout(function () {
                $button.prop('disabled', false).val(originalValue);
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
