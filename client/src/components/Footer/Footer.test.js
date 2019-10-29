import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import Footer from "./Footer";

describe("Footer Component", () => {
  const component = shallow(<Footer />);
  const wrapper = findByAttribute(component, "footer");

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
