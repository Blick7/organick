import './sass/style.scss';

const burgerBtn = document.querySelector('.org-burger-button');
const menu = document.querySelector('.org-burger');
const menuLinks = document.querySelectorAll('.org-burger__item');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--active');
  menu.classList.toggle('burger--active');
  if (menu.classList.contains('burger--active')) {
    disableScrolling();
  } else enableScrolling();
});

const closeMenu = () => {
  burgerBtn.classList.remove('burger--active');
  menu.classList.remove('burger--active');
  enableScrolling();
};

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

document.onclick = (event) => {
  if (event.target != menu && event.target.parentNode != burgerBtn) {
    closeMenu();
  }
};

const disableScrolling = () => {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
};

const enableScrolling = () => {
  window.onscroll = function () {};
};
