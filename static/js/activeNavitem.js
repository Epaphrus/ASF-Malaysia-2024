document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    function makeNavActive() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
            const navLink = navItem.querySelector('.nav-link');
            if (navLink && navLink.getAttribute('href') === `#${current}`) {
                navItem.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', makeNavActive);
    makeNavActive(); // Set initial state
});
