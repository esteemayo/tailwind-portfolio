const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const formEl = document.querySelector('#contact');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('bg-white');
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});
