import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoicGxhbmV0b2lkYTkwMjEwIiwiYSI6ImNrZGQyeGU4ZzE3d2kzMXQ5aXQydGRycDcifQ.iDPOx8aTyZDvXtcEGQjX2Q";
const Map = () => {
  const mapboxElRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/planetoida90210/ckdeleaer56nu1io8blg36t0l",
      center: [20, 51],
      zoom: 0.1,
    });
    map.addControl(new mapboxgl.NavigationControl());
  }, []);
  return (
    <div className='active-map-container'>
      <div className='mapBox' ref={mapboxElRef} />
    </div>
  );
};

export default Map;
