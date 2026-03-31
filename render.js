import {
  slides, stats, expertises, projects, skills, certifications, contacts,
} from './data.js';

const d = (i) => `reveal reveal-d${Math.min(i + 1, 5)}`;

export function renderSlides() {
  const wrapper = document.getElementById('slides-wrapper');
  const indicatorsEl = document.querySelector('.slide-indicators');
  if (!wrapper || !indicatorsEl) return;

  slides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = `slide${i === 0 ? ' active' : ''}`;
    div.style.backgroundImage = `url('${slide.bg}')`;
    div.innerHTML = `
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <p class="slide-label">${slide.label}</p>
        <h1 class="slide-title">${slide.title}</h1>
        <a href="${slide.cta.href}" class="slide-cta">${slide.cta.text}</a>
      </div>`;
    wrapper.appendChild(div);

    const ind = document.createElement('span');
    ind.className = `indicator${i === 0 ? ' active' : ''}`;
    ind.dataset.slide = String(i);
    indicatorsEl.appendChild(ind);
  });
}

export function renderStats() {
  const row = document.getElementById('stats-row');
  if (!row) return;

  stats.forEach((stat) => {
    const el = document.createElement('div');
    el.className = 'stat-item';
    el.innerHTML = `
      <div class="stat-value">
        <span class="stat-number" data-target="${stat.value}">0</span><span class="stat-suffix">${stat.suffix}</span>
      </div>
      <span class="stat-label">${stat.label}</span>`;
    row.appendChild(el);
  });
}

export function renderExpertises() {
  const grid = document.getElementById('expertise-grid');
  if (!grid) return;

  expertises.forEach((item, i) => {
    const iconHtml = item.icon
      ? `<img src="${item.icon}" alt="" loading="lazy">`
      : `<span class="expertise-icon--text">${item.emoji}</span>`;
    const card = document.createElement('div');
    card.className = `expertise-card ${d(i % 5)}`;
    card.innerHTML = `
      <div class="expertise-icon">${iconHtml}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>`;
    grid.appendChild(card);
  });
}

export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  projects.forEach((p, i) => {
    const tags = p.tags.map((t) => `<span class="project-tag">${t}</span>`).join('');
    const outcomes = p.outcomes.map((o) => `<li>${o}</li>`).join('');
    const card = document.createElement('div');
    card.className = `project-card ${d(i)}`;
    card.innerHTML = `
      <div class="project-header">
        <span class="project-year">${p.year}</span>
        <div class="project-tags">${tags}</div>
      </div>
      <p class="project-role">${p.role}</p>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-client">${p.client}</p>
      <p class="project-desc">${p.desc}</p>
      <div class="project-outcomes"><ul>${outcomes}</ul></div>`;
    grid.appendChild(card);
  });
}

export function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'skills-grid';

  const buildCol = (title, items, delayClass) => {
    const col = document.createElement('div');
    col.className = `skills-col ${delayClass}`;
    col.innerHTML = `<p class="skills-col-title">${title}</p>`;
    items.forEach((s) => {
      const item = document.createElement('div');
      item.className = 'skill-item';
      item.innerHTML = `
        <div class="skill-meta">
          <span class="skill-name">${s.label}</span>
          <span class="skill-pct">${s.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-level="${s.level}"></div>
        </div>`;
      col.appendChild(item);
    });
    return col;
  };

  grid.appendChild(buildCol('Domaines techniques', skills.technical, 'reveal reveal-d1'));
  grid.appendChild(buildCol('Outils & logiciels',  skills.tools,     'reveal reveal-d2'));
  container.appendChild(grid);
}

export function renderCertifications() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  certifications.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = `cert-card ${d(i)}`;
    card.innerHTML = `
      <span class="cert-icon">${cert.icon}</span>
      <span class="cert-type">${cert.type}</span>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-org">${cert.org}</p>
      ${cert.badge ? `<span class="cert-badge">${cert.badge}</span>` : ''}
      <span class="cert-year">${cert.year}</span>`;
    grid.appendChild(card);
  });
}

export function renderContacts() {
  const grid = document.getElementById('contact-grid');
  if (!grid) return;

  contacts.forEach((c, i) => {
    const a = document.createElement('a');
    a.className = `contact-card ${d(i)}`;
    a.href = c.href;
    if (c.external) { a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML = `
      <img src="${c.icon}" alt="${c.label}" loading="lazy">
      <div>
        <span class="contact-card-label">${c.label}</span>
        <span class="contact-card-value">${c.value}</span>
      </div>`;
    grid.appendChild(a);
  });

  const cta = document.createElement('a');
  cta.className = 'contact-card contact-card--cta reveal reveal-d5';
  cta.href = 'tel:+261382298810';
  cta.innerHTML = `
    <span class="contact-cta-icon">＋</span>
    <div>
      <span class="contact-card-label">Enregistrer</span>
      <span class="contact-card-value">Ajouter aux contacts</span>
    </div>`;
  cta.addEventListener('click', (e) => {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      e.preventDefault();
      alert('Utilisez un mobile pour enregistrer ce contact.');
    }
  });
  grid.appendChild(cta);
}
