import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import useSWR from "swr";
import lookup from "country-code-lookup";

import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoicGxhbmV0b2lkYTkwMjEwIiwiYSI6ImNrZGQyeGU4ZzE3d2kzMXQ5aXQydGRycDcifQ.iDPOx8aTyZDvXtcEGQjX2Q";
const Map = ({activeCountry}) => {
  const mapboxElRef = useRef(null);
  const fetcher = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) =>
        data.map((point, index) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [point.countryInfo.long, point.countryInfo.lat],
          },
          properties: {
            id: index, // unique identifier in this case the index
            country: point.country,
            cases: point.cases,
            dailyCases: point.todayCases,
            deaths: point.deaths,
          },
        }))
      );

  // Fetching our data with swr package
  const { data } = useSWR(
    "https://corona.lmao.ninja/v2/countries?sort=country",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const map = new mapboxgl.Map({
        container: mapboxElRef.current,
        style: "mapbox://styles/planetoida90210/ckdeleaer56nu1io8blg36t0l",
        center: [20, 51],
        zoom: 1,
      });
      
     if(activeCountry){
      map.on('load', function() {
        //On map load, we want to do some stuff
        map.addLayer({
          //here we are adding a layer containing the tileset we just uploaded
          id: 'countries', //this is the name of our layer, which we will need later
          source: {
            type: 'vector',
            url: 'mapbox://styles/planetoida90210/ckdeleaer56nu1io8blg36t0l', // <--- Add the Map ID you copied here
          },
          'source-layer': 'ne_10m_admin_0_countries-dqlykg', // <--- Add the source layer name you copied here
          type: 'fill',
          paint: {
            'fill-color': '#52489C', //this is the color you want your tileset to have (I used a nice purple color)
            'fill-outline-color': '#F2F2F2', //this helps us distinguish individual countries a bit better by giving them an outline
          },
        });
      
        map.setFilter(
          'countries',
          ['in', 'ADM0_A3_IS'].concat(['USA', 'AUS', 'NGA']),
        ); // This line lets us filter by country codes.
        })      
   
     } else {
// Call this method when the map is loaded

map.once("load", function () {
  // Add our SOURCE
  // with id "points"
  map.addSource("points", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: data,
    },
  });


  // Add our layer
  map.addLayer({
    id: "circles",
    source: "points", // this should be the id of the source
    type: "circle",
    // paint properties
    paint: {
      "circle-opacity": 0.75,
      "circle-stroke-width": 1,
      "circle-radius": 5,
      "circle-color": "#FFEB3B",
    },
  });
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  // Variable to hold the active country/province on hover
  let lastId;

  // Mouse move event
  map.on("mousemove", "circles", (e) => {
    // Get the id from the properties
    const id = e.features[0].properties.id;

    // Only if the id are different we process the tooltip
    if (id !== lastId) {
      lastId = id;

      // Change the pointer type on move move
      map.getCanvas().style.cursor = "pointer";

      const {
        cases,
        deaths,
        country,
        province,
      } = e.features[0].properties;
      const coordinates = e.features[0].geometry.coordinates.slice();

      // Get all data for the tooltip
      const countryISO =
        lookup.byCountry(country)?.iso2 ||
        lookup.byInternet(country)?.iso2;

      const provinceHTML =
        province !== "null" ? `<p>Province: <b>${province}</b></p>` : "";

      const mortalityRate = ((deaths / cases) * 100).toFixed(2);

      const countryFlagHTML = Boolean(countryISO)
        ? `<img src="https://www.countryflags.io/${countryISO}/flat/64.png"></img>`
        : "";

      const HTML = `<p>Country: <b>${country}</b></p>
                ${provinceHTML}
                <p>Cases: <b>${cases}</b></p>
                <p>Deaths: <b>${deaths}</b></p>
                <p>Mortality Rate: <b>${mortalityRate}%</b></p>
                ${countryFlagHTML}`;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates).setHTML(HTML).addTo(map);
    }
  });

  // Mouse leave event
  map.on("mouseleave", "circles", function () {
    // Reset the last Id
    lastId = undefined;
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});
     }

      
    } 
  }, [data]);

  return (
    <div className='active-map-container'>
      <div className='mapBox' ref={mapboxElRef} />
    </div>
  );
};

export default Map;
