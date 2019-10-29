import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import ShowData from "./ShowData";

describe("Show Data Component", () => {
  describe("Renders with props", () => {
    const props = {
      status: "Arrow",
      airsDayOfWeek: "2017-03-31",
      airsTime: "HBO",
      seasons: 3,
      episodes: 121
    };
    const component = shallow(<ShowData {...props} />);
    const wrapper = findByAttribute(component, "showdata");
    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
  });
});
