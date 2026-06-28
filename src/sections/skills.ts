import { skillCategories } from '../data/skills';

export function renderSkills(): string {
  return `
    <section id="skills" class="skills-section">
      <h2>Skills</h2>
      <div class="text">
        <p>I specialize in object-oriented programming and software engineering, with strong foundations in Java and C#. My experience spans from system design and architecture to full SDLC documentation, collaborative problem-solving, and building modular software systems.</p>
      </div>

      <div class="skills-categories">
        ${skillCategories
          .map(
            (category) => `
          <div class="skill-category">
            <h3 class="category-title">
              <i class="${category.icon}"></i>
              ${category.title}
            </h3>
            <div class="cells">
              ${category.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>`
          )
          .join('')}
      </div>
    </section>`;
}
