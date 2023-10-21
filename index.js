const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#link');
const body = document.querySelector('body');
const formEl = document.querySelector('#contact');
const moon = document.querySelector('#moon');
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

moon.addEventListener('click', () => {
  body.classList.toggle('dark');
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});

copyrightEl.textContent = new Date().getFullYear();
