console.log('Js is working!')

const iconMenuBurger = document.getElementById('icon-menu-burger');

iconMenuBurger.addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.style.right = menu.style.right === '-20vw' ? '0' : '-20vw';
});