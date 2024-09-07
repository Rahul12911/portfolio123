document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
            document.body.classList.add('scrolled');
        } else {
            backToTopButton.style.display = 'none';
            document.body.classList.remove('scrolled');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
