// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const bodyClass = document.body;

themeToggle.addEventListener('click', () => {
  bodyClass.classList.toggle('light-mode');
});

// Carousel/Slider Functionality
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.homepage-slide, .homepage');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
  // Wrap around if index is out of bounds
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Move the slides wrapper
  const offset = -currentSlide * 100;
  slidesWrapper.style.transform = `translateX(${offset}%)`;

  // Update active states
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === currentSlide);
  });
}

// Previous button
prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// Next button
nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Indicator clicks
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto-play (optional - uncomment if you want auto-advance)
// setInterval(() => {
//   showSlide(currentSlide + 1);
// }, 5000); // Change slide every 5 seconds

// Initialize first slide
showSlide(0);
