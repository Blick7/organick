import './sass/style.scss';

const burgerBtn = document.querySelector('.org-burger-button');
const menu = document.querySelector('.org-burger');
const menuLinks = document.querySelectorAll('.org-burger__item');
const backdrop = document.createElement('div');
document.body.append(backdrop);

burgerBtn.addEventListener('click', (event) => {
  console.log(event.target);
  burgerBtn.classList.toggle('burger--active');
  menu.classList.toggle('burger--active');
  backdrop.classList.toggle('backdrop');
  if (menu.classList.contains('burger--active')) {
    disableScrolling();
  } else enableScrolling();

  // create backdrop element
});

const closeMenu = () => {
  burgerBtn.classList.remove('burger--active');
  menu.classList.remove('burger--active');
  backdrop.classList.remove('backdrop');

  enableScrolling();
};

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

document.onclick = (event) => {
  if (
    event.target != menu &&
    event.target != burgerBtn &&
    event.target.tagName.toLowerCase() !== 'span'
  ) {
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
