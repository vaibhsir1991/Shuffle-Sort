import React from "react";
import { Item } from "./Container";
import Box from "./Box";
import { Grid } from "@material-ui/core";

interface Props {
  shuffledSortedArray: Item[];
}

/*
 * BoxGrid : Renders the Box Grid
 * @param : shuffledSortedArray - Array<Object>
 */
const BoxGrid = ({ shuffledSortedArray }: Props): React.ReactElement => {
  return (
    <Grid container>
      {shuffledSortedArray.map(
        (item, index): React.ReactElement => (
          <Box key={index} item={item} />
        )
      )}
    </Grid>
  );
};

export default BoxGrid;
