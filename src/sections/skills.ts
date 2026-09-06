import { skills } from '../data/skills';
import { esc } from '../lib/html';

export function renderSkills(): string {
  return `
    <section id="skills" class="section">
      <h2 class="label">Skills</h2>
      <dl class="skills">
        ${skills
          .map(
            (row) => `
          <dt>${esc(row.label)}</dt>
          <dd${row.primary ? ' class="primary"' : ''}>${esc(row.value)}</dd>`
          )
          .join('')}
      </dl>
    </section>`;
}
