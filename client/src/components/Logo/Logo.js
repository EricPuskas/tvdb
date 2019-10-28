import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = ({ text }) => {
  return (
    <div className="Logo">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/zenipsstudio/image/upload/v1572047365/logo.png"
          alt="TVDB"
        />
      </Link>
      {text ? <h2> {text} </h2> : null}
    </div>
  );
};

export default Logo;
