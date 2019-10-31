import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import GirlImage from "assets/images/foundation/girl.jpg";
import HeaderImage from "assets/images/foundation/header.jpg";
import MarkImage from "assets/images/mark.png";

const Header = styled.div`
  & {
    background: url(${HeaderImage});
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
  }
`;
const FoundationSection = styled.div`
  & {
    padding: 4% 0;
  }
  &.audrey-section {
    background-color: #fef1df;
  }
  &.logo-section {
    background-color: #fce1bc;
  }
  & .container {
    padding: 30px 0;
    padding-left: 180px;
    /* margin-bottom: 50px; */
  }
  & .m-50 {
    margin-bottom: 50px;
  }
  & .container h1 {
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
    font-size: 30px;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    margin: 0px;
  }
  & .container .content-container {
    position: relative;
  }
  & .container img {
    position: absolute;
    left: -150px;
    top: 0;
    width: 120px;
  }
  @media (max-width: 768px) {
    & .container img {
      position: initial;
      width: 120px;
    }
    & .container {
      padding: 30px 0;
      padding-left: 0px;
      margin-bottom: 50px;
    }
  }
  & .container p {
    color: #000;
    font-size: 14px;
    line-height: 1.7em;
    font-weight: 500;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
  }
  & .container p.strong-text {
    font-style: italic;
    font-weight: 700;
  }
  & .board-row {
    display: flex;
    padding: 6px 0;
    color: #000;
  }
  & .column-1 {
    width: 30%;
  }
  & .column-2 {
    width: 60%;
  }
`;

class FoundationPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FoundationSection className="audrey-section">
          <Container className="m-50">
            <div className="content-container">
              <h1>Audrey Jacobs Foundation</h1>
              <p>
                <img src={GirlImage} />
                <br />
                The Audrey Jacobs Foundation was established in memory of Audrey
                Jacobs, a 21 year old medical student, who died on 29th August
                2010 in Kathmandu, Nepal, where she was volunteering in a
                hospital during her summer holidays.
                <br />
                Our foundation aims in particular to participate actively in
                humanitarian, educational and medical projects in Nepal. We
                mainly partner with local NGO’s or non-profit organizations,
                either already established or that have been founded through
                both our partners’ and our own initiative.
                <br />
                The Audrey Jacobs Foundation is a non-profit organization based
                in Switzerland with no political or religious affiliation.
                <br />
                It has charitable status. Donations to the foundation go
                entirely to the different projects in Nepal.
              </p>
            </div>
          </Container>
        </FoundationSection>
        <FoundationSection className="logo-section">
          <Container>
            <div className="content-container">
              <h1>Our logo</h1>
              <p>
                <img src={MarkImage} />
                <br />
                In the bottom of an old pond lived some grubs who could not
                understand why none of their groups ever came back after
                crawling up the stems of the lilies to the top of the water.
                They promised each other that the next one who was called to
                make the upward climb would return and tell what happened to
                him. Soon one of them felt an urgent impulse to seek the
                surface; he rested himself on the top of a lily pad and went
                through a glorious transformation, which made him a dragonfly
                with beautiful wings. In vain, he tried to keep his promise.
                Flying back and forth over the pond, he peered down at his
                friends below. Then he realized that even if they could see him
                they would not recognize such a radiant creature as one of their
                number.
                <br />
                The fact that we cannot see our friends or communicate with them
                after the transformation, which we call death, is no proof that
                they cease to exist.
              </p>
              <p className="strong-text">— Walter Dudley Cavert</p>
            </div>
          </Container>
        </FoundationSection>
        <FoundationSection className="audrey-section">
          <Container className="m-50">
            <div className="content-container">
              <h1>Our board</h1>
              <div className="board-row">
                <div className="column-1">President:</div>
                <div className="column-2">
                  Mrs Astrid Beseler, mother of Audrey, Marc and Cédric
                </div>
              </div>
              <div className="board-row">
                <div className="column-1">Vice-President:</div>
                <div className="column-2">Mr Marc Jacobs</div>
              </div>
              <div className="board-row">
                <div className="column-1">Members:</div>
                <div className="column-2">
                  Mr Cédric Jacobs
                  <br />
                  Me Laurent Besso
                  <br />
                  Mr Matthieu Wirtz
                </div>
              </div>
            </div>
          </Container>
        </FoundationSection>
      </React.Fragment>
    );
  }
}

export default FoundationPage;
