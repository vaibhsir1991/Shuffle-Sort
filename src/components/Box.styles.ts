import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { Grid } from "@material-ui/core";
import { mq } from "../constants/appConstants";

interface Props {
  color: string;
}

export const StyledGrid = styled(Grid)`
  && {
    height: 30vh;

    ${mq.md} {
      ${(props: Props): FlattenSimpleInterpolation | false =>
        css`
          background-color: ${props.color};
        `}
    }

    ${mq.xs} {
      && {
        height: 80px;
        background-color: #efefef;

        ${(props: Props): FlattenSimpleInterpolation | false =>
          css`
            border-left: 15px solid ${props.color};
          `};
      }
    }
  }
`;

export const StyledBox = styled(Grid)`
  height: 100%;
`;

export const StyledText = styled(Grid)`
  font-size: 8rem;
  color: white;

  ${mq.xs} {
    font-size: 1rem;
    color: black;
  }
`;
