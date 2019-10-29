import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer" data-test="footer">
      <span> Copyright &copy; {new Date().getFullYear()} </span>
    </div>
  );
};

export default Footer;
