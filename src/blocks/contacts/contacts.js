$(document).ready(function () {

  ymaps.ready(function () {
    var contactsMap = new ymaps.Map('contacts-map', {
        center: [59.938184, 30.362847],
        zoom: 16
      }),
      kuks = new ymaps.Placemark([59.938184, 30.362847], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer.png',
        iconImageSize: [61, 90],
        iconImageOffset: [0, -90]
      });

    if ($(window).width() < 767) {
      conactsMap.behaviors.disable('drag');
    }

    contactsMap.behaviors.disable('scrollZoom');

    contactsMap.geoObjects
      .add(kuks);
  });

});
