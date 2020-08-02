import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoicGxhbmV0b2lkYTkwMjEwIiwiYSI6ImNrZGQyeGU4ZzE3d2kzMXQ5aXQydGRycDcifQ.iDPOx8aTyZDvXtcEGQjX2Q";
const Map = () => {
  const mapboxElRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
      center: [0, 0],
      zoom: -1,
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
