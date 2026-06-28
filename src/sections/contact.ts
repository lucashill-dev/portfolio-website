export function renderContact(): string {
  return `
    <section id="contact" class="contact-section">
      <h2>Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-text">
          <h3>Let's work together!</h3>
          <p>I'm always interested in new opportunities and exciting projects. Whether you're hiring, have a question about my work, or just want to say hello, I'd love to hear from you!</p>
        </div>

        <div class="contact-actions">
          <a href="mailto:contact.lucashill@gmail.com" class="email-cta">
            <i class="fa-solid fa-envelope"></i>
            <span>contact.lucashill@gmail.com</span>
          </a>
          <p class="contact-note">Click to send me an email directly &middot; I typically respond within 24 hours</p>

          <div class="contact-info-grid">
            <div class="contact-info-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>Flint, Michigan</span>
            </div>
            <div class="contact-info-item contact-info-item--status">
              <span class="status-dot" aria-hidden="true"></span>
              <span>Open to internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
