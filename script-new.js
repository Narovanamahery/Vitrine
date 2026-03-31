import { config } from './data.js';
import {
  renderSlides,
  renderStats,
  renderExpertises,
  renderProjects,
  renderSkills,
  renderCertifications,
  renderContacts,
} from './render.js';
import {
  initReveal,
  initSkillBars,
  initCounters,
  initTyping,
  initParallax,
  initNavActive,
} from './animate.js';

renderSlides();
renderStats();
renderExpertises();
renderProjects();
renderSkills();
renderCertifications();
renderContacts();

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const hamburgerBtn   = document.getElementById('hamburger-btn');
const mobileNav      = document.getElementById('mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
  hamburgerBtn.classList.add('open');
  mobileNav.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  hamburgerBtn.classList.remove('open');
  mobileNav.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.contains('open') ? closeMenu() : openMenu();
});
mobileNavLinks.forEach((link) => link.addEventListener('click', closeMenu));

const slidesWrapper = document.getElementById('slides-wrapper');
const autoplayBar   = document.getElementById('autoplay-bar');

let currentSlide  = 0;
let totalSlides   = 0;
let autoplayTimer = null;
let slideEls      = [];
let indicatorEls  = [];

function animateContent(index) {
  const content = slideEls[index]?.querySelector('.slide-content');
  if (!content) return;
  content.classList.remove('slide-content--in');
  void content.offsetWidth;
  content.classList.add('slide-content--in');
}

function updateSlide() {
  slidesWrapper.style.transform = `translateX(${-currentSlide * 100}%)`;
  slideEls.forEach((s, i)      => s.classList.toggle('active', i === currentSlide));
  indicatorEls.forEach((ind, i) => ind.classList.toggle('active', i === currentSlide));
  animateContent(currentSlide);
}

function startProgressBar() {
  if (!autoplayBar) return;
  autoplayBar.style.transition = 'none';
  autoplayBar.style.width = '0%';
  autoplayBar.getBoundingClientRect();
  autoplayBar.style.transition = 'width 5000ms linear';
  autoplayBar.style.width = '100%';
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  startProgressBar();
  autoplayTimer = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
    startProgressBar();
  }, 5000);
}

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0)       currentSlide = totalSlides - 1;
  else                      currentSlide = index;
  updateSlide();
  resetAutoplay();
}

function initCarousel() {
  slideEls     = Array.from(document.querySelectorAll('.slide'));
  indicatorEls = Array.from(document.querySelectorAll('.indicator'));
  totalSlides  = slideEls.length;

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  indicatorEls.forEach((ind, i) => ind.addEventListener('click', () => showSlide(i)));

  let touchStartX = 0;
  let touchStartY = 0;
  let isDragging  = false;

  slidesWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
    isDragging  = false;
  }, { passive: true });

  slidesWrapper.addEventListener('touchmove', (e) => {
    const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    if (dx > dy && dx > 10) isDragging = true;
  }, { passive: true });

  slidesWrapper.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) showSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
  }, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  showSlide(currentSlide - 1);
    if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
  });

  const heroSection = document.querySelector('.hero');
  heroSection.addEventListener('mouseenter', () => {
    clearInterval(autoplayTimer);
    if (autoplayBar) {
      const frozen = getComputedStyle(autoplayBar).width;
      autoplayBar.style.transition = 'none';
      autoplayBar.style.width = frozen;
    }
  });
  heroSection.addEventListener('mouseleave', () => resetAutoplay());

  showSlide(0);
}

initCarousel();
initReveal();
initSkillBars();
initCounters();
initParallax();
initNavActive();
initTyping(document.querySelector('.typing-target'), config.typingTexts);
