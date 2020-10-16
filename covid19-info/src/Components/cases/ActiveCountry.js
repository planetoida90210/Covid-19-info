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
      <div className='single-country-details-data-name'>
        <h5>{country}</h5>
        <img
          className='single-country-details-flag'
          src={countryInfo.flag}
          alt='country flag'
        />
      </div>
      <div className='single-country-details-map'>mapa</div>
      <div className='single-country-detail-table'>
        <p className='detail-table-name'>łącznie</p>
        <p className='detail-table-data'>{cases}</p>
        <p className='detail-table-name'>aktualnie</p>
        <p className='detail-table-data'>{active}</p>
        <p className='detail-table-name'>dzisiaj</p>
        <p className='detail-table-data'>{todayCases}</p>
        <p className='detail-table-name'>wyzdrowiało</p>
        <p className='detail-table-data'>{recovered}</p>
        <p className='detail-table-name'>dzisiaj</p>
        <p className='detail-table-data'>{todayRecovered}</p>
      </div>
    </div>
  );
};

export default ActiveCountry;
