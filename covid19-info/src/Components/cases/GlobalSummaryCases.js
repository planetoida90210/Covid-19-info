import React from "react";

const GlobalSummaryCases = ({ globalData }) => {
  const { active, recovered, deaths } = globalData;
  return (
    <div className='global-country-list-summary'>
      <h5 className='global-cases-detail_description'>zakażonych</h5>
      <p className='global-cases-detail_counter'>
        {Intl.NumberFormat().format(active)}
      </p>
      <h5 className='global-cases-detail_description'>wyzdrowiało</h5>
      <p className='global-cases-detail_counter'>
        {Intl.NumberFormat().format(recovered)}
      </p>
      <h5 className='global-cases-detail_description'>umarło</h5>
      <p className='global-cases-detail_counter'>
        {Intl.NumberFormat().format(deaths)}
      </p>
    </div>
  );
};

export default GlobalSummaryCases;
