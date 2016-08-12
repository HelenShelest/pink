//Добавление классов для подключения стилей отображения мобильного меню.

window.onload = function () {
  document.getElementById('btn').classList.add('page-header__btn');
  document.getElementById('nav').classList.add('main-menu--hidden');
};

$(document).ready(function () {
	$('#btn').click(function () {
    $('#btn').toggleClass('page-header__btn--active')
		$('#nav').toggleClass('main-menu--hidden');
    $('.page-header').toggleClass('page-header--active');
		});
	});

$(document).ready(function () {
	$('.info-link').click(function () {
		$('#nav').toggleClass('main-menu--hidden');
    $('.page-header').toggleClass('page-header--active');
		});
	});

$(document).ready(function () {
	$('.feature-link').click(function () {
		$('#nav').toggleClass('main-menu--hidden');
    $('.page-header').toggleClass('page-header--active');
		});
	});

$(document).ready(function () {
	$('.review-link').click(function () {
		$('#nav').toggleClass('main-menu--hidden');
    $('.page-header').toggleClass('page-header--active');
		});
	});

$(document).ready(function () {
	$('.price-link').click(function () {
		$('#nav').toggleClass('main-menu--hidden');
    $('.page-header').toggleClass('page-header--active');
		});
	});