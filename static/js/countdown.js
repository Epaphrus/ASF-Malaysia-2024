document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // Countdown timer
    var countDownDate = new Date("Nov 26, 2024 12:00:00").getTime();
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
})