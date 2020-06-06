import React from "react";
import leftArrow from "../../assets/images/Arrows/back.svg";
import rightArrow from "../../assets/images/Arrows/next.svg";
const Arrow = ({ direction, handleClick }) => {
  return (
    <>
      {direction === "left" ? (
        <div className='arrow' style={{ left: "15px" }} onClick={handleClick}>
          <img src={leftArrow} alt='back' />
        </div>
      ) : (
        <div className='arrow' style={{ right: "15px" }} onClick={handleClick}>
          <img src={rightArrow} alt='next' />
        </div>
      )}
    </>
  );
};

export default Arrow;
