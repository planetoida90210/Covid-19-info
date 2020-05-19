import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { fetchGlobalData } from "../../api";

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
    <div classame='global-cases-container'>
      <h5 className='global-cases_description'>zakażonych</h5>
      <p className='global-cases_counter'>{active}</p>
      <h5 className='global-cases_description'>wyzdrowiało</h5>
      <p className='global-cases_counter'>{recovered}</p>
      <h5 className='global-cases_description'>umarło</h5>
      <p className='global-cases_counter'>{deaths}</p>
    </div>
  );
};

export default GlobalCases;
