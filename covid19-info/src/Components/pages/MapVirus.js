import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import GlobalCases from "../cases/GlobalCases";
import Spinner from "../layout/Spinner";
import GlobalList from "../cases/GlobalList";
import AutocompleteItem from "../cases/AutoCompleteItem";
import ActiveCountry from "../cases/ActiveCountry";
import headerIcon from "../../assets/images/Map/airplane.svg";
import MapButtons from "../cases/MapButtons";
import Map from "../cases/Map";

import { fetchCountriesData, fetchGlobalData } from "../../api";
const MapVirus = () => {
  const headerContent = {
    title: "przypadki",
    description: "aktualizacja danych co 24h",
    icon: `${headerIcon}`,
  };
  const [activeTab, setActiveTab] = useState(true);
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [pickCountry, setPickCountry] = useState(false);
  const [choosenCountry, setChoosenCountry] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setGlobalData(await fetchGlobalData());
    };
    fetchAPI();
  }, []);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountriesData(await fetchCountriesData());
    };
    fetchAPI();
  }, [setCountriesData]);
  const chooseCountry = (country) => {
    return setChoosenCountry(country);
  };

  const countries = countriesData.map((singleCountry) => singleCountry.country);
  const { updated } = globalData;
  return updated ? (
    <div className='map-virus-container'>
      <Header headerContent={headerContent} />
      <MapButtons
        countries={countries}
        pickCountry={pickCountry}
        setPickCountry={setPickCountry}
        chooseCountry={chooseCountry}
      />
      <div className='map-navigation'>
        <button
          className={
            activeTab ? "map-navigation-button" : "map-navigation-button-active"
          }
          onClick={() => setActiveTab(false)}
        >
          <span className='fas fa-list-ul' />
          lista
        </button>
        <button
          className={
            activeTab ? "map-navigation-button-active" : "map-navigation-button"
          }
          onClick={() => setActiveTab(true)}
        >
          <span className='fas fa-map-marker-alt' />
          mapa
        </button>
      </div>

      {activeTab ? (
        pickCountry ? (
          <ActiveCountry choosenCountry={choosenCountry} />
        ) : (
          <>
            <Map />
            <GlobalCases globalData={globalData} />
          </>
        )
      ) : (
        <GlobalList countriesData={countriesData} globalData={globalData} />
      )}
    </div>
  ) : (
    <div className='map-virus-container'>
      <Header headerContent={headerContent} />
      <Spinner />
    </div>
  );
};

export default MapVirus;
