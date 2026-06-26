import { projects, type Project } from '../data/projects';

function renderProjectLink(project: Project): string {
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
      ${renderProjectLink(project)}
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
    </section>`;
}
