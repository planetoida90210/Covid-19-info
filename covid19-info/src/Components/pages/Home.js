import React from "react";
import Header from "../layout/Header";
import Symptoms from "../symptoms/Symptoms";
import RandomInfo from "../randomInfo/RandomInfo";

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Symptoms />
      <RandomInfo />
    </div>
  );
};

export default Home;
