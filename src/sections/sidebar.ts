const EMAIL = 'contact.lucashill@gmail.com';

const elsewhere = [
  { label: 'GitHub', href: 'https://github.com/lucashill-dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucashill-dev' },
  { label: 'Resume (PDF)', href: '/resume' },
];

export function renderSidebar(): string {
  return `
    <aside class="sidebar">
      <div class="sidebar-head">
        <div class="portrait figure">
          <img src="/images/hero-headshot.webp" alt="Lucas Hill" width="184" height="184" fetchpriority="high">
        </div>
        <div class="identity">
          <h1>Lucas Hill</h1>
        </div>
      </div>

      <p class="lede">CS and software engineering student at UM-Flint. I build and maintain software other people depend on, and I'm looking for a Summer 2027 internship where I can do that on a team.</p>

      <p class="seeking">
        Seeking a Summer 2027 internship
        <span>Earlier starts welcome.</span>
      </p>

      <hr class="rule">

      <div class="contact">
        <p class="label">Contact</p>
        <p>Email is best: <a href="mailto:${EMAIL}">${EMAIL}</a>. I am in Flint, Michigan, and will relocate for the right internship.</p>
        <p class="elsewhere">
          ${elsewhere
            .map((link) => {
              const external = link.href.startsWith('http')
                ? ' target="_blank" rel="noopener noreferrer"'
                : '';
              return `<a href="${link.href}"${external}>${link.label}</a>`;
            })
            .join('')}
        </p>
      </div>

      <p class="colophon">Set in IBM Plex. Updated September 2026.</p>
    </aside>`;
}
