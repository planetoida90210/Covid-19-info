import React from "react";
import GlobalSummaryCases from "./GlobalSummaryCases";
import GlobalSingleCountry from "./GlobalSingleCountry";

const GlobalList = ({ countriesData, globalData }) => {
  return (
    <div className='global-country-list-container'>
      <GlobalSummaryCases globalData={globalData} />
      <ul className='global-country-table'>
        <div className='cases-list-info'>
          <p>kraje</p>
          <p>zakażeni</p>
          <p>ozdrowieńcy</p>
          <p>zgony</p>
        </div>
        {countriesData.map((country) => (
          <li key={country.country} className='global-table-single-country'>
            <GlobalSingleCountry country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalList;
