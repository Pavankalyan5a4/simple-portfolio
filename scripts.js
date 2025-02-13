// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Function to remove active class from all links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove("active"));
}

// Function to highlight the correct nav link when scrolling
function highlightNavOnScroll() {
    let scrollPosition = window.scrollY;

    document.querySelectorAll("section").forEach(section => {
        let sectionTop = section.offsetTop - 50; // Adjusted for navbar height
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            removeActiveClasses();
            document.querySelector(`a[href="#${sectionId}"]`).classList.add("active");
        }
    });
}

// Attach scroll event listener
window.addEventListener("scroll", highlightNavOnScroll);

// Click event listener for smooth scrolling
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Remove active class from all links
        removeActiveClasses();

        // Add active class to the clicked link
        this.classList.add("active");

        // Get target section ID from href
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Check if the target section exists before scrolling
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
    });
});
