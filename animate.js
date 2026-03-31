export function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

export function initSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + '%';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll('.skill-bar-fill').forEach((bar) => observer.observe(bar));
}

export function initCounters() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  let triggered = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          document.querySelectorAll('.stat-number').forEach((counter) => {
            const target = parseInt(counter.dataset.target, 10);
            const duration = 1600;
            const steps = Math.ceil(duration / 16);
            const increment = target / steps;
            let current = 0;
            const tick = () => {
              current = Math.min(current + increment, target);
              counter.textContent = Math.round(current);
              if (current < target) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(statsSection);
}

export function initTyping(el, texts) {
  if (!el || !texts.length) return;
  el.classList.add('typing-cursor');

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const SPEED = 75;
  const DELETE_SPEED = 38;
  const PAUSE = 2400;

  function tick() {
    const current = texts[textIndex];
    if (isDeleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(tick, PAUSE);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(tick, isDeleting ? DELETE_SPEED : SPEED);
  }

  tick();
}

export function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.scrollY;
      if (scrolled > window.innerHeight) return;
      hero.querySelectorAll('.slide').forEach((slide) => {
        slide.style.backgroundPositionY = `calc(50% + ${scrolled * 0.22}px)`;
      });
    },
    { passive: true }
  );
}

export function initNavActive() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}
