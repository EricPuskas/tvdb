import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import ShowPoster from "./ShowPoster";
import NoPosterFound from "../../assets/img/no_poster.png";

describe("ShowPoster Component", () => {
  const component = shallow(<ShowPoster />);
  const wrapper = findByAttribute(component, "poster");
  const props = {
    poster: "graphical/257655-g9.jpg",
    title: "Some Title"
  };
  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Render placeholder image", () => {
    const logo = shallow(<ShowPoster />);

    expect(logo.find("img").prop("src")).toEqual(NoPosterFound);
  });

  it("Render banner image", () => {
    const logo = shallow(<ShowPoster {...props} />);

    expect(logo.find("img").prop("src")).toEqual(
      "https://www.thetvdb.com/banners/" + props.poster
    );
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
