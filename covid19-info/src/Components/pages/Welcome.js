import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Welcome/main-logo.svg";
import doctor from "../../assets/images/Welcome/doctor-mask.svg";
import doctorMain from "../../assets/images/Welcome/doctor-gloves.svg";
import virus from "../../assets/images/Welcome/bacteria-cell-single.svg";
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <h1 className='welcome-logo'>
        c
        <span className='welcome-logo__svg'>
          <img src={logo} alt='logo-virus' />
        </span>
        vid-19
      </h1>
      <h3 className='welcome-name'>coronavirus app</h3>
      <div className='welcome-images-container'>
        <div className='one'>
          <img src={doctor} alt='doctor-logo' className='doctor-back' />
        </div>
        <img src={doctorMain} alt='doctor-logo' className='doctor-front' />
        <div className='two'>
          <img src={doctor} alt='doctor-logo' className='doctor-back' />
        </div>
      </div>

      <p className='welcome-description'>
        Sprawdź jak uchronić się przed Covid-19
      </p>
      <p className='welcome-description__secondary'>
        Bądź świadomy zagrożenia i przeczytaj infomację dotyczące wirusa
        SARS-CoV-2
      </p>
      <Link className='welcome-login-link' to='/'>
        <button className='welcome-login'>więcej</button>
      </Link>
      <img src={virus} alt='bacteria-cell' />
      <img src={virus} alt='bacteria-cell' />
      <img src={virus} alt='bacteria-cell' />
    </div>
  );
};

export default Welcome;
