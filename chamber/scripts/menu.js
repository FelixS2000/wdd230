const hamButton = document.querySelector('#hamButton');
const menu = document.querySelector('#menu ul');
hamButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});