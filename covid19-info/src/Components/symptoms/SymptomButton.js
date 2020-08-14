import React from "react";
import { NavLink } from "react-router-dom";

const SymptomButton = ({ id }) => {
  return (
    <NavLink to={`symptoms/${id}`} className='symptom-link'>
      <button className='symptom-button'>czytaj</button>
    </NavLink>
  );
};

export default SymptomButton;
