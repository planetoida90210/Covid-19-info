import React from "react";
import GlobalSummaryCases from "./GlobalSummaryCases";

const GlobalList = ({ countriesData, globalData }) => {
  return (
    <div className='global-country-list-container'>
      <GlobalSummaryCases globalData={globalData} />
      <ul className='global-country-table'></ul>
    </div>
  );
};

export default GlobalList;
