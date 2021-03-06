$(function () {
  var map = L.map('map').setView(
      [-31.6060, -60.7087], 12);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">' +
      'OpenStreetMap</a> contributors'
      }).addTo(map);

  var req = new XMLHttpRequest();
  req.onload = function() {
    L.geoJson(JSON.parse(this.responseText), {
      pointToLayer: function(feature, latlng) {
        return L.marker(latlng)
          .bindPopup(buildPopup(feature));
      }
    }).addTo(map);
  }

  req.open("get", "houses.json");
  req.send();

  function buildPopup (feature) {
    var data = feature.properties;
    return '<h3>' + data.address + '</h3>' +
      '<p><strong>$ '+ data.price + '</strong> ' + data.description + '</p>' +
      '<p>' + data.references + '</p>' +
      '<a href="' + data.edit + '">' + 'Edit</a>'
  }
});
