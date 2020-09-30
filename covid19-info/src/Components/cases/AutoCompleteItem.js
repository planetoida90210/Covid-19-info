import React from "react";

const AutoCompleteItem = ({
  country,
  setPickCountry,
  pickCountry,
  chooseCountry,
}) => {
  return (
    <>
      <li
        onClick={() => setPickCountry(!pickCountry)}
        className='autocomplete-search-country'
      >
        {country}
      </li>
    </>
  );
};

export default AutoCompleteItem;
