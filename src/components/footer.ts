export function renderFooter(): string {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <p>&copy; ${year} Lucas Hill. All rights reserved.</p>
      <div class="footer-links">
        <a href="https://github.com/lucashill-dev" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/lucashill-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="mailto:contact.lucashill@gmail.com" aria-label="Email">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
      <p class="footer-note">Built with Vite + TypeScript</p>
    </footer>`;
}
