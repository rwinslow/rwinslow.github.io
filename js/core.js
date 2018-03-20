function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function getRandomInt(min, max) {
    if (min > max) {
        temp = max;
        max = min;
        min = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showHashPage(hash) {
    // Show hash-labeled page if given, otherwise home.
    hash = hash ? hash : 'home';
    $('.sidebar-nav li a').removeClass('on');
    $('#page-content-wrapper > .container-fluid > div').hide();
    $('#page-content-wrapper > .container-fluid > div.' + hash).show();
    $('a[href="#' + hash + '"]').addClass('on');
    if (hash != 'home') {
        $('title').text($('a[href="#' + hash + '"]').text());
    } else {
        $('title').text('RPG Tools');
    }
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

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

    // Show page if user goes straight to a link with hash.
    showHashPage(window.location.hash.substr(1));

    // Add event handler to show page from hash as user moves forward and backward.
    $(window).on('hashchange', function() {
        showHashPage(window.location.hash.substr(1));
    });
});

