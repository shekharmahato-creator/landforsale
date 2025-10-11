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
  alert("Thank you for contacting Mahato Realty! We'll reach you soon.");
  e.target.reset();
});

document.querySelector('.details-btn').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
