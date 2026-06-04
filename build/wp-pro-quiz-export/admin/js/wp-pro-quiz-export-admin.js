(function ($) {
    'use strict';

    $(function () {
        var $quizSelect = $("select[id$='-quiz']");
        var $exportBtn = $("#btCSV");
        var originalBtnValue = $exportBtn.val();

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
            $exportBtn.prop('disabled', true).val(wpProQuizExportAdmin.exporting);

            // Re-enable after a timeout since the download doesn't refresh the page
            setTimeout(function () {
                $exportBtn.prop('disabled', false).val(originalBtnValue);
            }, 2000);
        });
    });

})(jQuery);
