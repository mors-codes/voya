const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const mobileLinks = document.querySelectorAll('.mobile-link');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        bar1.classList.add('rotate-45', 'translate-y-2');
        bar2.classList.add('opacity-0');
        bar3.classList.add('-rotate-45', '-translate-y-2');
    } else {
        mobileMenu.classList.add('translate-x-full');
        bar1.classList.remove('rotate-45', 'translate-y-2');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-2');
    }
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.add('translate-x-full');
        bar1.classList.remove('rotate-45', 'translate-y-2');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-2');
    });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent!';
    btn.classList.remove('bg-orange-500', 'hover:bg-orange-400');
    btn.classList.add('bg-green-600');
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.classList.add('bg-orange-500', 'hover:bg-orange-400');
        btn.classList.remove('bg-green-600');
        e.target.reset();
    }, 3000);
});

document.getElementById('year').textContent = new Date().getFullYear();
lucide.createIcons();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-orange-500');
        link.classList.add('text-gray-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-400');
            link.classList.add('text-orange-500');
        }
    });
});