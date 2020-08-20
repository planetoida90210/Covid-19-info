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
      <p>{country}</p>
      <p>{cases}</p>
      <p>{recovered}</p>
      <p>{deaths}</p>
    </div>
  );
};

export default GlobalSingleCountry;
