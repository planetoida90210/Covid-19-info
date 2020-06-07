import React from "react";
import Header from "../layout/Header";
import Symptoms from "../symptoms/Symptoms";

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Symptoms />
    </div>
  );
};

export default Home;
