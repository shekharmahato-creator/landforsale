// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form simple alert
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for contacting SLH Properties! We'll reach you soon.");
  e.target.reset();
});

document.querySelector('.details-btn').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Mobile nav toggle
const navbar = document.querySelector('.navbar');
const navToggle = document.createElement('button');
navToggle.id = 'nav-toggle';
navToggle.className = 'nav-toggle';
navToggle.setAttribute('aria-label', 'Toggle navigation');
navToggle.textContent = '☰';

// Insert toggle button before nav
const nav = document.querySelector('.navbar nav');
if (nav) {
  nav.parentElement.insertBefore(navToggle, nav);

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
  });

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.navbar nav a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });
}
