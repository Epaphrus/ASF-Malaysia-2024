document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const initialColor = '#00000057';
    const targetColor = '#0e3100';

    // Set initial background color
    navbar.style.backgroundColor = initialColor;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = targetColor;
        } else {
            navbar.style.backgroundColor = initialColor;
        }
    });
});
