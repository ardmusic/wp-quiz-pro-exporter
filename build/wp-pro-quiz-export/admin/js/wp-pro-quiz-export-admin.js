(function ($) {
    'use strict';

    $(function () {
        if ($("select[id$='-quiz']").val() == 0) {
            $("#btCSV").hide();
        }
        $("select[id$='-quiz']").change(function () {
            if ($(this).val() == 0) {
                $("#btCSV").fadeOut(100);
            }
            else {
                $("#btCSV").fadeIn(300);
            }
        });

        // Micro-UX: loading feedback and preventing duplicate submissions during CSV exports
        $("#btCSV").closest("form").on("submit", function () {
            var $button = $("#btCSV");
            var originalValue = $button.val();
            var loadingText = (typeof wpProQuizExportAdmin !== "undefined" && wpProQuizExportAdmin.exporting)
                ? wpProQuizExportAdmin.exporting
                : "Exporting...";

            // Use setTimeout to allow the browser to process form submission before disabling the button
            setTimeout(function () {
                $button.prop("disabled", true).val(loadingText);
            }, 0);

            // CSV downloads do not trigger a page reload, so re-enable the button after 2000ms
            setTimeout(function () {
                $button.prop("disabled", false).val(originalValue);
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
