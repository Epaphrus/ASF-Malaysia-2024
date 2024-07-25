document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // Countdown timer
    var countDownDate = new Date("Aug 16, 2024 19:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown timer elements if they exist
        var daysElement = document.getElementById("days");
        if (daysElement) daysElement.innerHTML = days;

        var hoursElement = document.getElementById("hours");
        if (hoursElement) hoursElement.innerHTML = hours;

        var minutesElement = document.getElementById("minutes");
        if (minutesElement) minutesElement.innerHTML = minutes;

        var secondsElement = document.getElementById("seconds");
        if (secondsElement) secondsElement.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            var timerElement = document.querySelector(".timer");
            if (timerElement) timerElement.innerHTML = "EXPIRED";
        }
    }, 1000);

    var swiper = new Swiper(".speakers-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var navbarButton = document.querySelector(".navbar-button a");
    if (navbarButton) {
        navbarButton.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
                history.pushState(null, null, " ");
            }
        });
    }
});