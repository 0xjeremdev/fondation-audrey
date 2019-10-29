import styled from "styled-components";
import { Segment } from "semantic-ui-react";
export const PageContainer = styled(Segment)`
  &.ui.segment {
    padding-left: 30px;
    padding-right: 30px;
    border: none;
    margin: 0px;
    background: transparent;
    border-radius: 0px;
    box-shadow: unset;
  }

  @media only screen and (max-width: 1600px) {
    &.ui.segment {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media only screen and (max-width: 1200px) {
    &.ui.segment {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
`;
