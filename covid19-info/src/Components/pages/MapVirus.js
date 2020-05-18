import React from "react";
import GlobalCases from "../cases/GlobalCases";

const MapVirus = ({ globalData }) => {
  console.log(globalData);
  return (
    <div>
      map virus
      <GlobalCases />
    </div>
  );
};

export default MapVirus;
