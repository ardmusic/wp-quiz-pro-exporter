(function ($) {
    'use strict';

    $(function () {
        var $btn = $("#btCSV");
        var originalBtnValue = $btn.val();
        var $form = $btn.closest('form');

        if ($("select[id$='-quiz']").val() == 0) {
            $btn.hide();
        }

        $("select[id$='-quiz']").change(function () {
            if ($(this).val() == 0) {
                $btn.fadeOut(100);
            }
            else {
                $btn.fadeIn(300);
                // Reset button state if it was stuck in exporting state
                $btn.val(originalBtnValue).prop('disabled', false);
            }
        });

        $form.on('submit', function() {
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.l10n)
                                ? wpProQuizExportAdmin.l10n.exporting
                                : 'Exporting...';

            // Use setTimeout to ensure the form submission starts before the button is disabled
            setTimeout(function() {
                $btn.val(exportingText).prop('disabled', true);
            }, 0);

            // Re-enable after 2 seconds as CSV download won't reload the page
            setTimeout(function() {
                $btn.val(originalBtnValue).prop('disabled', false);
            }, 2000);
        });
    });

})(jQuery);
