// script.js

// Function for smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scrolling to the target section
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Optional: Function to toggle project details
const projectToggles = document.querySelectorAll('.project-toggle');

projectToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const projectDetails = this.nextElementSibling; // Assuming details are directly after the toggle
        projectDetails.classList.toggle('hidden'); // Toggle visibility
    });
});

// Add more functions as needed for additional interactivity
