import React from "react";

const InputButton = ({ countries }) => {
  console.log(countries);
  return (
    <div className='input-map-button'>
      <input type='text' placeholder='Search' />
    </div>
  );
};

export default InputButton;
