import React from "react";
import Header from "../layout/Header";
import Symptoms from "../symptoms/Symptoms";
import RandomInfo from "../randomInfo/RandomInfo";
import headerIcon from "../../assets/images/Welcome/doctor-gloves.svg";

const Home = () => {
  const headerContent = {
    title: "objawy",
    description: "objawy mogą ukazać się od 2-14 dni po zarażeniu",
    icon: `${headerIcon}`,
  };
  return (
    <div className='home-container'>
      <Header headerContent={headerContent} />
      <Symptoms />
      <RandomInfo />
    </div>
  );
};

export default Home;
