import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import ShowHeader from "./ShowHeader";

describe("Show Header Component", () => {
  describe("Renders with props", () => {
    const props = {
      title: "Arrow",
      genres: (
        <div>
          <li key={jest.fn()}>
            <span className="tag">test</span>
          </li>
        </div>
      ),
      rating: 8.3,
      ratingText: "Lorem Ipsum"
    };
    const component = shallow(<ShowHeader {...props} />);
    const wrapper = findByAttribute(component, "showheader");

    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
  });
});
