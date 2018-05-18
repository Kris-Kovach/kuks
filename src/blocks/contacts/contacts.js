$(document).ready(function () {

  if ($('#contacts-map').length) {

    var mapContainer = $('#contacts-map');
    var lon = mapContainer.data('lon');
    var lat = mapContainer.data('lat');
    var address = mapContainer.data('address');
    var zoom = mapContainer.data('zoom');

    ymaps.ready(function () {
      var contactsMap = new ymaps.Map('contacts-map', {
          center: [lon, lat],
          zoom: zoom
        }),
        kuks = new ymaps.Placemark([59.938196, 30.364809], {
          hintContent: address,
          balloonContent: address
        }, {
          iconLayout: 'default#image',
          iconImageHref: '/local/templates/main/img/map-pointer.png',
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
  }

});
