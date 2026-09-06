import './style.css';
import { inject } from '@vercel/analytics';
import { renderSidebar } from './sections/sidebar';
import { renderProjects } from './sections/projects';
import { renderRecord } from './sections/record';
import { renderSkills } from './sections/skills';

const app = document.getElementById('app');
if (!app) throw new Error('#app mount point not found');

app.innerHTML = `
  <a class="skip-link" href="#projects">Skip to projects</a>
  <div class="layout">
    ${renderSidebar()}
    <main class="main" id="main">
      ${renderProjects()}
      ${renderRecord()}
      ${renderSkills()}
    </main>
  </div>`;

inject();
