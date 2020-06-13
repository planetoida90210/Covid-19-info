import React from "react";
import { Link } from "react-router-dom";

const SymptomButton = ({ id }) => {
  return (
    <Link to={`symptoms/${id}`} className='symptom-link'>
      <button className='symptom-button'>czytaj</button>
    </Link>
  );
};

export default SymptomButton;
