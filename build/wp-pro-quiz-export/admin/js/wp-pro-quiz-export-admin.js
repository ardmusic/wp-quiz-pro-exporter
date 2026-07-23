(function ($) {
    'use strict';

    $(function () {
        var $select = $("select[id$='-quiz']");
        var $btn = $("#btCSV");

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
            var originalVal = $btn.val();
            var loadingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting)
                ? wpProQuizExportAdmin.exporting
                : 'Exporting...';

            setTimeout(function () {
                $btn.prop('disabled', true).val(loadingText);
            }, 0);

            setTimeout(function () {
                $btn.prop('disabled', false).val(originalVal);
            }, 2000);
        });
    });

})(jQuery);
