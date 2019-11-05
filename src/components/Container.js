import styled from "styled-components";

export const Container = styled.div`
  & {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }

  @media only screen and (min-width: 1350px) {
    &.inner-container {
      padding: 27px 0;
    }
  }
  @media (min-width: 981px) {
    &.inner-container {
      padding: 2% 0;
    }
  }
  @media (max-width: 980px) {
    &.inner-container {
      padding: 30px 0;
    }
  }
`;
