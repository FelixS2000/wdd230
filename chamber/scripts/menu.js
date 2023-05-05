// Toggle menu on click
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  
  menuToggle.setAttribute('aria-expanded', !expanded);
  navigation.hidden = expanded;
});
