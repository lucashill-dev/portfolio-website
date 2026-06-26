export function renderBackToTop(): string {
  return `
    <button class="back-to-top" id="back-to-top" aria-label="Back to top">
      <i class="fa-solid fa-arrow-up"></i>
    </button>`;
}

export function initBackToTop(): void {
  const backToTop = document.getElementById('back-to-top');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.pageYOffset > 300);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
