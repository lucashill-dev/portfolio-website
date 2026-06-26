function spawnSparkles(container: HTMLElement): void {
  const count = 6;
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✦';

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
    const startRadius = 55 + Math.random() * 20;
    const endRadius = startRadius + 50 + Math.random() * 30;
    const startX = Math.cos(angle) * startRadius;
    const startY = Math.sin(angle) * startRadius;
    const dx = Math.cos(angle) * endRadius - startX;
    const dy = Math.sin(angle) * endRadius - startY;

    sparkle.style.left = `calc(50% + ${startX}px)`;
    sparkle.style.top = `calc(50% + ${startY}px)`;
    sparkle.style.setProperty('--dx', `${dx}px`);
    sparkle.style.setProperty('--dy', `${dy}px`);
    sparkle.style.animationDelay = `${Math.random() * 0.15}s`;

    container.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove());
  }
}

export function initHeadshotEasterEgg(): void {
  const container = document.querySelector<HTMLElement>('.headshot-container');
  const img = container?.querySelector<HTMLImageElement>('img');
  if (!container || !img) return;

  img.style.cursor = 'pointer';

  img.addEventListener('click', () => {
    img.classList.remove('shake');
    void img.offsetWidth;
    img.classList.add('shake');
    spawnSparkles(container);
  });
}
