$(document).ready(function () {
  var mainNavToggler = $('.main-nav-toggler');
  var submenuToggler = $('.main-nav__submenu-toggler');
  var topNavToggler = $('.top-nav-toggler');
  var mainNav = $('.main-nav');
  var mainNavLink = $('.main-nav__link');
  var subNav = $('.main-nav__submenu');
  var backBtn = $('.main-nav__submenu-title');

  mainNavToggler.on('click', function (evt) {
    evt.preventDefault();
    mainNavToggler.toggleClass('main-nav-toggler--close');
    mainNav.toggleClass('main-nav--visible');
    topNavToggler.toggleClass('top-nav-toggler--disabled');
    $('body').toggleClass('fixed');

    setTimeout(function () {
      subNav.removeClass('main-nav__submenu--visible');
      mainNav.removeClass('main-nav--hidden');
    }, 350);
  });

  mainNavLink.on('click', function (evt) {
    subNav.removeClass('main-nav__submenu--visible');

    if ($(this).next('.main-nav__submenu').length) {
      evt.preventDefault();
      mainNav.toggleClass('main-nav--hidden');
      $(this).next('.main-nav__submenu').toggleClass('main-nav__submenu--visible');
    }
  });

  backBtn.on('click', function (evt) {
    evt.preventDefault();
    subNav.removeClass('main-nav__submenu--visible');

    setTimeout(function () {
      mainNav.removeClass('main-nav--hidden');
    }, 200);
  });

  submenuToggler.on('click', function (evt) {
    evt.preventDefault();
    subNav.removeClass('main-nav__submenu--visible');
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $('body').toggleClass('fixed');
    }
  });
});
