import React, { Fragment } from "react";
import spinner from "../../assets/images/Spinner/spinner.svg";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: "120px",
          height: "100vh",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "block",
        }}
      />
    </Fragment>
  );
};

export default Spinner;
