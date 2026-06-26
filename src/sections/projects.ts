import { projects } from '../data/projects';

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
            </div>
          </article>`
          )
          .join('')}
      </div>
    </section>`;
}
