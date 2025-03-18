document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let header = document.getElementById("header");
    let lastScrollY = window.scrollY;

    // Observer for fade-in animations (Runs every time a section enters screen)
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in"); // Re-run animation on scroll
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Hide header on scroll down, show on scroll up
    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            header.style.top = "-100px"; // Hide
        } else {
            header.style.top = "0"; // Show
        }
        lastScrollY = window.scrollY;
    });
});
