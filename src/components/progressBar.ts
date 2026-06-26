export function renderProgressBar(): string {
  return `<div class="progress-indicator" id="progress-indicator"></div>`;
}

export function initProgressBar(): void {
  const progressIndicator = document.getElementById('progress-indicator');
  if (!progressIndicator) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressIndicator.style.width = `${scrollPercent}%`;
  });
}
