// Navigation Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Auto-add animation classes to elements
document.querySelectorAll('.section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

document.querySelectorAll('.skill-card').forEach((el, index) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${index * 0.1}s`; // Stagger effect
    observer.observe(el);
});

document.querySelectorAll('.project-card').forEach((el, index) => {
    el.classList.add('fade-up');
    // Stagger projects slightly if they are side-by-side (simplified)
    observer.observe(el);
});

document.querySelectorAll('.contact-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
