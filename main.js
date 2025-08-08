// Enhanced Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Progress Indicator
    const progressIndicator = document.getElementById('progress-indicator');
    const backToTop = document.getElementById('back-to-top');

    // Update progress indicator on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (progressIndicator) {
            progressIndicator.style.width = scrollPercent + '%';
        }

        // Show/hide back to top button
        if (backToTop) {
            if (scrollTop > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    // Back to top functionality
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Experience section tab functionality
    const tabButtons = document.querySelectorAll('.tab-button[role="tab"]');
    const timelines = document.querySelectorAll('.timeline[role="tabpanel"]');

    function setActiveTab(targetId) {
        const targetTimeline = document.getElementById(targetId + '-timeline');
        const targetButton = document.querySelector(`[data-tab="${targetId}"]`);

        // Update buttons ARIA state
        tabButtons.forEach(btn => {
            const isActive = btn === targetButton;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            btn.setAttribute('tabindex', isActive ? '0' : '-1');
        });

        // Toggle panels
        timelines.forEach(panel => {
            const isTarget = panel === targetTimeline;
            panel.classList.toggle('active', isTarget);
            if (isTarget) {
                panel.hidden = false;
                // Trigger reflow for transition
                panel.offsetHeight;
            } else {
                panel.hidden = true;
            }
        });
    }

    // Initialize to currently marked active or default to education
    const activeOnLoad = document.querySelector('.timeline.active')?.id?.replace('-timeline', '') || 'education';
    setActiveTab(activeOnLoad);

    // Wire up events
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            setActiveTab(targetId);
        });

        // Keyboard support: Left/Right arrows to switch tabs
        button.addEventListener('keydown', function(e) {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
            e.preventDefault();
            const buttons = Array.from(tabButtons);
            const idx = buttons.indexOf(this);
            const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % buttons.length : (idx - 1 + buttons.length) % buttons.length;
            buttons[nextIdx].focus();
            const nextId = buttons[nextIdx].getAttribute('data-tab');
            setActiveTab(nextId);
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Enhanced scroll animations
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.classList.remove('animate-out');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sectionsToAnimate = document.querySelectorAll('section:not(.hero-section)');
    sectionsToAnimate.forEach(section => {
        section.classList.add('animate-out');
        observer.observe(section);
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission (replace with actual form handling)
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Sending...</span>';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translate3d(0, -8px, 0) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate3d(0, 0, 0) scale(1)';
        });
    });

    // Parallax effect for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Ensure Experience is visible on load
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
        experienceSection.classList.add('animate-in');
        experienceSection.classList.remove('animate-out');
    }

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});


