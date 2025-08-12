/*
  GonTI – Interações v1
  - Toggle de tema (light/dark) com persistência
  - Menu mobile
  - Observador para revelar elementos on-scroll (IntersectionObserver)
  - Lazy loading para imagens (fallback simples)
*/
(function () {
  const THEME_KEY = 'gonti.theme';
  const root = document.documentElement;

  // -------- Tema --------
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Inicializa tema o mais cedo possível
  applyTheme(getPreferredTheme());

  // Delega clicks
  document.addEventListener('click', function (e) {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.getAttribute('data-action');

    if (action === 'toggle-theme') {
      e.preventDefault();
      toggleTheme();
    }

    if (action === 'toggle-menu') {
      e.preventDefault();
      const menu = document.querySelector('#nav-links');
      if (menu) menu.classList.toggle('is-open');
    }
  });

  // -------- Reveal on scroll --------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: mostra tudo
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // -------- Lazy loading images fallback --------
  if (!('loading' in HTMLImageElement.prototype)) {
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    imgs.forEach(img => {
      const src = img.getAttribute('data-src') || img.getAttribute('src');
      if (!src) return;
      const image = new Image();
      image.src = src;
      image.onload = function () { img.src = src; };
    });
  }

  // -------- Feather Icons --------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (window.feather && typeof window.feather.replace === 'function') {
        window.feather.replace();
      }
    });
  } else {
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
})();


