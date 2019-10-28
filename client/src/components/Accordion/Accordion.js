import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import AccordionSection from "./AccordionSection";

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);

    const openSections = {};
    if (this.props.children) {
      this.props.children.forEach(child => {
        if (child && child.props.isOpen) {
          openSections[child.props.label] = true;
        }
      });
    }

    this.state = { openSections };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;
    return (
      <>
        {children.map(child => {
          if (child) {
            return (
              <AccordionSection
                key={uuid()}
                isOpen={child && !!openSections[child.props.label]}
                label={child && child.props.label}
                onClick={onClick}
              >
                {child && child.props.children}
              </AccordionSection>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  }
}

export default Accordion;
