import React from "react";
import Rolling from "../../assets/img/rolling.svg";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <img src={Rolling} alt="Loading..." />
      <h2> Loading... </h2>
    </div>
  );
};

export default Loader;
