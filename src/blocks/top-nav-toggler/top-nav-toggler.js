$(document).ready(function () {
  var topNavToggler = $('.top-nav-toggler');
  var topNav = $('.top-nav');

  topNavToggler.on('click', function () {
    topNavToggler.toggleClass('top-nav-toggler--close');
    topNav.toggleClass('top-nav--visible');
  });
});
