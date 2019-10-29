import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import SearchBtn from "./SearchBtn";

describe("SearchBtn Component", () => {
  const component = shallow(<SearchBtn />);
  const wrapper = findByAttribute(component, "search-btn");

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
