import './style.css';
import { renderNav } from './components/nav';
import { renderProgressBar, initProgressBar } from './components/progressBar';
import { renderBackToTop, initBackToTop } from './components/backToTop';
import { initScrollAnimations, initImageFadeIn, initSmoothScrollLinks } from './components/scrollAnimations';
import { initCardGlow } from './components/cardGlow';
import { renderHero } from './sections/hero';
import { renderProjects } from './sections/projects';
import { renderExperience, initExperienceTabs } from './sections/experience';
import { renderSkills } from './sections/skills';
import { renderContact } from './sections/contact';

const app = document.getElementById('app');
if (!app) throw new Error('#app mount point not found');

app.innerHTML = `
  ${renderProgressBar()}
  ${renderBackToTop()}
  ${renderNav()}
  <main>
    ${renderHero()}
    ${renderProjects()}
    ${renderExperience()}
    ${renderSkills()}
    ${renderContact()}
  </main>`;

initProgressBar();
initBackToTop();
initExperienceTabs();
initSmoothScrollLinks();
initScrollAnimations();
initImageFadeIn();
initCardGlow();
