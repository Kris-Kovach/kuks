$(document).ready(function(){

  $("#new-items").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    center: false,
    margin: 25,
    responsive : {
      768 : {
        items: 2
      },
      992 : {
        items: 3,
        margin: 25
      },
      1260 : {
        items: 3,
        margin: 45
      }
    }
  });

  $('#default-slider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    center: false
  })

});
