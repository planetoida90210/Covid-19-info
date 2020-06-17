import React, { setState } from "react";
import Header from "../layout/Header";
import GlobalCases from "../cases/GlobalCases";
import headerIcon from "../../assets/images/Map/airplane.svg";
import MapButtons from "../cases/MapButtons";
import Map from "../cases/Map";
import AcitveButton from "../cases/AcitveButton";
import InputButton from "../cases/InputButton";
const MapVirus = () => {
  const headerContent = {
    title: "przypadki",
    description: "aktualizacja danych co 24h",
    icon: `${headerIcon}`,
  };

  return (
    <div>
      <Header headerContent={headerContent} />
      <AcitveButton />
      <InputButton />
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
      <MapButtons />
      <Map />
      <GlobalCases />
    </div>
  );
};

export default MapVirus;
