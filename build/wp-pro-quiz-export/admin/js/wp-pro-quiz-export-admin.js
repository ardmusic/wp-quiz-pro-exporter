(function ($) {
    'use strict';

    $(function () {
        var $btn = $("#btCSV");
        var originalValue = $btn.val();

        if ($("select[id$='-quiz']").val() == 0) {
            $btn.hide();
        }

        $("select[id$='-quiz']").change(function () {
            // Reset button state on change
            $btn.prop('disabled', false).val(originalValue);

            if ($(this).val() == 0) {
                $btn.fadeOut(100);
            }
            else {
                $btn.fadeIn(300);
            }
        });

        $btn.click(function () {
            var $this = $(this);
            // Use setTimeout to ensure the form submission is not blocked
            setTimeout(function () {
                $this.prop('disabled', true).val(wpProQuizExportAdmin.exporting);

                // Re-enable after a timeout since CSV download doesn't reload the page
                setTimeout(function () {
                    $this.prop('disabled', false).val(originalValue);
                }, 2000);
            }, 0);
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
