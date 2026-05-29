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

        var $btn = $('#btCSV');
        var originalValue = $btn.val();

        $btn.on('click', function () {
            var $this = $(this);

            // Use setTimeout to allow the form to submit before disabling the button
            setTimeout(function () {
                $this.prop('disabled', true);
                $this.val(wpProQuizExportAdmin.l10n.exporting);

                // Restore the button after 2 seconds since the download won't reload the page
                setTimeout(function () {
                    $this.prop('disabled', false);
                    $this.val(originalValue);
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
