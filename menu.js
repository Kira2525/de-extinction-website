document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const menu = nav.querySelector('ul');

  if (!nav || !hamburger || !menu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    hamburger.setAttribute(
      'aria-expanded',
      hamburger.classList.contains('active')
    );
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});

// Fake contact form submission
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop real submission
    popup.style.display = 'flex';
    contactForm.reset();
  });
}

if (closePopup) {
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

