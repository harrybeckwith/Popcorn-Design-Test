$(document).ready(function () {
    'use strict';
    // Nav drop down on hover 
    $('.dropdown').hover(
        function () {
            $(this).children('.sub-menu').slideDown(400);
        },
        function () {
            $(this).children('.sub-menu').slideUp(400);
        }
    );

    // Burger menu
    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
        $('.mobile-nav').toggle();
    });

});