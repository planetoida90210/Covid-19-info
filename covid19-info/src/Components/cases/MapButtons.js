import React from "react";
import AcitveButton from "../cases/AcitveButton";
import InputButton from "../cases/InputButton";
import ChartButton from "../cases/ChartButton";
const MapButtons = ({
  countries,
  pickCountry,
  setPickCountry,
  chooseCountry,
}) => {
  return (
    <div className='map-buttons-container'>
      <AcitveButton />
      <InputButton
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
