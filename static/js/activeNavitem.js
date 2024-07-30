document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('div');

    function highlightActiveLink() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100; // Adjust offset as needed
            let sectionBottom = sectionTop + section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink(); // Call once on load
});
