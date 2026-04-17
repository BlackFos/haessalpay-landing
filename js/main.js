/* ============================================
   햇살페이 v3.0 — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroStats();
  initFeed();
  initFAQ();
  initFloatingBar();
  initScrollReveal();
  bindCTAs();
});


/* ─────────────────────────────────────────
   HEADER (scroll effect + mobile menu)
   ───────────────────────────────────────── */
function initHeader() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
    menuClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileNav.classList.remove('open'))
    );
  }
}


/* ─────────────────────────────────────────
   HERO STATS (counter animation)
   ───────────────────────────────────────── */
function initHeroStats() {
  const counters = document.querySelectorAll('.hero__stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(eased * target);
    el.textContent = target >= 2000 ? current : current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}


/* ─────────────────────────────────────────
   FEED TABLE (NowPay-style auto-scroll)
   ───────────────────────────────────────── */
function initFeed() {
  const body = document.getElementById('feed-body');
  const dateEl = document.getElementById('feed-date');
  if (!body || !window.SITE_CONFIG) return;

  // Update date
  const now = new Date();
  if (dateEl) {
    dateEl.textContent = `${now.getMonth()+1}월 ${now.getDate()}일 ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} 기준 이용자`;
  }

  const feedData = SITE_CONFIG.liveFeed || [];

  // Render rows
  feedData.forEach(item => {
    const row = document.createElement('div');
    row.className = 'feed__row';
    
    row.innerHTML = `
      <span class="feed__row-name">${item.name}</span>
      <span class="feed__row-amount">${Number(item.amount).toLocaleString()}원</span>
      <span class="feed__row-status"><span class="feed__status-badge">입금완료</span></span>
    `;
    body.appendChild(row);
  });

  // Auto-scroll loop
  startFeedScroll(body);
}

function startFeedScroll(body) {
  const rows = body.querySelectorAll('.feed__row');
  if (rows.length <= 7) return;

  setInterval(() => {
    const first = body.firstElementChild;
    if (!first) return;

    first.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    first.style.transform = 'translateY(-100%)';
    first.style.opacity = '0';

    setTimeout(() => {
      first.style.transition = 'none';
      first.style.transform = '';
      first.style.opacity = '';
      body.appendChild(first);
    }, 500);
  }, 3000);
}


/* ─────────────────────────────────────────
   FAQ (accordion)
   ───────────────────────────────────────── */
function initFAQ() {
  const list = document.getElementById('faq-list');
  if (!list || !window.SITE_CONFIG) return;

  const faqData = SITE_CONFIG.faq || [];
  // Show all on dedicated FAQ page, only first 5 on main
  const isFullPage = list.classList.contains('faq__list--full');
  const items = isFullPage ? faqData : faqData.slice(0, 5);

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'faq__item fade-up';
    div.innerHTML = `
      <button class="faq__question">
        ${item.q}
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="faq__answer">
        <div class="faq__answer-inner">${item.a}</div>
      </div>
    `;
    div.querySelector('.faq__question').addEventListener('click', () => {
      div.classList.toggle('open');
    });
    list.appendChild(div);
  });
}


/* ─────────────────────────────────────────
   FLOATING BAR (show after hero)
   ───────────────────────────────────────── */
function initFloatingBar() {
  const bar = document.getElementById('floating-bar');
  const hero = document.getElementById('hero');
  if (!bar) return;

  // Sub-pages have no hero — always show floating bar
  if (!hero) {
    bar.classList.add('visible');
    return;
  }

  const observer = new IntersectionObserver(([entry]) => {
    bar.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });

  observer.observe(hero);
}


/* ─────────────────────────────────────────
   SCROLL REVEAL (fade-up elements)
   ───────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  els.forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────
   CTA BINDING (phone + kakao)
   ───────────────────────────────────────── */
function bindCTAs() {
  if (!window.SITE_CONFIG) return;
  const cfg = SITE_CONFIG.contact || {};
  const appCfg = SITE_CONFIG.app || {};

  document.querySelectorAll('[data-cta]').forEach(el => {
    const type = el.dataset.cta;
    if (type === 'kakao' && cfg.kakaoUrl) {
      el.href = cfg.kakaoUrl;
    } else if (type === 'phone' && cfg.phone) {
      el.href = `tel:${cfg.phone}`;
    } else if (type === 'app-android' && appCfg.android) {
      setupAppCTA(el, appCfg.android);
    } else if (type === 'app-ios' && appCfg.ios) {
      setupAppCTA(el, appCfg.ios);
    }
  });
}

/* ── App CTA helper: store URL or "준비 중" alert ── */
function setupAppCTA(el, cfg) {
  if (cfg.storeUrl && cfg.storeUrl !== '#') {
    el.href = cfg.storeUrl;
    el.target = '_blank';
    el.rel = 'noopener';
  } else {
    el.href = 'javascript:void(0)';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showAppToast('앱 다운로드를 준비 중입니다. 카톡으로 문의해 주세요!');
    });
  }
}

/* ── Toast notification ── */
function showAppToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = `
      position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
      background:#1F2937; color:#fff; padding:14px 28px; border-radius:12px;
      font-size:15px; font-weight:600; z-index:9999; opacity:0;
      transition:opacity 0.3s ease; box-shadow:0 8px 32px rgba(0,0,0,0.2);
      text-align:center; max-width:90vw;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}
