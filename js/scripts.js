document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    revealElements.forEach(element => observer.observe(element));
});


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Define how many items should be visible at a time
let N = 3; // Change this number as needed
if (window.innerWidth < 672)
    N = 2;

// Set the width for each item using the calculated width from CSS
const itemWidth = items[0].offsetWidth + 20; // Width of one item including margin (20px)

function scrollCarousel(direction) {
    // Update currentIndex based on direction, but ensure it stays within bounds
    currentIndex += direction;

    // Ensure the index is within the bounds of available items
    if (currentIndex < 0) {
        currentIndex = 0; // Do not go before the first item
    } else if (currentIndex >= totalItems - N + 1) {
        currentIndex = totalItems - N; // Do not go beyond the last visible set
    }

    const carouselWrapper = document.querySelector('.carousel-wrapper');

    // Slide to the appropriate position based on currentIndex
    carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}




function toggleMenu() {
    const mobileMenu = document.querySelector('.navbar.mobile');
    mobileMenu.classList.toggle('show');
}