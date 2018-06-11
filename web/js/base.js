$(document).ready(function () {
    /* Met en marche les tooltips du site */
    $(function () {
        $('.danger[data-toggle="tooltip"]').tooltip({
            html: true,
            template: '<div class="tooltip danger"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('.success[data-toggle="tooltip"]').tooltip({
            html: true,
            template: '<div class="tooltip success"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('.warning[data-toggle="tooltip"]').tooltip({
            html: true,
            template: '<div class="tooltip warning"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('.default[data-toggle="tooltip"]').tooltip({
            html: true,
            template: '<div class="tooltip default"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('[data-toggle="tooltip"]').tooltip({
            html: true,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
    });
});