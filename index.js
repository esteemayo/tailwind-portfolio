const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#link');
const body = document.querySelector('body');
const formEl = document.querySelector('#contact-form');
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

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
    console.log({ name, email, message });

    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
  }
});

copyrightEl.textContent = new Date().getFullYear();
