import React, { useEffect, useState } from "react";
import axios from "axios";

const GlobalCases = () => {
  const [latest, setLatest] = useState("");
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((res) => {
        setLatest(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div classame='global-cases-container'>
      <h5 className='global-cases_description'>zakażonych</h5>
      <p className='global-cases_counter'>{latest.cases}</p>
      <h5 className='global-cases_description'>wyzdrowiało</h5>
      <p className='global-cases_counter'>{latest.recovered}</p>
      <h5 className='global-cases_description'>umarło</h5>
      <p className='global-cases_counter'>{latest.deaths}</p>
    </div>
  );
};

export default GlobalCases;
