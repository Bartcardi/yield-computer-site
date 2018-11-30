$(document).ready(function() { // all code after
// makes googe maps work
  $(function () {

      function initMap() {

          var location = new google.maps.LatLng(51.688325, 5.300666);

          var mapCanvas = document.getElementById('map');
          var mapOptions = {
              center: location,
              zoom: 12,
              panControl: true,
              scrollwheel: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(mapCanvas, mapOptions);

          var markerImage = '../images/locationmark32.ico';

          var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon: markerImage
          });

          var contentString = '<div class="info-window">' +
                  '<p><strong>cropcomputer</strong></p>' +
                  '<div class="info-content">' +
                  '<p>Postelstraat 44</p>' +
                  "<p>5211 EB 's-Hertogenbosch</p>" +
                  '</div>' +
                  '</div>';

          var infowindow = new google.maps.InfoWindow({
              content: contentString,
              maxWidth: 400
          });

          marker.addListener('click', function () {
              infowindow.open(map, marker);
          });
      }
      google.maps.event.addDomListener(window, 'load', initMap);
  });
}); //close document ready
