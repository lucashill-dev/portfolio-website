import { projects, type Project } from '../data/projects';

function renderProjectLinks(project: Project): string {
  if (project.link && project.report) {
    return `
      <div class="project-links">
        <span class="project-link">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
          <span>View Code</span>
        </span>
        <span class="project-link project-link--report" data-report-url="${project.report}">
          <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
          <span>Final Report</span>
        </span>
      </div>`;
  }
  if (project.link) {
    return `
      <span class="project-link">
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        <span>View Code</span>
      </span>`;
  }
  if (project.private) {
    return `
      <span class="project-link project-link--private">
        <i class="fa-solid fa-lock" aria-hidden="true"></i>
        <span>Private (NDA)</span>
      </span>`;
  }
  return '';
}

function renderProjectCard(project: Project): string {
  const content = `
    <div class="project-content">
      <div class="project-icon">
        <i class="${project.icon}"></i>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">
        ${project.tech.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
      </div>
      ${renderProjectLinks(project)}
    </div>`;

  if (project.link) {
    return `
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card glow-card" aria-label="View code for ${project.title}">
        ${content}
      </a>`;
  }

  return `<article class="project-card glow-card">${content}</article>`;
}

export function renderProjects(): string {
  return `
    <section id="projects" class="projects-section">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        ${projects.map(renderProjectCard).join('')}
      </div>
      <p class="projects-scroll-hint">
        <i class="fa-solid fa-arrows-left-right" aria-hidden="true"></i>
        <span>Scroll for more</span>
      </p>
    </section>`;
}

export function initProjectsScrollHint(): void {
  const grid = document.querySelector<HTMLElement>('.projects-grid');
  const hint = document.querySelector<HTMLElement>('.projects-scroll-hint');
  if (!grid || !hint) return;

  const updateHint = () => {
    hint.classList.toggle('visible', grid.scrollWidth > grid.clientWidth + 1);
  };

  updateHint();
  window.addEventListener('resize', updateHint);
}

export function initProjectReportLinks(): void {
  const reportLinks = document.querySelectorAll<HTMLElement>('.project-link--report');
  reportLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const url = link.dataset.reportUrl;
      if (url) window.open(url, '_blank', 'noopener');
    });
  });
}
