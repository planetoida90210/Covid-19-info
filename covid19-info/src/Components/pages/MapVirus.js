import React from "react";
import Header from "../layout/Header";
import GlobalCases from "../cases/GlobalCases";
import headerIcon from "../../assets/images/Map/airplane.svg";
const MapVirus = () => {
  const headerContent = {
    title: "przypadki",
    description: "aktualizacja danych co 24h",
    icon: `${headerIcon}`,
  };
  return (
    <div>
      <Header headerContent={headerContent} />
      <GlobalCases />
    </div>
  );
};

export default MapVirus;
