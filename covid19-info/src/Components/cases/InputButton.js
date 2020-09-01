import React, { useState, useEffect } from "react";

const InputButton = ({ countries }) => {
  return (
    <div className='input-map-button'>
      <input
        className='input-search-countries'
        type='text'
        placeholder='Szukaj'
      />
      <div className='autocomplete-search-bar'>
        <ul className='autocomplete-list'>
          <li>elo</li>
        </ul>
      </div>
    </div>
  );
};

export default InputButton;
