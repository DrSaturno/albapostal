/* ===========================
   ALBA POSTAL — SHARED COMPONENTS
   =========================== */

function getNavbarHTML() {
  return `
  <header class="navbar transparent" id="navbar">
    <div class="container navbar-inner">
      <a href="/index.html" class="navbar-logo" id="navbar-logo-link">
        <img src="/logo2.png" alt="Alba Postal" id="navbar-logo-img">
      </a>
      <nav class="navbar-nav" id="navbar-nav">
        <a href="/servicios/logistica-ecommerce.html">Paquetería e-commerce</a>
        <a href="/servicios/servicio-postal.html">Servicio Postal</a>
        <a href="/servicios/agentes-carga.html">Agentes de carga</a>
      </nav>
      <div class="navbar-right" id="navbar-right">
        <a href="/index.html">Inicio</a>
        <a href="/contacto.html">Contacto</a>
        <span class="tracking-badge" title="Disponible en Fase 2">Tracking</span>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Abrir menú">
        <svg id="menu-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg id="close-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-menu-inner">
        <a href="/index.html">Inicio</a>
        <div class="mobile-menu-label">Nuestros Servicios</div>
        <div class="mobile-menu-sub">
          <a href="/servicios/logistica-ecommerce.html">Paquetería e-commerce</a>
          <a href="/servicios/servicio-postal.html">Servicio Postal</a>
          <a href="/servicios/agentes-carga.html">Agentes de carga</a>
        </div>
        <a href="/contacto.html">Contacto</a>
        <span class="mobile-tracking-badge">Tracking (Próximamente)</span>
      </div>
    </div>
  </header>`;
}

function getFooterHTML() {
  const year = new Date().getFullYear();
  return `
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">
            <img src="/logo2.png" alt="Alba Postal">
          </div>
          <div class="footer-contact">
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:info@albapostal.com.ar">info@albapostal.com.ar</a>
            </div>
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>A confirmar</span>
            </div>
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>San José 1540, CABA, Argentina</span>
            </div>
          </div>
        </div>
        <div class="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="/servicios/logistica-ecommerce.html">Paquetería e-commerce</a></li>
            <li><a href="/servicios/servicio-postal.html">Servicio Postal</a></li>
            <li><a href="/servicios/agentes-carga.html">Agentes de carga</a></li>
            <li><a href="/servicios/envios.html">Courier Internacional</a></li>
            <li><span class="disabled">Logística para empresas</span></li>
            <li><span class="disabled">Comprá en USA</span></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="/sucursales.html">Sucursales</a></li>
            <li><span class="disabled">Tracking</span></li>
            <li><a href="/contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Seguinos</h4>
          <div class="social-links">
            <a href="https://instagram.com" class="social-link" aria-label="Instagram" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" class="social-link" aria-label="Facebook" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://linkedin.com" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://wa.me/5491100000000" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
          </div>
          <h4>Newsletter</h4>
          <div class="newsletter-form">
            <p>Recibí novedades y promociones</p>
            <input type="email" placeholder="tu@email.com" class="newsletter-input" id="newsletter-email">
            <button class="newsletter-btn" id="newsletter-btn">Suscribirse</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="footer-legal">
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Política de Privacidad</a></li>
          <li><a href="#">Política de Calidad</a></li>
        </ul>
        <div class="footer-copy">
          <span>© ${year} Alba Postal. Todos los derechos reservados. &nbsp;|&nbsp; Diseñado por <a href="https://crecermas.agency" target="_blank" rel="noopener">CrecerMas.Agency</a></span>
        </div>
      </div>
    </div>
  </footer>`;
}

function getWhatsAppHTML() {
  return `
  <a href="https://wa.me/5491100000000" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>`;
}

function initComponents() {
  // Inject navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = getNavbarHTML();

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = getFooterHTML();

  // Inject WhatsApp
  document.body.insertAdjacentHTML('beforeend', getWhatsAppHTML());

  // Newsletter
  setTimeout(() => {
    const newsletterBtn = document.getElementById('newsletter-btn');
    if (newsletterBtn) {
      newsletterBtn.addEventListener('click', function() {
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value) {
          emailInput.value = '';
          newsletterBtn.textContent = '¡Suscripto!';
          setTimeout(() => { newsletterBtn.textContent = 'Suscribirse'; }, 3000);
        }
      });
    }
  }, 100);
}

document.addEventListener('DOMContentLoaded', initComponents);
