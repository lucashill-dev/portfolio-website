import './style.css';
import { inject } from '@vercel/analytics';

const PDF = '/resume/Lucas-Hill-Resume.pdf';

const app = document.getElementById('app');
if (!app) throw new Error('#app mount point not found');

app.innerHTML = `
  <div class="resume">
    <p class="elsewhere"><a href="/">&larr; Lucas Hill</a></p>

    <h1>Resume</h1>

    <div class="resume-actions">
      <a class="action" href="${PDF}" download>Download PDF</a>
      <a class="action" href="${PDF}" target="_blank" rel="noopener noreferrer">Open in a new tab</a>
    </div>

    <p class="resume-note">One page. Last updated September 2026.</p>

    <div class="resume-viewer">
      <embed src="${PDF}#toolbar=0&navpanes=0&scrollbar=0&view=Fit" type="application/pdf">
    </div>
  </div>`;

inject();
