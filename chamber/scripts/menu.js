// Get the hamburger button and menu
const hamButton = document.querySelector('#hamButton');
const menu = document.querySelector('#menu ul');

// Add a click event listener to the hamburger button
hamButton.addEventListener('click', function() {
  // Toggle the "show" class on the menu
  menu.classList.toggle('show');
});
