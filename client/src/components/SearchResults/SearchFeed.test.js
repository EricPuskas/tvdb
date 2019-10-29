import React from "react";
import { mount } from "enzyme";
import { findByAttribute } from "../../utils";
import SearchFeed from "./SearchFeed";
import { BrowserRouter } from "react-router-dom";

describe("SearchFeed Component", () => {
  describe("with Props", () => {
    const props = {
      search_results: [
        { id: 1, title: "ABC", overview: "ABCD" },
        { id: 2, title: "ABC", overview: "ABCD" },
        { id: 3, title: "ABC", overview: "ABCD" }
      ],
      error: null,
      displaySearchText: "ABC",
      loading: false
    };

    const component = mount(
      <BrowserRouter>
        <SearchFeed {...props} />
      </BrowserRouter>
    );
    const wrapper = findByAttribute(component, "search-feed");

    it("Should pass snapshot test", () => {
      expect(component.debug()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
  });
  describe("Missing Overview Prop", () => {
    const props = {
      search_results: [
        { id: 1, title: "ABC" },
        { id: 2, title: "ABC" },
        { id: 3, title: "ABC" }
      ],
      error: null,
      displaySearchText: "ABC",
      loading: false
    };

    const component = mount(
      <BrowserRouter>
        <SearchFeed {...props} />
      </BrowserRouter>
    );
    const wrapper = findByAttribute(component, "search-feed");
    const results = findByAttribute(component, "results");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
    it("Should display 0 results", () => {
      expect(results.length).toBe(0);
    });
  });
});
