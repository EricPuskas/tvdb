import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import SearchInput from "./SearchInput";

describe("SearchInput Component", () => {
  describe("Renders with props", () => {
    const props = {
      getInputProps: jest.fn(),
      selectedItem: "test",
      highlightedIndex: 0,
      getItemProps: jest.fn(),
      onSearchChange: jest.fn(),
      searchText: "String",
      isOpen: true,
      getListItemProps: jest.fn(),
      items: [1, 2, 3, 4],
      loading: false
    };
    const component = shallow(<SearchInput {...props} />);
    const wrapper = findByAttribute(component, "search-input");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });

    it("Should pass props from library to input", () => {
      expect(props.getInputProps).toHaveBeenCalled();
    });
  });
});
