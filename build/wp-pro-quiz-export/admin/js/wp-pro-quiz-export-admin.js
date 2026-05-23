(function ($) {
    'use strict';

    $(function () {
        var $btCSV = $("#btCSV");
        var $quizSelect = $("select[id$='-quiz']");

        if ($quizSelect.val() == 0) {
            $btCSV.hide();
        }

        $quizSelect.change(function () {
            if ($(this).val() == 0) {
                $btCSV.fadeOut(100);
            }
            else {
                $btCSV.fadeIn(300);
            }
        });

        $btCSV.click(function () {
            var $this = $(this);
            var originalValue = $this.val();
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined') ? wpProQuizExportAdmin.exportingText : 'Exporting...';

            $this.val(exportingText).prop('disabled', true);

            setTimeout(function () {
                $this.val(originalValue).prop('disabled', false);
            }, 3000);
        });
    });

})(jQuery);
