import React from "react";
import { mount } from "enzyme";
import { findByAttribute } from "../../utils";
import { BrowserRouter } from "react-router-dom";
import Logo from "./Logo";

describe("SearchInput Component", () => {
  describe("Renders with props", () => {
    const props = {
      text: "test"
    };
    const component = mount(
      <BrowserRouter>
        <Logo {...props} />
      </BrowserRouter>
    );
    const wrapper = findByAttribute(component, "logo");
    const logoText = findByAttribute(component, "logo-text");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });

    it("Should render text", () => {
      expect(logoText.length).toBe(1);
    });
  });
  describe("Renders with no props", () => {
    const component = mount(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    const wrapper = findByAttribute(component, "logo");
    const logoText = findByAttribute(component, "logo-text");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });

    it("Should render text", () => {
      expect(logoText.length).toBe(0);
    });
  });
});
