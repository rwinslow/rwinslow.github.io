$('.coriolis-generate-critical-damage').click(function(){
    $('.coriolis-critical-damage-random .fill').text(
        '' + getRandomInt(1, 6) + getRandomInt(1, 6)
    );
});