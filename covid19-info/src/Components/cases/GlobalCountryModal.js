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
          <div className='modal-cases-country-name'>
            <img
              src={country.countryInfo.flag}
              alt='flag'
              className='modal-country-flag'
            />
            <p>{country.country}</p>
          </div>

          <div className='modal-cases-data-container'>
            <p>{Intl.NumberFormat().format(country.cases)}</p>
            <p>{Intl.NumberFormat().format(country.recovered)}</p>
            <p>{Intl.NumberFormat().format(country.deaths)}</p>
            <p className='modal-daily-cases'>
              {country.todayCases === 0 ? `-` : country.todayCases}
            </p>
            <p className='modal-daily-cases'>
              {country.todayRecovered === 0 ? `-` : country.todayRecovered}
            </p>
            <p className='modal-daily-cases'>
              {country.todayDeaths === 0 ? `-` : country.todayDeaths}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalCountryModal;
