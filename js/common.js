//Добавление классов для подключения стилей отображения мобильного меню.

window.onload = function () {
  for (i = 0; i < 3; i++) {
  document.getElementsByClassName('main-menu__toggle')[i].classList.add('main-menu__toggle-icon');
  }
  document.getElementById('nav').classList.add('main-menu__list-hidden');
};

