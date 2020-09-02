import React, { useState, useEffect } from "react";
import AutocompleteItem from "./AutoCompleteItem";
const InputButton = ({ countries }) => {
  const [isVisible, setVisibility] = useState(false);

  const showAutoSuggestion = () => setVisibility(true);
  const hideAutoSuggestion = () => setVisibility(false);
  return (
    <div className='input-map-button'>
      <input
        className='input-search-countries'
        type='text'
        placeholder='Szukaj'
        onClick={showAutoSuggestion}
      />
      <div
        className={
          isVisible ? "autocomplete-search-bar" : "autocomplete-search-bar_hide"
        }
      >
        <ul className='autocomplete-list'>
          <AutocompleteItem />
          <AutocompleteItem />
          <AutocompleteItem />
        </ul>
      </div>
    </div>
  );
};

export default InputButton;
