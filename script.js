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

// Theme toggle: persist selection in localStorage
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme) {
  if (theme === 'dark') document.body.classList.add('dark-theme');
  else document.body.classList.remove('dark-theme');
}

function updateToggleIcon() {
  if (!themeToggle) return;
  const isDark = document.body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// initialize
const saved = localStorage.getItem('site-theme');
if (saved) applyTheme(saved);
updateToggleIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    updateToggleIcon();
  });
}
