interface HeroLink {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}

const heroLinks: HeroLink[] = [
  { href: '#projects', icon: 'fa-solid fa-rocket', label: 'Projects' },
  { href: '#experience', icon: 'fa-solid fa-briefcase', label: 'Experience' },
  { href: '#skills', icon: 'fa-solid fa-code', label: 'Skills' },
  { href: '#contact', icon: 'fa-solid fa-envelope', label: 'Contact' },
];

function renderHeroLink(link: HeroLink): string {
  const attrs = link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `
    <a href="${link.href}"${attrs} aria-label="View ${link.label}" class="cta-button">
      <i class="${link.icon}" aria-hidden="true"></i>
      <span>${link.label}</span>
    </a>`;
}

export function renderHero(): string {
  return `
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>

      <div class="text">
        <h1 class="hero-title">
          <span class="greeting">Hey, I'm Lucas</span>
          <span class="wave">👋</span>
        </h1>
        <p class="hero-description">I'm a Software Engineering student at UM-Flint with a 3.96 GPA, specializing in system design, software architecture, and Agile development. I have strong foundations in Java and C# with experience in full SDLC documentation and collaborative problem-solving.</p>

        <div class="links">
          ${heroLinks.map(renderHeroLink).join('')}
        </div>
      </div>

      <div class="headshot">
        <div class="headshot-container">
          <img src="/images/hero-headshot.webp" alt="Lucas Hill Headshot" loading="eager">
          <div class="headshot-glow"></div>
        </div>
      </div>
    </section>`;
}
