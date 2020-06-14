import React from "react";
import { Link } from "react-router-dom";
import stayhome from "../../assets/images/Home/stayhome.svg";
const RandomInfo = () => {
  const info = [
    {
      title: "zostań w domu bądź bohaterem",
      logo: `${stayhome}`,
    },
  ];
  return (
    <div className='random-info-container'>
      <h2 className='random-info-header'>
        zostan w domu badz bohaterem
        <Link style={{ textDecoration: "none" }}>
          <div className='random-info-more'>czytaj więcej</div>
        </Link>
      </h2>
      <img src={stayhome} alt='pandemic-logo' className='random-info-image' />
    </div>
  );
};

export default RandomInfo;
