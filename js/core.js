$(document).ready(function(){
    // First, checks if it isn't implemented yet.
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
            });
        };
    }

    $('.toggle>a').click(function() {
        var classname = $(this).attr('class');
        $('.sidebar-nav li a').removeClass('on');
        $(this).addClass('on');
        $('#page-content-wrapper > .container-fluid > div').hide();
        $('#page-content-wrapper > .container-fluid > div.' + classname).show();
    });
});

