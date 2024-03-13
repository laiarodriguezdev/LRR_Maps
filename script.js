let map;

//AIXO ERA PROVAR A VEURE SI PODIA EDITAR LA 
let latit = 41.3803387;
let longit = 2.1250054;

function geoPosition() {
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      console.log("entro aquí´i latitut es: " + latitude);
    }
    else console.log("NO ENTRO AL CONDICIONAL. ");
  });
}

// let buttonBusqueda = document.getElementById("findLoc").addEventListener("click", function()){
//     let btnBusq = document.getElementById("adreca").value;
//     geoPosition(btnBusq);
// }

function initMap() {
  const mapOptions = {
    zoom: 12,
    center: { lat: latit, lng: longit },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: { lat: latit, lng: longit },
    map: map,
  });
  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;
