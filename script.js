// Fade-in Animation for Sections
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
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollProgress = document.querySelector('.progress-bar');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + "%";
});
