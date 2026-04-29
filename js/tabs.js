// TakeOver - main.js
// Handles: tab switching, hamburger menu, contact form
 
// === TABS ===
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
 
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('aria-controls');
 
    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });
 
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(target);
    if (panel) {
      panel.classList.add('active');
      panel.hidden = false;
    }
  });
 
  // Keyboard navigation for tabs
  btn.addEventListener('keydown', (e) => {
    const btns = [...tabBtns];
    const idx = btns.indexOf(btn);
    if (e.key === 'ArrowRight') {
      btns[(idx + 1) % btns.length].focus();
    } else if (e.key === 'ArrowLeft') {
      btns[(idx - 1 + btns.length) % btns.length].focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      btn.click();
    }
  });
});
 
// === HAMBURGER MENU ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
 
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}
 
// === CONTACT FORM ===
const form = document.getElementById('contact-form');
const confirmMsg = document.getElementById('confirm-msg');
 
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const gdpr = document.getElementById('gdpr').checked;
 
    if (!name || !email || !gdpr) {
      alert('Please fill in your name, email and tick the consent box before submitting.');
      return;
    }
 
    form.style.display = 'none';
    if (confirmMsg) {
      confirmMsg.style.display = 'block';
    }
  });
}