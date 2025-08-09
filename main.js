document.addEventListener('DOMContentLoaded', function() {
    const progressIndicator = document.getElementById('progress-indicator');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (progressIndicator) {
            progressIndicator.style.width = scrollPercent + '%';
        }

        if (backToTop) {
            if (scrollTop > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Experience tabs
    const tabButtons = document.querySelectorAll('.tab-button[role="tab"]');
    const timelines = document.querySelectorAll('.timeline[role="tabpanel"]');

    function setActiveTab(targetId) {
        const targetTimeline = document.getElementById(targetId + '-timeline');
        const targetButton = document.querySelector(`[data-tab="${targetId}"]`);

        tabButtons.forEach(btn => {
            const isActive = btn === targetButton;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            btn.setAttribute('tabindex', isActive ? '0' : '-1');
        });

        timelines.forEach(panel => {
            const isTarget = panel === targetTimeline;
            panel.classList.toggle('active', isTarget);
            if (isTarget) {
                panel.hidden = false;
                panel.offsetHeight;
            } else {
                panel.hidden = true;
            }
        });
    }

    const activeOnLoad = document.querySelector('.timeline.active')?.id?.replace('-timeline', '') || 'education';
    setActiveTab(activeOnLoad);

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            setActiveTab(targetId);
        });

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

    // Smooth scrolling
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

    // Scroll animations
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



    // Project cards hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translate3d(0, -8px, 0) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate3d(0, 0, 0) scale(1)';
        });
    });

    // Floating shapes parallax
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
        experienceSection.classList.add('animate-in');
        experienceSection.classList.remove('animate-out');
    }

    // Image loading
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


