// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the third tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [37, -95],
	zoom: 3,
	layers: [dark]
});

let baseMaps={
  "Streets":streets,
  "Satellite":satelliteStreets,
  "Dark":dark
};
// Add a 2nd layer group for the emitter data
let allEmitters = new L.LayerGroup();
// let extrudedEmitters = new L.LayerGroup();

// let overlays= {
//   "All Emitters":allEmitters,
//   "Extruded Emitters":extrudedEmitters,
// };


// Add a control to the map that will allow user to change 
// which layers are visible later if we need more layers
// L.control.layers(baseMaps,overlays).addTo(map);
/// Retrieve the emitter GeoJSON data.
d3.json("clean_map_data_full.json").then(function(data) {
    //
    function StyleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor:getColor(feature.properties.carbon_dioxide_emission),
            color: "#000000",
            radius: getRadius(feature.properties.carbon_dioxide_emission),
            stroke:true,
            weight:0.5
        };    
    };
// This function determines the color of the marker based on the magnitude of the emissions
    function getColor(carbon_dioxide_emission) {
        if (carbon_dioxide_emission > 179000) {
        return "#ea2c2c";
        }
        if (carbon_dioxide_emission > 52600) {
        return "#ea822c";
        }
        if (carbon_dioxide_emission > 22800) {
        return "#ee9c00";
        }
        if (carbon_dioxide_emission >= 0) {
        return "#eecc00";
        };
    };
  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
    function getRadius(carbon_dioxide_emission) {
        if (carbon_dioxide_emission > 179000) {
            return 20;
        }
        if (carbon_dioxide_emission > 52600) {
            return 15;
        }
        if (carbon_dioxide_emission > 22800) {
            return 10;
        }
        if (carbon_dioxide_emission >= 0) {
            return 5;
        };
    };
    // create geojson layer with retrieved data
    L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      		console.log(data);
      		return L.circleMarker(latlng);
        },
        // We set the style for each circleMarker using our styleInfo function.
      style: StyleInfo,
        // We create a popup for each circleMarker to display the magnitude and location of the earthquake
        //  after the marker has been created and styled.
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Emissions: " + feature.properties.carbon_dioxide_emission);
    }
    }).addTo(allEmitters);

// Then we add the earthquake layer to our map.
allEmitters.addTo(map);

    // L.geoJson(data, {
    //   // We turn each feature into a circleMarker on the map.
    //   pointToLayer: function(feature, latlng) {
    //       console.log(data);
    //       return L.circleMarker(latlng);
    //     },
    //     // We set the style for each circleMarker using our styleInfo function.
    //   style: StyleInfo,
    //     // We create a popup for each circleMarker to display the magnitude and location of the earthquake
    //     //  after the marker has been created and styled.
    //     onEachFeature: function(feature, layer) {
    //         layer.bindPopup("Emissions: " + feature.properties.carbon_dioxide_emission);
    // }
    // }).addTo(ExtrudedEmitters);


// Here we create a legend control object.
let legend = L.control({
    position: "bottomright"
  });
  
  // Then add all the details for the legend
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
  
    const emissions = ["0 < x < 22800", "22800 < x < 52600", "52600 < x < 179000", "x > 179000"];

    const colors = [
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"
    ];

    // Looping through our intervals to generate a label with a colored square for each interval.
    for (var i = 0; i < emissions.length; i++) {
      console.log(colors[i]);
      div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        (emissions[i] ? ":" + " " + emissions[i] + "<br>" : "+");
      }
      return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(map);

});

  // extruded emitters layer
  d3.json("clean_map_data_full.json").then(function(data) {

  });

