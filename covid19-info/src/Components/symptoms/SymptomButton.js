import React from "react";
import { Link } from "react-router-dom";

const SymptomButton = ({ id }) => {
  return (
    <Link to={`symptoms/${id}`}>
      <div className='symptom-button'>czytaj</div>
    </Link>
  );
};

export default SymptomButton;
