import React from "react";
import AcitveButton from "../cases/AcitveButton";
import InputButton from "../cases/InputButton";
const MapButtons = ({ countries }) => {
  return (
    <div className='map-buttons-container'>
      <AcitveButton />
      <InputButton countries={countries} />
    </div>
  );
};

export default MapButtons;
