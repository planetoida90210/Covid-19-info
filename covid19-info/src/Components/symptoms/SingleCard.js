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
      <h4 className='single-symptom-header'>{symptom.title}</h4>
      <p className='single-symptom-shortdesc'>{symptom.shortDesc}</p>
    </div>
  );
};

export default SingleCard;
