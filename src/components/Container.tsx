import React from "react";
import Grid from "@material-ui/core/Grid";
import BoxGrid from "./BoxGrid";
import * as Styled from "./Container.styles";
import MediaQuery from "react-responsive";
import { MD } from "../constants/appConstants";

const gridArray: Array<Item> = [
  {
    index: 1,
    color: "#6F98A8",
  },
  {
    index: 2,
    color: "#2B8EAD",
  },
  {
    index: 3,
    color: "#2F454E",
  },
  {
    index: 4,
    color: "#2B8EAD",
  },
  {
    index: 5,
    color: "#2F454E",
  },
  {
    index: 6,
    color: "#BFBFBF",
  },
  {
    index: 7,
    color: "#BFBFBF",
  },
  {
    index: 8,
    color: "#6F98A8",
  },
  {
    index: 9,
    color: "#2F454E",
  },
];

export interface Item {
  color: string;
  index: number;
}

/*
 * Container : Renders the layout for Box Grid and Buttons
 */
const Container = (): React.ReactElement => {
  const [shuffledSortedArray, setShuffledSortedArray] = React.useState<Item[]>(
    gridArray
  );

  const shuffleArray = () => {
    const tempArray = [...gridArray].sort(() => Math.random() - 0.5);
    setShuffledSortedArray(tempArray);
  };

  const sortArray = () => {
    const tempArray = [...gridArray].sort((item1, item2) => {
      return item1.index < item2.index ? -1 : item1.index > item2.index ? 1 : 0;
    });
    setShuffledSortedArray(tempArray);
  };

  return (
    <Grid container>
      <Styled.HeaderGrid item xs={12}>
        Shuffle and Sort
      </Styled.HeaderGrid>

      {/* Desktop Layout */}
      <MediaQuery minWidth={MD}>
        <Grid item xs={12} md={9}>
          <BoxGrid shuffledSortedArray={shuffledSortedArray} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Styled.StyledButton
            fullWidth
            variant="contained"
            onClick={() => shuffleArray()}
          >
            SHUFFLE
          </Styled.StyledButton>
          <br />
          <Styled.StyledButton
            fullWidth
            variant="contained"
            onClick={() => sortArray()}
          >
            SORT
          </Styled.StyledButton>
        </Grid>
      </MediaQuery>

      {/* Mobile/Tab Layout */}
      <MediaQuery maxWidth={MD - 1}>
        <Grid item xs={12} md={3}>
          <Grid container justify="center">
            <Grid item xs={6} md={12}>
              <Styled.StyledButton
                fullWidth
                variant="contained"
                onClick={() => shuffleArray()}
              >
                SHUFFLE
              </Styled.StyledButton>
            </Grid>
            <Grid item xs={6} md={12}>
              <Styled.StyledButton
                fullWidth
                variant="contained"
                onClick={() => sortArray()}
              >
                SORT
              </Styled.StyledButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <BoxGrid shuffledSortedArray={shuffledSortedArray} />
        </Grid>
      </MediaQuery>
    </Grid>
  );
};

export default Container;
