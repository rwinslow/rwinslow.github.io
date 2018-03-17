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

    // Show page if user goes straight to a link with hash.
    if (window.location.hash) {
        var hash = window.location.hash.substr(1);
        $('#page-content-wrapper > .container-fluid > div.' + hash).show();
        $('.toggle>a.' + hash).addClass('on');
    }

    // Show page from hash as user moves forward and backward.
    $(window).on('hashchange', function() {
        $('.sidebar-nav li a').removeClass('on');
        $('#page-content-wrapper > .container-fluid > div').hide();

        var hash = window.location.hash.substr(1);
        $('#page-content-wrapper > .container-fluid > div.' + hash).show();
        $('.toggle>a.' + hash).addClass('on');
    });

    // Toggle links and pages on click.
    $('.toggle>a').click(function() {
        var classname = $(this).attr('class');
        $('.sidebar-nav li a').removeClass('on');
        $(this).addClass('on');
        $('#page-content-wrapper > .container-fluid > div').hide();
        $('#page-content-wrapper > .container-fluid > div.' + classname).show();
    });
});

