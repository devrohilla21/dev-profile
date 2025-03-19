// Fade-in Animation for Sections and Project Cards
document.addEventListener("DOMContentLoaded", function () { 
    let sections = document.querySelectorAll("section");
    let scrollAnimElements = document.querySelectorAll(".scroll-animate");

    // Apply the animation class to elements that need to animate on scroll
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");

                // Add scroll animation to elements once they are in view
                if (entry.target.classList.contains("scroll-animate")) {
                    entry.target.classList.add("scroll-animate");
                }

                // If the project list is in view, fade in each project card
                if (entry.target.id === "projects") {
                    let projectCards = document.querySelectorAll(".project-card");
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("fade-in");
                        }, index * 200); // Staggered delay for each card
                    });
                }
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
