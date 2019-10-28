import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Accordion.scss";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    let accordion = classNames({
      accordion: true,
      "accordion-open": isOpen
    });
    return (
      <div className={accordion}>
        <div onClick={onClick} style={{ cursor: "pointer", padding: "0 15px" }}>
          <h2>{label}</h2>
          <div style={{ float: "right" }}>
            {!isOpen && (
              <span>
                <i className="fas fa-plus"></i>
              </span>
            )}
            {isOpen && (
              <span style={{ color: "#fff" }}>
                <i className="fas fa-minus"></i>
              </span>
            )}
          </div>
        </div>
        {isOpen && <div className="accordion-body">{this.props.children}</div>}
      </div>
    );
  }
}

export default AccordionSection;
