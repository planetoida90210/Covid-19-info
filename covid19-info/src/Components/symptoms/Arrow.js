import React from "react";
import leftArrow from "../../assets/images/Arrows/back.svg";
import rightArrow from "../../assets/images/Arrows/next.svg";
const Arrow = ({ direction, handleClick }) => {
  return (
    <>
      {direction === "left" ? (
        <div className='arrow' onClick={handleClick}>
          <img className='arrow-image' src={leftArrow} alt='back' />
        </div>
      ) : (
        <div className='arrow' onClick={handleClick}>
          <img className='arrow-image' src={rightArrow} alt='next' />
        </div>
      )}
    </>
  );
};

export default Arrow;
