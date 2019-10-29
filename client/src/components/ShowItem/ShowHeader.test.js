import React from "react";
import { shallow } from "enzyme";
import ShowHeader from "./ShowHeader";

describe("Show Header Component", () => {
  const warn = console.warn;
  console.warn = jest.fn();
  describe("Invalid data for Network and Date", () => {
    const propsInvalid = {
      title: "Arrow",
      firstAired: "not_a_valid_date",
      network: ""
    };
    const component = shallow(<ShowHeader {...propsInvalid} />);
    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should display 'Unknown' where data is invalid", () => {
      const date = component
        .find(`[data-test="firstAired"]`)
        .childAt(0)
        .debug();
      const network = component
        .find(`[data-test="network"]`)
        .childAt(0)
        .debug();
      expect(date).toEqual("Unknown");
      expect(network).toEqual("Unknown");
    });

    expect(console.warn).toHaveBeenCalled();
  });

  describe("Valid data for Network and Date", () => {
    const propsValid = {
      title: "Arrow",
      firstAired: "2017-03-31",
      network: "HBO"
    };
    const component = shallow(<ShowHeader {...propsValid} />);
    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should display accordingly", () => {
      const date = component.find(`[data-test="firstAired"]`).props();
      const network = component
        .find(`[data-test="network"]`)
        .childAt(0)
        .debug();

      expect(date.children.props.children).toEqual(propsValid.firstAired);
      expect(network).toEqual(propsValid.network);
    });
  });
  console.warn = warn; // Return things to normal so other tests aren't affected.
});
