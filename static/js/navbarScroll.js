document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const initialColor = '#000000';
    // const targetColor = '#0e3100';

    // Set initial background color
    navbar.style.backgroundColor = initialColor;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = targetColor;
        } else {
            navbar.style.backgroundColor = initialColor;
        }
    });
});

// BACK TO TOP ARROW JS
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
