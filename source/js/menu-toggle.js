let menu = document.querySelector('.main-nav__menu');
let btn = document.querySelector('.main-nav__menu-toggle');
let text = document.querySelector('.menu-toggle__text');
let menuOpenIcon = document.querySelector('.menu-toggle__icon--open');
let menuCloseIcon = document.querySelector('.menu-toggle__icon--close');

menu.classList.remove('main-nav__menu--nojs');

btn.addEventListener('click', function () {
  if (menu.classList.contains('main-nav__menu--closed')) {
    text.textContent = "Закрыть меню.";
    menuOpenIcon.style.display = "none";
    menuCloseIcon.style.display = "block";
    menu.classList.remove('main-nav__menu--closed');
    menu.classList.add('main-nav__menu--opened');
  } else {
    text.textContent = "Открыть меню.";
    menuOpenIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
    menu.classList.add('main-nav__menu--closed');
    menu.classList.remove('main-nav__menu--opened');
  }
});
