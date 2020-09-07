import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("<Container/>", () => {
  it("renders without crashing", () => {
    expect(shallow(<Container />).length).toEqual(1);
  });
});
