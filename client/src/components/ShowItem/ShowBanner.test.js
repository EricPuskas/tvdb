import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../utils";
import ShowBanner from "./ShowBanner";
import NoBannerFound from "../../assets/img/no_banner.png";

describe("Show Banner Component", () => {
  const component = shallow(<ShowBanner />);
  const wrapper = findByAttribute(component, "banner");
  const props = {
    banner: "graphical/257655-g9.jpg",
    title: "Some Title"
  };
  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Render placeholder image", () => {
    const logo = shallow(<ShowBanner />);

    expect(logo.find("img").prop("src")).toEqual(NoBannerFound);
  });

  it("Render banner image", () => {
    const logo = shallow(<ShowBanner {...props} />);

    expect(logo.find("img").prop("src")).toEqual(
      "https://www.thetvdb.com/banners/" + props.banner
    );
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
