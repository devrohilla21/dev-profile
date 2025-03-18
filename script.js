document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sticky Header Hide/Show on Scroll
    let lastScrollTop = 0;
    let header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {
            header.classList.add("hidden"); // Hide on scroll down
        } else {
            header.classList.remove("hidden"); // Show on scroll up
        }
        lastScrollTop = currentScroll;
    });
});
