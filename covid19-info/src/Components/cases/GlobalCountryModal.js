import React from "react";

const GlobalCountryModal = ({ show, closeModal, country }) => {
  return (
    <>
      <div
        className={show ? "overlay-modal" : "hide-modal"}
        onClick={closeModal}
      >
        <div
          className={show ? "show-modal" : "hide-modal"}
          onClick={closeModal}
        >
          <img
            src={country.countryInfo.flag}
            alt='flag'
            className='modal-country-flag'
          />
          <div className='modal-cases-data-container'>
            <p>{country.cases}</p>
            <p>{country.recovered}</p>
            <p>{country.deaths}</p>
            <p className='modal-daily-cases'>{country.todayCases}</p>
            <p className='modal-daily-cases'>{country.todayRecovered}</p>
            <p className='modal-daily-cases'>{country.todayDeaths}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalCountryModal;
