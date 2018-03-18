$(document).ready(function(){

  $("#new-items").owlCarousel({
    items: 3,
    nav: false,
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: false,
        loop: true
      },
      768 : {
        items: 3,
        dots: true
      },
      992 : {
        items: 3,
        dots: true
      },
      1200 : {
        items: 3,
        dots: true
      },
      1800 : {
        items: 3,
        dots: true
      }
    }
  });

});
