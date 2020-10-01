import React from "react";

const AutoCompleteItem = ({
  country,
  setPickCountry,
  pickCountry,
  chooseCountry,
  hideAutoSuggestion,
}) => {
  return (
    <>
      <li
        onClick={() => {
          setPickCountry(!pickCountry);
          hideAutoSuggestion();
        }}
        className='autocomplete-search-country'
      >
        {country}
      </li>
    </>
  );
};

export default AutoCompleteItem;
