import React from "react";

const ActiveCountry = ({ choosenCountry }) => {
  const elo = { ...choosenCountry };
  const {
    country,
    active,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    critical,
    tests,
    todayRecovered,
    updated,
    countryInfo,
  } = elo[0];
  return (
    <div className='active-country-details-data'>
      <div className='country-details-data-name'>
        <h5>{country}</h5>
        <img src={countryInfo.flag} alt='country flag' />
      </div>
      <div className='country-details-map'>mapa</div>
    </div>
  );
};

export default ActiveCountry;
