$(document).ready(function () {
  var mainNavToggler = $('.main-nav-toggler');
  var mainNav = $('.main-nav');

  mainNavToggler.on('click', function () {
    mainNavToggler.toggleClass('main-nav-toggler--close');
    mainNav.toggleClass('main-nav--visible');
  });
});
