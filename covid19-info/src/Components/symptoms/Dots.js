import React from "react";
import Dot from "./Dot";
const Dots = ({ activeIndex, cards }) => {
  return (
    <div className='dots-container'>
      {cards.map((card, i) => (
        <Dot key={card.title} active={activeIndex === i} />
      ))}
    </div>
  );
};

export default Dots;
