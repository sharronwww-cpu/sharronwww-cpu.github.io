(() => {
  'use strict';
  const root = document.documentElement;
  const languageButton = document.getElementById('language-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('navigation');
  const translated = [...document.querySelectorAll('[data-en]')];
  const originals = new Map(translated.map(el => [el, el.innerHTML]));
  let language = 'zh';
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'zh';
    root.lang = language === 'en' ? 'en' : 'zh-CN';
    translated.forEach(el => {
      if (language === 'en') el.textContent = el.dataset.en;
      else el.innerHTML = originals.get(el);
    });
    languageButton.textContent = language === 'en' ? '中文' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? '切换至中文' : 'Switch to English');
    menuButton.setAttribute('aria-label', language === 'en' ? 'Toggle navigation' : '切换导航菜单');
    document.querySelector('.portrait-frame img').alt = language === 'en' ? 'Portrait of Shiyuan Wang' : '王诗媛的个人肖像';
    document.getElementById('copy-status').textContent = '';
    try { localStorage.setItem('shiyuan-language', language); } catch (_) { /* Optional preference only. */ }
  }
  try { if (localStorage.getItem('shiyuan-language') === 'en') setLanguage('en'); } catch (_) { /* File previews may restrict storage. */ }
  languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  function closeMenu() { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { const open=nav.classList.contains('open'); closeMenu(); if(open) menuButton.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
  window.matchMedia('(min-width: 801px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
  const navLinks = [...nav.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => {
        const active = a.hash === '#' + entry.target.id;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
      });
    }), { rootMargin: '-12% 0px -62% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText('1462674529@qq.com');
      status.textContent = language === 'en' ? 'Email address copied.' : '邮箱已复制。';
    } catch (_) {
      status.textContent = language === 'en' ? 'Please select and copy the email address above, or click it to send a message.' : '请选中上方邮箱复制，或点击邮箱直接写信。';
    }
  });
  document.getElementById('year').textContent = String(Math.max(2026,new Date().getFullYear()));
})();
