$(document).ready(function () {
  var mainNavToggler = $('.main-nav-toggler');
  var submenuToggler = $('.main-nav__submenu-toggler');
  var topNavToggler = $('.top-nav-toggler');
  var mainNav = $('.main-nav');
  var mainNavLink = $('.main-nav__link');
  var subNav = $('.main-nav__submenu');
  var backBtn = $('.main-nav__submenu-title');
  var cartPreview = $(".cart-preview");
  var cartPreviewContent = $(".cart-preview__inner");
  var cartToggler = $('.cart');
  var cartPreviewClose = $('.cart-preview__close');

  var onNavTogglerClick = function (evt) {
    evt.preventDefault();
    mainNavToggler.toggleClass('main-nav-toggler--close');
    mainNav.toggleClass('main-nav--visible');
    topNavToggler.toggleClass('top-nav-toggler--disabled');
    cartPreview.removeClass('cart-preview--visible');
    disableBodyScroll(true, '.main-nav');

    setTimeout(function () {
      subNav.removeClass('main-nav__submenu--visible');
      mainNav.removeClass('main-nav--hidden');
    }, 350);
  };

  var onBackBtnClick = function (evt) {

    if ($(window).width() < 768) {
      evt.preventDefault();
      subNav.removeClass('main-nav__submenu--visible');

      setTimeout(function () {
        mainNav.removeClass('main-nav--hidden');
      }, 200);
    }
  };

  var onSubmenuTogglerClick = function (evt) {
    evt.preventDefault();
    subNav.removeClass('main-nav__submenu--visible');
  };

  var onCartTogglerClick = function (evt) {
    evt.preventDefault();
    cartPreview.addClass('cart-preview--visible');
    subNav.removeClass('main-nav__submenu--visible');
    topNavToggler.addClass('top-nav-toggler--disabled');
    disableBodyScroll(true, '.cart-preview');
  };

  var onCartPreviewClose = function (evt) {
    evt.preventDefault();
    cartPreview.removeClass('cart-preview--visible');
    subNav.removeClass('main-nav__submenu--visible');
    topNavToggler.removeClass('top-nav-toggler--disabled');
  };

  mainNavToggler.on('click', function (evt) {
    onNavTogglerClick(evt)
  });

  mainNavLink.on('click', function (evt) {
    subNav.removeClass('main-nav__submenu--visible');
    cartPreview.removeClass('cart-preview--visible');

    if ($(this).next('.main-nav__submenu').length) {
      evt.preventDefault();
      mainNav.toggleClass('main-nav--hidden');
      $(this).next('.main-nav__submenu').toggleClass('main-nav__submenu--visible');
    }
  });


  backBtn.on('click', function (evt) {
    onBackBtnClick(evt);
  });

  submenuToggler.on('click', function (evt) {
    onSubmenuTogglerClick(evt);
  });

  cartPreviewContent.mCustomScrollbar();

  cartToggler.on('click', function (evt) {
    onCartTogglerClick(evt);
  });

  cartPreviewClose.on('click', function (evt) {
    onCartPreviewClose(evt);
  });
});
