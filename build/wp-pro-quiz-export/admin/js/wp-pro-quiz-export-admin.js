(function ($) {
    'use strict';

    $(function () {
        var $select = $("select[id$='-quiz']");
        var $btn = $("#btCSV");
        var originalBtnValue = $btn.val();

        if ($select.val() == 0) {
            $btn.hide();
        }

        $select.change(function () {
            if ($(this).val() == 0) {
                $btn.fadeOut(100);
            }
            else {
                $btn.fadeIn(300);
            }
        });

        $btn.closest('form').on('submit', function () {
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting) ? wpProQuizExportAdmin.exporting : 'Exporting...';

            setTimeout(function() {
                $btn.prop('disabled', true).val(exportingText);
            }, 0);

            setTimeout(function () {
                $btn.prop('disabled', false).val(originalBtnValue);
            }, 2000);
        });
    });

})(jQuery);
