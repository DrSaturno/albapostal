/* ===========================
   ALBA POSTAL — MAIN JS
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Navbar: scroll effect + active links --- */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const path = window.location.pathname;
    const isTransparentPage = true;

    function updateNavbar() {
      const scrolled = window.scrollY > 10;
      if (isTransparentPage && !scrolled) {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
        // White logo on transparent
        const logo = document.getElementById('navbar-logo-img');
        if (logo) logo.src = '/logo2.png';
      } else {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
        const logo = document.getElementById('navbar-logo-img');
        if (logo) logo.src = '/logo.png';
      }
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // Active link highlighting
    const links = navbar.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && path.endsWith(href.replace(/^\//, '').replace(/\/$/, ''))) {
        link.classList.add('active');
      }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon  = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.toggle('open');
        menuIcon.style.display  = isOpen ? 'none'  : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      });
    }
  }

  initNavbar();

  /* --- Hero Slider --- */
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    let current = 0;
    let interval;

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
    }

    function next() { goTo((current + 1) % slides.length); }

    interval = setInterval(next, 6000);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', function () {
        clearInterval(interval);
        goTo(i);
        interval = setInterval(next, 6000);
      });
    });
  }

  initHeroSlider();

  /* --- FAQ Accordion --- */
  function initFAQ() {
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

        // Toggle clicked
        if (!isOpen) item.classList.add('open');
      });
    });

    // Open first by default
    const firstItem = document.querySelector('.faq-item');
    if (firstItem) firstItem.classList.add('open');
  }

  initFAQ();

  /* --- Service cards scroll reveal --- */
  function initScrollReveal() {
    const cards = document.querySelectorAll('.service-card, .pillar-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }

  initScrollReveal();

  /* --- Counter animation --- */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const el       = entry.target;
        const target   = parseInt(el.dataset.count, 10);
        const prefix   = el.dataset.prefix || '';
        const suffix   = el.dataset.suffix || '';
        const duration = 1800;
        const start    = performance.now();

        function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

        function tick(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const value    = Math.floor(easeOutQuart(progress) * target);
          const formatted = value.toLocaleString('es-AR');
          el.textContent = prefix + formatted + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
  }

  initCounters();

  /* --- CTA Form (home) --- */
  function initCTAForm() {
    const form    = document.getElementById('cta-form');
    const success = document.getElementById('cta-success');
    const resetBtn = document.getElementById('cta-reset');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit-btn');
      if (btn) { btn.textContent = 'Enviando...'; btn.disabled = true; }
      try {
        const data = new FormData(form);
        data.append('_subject', 'Consulta desde la home – Alba Postal');
        await fetch('https://formsubmit.co/ajax/info@albapostal.com.ar', {
          method: 'POST', headers: { 'Accept': 'application/json' }, body: data
        });
        form.style.display = 'none';
        if (success) success.classList.add('show');
      } catch {
        if (btn) { btn.textContent = 'Enviar Consulta'; btn.disabled = false; }
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.style.display = '';
        if (success) success.classList.remove('show');
        form.reset();
        const btn = form.querySelector('.form-submit-btn');
        if (btn) { btn.textContent = 'Enviar Consulta'; btn.disabled = false; }
      });
    }
  }

  initCTAForm();

  /* --- Tracking form --- */
  function initTracking() {
    const form = document.getElementById('tracking-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const code = document.getElementById('tracking-code')?.value;
      if (code) alert('Buscando número de seguimiento: ' + code);
    });
  }

  initTracking();

  /* --- Generic contact/service forms --- */
  document.querySelectorAll('form.service-form').forEach(form => {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn?.textContent;
      if (btn) { btn.textContent = 'Enviando...'; btn.disabled = true; }
      try {
        const data = new FormData(form);
        data.append('_subject', 'Consulta desde albapostal.com.ar');
        await fetch('https://formsubmit.co/ajax/info@albapostal.com.ar', {
          method: 'POST', headers: { 'Accept': 'application/json' }, body: data
        });
        if (btn) { btn.textContent = '✓ Mensaje enviado'; }
        setTimeout(() => {
          form.reset();
          if (btn) { btn.textContent = original; btn.disabled = false; }
        }, 3000);
      } catch {
        if (btn) { btn.textContent = original; btn.disabled = false; }
      }
    });
  });

});
