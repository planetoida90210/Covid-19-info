import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import GlobalCases from "../cases/GlobalCases";
import headerIcon from "../../assets/images/Map/airplane.svg";
import MapButtons from "../cases/MapButtons";
import Map from "../cases/Map";

import { fetchCountriesData } from "../../api";
const MapVirus = () => {
  const headerContent = {
    title: "przypadki",
    description: "aktualizacja danych co 24h",
    icon: `${headerIcon}`,
  };
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountriesData(await fetchCountriesData());
    };
    fetchAPI();
  }, [setCountriesData]);
  const countries = countriesData.map((singleCountry) => singleCountry.country);
  return (
    <div className='map-virus-container'>
      <Header headerContent={headerContent} />
      <MapButtons countries={countries} />
      <div className='map-navigation'>
        <div className='map-navigation-button'>
          <span className='fas fa-list-ul' />
          lista
        </div>
        <div className='map-navigation-button'>
          <span className='fas fa-map-marker-alt' />
          mapa
        </div>
      </div>
      <Map />
      <GlobalCases />
    </div>
  );
};

export default MapVirus;
