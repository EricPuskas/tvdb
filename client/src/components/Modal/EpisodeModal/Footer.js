import React from "react";

const Footer = props => {
  return (
    <div
      className="modal-footer text-center"
      style={{ paddingBottom: "1rem", borderTop: "1px solid #0000002e" }}
    >
      {props.children}
    </div>
  );
};

export default Footer;
