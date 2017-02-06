/**
 * Created by granevich on 06.05.2016.
 */


$(document).ready(function () {
    $('.preloader').show();
    $('.card').css('filter','blur(5px)');

    setTimeout(function () {
        $('.preloader').hide();
        $('.card').css('filter','blur(0)');
    }, 1500)

});