import React from "react";
import { shallow, mount } from "enzyme";
import { findByAttribute } from "../../utils";
import { BrowserRouter } from "react-router-dom";
import ShowItem from "./ShowItem";

describe("Show Item Component", () => {
  describe("Gets Props", () => {
    const props = {
      show: {
        id: 12345,
        series: "Arrow",
        network: "The CW",
        banner: "graphical/257655-g9.jpg",
        firstAired: "2017-03-31",
        overview: "Lorem Ipsum Etc etc"
      }
    };
    const component = mount(
      <BrowserRouter>
        <ShowItem {...props} />
      </BrowserRouter>
    );
    const wrapper = findByAttribute(component, "showitem");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Gets No Props", () => {
    const component = shallow(<ShowItem />);
    const wrapper = findByAttribute(component, "showitem");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should not render", () => {
      expect(wrapper.length).toBe(0);
    });
  });
});
