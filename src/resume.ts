import './style.css';
import { inject } from '@vercel/analytics';
import { renderNav } from './components/nav';
import { renderBackToTop, initBackToTop } from './components/backToTop';
import { initImageFadeIn } from './components/scrollAnimations';

const app = document.getElementById('app');
if (!app) throw new Error('#app mount point not found');

app.innerHTML = `
  ${renderBackToTop()}
  ${renderNav()}
  <main>
    <section class="resume-section">
      <a href="/" class="back-link">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        <span>Back to Portfolio</span>
      </a>

      <h2>Resume</h2>

      <div class="resume-actions">
        <a href="/resume/Lucas-Hill-Resume.pdf" download class="cta-button">
          <i class="fa-solid fa-download" aria-hidden="true"></i>
          <span>Download PDF</span>
        </a>
        <a href="/resume/Lucas-Hill-Resume.pdf" target="_blank" rel="noopener noreferrer" class="cta-button">
          <i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
          <span>Open in New Tab</span>
        </a>
      </div>

      <div class="resume-viewer">
        <embed src="/resume/Lucas-Hill-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit" type="application/pdf">
      </div>
    </section>
  </main>`;

initBackToTop();
initImageFadeIn();
inject();
