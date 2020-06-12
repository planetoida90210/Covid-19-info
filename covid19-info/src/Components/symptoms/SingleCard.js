import React from "react";

const SingleCard = ({ symptom, translate, transition }) => {
  return (
    <div
      className='single-symptom-card'
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
      }}
    >
      <div className='single-symptom-hero-container'>
        <img
          src={symptom.logo}
          alt='symptom logo'
          className='single-symptom-hero'
        />
      </div>
    </div>
  );
};

export default SingleCard;
