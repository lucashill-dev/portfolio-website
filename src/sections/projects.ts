import { projects, type Artifact, type Project } from '../data/projects';
import { esc } from '../lib/html';

function renderArtifact(artifact: Artifact, eager: boolean): string {
  if (artifact.kind === 'transcript') {
    return `<div class="figure transcript"><pre>${artifact.lines.map(esc).join('\n')}</pre></div>`;
  }

  if (artifact.kind === 'shot') {
    // The button is what makes a figure openable at full size. Screenshots
    // render at about 300px, which reads but is too small to study, so the
    // artifact is only half available without this.
    return artifact.images
      .map(
        (image) => `
        <button type="button" class="shot-zoom">
          <img class="shot" src="${image.src}" alt="${esc(image.alt)}"
               width="${image.width}" height="${image.height}"
               loading="${eager ? 'eager' : 'lazy'}" decoding="async">
          <span class="vh"> — open at full size</span>
        </button>`
      )
      .join('');
  }

  return `
    <div class="figure documents">
      ${artifact.docs
        .map(
          (doc) => `
        <div class="document">
          <span class="document-code">${esc(doc.code)}</span>
          <span class="document-name">${esc(doc.name)}</span>
          <span class="document-pages">${esc(doc.pages)} pp</span>
        </div>`
        )
        .join('')}
    </div>`;
}

function renderProject(project: Project, index: number, figureStart: number): string {
  const flip = index % 2 === 1;

  const links = project.links
    ? `<p class="facts-links">${project.links
        .map(
          (link) =>
            `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
        )
        .join(' · ')}</p>`
    : '';

  const figures = project.artifacts
    .map((artifact, i) => {
      // A landscape screenshot spans the whole figure column; squeezed into
      // a half column its text would be too small to read.
      const landscape =
        artifact.kind === 'shot' && artifact.images[0].width > artifact.images[0].height;

      return `
      <figure class="artifact${landscape ? ' artifact--span' : ''}">
        ${renderArtifact(artifact, index === 0 && i === 0)}
        <figcaption class="figure-caption"><b>Fig. ${figureStart + i}</b> &middot; ${esc(artifact.caption)}</figcaption>
      </figure>`;
    })
    .join('');

  return `
    <article class="project${flip ? ' project--flip' : ''}">
      <p class="project-numeral" aria-hidden="true">${index + 1}</p>
      <div class="project-content">
        <h3>${esc(project.headline)}</h3>
        <p class="project-dek">${esc(project.dek)}</p>

        <div class="project-body">
          <div class="project-figure">
            <div class="figures${project.artifacts.length > 1 ? ' figures--grid' : ''}">${figures}</div>
          </div>

          <div class="project-aside">
            <dl class="facts">
              ${project.facts
                .map((fact) => `<dt>${esc(fact.key)}</dt><dd>${esc(fact.value)}</dd>`)
                .join('')}
            </dl>
            ${links}
            <p>${esc(project.note)}</p>
          </div>
        </div>
      </div>
    </article>`;
}

export function renderProjects(): string {
  let figure = 1;
  const spreads = projects
    .map((project, index) => {
      const html = renderProject(project, index, figure);
      figure += project.artifacts.length;
      return html;
    })
    .join('');

  return `
    <section id="projects" class="section">
      <h2 class="label">Projects</h2>
      <p class="section-note">Newest first. The first one is still running.</p>
      <div class="projects">${spreads}</div>
    </section>`;
}
