import React from "react";

const ActiveCountry = ({ choosenCountry }) => {
  const elo = { ...choosenCountry };
  const { cases, country } = elo[0];
  return <div>{country}</div>;
};

export default ActiveCountry;
