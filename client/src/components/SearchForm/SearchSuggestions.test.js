import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import SearchSuggestions from "./SearchSuggestions";

describe("SearchSuggestions Component", () => {
  describe("Opened", () => {
    const props = {
      isOpen: true,
      selectedItem: null,
      highlightedIndex: 0,
      getItemProps: jest.fn(),
      getListItemProps: jest.fn(),
      items: [
        "13 Reasons Why",
        "Alias",
        "American Horror Story",
        "Arrow",
        "Bates Motel",
        "Better Call Saul"
      ],
      loading: false
    };
    const component = shallow(<SearchSuggestions {...props} />);
    const wrapper = findByAttribute(component, "search-suggestions");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });

    it("Should pass props from library to input", () => {
      expect(props.getListItemProps).toHaveBeenCalled();
    });
  });
  describe("Not Opened", () => {
    const props = {
      isOpen: false,
      selectedItem: null,
      highlightedIndex: 0,
      getItemProps: jest.fn(),
      getListItemProps: jest.fn(),
      items: [
        "13 Reasons Why",
        "Alias",
        "American Horror Story",
        "Arrow",
        "Bates Motel",
        "Better Call Saul"
      ],
      loading: false
    };
    const component = shallow(<SearchSuggestions {...props} />);
    const wrapper = findByAttribute(component, "search-suggestions");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(0);
    });
  });
});
