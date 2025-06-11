const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
function toggleDropdown() {
        const dropdown = document.getElementById("dropdown-content");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
        const dropdown = document.getElementById("dropdown-content");
        if (!event.target.closest('.dropdown')) {
            dropdown.style.display = 'none';
        }
};

function scrollToCategory(category) {
        showMenu(); // Show menu section
        toggleDropdown();
        setTimeout(() => {
            const headings = document.querySelectorAll('.menu .category-section h2');
            for (const heading of headings) {
                if (heading.textContent.trim().toLowerCase() === category.toLowerCase()) {
                    heading.scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        }, 50);
        toggleDropdown();
}