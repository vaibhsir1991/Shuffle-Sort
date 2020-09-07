import React from "react";
import { shallow } from "enzyme";
import Box from "./Box";
import { Item } from "./container";

const item: Item = {
  color: "#000000",
  index: 1,
};

describe("<Box/>", () => {
  it("renders without crashing", () => {
    expect(shallow(<Box item={item} />).length).toEqual(1);
  });
});
