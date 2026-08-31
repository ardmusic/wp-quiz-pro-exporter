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
            var origValue = $btn.val();
            var exportingText = (typeof wpProQuizExportAdmin !== 'undefined' && wpProQuizExportAdmin.exporting) ? wpProQuizExportAdmin.exporting : 'Exporting...';
            setTimeout(function () {
                $btn.val(exportingText).prop('disabled', true);
            }, 0);
            setTimeout(function () {
                $btn.val(origValue).prop('disabled', false);
            }, 2000);
        });
    });

})(jQuery);
