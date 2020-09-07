import React from "react";
import { Item } from "./Container";
import * as Styled from "./Box.styles";

interface Props {
  item: Item;
}

/*
 * Box: Renders each Box in Box Grid
 * @param : item - Object
 */
const Box = ({ item }: Props): React.ReactElement => {
  return (
    <Styled.StyledGrid item xs={12} md={4} color={item.color}>
      <Styled.StyledBox container alignItems="center" justify="center">
        <Styled.StyledText>{item.index}</Styled.StyledText>
      </Styled.StyledBox>
    </Styled.StyledGrid>
  );
};

export default Box;
