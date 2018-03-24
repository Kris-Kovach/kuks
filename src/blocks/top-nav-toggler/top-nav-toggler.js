$(document).ready(function () {
  var mainNavToggler = $('.main-nav-toggler');
  var topNavToggler = $('.top-nav-toggler');
  var topNav = $('.top-nav');

  topNavToggler.on('click', function (evt) {
    evt.preventDefault();
    topNavToggler.toggleClass('top-nav-toggler--close');
    topNav.toggleClass('top-nav--visible');
    mainNavToggler.toggleClass('main-nav-toggler--disabled');
  });
});
