document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    function checkScroll() {
        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100;

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible"); // Keeps animation working on scroll up/down
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on load

    // Contact form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent successfully!");
    });
});
