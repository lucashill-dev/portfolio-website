export function initScrollAnimations(): void {
  const observerOptions: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        entry.target.classList.remove('animate-out');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('main section:not(.hero-section)');
  sections.forEach((section, index) => {
    if (index === 0) {
      section.classList.add('animate-in');
      return;
    }
    section.classList.add('animate-out');
    observer.observe(section);
  });
}

export function initImageFadeIn(): void {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });

    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease';
    }
  });
}

export function initSmoothScrollLinks(): void {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const targetSection = document.querySelector(href);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
