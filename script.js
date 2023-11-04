document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll("nav a");

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});
