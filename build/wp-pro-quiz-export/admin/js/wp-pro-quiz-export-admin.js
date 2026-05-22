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

        $("#btCSV").click(function() {
            var $this = $(this);
            var originalValue = $this.val();
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.l10n)
                                ? wpProQuizExportAdmin.l10n.exporting
                                : 'Exporting...';

            $this.val(exportingText).prop('disabled', true);

            // Revert back after a short delay since it's a form submission that triggers a download
            // Disabling the button might prevent form submission in some browsers if done instantly,
            // but usually it works if it's already triggered.
            // We use a timeout to re-enable it so the user can try again if the download fails or for next time.
            setTimeout(function() {
                $this.val(originalValue).prop('disabled', false);
            }, 5000);

            // Ensure the form is actually submitted before disabling if needed,
            // but click handler on submit button usually runs just before submission.
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
