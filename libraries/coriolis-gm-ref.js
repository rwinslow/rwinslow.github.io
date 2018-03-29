$('.coriolis-roll').click(function() {
    $('.coriolis-dice-successes .fill').text('-/-');
    let numDice = $(this).text();
    setTimeout(function() {
        let successes = 0
        for (let i = 0; i < numDice; i++) {
            if (getRandomInt(1, 6) == 6) {
                successes = successes + 1;
            }
        }
        $('.coriolis-dice-successes .fill').text(successes + '/' + numDice);
    }, 200);
});