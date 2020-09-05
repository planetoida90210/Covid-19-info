import React, { useState, useEffect, useRef } from "react";
import AutocompleteItem from "./AutoCompleteItem";
const InputButton = ({ countries }) => {
  const [isVisible, setVisibility] = useState(false);
  const searchContainer = useRef(null);
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(e.target)
    ) {
      hideAutoSuggestion();
    }
  };
  const showAutoSuggestion = () => setVisibility(true);
  const hideAutoSuggestion = () => setVisibility(false);
  return (
    <div className='input-map-button' ref={searchContainer}>
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
