import React from "react";
import { shallow } from "enzyme";
import ShowDescription from "./ShowDescription";

describe("Show Description Component", () => {
  describe("Description over 350 chars", () => {
    const propsOver350 = {
      overview:
        "After a violent shipwreck, playboy billionaire Oliver Queen had disappeared and been presumed dead for five years before being discovered alive on a remote island in the Pacific. When he returns home to Starling City, his devoted mother Moira, the beloved sister Thea, and his best friend Tommy are going to welcome him home, but they have the feeling",
      maxChars: 350
    };
    const component = shallow(<ShowDescription {...propsOver350} />);
    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should trim down overview if it exceeds maxChars", () => {
      const desc = component
        .find(`[data-test="overview"]`)
        .childAt(0)
        .debug().length;
      expect(desc).toEqual(propsOver350.overview.length + 2);
    });
  });

  describe("Description equal or under 350 chars", () => {
    const propsUnderOrEqual350 = {
      overview:
        "After a violent shipwreck, playboy billionaire Oliver Queen had disappeared and been presumed dead for five years before being discovered alive on a remote island in the Pacific. When he returns home to Starling City, his devoted mother Moira, the beloved sister Thea, and his best friend Tommy are going to welcome him home, but they have the feelin",
      maxChars: 350
    };
    const component = shallow(<ShowDescription {...propsUnderOrEqual350} />);
    it("Should pass snapshot test", () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("Should not trim down overview if it does not exceeds maxChars", () => {
      const desc = component
        .find(`[data-test="overview"]`)
        .childAt(0)
        .debug().length;
      expect(desc).toEqual(propsUnderOrEqual350.overview.length);
    });
  });
});
