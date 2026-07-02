/* ============================================
   Urban Pulse Investments — Eswatini
   Main JavaScript
   ============================================ */

// ===== MOBILE NAVIGATION =====
function toggleMobileNav() {
  const overlay = document.getElementById('mobileNavOverlay');
  const burger = document.getElementById('navHamburger');
  overlay.classList.toggle('visible');
  burger.classList.toggle('open');
}

function closeMobileNav() {
  document.getElementById('mobileNavOverlay').classList.remove('visible');
  document.getElementById('navHamburger').classList.remove('open');
}

// Close mobile nav when clicking outside
document.addEventListener('click', function (e) {
  const overlay = document.getElementById('mobileNavOverlay');
  const burger = document.getElementById('navHamburger');
  if (overlay.classList.contains('visible') &&
      !overlay.contains(e.target) &&
      !burger.contains(e.target)) {
    closeMobileNav();
  }
});

// ===== NAV SCROLL EFFECT =====
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== LIGHTBOX =====
function openLightbox(imgId, title, desc) {
  const img = document.getElementById(imgId);
  const lb = document.getElementById('delLightbox');
  const lbImg = document.getElementById('delLightboxImg');
  const lbCap = document.getElementById('delLightboxCaption');

  lbImg.src = img.src;
  lbImg.alt = img.alt || title;
  lbCap.textContent = title + ' \u2014 ' + desc;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Store focused element for return focus
  window.lastFocusedDelCard = document.activeElement;

  // Move focus to close button
  const closeBtn = document.querySelector('.del-lightbox-close');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox(event) {
  if (!event ||
      event.target === document.getElementById('delLightbox') ||
      event.target.classList.contains('del-lightbox-close')) {
    document.getElementById('delLightbox').classList.remove('active');
    document.body.style.overflow = '';

    // Return focus to the element that opened the lightbox
    if (window.lastFocusedDelCard && window.lastFocusedDelCard.focus) {
      window.lastFocusedDelCard.focus();
    }
  }
}

// Close lightbox on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeLightbox({ target: document.getElementById('delLightbox') });
  }
});
