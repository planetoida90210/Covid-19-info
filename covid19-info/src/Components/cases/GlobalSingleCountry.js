import React, { useState } from "react";
import GlobalCountryModal from "./GlobalCountryModal";
const GlobalSingleCountry = ({ country, setBlured, blured }) => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  return (
    <>
      {!show ? (
        <div onClick={openModal} className='global-single-country-container'>
          <img
            src={country.countryInfo.flag}
            alt='flag'
            className='global-single-country-flag'
          />
          <p className='global-country_data'>{country.country}</p>
          <p className='global-country_data'>
            {Intl.NumberFormat().format(country.cases)}
          </p>
          <p className='global-country_data'>
            {Intl.NumberFormat().format(country.recovered)}
          </p>
          <p className='global-country_data'>
            {Intl.NumberFormat().format(country.deaths)}
          </p>
        </div>
      ) : (
        <GlobalCountryModal
          closeModal={closeModal}
          show={show}
          country={country}
        />
      )}
    </>
  );
};

export default GlobalSingleCountry;
