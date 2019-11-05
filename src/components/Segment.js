import styled from "styled-components";

export const Segment = styled.div`
  & {
    padding: 4% 0;
  }
  &.light-back {
    background-color: #fef1dd;
  }
  &.dark-back {
    background-color: #fce1bc;
  }
  @media only screen and (min-width: 1350px) {
    & {
      padding: 54px 0;
    }
  }
  @media only screen and (min-width: 981px) {
    & {
      padding: 4% 0;
    }
  }
  @media (max-width: 981px) {
    & {
      padding: 50px 0;
    }
  }
`;
