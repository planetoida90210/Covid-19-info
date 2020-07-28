import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { fetchGlobalData } from "../../api";
import virus from "../../assets/images/Welcome/bacteria-cell-single.svg";

const GlobalCases = () => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setGlobalData(await fetchGlobalData());
    };
    fetchAPI();
  }, []);
  const { active, deaths, recovered, updated } = globalData;
  if (!updated) {
    return <Spinner />;
  }
  return (
    <div className='global-cases-container'>
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
      <img className='welcome-virus-svg' src={virus} alt='bacteria-cell' />
      <img className='welcome-virus-svg' src={virus} alt='bacteria-cell' />
      <img className='welcome-virus-svg' src={virus} alt='bacteria-cell' />
      <img className='welcome-virus-svg' src={virus} alt='bacteria-cell' />
      <img className='welcome-virus-svg' src={virus} alt='bacteria-cell' />
      <img className='welcome-virus-svg' src={virus} alt='bacteria-cell' />
    </div>
  );
};

export default GlobalCases;
