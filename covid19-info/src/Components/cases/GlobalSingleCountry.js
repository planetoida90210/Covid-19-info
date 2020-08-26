import React, { useState } from "react";
import GlobalCountryModal from "./GlobalCountryModal";
const GlobalSingleCountry = ({
  country: { countryInfo, country, cases, recovered, deaths },
}) => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      {!show ? (
        <div onClick={openModal} className='global-single-country-container'>
          <img
            src={countryInfo.flag}
            alt='flag'
            className='global-single-country-flag'
          />
          <p className='global-country_data'>{country}</p>
          <p className='global-country_data'>
            {Intl.NumberFormat().format(cases)}
          </p>
          <p className='global-country_data'>
            {Intl.NumberFormat().format(recovered)}
          </p>
          <p className='global-country_data'>
            {Intl.NumberFormat().format(deaths)}
          </p>
        </div>
      ) : (
        <GlobalCountryModal closeModal={closeModal} show={show} />
      )}
    </>
  );
};

export default GlobalSingleCountry;
