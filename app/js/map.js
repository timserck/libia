function initAutocomplete() {



   // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var initialLocation;
  var myLatLng = {lat: 50.465541, lng: 4.877951};
    //set namur gare enstead


  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 17,
    maxZoom: 17,
    minZoom: 14,
    center: myLatLng,
    mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');


     // Try W3C Geolocation (Preferred)
  function current_position() {
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
  initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
       map.setCenter(initialLocation);

    var marker = new google.maps.Marker({
      position: initialLocation,
      map: map,
      title: 'votre position',
      icon:'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=' + '|20D699' 
    });   

    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }
  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      
      initialLocation = myLatLng;
      var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'votre position',
      icon:'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=' + '|20D699' 
    }); 
    } else {
      
      initialLocation = myLatLng;
    }
    map.setCenter(initialLocation);
  }
}
current_position();

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var optionSearchBox = {
    regions: {country: 'be',postal_code:'5000'}
  }
  input.placeholder='Rechercher une adresse';
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input,optionSearchBox);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    
    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location,
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

  });
  // [END region_getplaces]
  var directionsDisplay = new google.maps.DirectionsRenderer({
     map: map
   });

 function trajet(marker_position){

  var request = {
      destination: marker_position,
      origin: initialLocation,
      travelMode: google.maps.TravelMode.BICYCLING
    };

    // Pass the directions request to the directions service.

      var directionsService = new google.maps.DirectionsService();

   
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK ) {
        // Display the route on the map.

        
   directionsDisplay.setDirections(response);
        directionsDisplay.setOptions({
          polylineOptions: {strokeColor:"#20D699"},
          preserveViewport: true,
          suppressMarkers:true
          
        })
      }
    });

}

  $.getJSON("namur.json", function(json1) {
    $.each(json1, function(key, data) {
         var number = data.number;
         var color;
         var strokeColor = "3A93C4";
         if (number > 10) {
          var color = "3A93C4";
         } else{
           var color = "92B0C9";
         }
      


        

        var place_marker = new google.maps.LatLng(data.latitude, data.longitude); 
        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: place_marker,
            map: map,
            title: data.address,
            icon:'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+ (number) +'|'+ color +'|FFF'
        });


       google.maps.event.addDomListener(marker, 'click', function() {

        var borneInfos = [];
        var place_velo = data.number+Math.floor((Math.random() * 5) + 1);
        //details.push( data.number, place_velo, data.address);
        borneInfos.push(data.address, place_velo, data.number);
        $(".borneNom").text(borneInfos[0]);
        $(".borneVeloRestant").text(borneInfos[2]);
        $(".borneVeloTotal").text(borneInfos[1]);
        $(".borneProxi").text("Borne sélectionnée");

      var marker_position = marker.getPosition();
      trajet(marker_position);
      


      });

    });
});

}