// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach((section) => {
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.classList.add('fade-in');
        }
    });
})
