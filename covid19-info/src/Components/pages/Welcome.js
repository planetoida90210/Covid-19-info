import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../assets/images/Welcome/doctor-mask.svg";
import doctorMain from "../../assets/images/Welcome/doctor-gloves.svg";
import virus from "../../assets/images/Welcome/bacteria-cell-single.svg";
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <h1 className='welcome-logo'>
        c<span>logo</span>vid-19
      </h1>
      <h3 className='welcome-name'>coronavirus app</h3>
      <img src={doctor} alt='doctor-logo' />
      <img src={doctorMain} alt='doctor-logo' />
      <img src={doctor} alt='doctor-logo' />
      <p className='welcome-description'>
        Sprawdź jak uchronić się przed Covid-19
      </p>
      <p className='welcome-description__secondary'>
        Bądź świadomy zagrożenia i przeczytaj infomację dotyczące wirusa
        SARS-CoV-2
      </p>
      <Link to='/'>
        <button>więcej</button>
      </Link>
      <img src={virus} alt='bacteria-cell' />
      <img src={virus} alt='bacteria-cell' />
      <img src={virus} alt='bacteria-cell' />
    </div>
  );
};

export default Welcome;
