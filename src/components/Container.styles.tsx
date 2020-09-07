import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";
import { mq } from "../constants/appConstants";

export const StyledButton = styled(Button)`
  && {
    color: white;
    background-color: #72c3dc;
    margin: 15px 20px;

    ${mq.xs} {
      margin: 10px 10px;
      max-width: 80%;
    }
  }
`;

export const HeaderGrid = styled(Grid)`
  font-size: 1.2rem;
  padding: 10px 0;
  ${mq.xs} {
    background-color: #333333;
    color: white;
    width: 20px;
  }
`;
