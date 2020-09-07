import React from "react";
import { shallow } from "enzyme";
import BoxGrid from "./BoxGrid";
import { Item } from "./container";

const items: Item[] = [
  {
    color: "#000000",
    index: 1,
  },
];

describe("<BoxGrid/>", () => {
  it("renders without crashing", () => {
    expect(shallow(<BoxGrid shuffledSortedArray={items} />).length).toEqual(1);
  });
});
