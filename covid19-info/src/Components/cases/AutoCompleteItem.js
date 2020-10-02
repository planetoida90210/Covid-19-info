import React from "react";

const AutoCompleteItem = ({
  country,
  setPickCountry,
  pickCountry,
  chooseCountry,
  hideAutoSuggestion,
  clearSearch,
}) => {
  return (
    <>
      <li
        onClick={() => {
          chooseCountry(country);
          setPickCountry(!pickCountry);
          hideAutoSuggestion();
          clearSearch();
        }}
        className='autocomplete-search-country'
      >
        {country}
      </li>
    </>
  );
};

export default AutoCompleteItem;
