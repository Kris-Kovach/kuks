$(document).ready(function(){

  $("#new-items").owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: true,
    center: false,
    responsive : {
      768 : {
        items: 3,
        dots: true
      },
      992 : {
        items: 3,
        dots: true
      },
      1260 : {
        items: 3,
        dots: true,
        margin: 45
      }
    }
  });

});
