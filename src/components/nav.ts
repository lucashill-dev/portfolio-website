export interface NavLink {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}

const navLinks: NavLink[] = [
  { href: 'https://github.com/lucashill-dev', icon: 'fa-brands fa-github', label: 'Github', external: true },
  { href: 'https://www.linkedin.com/in/lucashill-dev', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', external: true },
  { href: 'mailto:contact.lucashill@gmail.com', icon: 'fa-solid fa-envelope', label: 'Email' },
  { href: '/resume', icon: 'fa-solid fa-file-lines', label: 'Resume' },
];

function renderLink(link: NavLink): string {
  const attrs = link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `
    <a href="${link.href}"${attrs}>
      <i class="${link.icon}" aria-hidden="true"></i>
      <span>${link.label}</span>
    </a>`;
}

export function renderNav(): string {
  return `
    <header>
      <nav>
        <div class="left">
          <a href="/">Lucas Hill</a>
        </div>
        <div class="right">
          ${navLinks.map(renderLink).join('')}
        </div>
      </nav>
    </header>`;
}
