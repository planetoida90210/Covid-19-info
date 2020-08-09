import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import useSWR from "swr";
import lookup from "country-code-lookup";

import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoicGxhbmV0b2lkYTkwMjEwIiwiYSI6ImNrZGQyeGU4ZzE3d2kzMXQ5aXQydGRycDcifQ.iDPOx8aTyZDvXtcEGQjX2Q";
const Map = () => {
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
      });
    }
  }, [data]);

  return (
    <div className='active-map-container'>
      <div className='mapBox' ref={mapboxElRef} />
    </div>
  );
};

export default Map;

// useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapboxElRef.current,
//       style: "mapbox://styles/planetoida90210/ckdeleaer56nu1io8blg36t0l",
//       center: [20, 51],
//       zoom: 0.1,
//     });
//     map.addControl(new mapboxgl.NavigationControl());
//   }, []);
