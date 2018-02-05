// jQuery is on global window via webpack

var $ = require('jQuery');


$(document).ready(() => {

    $('.js--btn-mobile').click(() => {
        $('body').toggleClass('nav-open');

    });


    $(window).resize(() => {
        if ($(window).width() >= 768) {
            // catch-all for resizes
            $('body').removeClass('nav-open');

        }
    });

});