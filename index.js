const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#link');
const formEl = document.querySelector('#contact');
const copyrightEl = document.querySelector('#copyright');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('bg-white');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('bg-white');
  });
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});

copyrightEl.textContent = new Date().getFullYear();
