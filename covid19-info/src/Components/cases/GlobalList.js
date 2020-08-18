import React from "react";

const GlobalList = ({ countriesData, globalData }) => {
  const { active, deaths, recovered } = globalData;
  return (
    <div className='global-country-list-container'>
      <div className='global-country-list-summary'>
        <h5 className='global-cases_description'>zakażonych</h5>
        <p className='global-cases_counter'>
          {Intl.NumberFormat().format(active)}
        </p>
        <h5 className='global-cases_description'>wyzdrowiało</h5>
        <p className='global-cases_counter'>
          {Intl.NumberFormat().format(recovered)}
        </p>
        <h5 className='global-cases_description'>umarło</h5>
        <p className='global-cases_counter'>
          {Intl.NumberFormat().format(deaths)}
        </p>
      </div>
    </div>
  );
};

export default GlobalList;
