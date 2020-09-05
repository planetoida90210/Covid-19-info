import React from "react";

const AutoCompleteItem = ({ country }) => {
  return (
    <>
      <li className='autocomplete-search-country'>{country}</li>
    </>
  );
};

export default AutoCompleteItem;
