import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import ShowOverview from "./ShowOverview";

describe("Show Overview Component", () => {
  describe("Renders with props", () => {
    const props = {
      description: "Lorem Ipsum"
    };
    const component = shallow(<ShowOverview {...props} />);
    const wrapper = findByAttribute(component, "showoverview");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
  });
});
