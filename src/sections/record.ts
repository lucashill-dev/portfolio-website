import { record, type RecordEntry } from '../data/record';
import { esc } from '../lib/html';

function renderRow(entry: RecordEntry): string {
  const bullets = entry.bullets
    ? `<ul>${entry.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`
    : '';

  return `
    <details class="record-row"${entry.open ? ' open' : ''}>
      <summary>
        <span class="record-date">${esc(entry.date)}</span>
        <span class="record-title">${esc(entry.title)} <span>&middot; ${esc(entry.subtitle)}</span></span>
        <span class="record-marker" aria-hidden="true"></span>
      </summary>
      <div class="record-detail">
        ${entry.detail.map((p) => `<p>${esc(p)}</p>`).join('')}
        ${bullets}
      </div>
    </details>`;
}

export function renderRecord(): string {
  return `
    <section id="record" class="section">
      <h2 class="label">Record</h2>
      <p class="section-note">Open a row for the detail.</p>
      <div class="record">
        ${record.map(renderRow).join('')}
      </div>
    </section>`;
}
