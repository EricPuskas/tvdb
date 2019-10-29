import React from "react";
import { mount } from "enzyme";
import { findByAttribute } from "../../utils";
import SearchForm from "./SearchForm";

describe("SearchForm Component", () => {
  const component = mount(<SearchForm />);
  const wrapper = findByAttribute(component, "search-form");

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  const handleSubmit = jest.fn(e => jest.fn(e));
  const form = wrapper.find(`form`);
  form.simulate("submit");

  // Input is empty
  expect(handleSubmit).toHaveBeenCalledTimes(0);
});
