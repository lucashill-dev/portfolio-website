import { projects, type Project } from '../data/projects';

function renderProjectLink(project: Project): string {
  if (project.link) {
    return `
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        <span>View Code</span>
      </a>`;
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

export function renderProjects(): string {
  return `
    <section id="projects" class="projects-section">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        ${projects
          .map(
            (project) => `
          <article class="project-card">
            <div class="project-image">
              <div class="project-placeholder">
                <i class="${project.icon}"></i>
              </div>
            </div>
            <div class="project-content">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tech">
                ${project.tech.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
              </div>
              ${renderProjectLink(project)}
            </div>
          </article>`
          )
          .join('')}
      </div>
    </section>`;
}
