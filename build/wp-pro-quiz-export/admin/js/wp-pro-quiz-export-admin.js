(function ($) {
    'use strict';

    $(function () {
        var $select = $("select[id$='-quiz']");
        var $btn = $("#btCSV");
        var $form = $btn.closest('form');
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

        $form.on('submit', function () {
            setTimeout(function () {
                $btn.prop('disabled', true).val(wpProQuizExportAdmin.exporting);
            }, 0);

            setTimeout(function () {
                $btn.prop('disabled', false).val(originalBtnValue);
            }, 2000);
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
