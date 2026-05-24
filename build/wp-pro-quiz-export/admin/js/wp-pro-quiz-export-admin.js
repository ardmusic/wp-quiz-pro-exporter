(function ($) {
    'use strict';

    $(function () {
        var $quizSelect = $("select[id$='-quiz']");
        var $exportButton = $("#btCSV");

        if ($quizSelect.val() == 0) {
            $exportButton.hide();
        }

        $quizSelect.change(function () {
            if ($(this).val() == 0) {
                $exportButton.fadeOut(100);
            }
            else {
                $exportButton.prop('disabled', false).val('\u21E8 CSV').fadeIn(300);
            }
        });

        $exportButton.click(function () {
            var $btn = $(this);
            var loadingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting) ? wpProQuizExportAdmin.exporting : 'Exporting...';

            $btn.prop('disabled', true).val(loadingText);

            // The form will submit naturally. We don't preventDefault() here.
            // Since it's a file download, the page usually doesn't reload,
            // so we might want a way to re-enable it, but for now this provides
            // the requested "loading" feedback.
            $btn.closest('form').submit();
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
