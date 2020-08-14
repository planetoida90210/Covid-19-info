import React from "react";
const SymptomDetails = ({ match }) => {
  return <div>{match.params.id}</div>;
};

export default SymptomDetails;
