$(document).ready(function(){
    // Add format method for strings.
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
            });
        }
    }

    function showHashPage(hash) {
        // Show hash-labeled page if given, otherwise home.
        hash = hash ? hash : 'home';
        $('.sidebar-nav li a').removeClass('on');
        $('#page-content-wrapper > .container-fluid > div').hide();
        $('#page-content-wrapper > .container-fluid > div.' + hash).show();
        $('.toggle>a.' + hash).addClass('on');
    }

    // Show page if user goes straight to a link with hash.
    showHashPage(window.location.hash.substr(1));

    // Add event handler to show page from hash as user moves forward and backward.
    $(window).on('hashchange', function() {
        showHashPage(window.location.hash.substr(1));
    });

    // Add event handler to toggle link styles and pages visibility on click.
    $('.toggle>a').click(function() {
        showHashPage($(this).attr('class'));
    });
});

