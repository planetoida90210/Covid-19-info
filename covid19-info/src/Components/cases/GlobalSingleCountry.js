import React from "react";

const GlobalSingleCountry = ({
  country: { countryInfo, country, cases, recovered, deaths },
}) => {
  return (
    <div className='global-single-country-container'>
      <img
        src={countryInfo.flag}
        alt='flag'
        className='global-single-country-flag'
      />
      <p className='global-country_data'>{country}</p>
      <p className='global-country_data'>{cases}</p>
      <p className='global-country_data'>{recovered}</p>
      <p className='global-country_data'>{deaths}</p>
    </div>
  );
};

export default GlobalSingleCountry;
