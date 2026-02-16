/**
 * Almacenes Ruesmu - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initHeaderScroll();
    initSmoothScroll();
    initContactForm();
    initScrollTop();
});

/**
 * Mobile navigation toggle
 */
function initNavToggle() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (!navToggle || !nav) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Scroll to top button
 */
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Contact form handling (Formspree)
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const formMessage = document.getElementById('formMessage');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (form.action.includes('YOUR_FORM_ID')) {
            showFormMessage(formMessage, 'Configura Formspree: crea un formulario en formspree.io y reemplaza YOUR_FORM_ID en el action del form.', 'error');
            return;
        }

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        showFormMessage(formMessage, '', '');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showFormMessage(formMessage, '¡Mensaje enviado! Te contactaremos lo antes posible.', 'success');
                form.reset();
            } else {
                const data = await response.json();
                showFormMessage(formMessage, data.error || 'Error al enviar. Inténtalo de nuevo.', 'error');
            }
        } catch (err) {
            showFormMessage(formMessage, 'Error de conexión. Inténtalo más tarde.', 'error');
        }

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

function showFormMessage(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.className = 'form-message form-message--' + type;
}
