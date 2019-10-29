import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
import AccordionSection from "./AccordionSection";

const Accordion = ({ children, allowMultipleOpen }) => {
  const openSections = {};
  const [opened, setOpened] = useState({});
  useEffect(() => {
    if (children) {
      children.forEach(child => {
        if (child && child.props.isOpen) {
          openSections[child.props.label] = true;
        }
      });
    }
    setOpened(openSections);
    // eslint-disable-next-line
  }, []);

  const onClick = label => {
    const isOpen = !!opened[label];

    if (allowMultipleOpen) {
      setOpened({
        ...opened,
        [label]: !isOpen
      });
    } else {
      setOpened({
        [label]: !isOpen
      });
    }
  };

  return (
    <>
      {children.map(child => {
        if (child) {
          return (
            <AccordionSection
              key={uuid()}
              isOpen={child && !!opened[child.props.label]}
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
};

export default Accordion;
