import React from "react";
import AcitveButton from "../cases/AcitveButton";
import InputButton from "../cases/InputButton";
import ChartButton from "../cases/ChartButton";
const MapButtons = ({
  countries,
  pickCountry,
  setPickCountry,
  chooseCountry,
  countriesData,
}) => {
  return (
    <div className='map-buttons-container'>
      <AcitveButton />
      <InputButton
        countriesData={countriesData}
        countries={countries}
        pickCountry={pickCountry}
        setPickCountry={setPickCountry}
        chooseCountry={chooseCountry}
      />
      <ChartButton />
    </div>
  );
};

export default MapButtons;
