export function initCardGlow(): void {
  const cards = document.querySelectorAll<HTMLElement>('.glow-card');

  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--glow-x', `${x}%`);
      card.style.setProperty('--glow-y', `${y}%`);
    });
  });
}
