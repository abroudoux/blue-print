console.log('Js is working!')

const iconMenuBurger = document.getElementById('icon-menu-burger');
const iconOpenMenu = document.getElementById('icon-open-menu');
const iconCloseMenu = document.getElementById('icon-close-menu');
const menu = document.getElementById('menu');

let isMenuOpen = false;

iconMenuBurger.addEventListener('click', () => {
  if (isMenuOpen) {
    menu.style.right = '-25vw';
    iconCloseMenu.style.display = 'none';
    iconOpenMenu.style.display = 'block';
  } else {
    menu.style.right = '0';
    iconCloseMenu.style.display = 'block';
    iconOpenMenu.style.display = 'none';
  }

  isMenuOpen = !isMenuOpen;
});