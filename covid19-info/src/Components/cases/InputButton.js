import React, { useState, useEffect, useRef, useMemo } from "react";
import AutocompleteItem from "./AutoCompleteItem";
const InputButton = ({ countries }) => {
  const [isVisible, setVisibility] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");
  const [cursor, setCursor] = useState(-1);

  const searchContainer = useRef(null);
  const searchResultRef = useRef(null);

  //setting handle click outside searchbar to close search

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const suggestions = useMemo(() => {
    if (!searchCountry) return countries;
    return countries.filter((country) =>
      country.toLowerCase().includes(searchCountry.toLowerCase())
    );
  }, [countries, searchCountry]);

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
        type='search'
        placeholder='Szukaj'
        onClick={showAutoSuggestion}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
      <div
        className={
          isVisible ? "autocomplete-search-bar" : "autocomplete-search-bar_hide"
        }
      >
        <ul className='autocomplete-list' ref={searchResultRef}>
          {suggestions.map((country) => (
            <AutocompleteItem key={country} country={country} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputButton;
