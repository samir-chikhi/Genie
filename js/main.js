// Consolidated & fixed cookie handling, show/hide via style.display for compatibility

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.mobile-menu-btn');
  if (!menu) return;
  const open = !menu.classList.contains('hidden') && !menu.classList.contains('active');
  if (open) {
    menu.classList.remove('hidden');
    menu.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.mobile-menu-btn');
  if (!menu) return;
  menu.classList.add('hidden');
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeightEl = document.getElementById('navbar');
          const navHeight = navHeightEl ? navHeightEl.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          closeMobileMenu();
        }
      }
    });
  });

  // Wire cookie banner buttons (if present)
  const acceptBtn = document.getElementById('cookieAcceptBtn');
  const refuseBtn = document.getElementById('cookieRefuseBtn');
  if (acceptBtn) acceptBtn.addEventListener('click', acceptCookies);
  if (refuseBtn) refuseBtn.addEventListener('click', refuseCookies);
});

// Navbar Background on Scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
  lastScrollTop = scrollTop;
});

// Scroll to Top Button
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (!scrollToTopBtn) return;
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cookie Consent Management (fixed: use style.display to show/hide)
function showCookieBanner() {
  try {
    const consent = localStorage.getItem('cookieConsent');
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    if (!consent) {
      // Make sure banner is visible
      banner.style.display = 'block';
    } else {
      banner.style.display = 'none';
    }
  } catch (e) { /* ignore storage errors */ }
}

function acceptCookies() {
  try { localStorage.setItem('cookieConsent', 'accepted'); } catch (e) {}
  const b = document.getElementById('cookieBanner'); if (b) b.style.display = 'none';
  console.log('Cookies accepted');
}

function refuseCookies() {
  try { localStorage.setItem('cookieConsent', 'refused'); } catch (e) {}
  const b = document.getElementById('cookieBanner'); if (b) b.style.display = 'none';
  console.log('Cookies refused');
}

// Show cookie banner on page load
window.addEventListener('load', showCookieBanner);

// Contact Form Handling (unchanged behaviour, single implementation)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = {
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim(),
        telephone: document.getElementById('telephone').value.trim(),
        sujet: document.getElementById('sujet').value,
        message: document.getElementById('message').value.trim()
      };
      if (!formData.nom || !formData.email || !formData.sujet || !formData.message) {
        alert('Merci de remplir tous les champs obligatoires.');
        return;
      }
      contactForm.querySelector('button[type="submit"]').disabled = true;
      setTimeout(() => {
        alert('Merci ! Votre message a bien été envoyé. Nous vous recontacterons rapidement.');
        contactForm.reset();
        contactForm.querySelector('button[type="submit"]').disabled = false;
      }, 800);
    });
  }
});

// Lazy Loading Images fallback
if (!('loading' in HTMLImageElement.prototype)) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => { img.src = img.dataset.src || img.src; });
}

// Reveal on scroll init
function revealOnScroll() {
  const reveals = document.querySelectorAll('.pricing-card, .event-card, .value-card');
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.pricing-card, .event-card, .value-card');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
  });
});
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Console Message
console.log('%c🎉 Bienvenue sur le site du Génie Montauban !', 'color: #365478; font-size: 20px; font-weight: bold;');
console.log('%cSite développé pour l\'économie sociale et solidaire', 'color: #C9993E; font-size: 14px;');
