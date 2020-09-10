import React from "react";

const AutoCompleteItem = ({
  country,
  setPickCountry,
  pickCountry,
  chooseCountry,
}) => {
  return (
    <>
      <li onClick={chooseCountry} className='autocomplete-search-country'>
        {country}
      </li>
    </>
  );
};

export default AutoCompleteItem;
