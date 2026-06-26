import { education, work, type TimelineItem } from '../data/timeline';

function renderTimelineItem(item: TimelineItem): string {
  return `
    <div class="timeline-item">
      <div class="timeline-marker">
        <div class="timeline-logo">
          <i class="${item.icon}"></i>
        </div>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-date">${item.date}</span>
          <h3>${item.title}</h3>
          <p class="timeline-role">${item.role}</p>
        </div>
        <div class="timeline-description">
          <ul>
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`;
}

function renderTimeline(id: string, items: TimelineItem[], active: boolean): string {
  return `
    <div class="timeline${active ? ' active' : ''}" id="${id}-timeline" role="tabpanel" aria-labelledby="tab-${id}" tabindex="0" ${active ? '' : 'hidden'}>
      ${items.map(renderTimelineItem).join('')}
    </div>`;
}

export function renderExperience(): string {
  return `
    <section id="experience" class="experience-section">
      <div class="experience-tabs" role="tablist" aria-label="Experience tabs">
        <button id="tab-education" class="tab-button active" role="tab" aria-selected="true" aria-controls="education-timeline" data-tab="education">
          <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
          <span>Education</span>
        </button>
        <button id="tab-work" class="tab-button" role="tab" aria-selected="false" aria-controls="work-timeline" data-tab="work">
          <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
          <span>Experience</span>
        </button>
      </div>

      <div class="experience-content">
        ${renderTimeline('education', education, true)}
        ${renderTimeline('work', work, false)}
      </div>
    </section>`;
}

export function initExperienceTabs(): void {
  const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-button[role="tab"]');
  const timelines = document.querySelectorAll<HTMLElement>('.timeline[role="tabpanel"]');

  function setActiveTab(targetId: string): void {
    const targetTimeline = document.getElementById(`${targetId}-timeline`);
    const targetButton = document.querySelector(`[data-tab="${targetId}"]`);

    tabButtons.forEach((btn) => {
      const isActive = btn === targetButton;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    timelines.forEach((panel) => {
      const isTarget = panel === targetTimeline;
      panel.classList.toggle('active', isTarget);
      panel.hidden = !isTarget;
    });
  }

  setActiveTab('education');

  tabButtons.forEach((button, idx) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab!));

    button.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const buttons = Array.from(tabButtons);
      const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % buttons.length : (idx - 1 + buttons.length) % buttons.length;
      buttons[nextIdx].focus();
      setActiveTab(buttons[nextIdx].dataset.tab!);
    });
  });
}
