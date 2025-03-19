// Fade-in Animation for About Me and Contact Sections
document.addEventListener("DOMContentLoaded", function () {
    let aboutSection = document.querySelector("#about");
    let contactSection = document.querySelector("#contact");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // Add fade-in animation
                entry.target.style.opacity = 1; // Make element visible
                entry.target.style.transform = "translateY(0)"; // Move element to its original position
            } else {
                entry.target.classList.remove("fade-in"); // Remove fade-in animation
                entry.target.style.opacity = 0; // Hide element
                entry.target.style.transform = "translateY(20px)"; // Move element slightly down
            }
        });
    }, { threshold: 0.2 }); // Trigger animation when 20% of the element is visible

    // Observe About Me section
    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // Observe Contact section
    if (contactSection) {
        observer.observe(contactSection);
    }
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollProgress = document.querySelector('.progress-bar');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + "%";
});

// Theme Toggle Functionality
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Set the initial theme
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Toggle between dark and light mode
toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});
