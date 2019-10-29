import React from "react";
import classNames from "classnames";
import "./Accordion.scss";

const AccordionSection = ({ label, onClick, isOpen, children }) => {
  const handleClick = () => {
    onClick(label);
  };

  let accordion = classNames({
    accordion: true,
    "accordion-open": isOpen
  });
  return (
    <div className={accordion}>
      <div onClick={handleClick} className="accordion-pointer">
        <h2>{label}</h2>
        <div style={{ float: "right" }}>
          {!isOpen && (
            <span>
              <i className="fas fa-caret-down"></i>
            </span>
          )}
          {isOpen && (
            <span style={{ color: "#fff" }}>
              <i className="fas fa-caret-up"></i>
            </span>
          )}
        </div>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default AccordionSection;
