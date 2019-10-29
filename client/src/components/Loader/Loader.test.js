import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import Loader from "./Loader";

describe("Loader Component", () => {
  const component = shallow(<Loader />);
  const wrapper = findByAttribute(component, "loader");
  const image = findByAttribute(component, "rolling");

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should render spinner without errors", () => {
    expect(image.length).toBe(1);
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
