// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                closeMobileMenu();
            }
        });
    });
});

// Navbar Background on Scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
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
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Cookie Consent Management
function showCookieBanner() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        document.getElementById('cookieBanner').classList.add('show');
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBanner').classList.remove('show');
    console.log('Cookies accepted');
}

function refuseCookies() {
    localStorage.setItem('cookieConsent', 'refused');
    document.getElementById('cookieBanner').classList.remove('show');
    console.log('Cookies refused');
}

// Show cookie banner on page load
window.addEventListener('load', showCookieBanner);

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = {
                nom: document.getElementById('nom').value,
                email: document.getElementById('email').value,
                telephone: document.getElementById('telephone').value,
                sujet: document.getElementById('sujet').value,
                message: document.getElementById('message').value
            };
            
            // Ici, vous pouvez ajouter votre logique d'envoi
            // Par exemple avec FormSpree, EmailJS, ou votre propre backend
            
            // Pour l'instant, on simule l'envoi
            console.log('Formulaire soumis:', formData);
            
            // Créer un mailto link comme fallback
            const mailtoLink = `mailto:genie.montauban@gmail.com?subject=${encodeURIComponent(formData.sujet)}&body=${encodeURIComponent(
                `Nom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\n\nMessage:\n${formData.message}`
            )}`;
            
            // Ouvrir le client email
            window.location.href = mailtoLink;
            
            // Afficher un message de confirmation
            alert('Merci pour votre message ! Votre client email va s\'ouvrir pour finaliser l\'envoi.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
});

// Lazy Loading Images (si vous en ajoutez plus tard)
if ('loading' in HTMLImageElement.prototype === false) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
}

// Animation on Scroll (optionnel)
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

// Initialiser l'animation au scroll
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
