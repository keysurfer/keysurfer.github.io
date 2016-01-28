$(document).ready(function () {
    $('#link1').one('click', function () {
        $('#section2').show();
        $('html, body').animate({
            scrollTop: $('#section2').offset().top
        }, 250);
        return false;
    });

    $('#click1, #click2, #click4').on('click', function () {
        $('#section2 .alert').show().text('You clicked the wrong link! Try using the up/down arrows to select the right one.')
        return false;
    });

    $('#click3').one('click', function () {
        $('#section3').show();
        $('html, body').animate({
            scrollTop: $('#section3').offset().top
        }, 250);
        return false;
    });
});