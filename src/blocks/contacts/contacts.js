$(document).ready(function () {

  ymaps.ready(function () {
    var contactsMap = new ymaps.Map('contacts-map', {
        center: [59.938196, 30.364809],
        zoom: 16
      }),
      kuks = new ymaps.Placemark([59.938196, 30.364809], {
        hintContent: 'Санкт-Петербург, Озерной пер., д. 14',
        balloonContent: 'Санкт-Петербург, Озерной пер., д. 14'
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
