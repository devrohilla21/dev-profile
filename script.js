// Fade-in and Slide-in Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let projectCards = document.querySelectorAll(".project-card");

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

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe all project cards
    projectCards.forEach(card => {
        observer.observe(card);
    });
});
