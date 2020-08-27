import React from "react";

const GlobalCountryModal = ({ show, closeModal, country }) => {
  return (
    <>
      <div
        className={show ? "overlay-modal" : "hide-modal"}
        onClick={closeModal}
      >
        <div
          className={show ? "show-modal" : "hide-modal"}
          onClick={closeModal}
        >
          <img src={country.countryInfo.flag} alt='flag' />
          <p>{country.country}</p>
        </div>
      </div>
    </>
  );
};

export default GlobalCountryModal;
