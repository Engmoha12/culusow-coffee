// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active-mobile');
        mobileBtn.classList.toggle('active');
        
        // Dynamic styling for mobile active state if not in CSS
        if (navLinks.classList.contains('active-mobile')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.right = '5%';
            navLinks.style.background = 'var(--bg-secondary)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderRadius = '16px';
            navLinks.style.border = '1px solid var(--glass-border)';
            navLinks.style.gap = '1.5rem';
            navLinks.style.zIndex = '1000';
        } else {
            navLinks.style.display = '';
        }
    });
}

// Scroll Reveal Animation (Works across all pages)
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Menu Filtering Logic (Only for pages with menu)
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterBtns.length > 0 && menuItems.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'flex'; // Changed to flex to match menu-item structure
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        let offset = window.pageYOffset;
        heroBg.style.transform = `translateY(${offset * 0.4}px) scale(1.1)`;
    }
});
