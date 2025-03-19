// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem("dark-mode", isDarkMode);
});

// Check for saved dark mode preference
if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Form Submission Handling
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
});

// Existing Intersection Observer and Scroll Progress Bar Code
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener("scroll", () => {
    const scrollProgress = document.querySelector('.progress-bar');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + "%";
});
