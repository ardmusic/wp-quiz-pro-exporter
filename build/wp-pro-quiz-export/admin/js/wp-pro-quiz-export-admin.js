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
            // Restore button state if selection changes
            $btn.prop('disabled', false).val(originalBtnValue);
        });

        $btn.closest('form').on('submit', function () {
            var $submitBtn = $(this).find('#btCSV');

            // Use setTimeout to allow the browser to initiate the request before disabling the button
            setTimeout(function() {
                $submitBtn.prop('disabled', true).val(wpProQuizExportAdmin.exporting);
            }, 0);

            // Re-enable after a while since CSV download doesn't reload the page
            setTimeout(function () {
                $submitBtn.prop('disabled', false).val(originalBtnValue);
            }, 2000);
        });
    });

})(jQuery);
