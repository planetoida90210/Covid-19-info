import React from "react";
import AcitveButton from "../cases/AcitveButton";
import InputButton from "../cases/InputButton";
import ChartButton from "../cases/ChartButton";
const MapButtons = ({ countries }) => {
  return (
    <div className='map-buttons-container'>
      <AcitveButton />
      <InputButton countries={countries} />
      <ChartButton />
    </div>
  );
};

export default MapButtons;
