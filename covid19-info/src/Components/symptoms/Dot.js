import React from "react";

const Dot = ({ active }) => {
  return (
    <div>
      {active ? (
        <span className='single-dot' style={{ background: "#46407C" }}></span>
      ) : (
        <span className='single-dot' style={{ background: "#21ABAB" }}></span>
      )}
    </div>
  );
};

export default Dot;
