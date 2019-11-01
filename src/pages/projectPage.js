import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import HeaderImage from "assets/images/projects/header.jpg";
import Image1 from "assets/images/projects/1.png";
import Image2 from "assets/images/projects/2.png";
import Image3 from "assets/images/projects/3.png";
import Image4 from "assets/images/projects/4.jpg";
import Image5 from "assets/images/projects/5.jpg";
import Image6 from "assets/images/projects/6.png";
import Image7 from "assets/images/projects/7.png";
const Header = styled.div`
  & {
    background: url(${HeaderImage});
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
  }
`;
const ProjectSection = styled.div`
  & {
    padding: 4% 0;
    background-color: #fdefd5 !important;
  }
  & .container {
    padding: 2% 0;
  }
  & .container h3 {
    padding-top: 20px;
    padding-bottom: 30px;
    color: #333;
    font-weight: 500;
    line-height: 30px;
    font-size: 22px;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    margin: 0px;
    text-align: center;
  }
  & .container p {
    font-weight: 700;
    text-align: center;
  }
  & .container.card-container {
    display: flex;
  }
  & .card {
    max-width: 550px;
    margin: 0 auto;
  }
  & .card img {
    width: 100%;
    margin-bottom: 30px;
    height: 180px;
    object-fit: cover;
  }
  & .card h4 {
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
    font-size: 18px;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    margin: 0px;
  }
  @media (min-width: 981px) {
    & .column-set {
      width: 29.667%;
      margin-right: 5.5%;
    }
    & .card {
      margin-bottom: 9.27%;
    }
  }
  @media (max-width: 980px) {
    & .container.card-container {
      display: block;
    }
    & .column-set {
      width: 100%;
      margin-bottom: 30px;
    }
    & .card {
      margin-bottom: 30px;
    }
  }
`;

class ProjectPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ProjectSection>
          <Container>
            <h3>
              « We make a living by what we get,
              <br />
              but we make a life by what we give »
            </h3>
            <p>— W. Churchill</p>
          </Container>
          <Container className="card-container">
            <div className="column-set">
              <div className="card">
                <img src={Image1} />
                <h4>Our projects on the map</h4>
              </div>
              <div className="card">
                <img src={Image2} />
                <h4>Our projects on the map</h4>
              </div>
            </div>
            <div className="column-set">
              <div className="card">
                <img src={Image3} />
                <h4>Our projects on the map</h4>
              </div>
              <div className="card">
                <img src={Image4} />
                <h4>Our projects on the map</h4>
              </div>
              <div className="card">
                <img src={Image5} />
                <h4>Our projects on the map</h4>
              </div>
            </div>
            <div className="column-set">
              <div className="card">
                <img src={Image6} />
                <h4>Our projects on the map</h4>
              </div>
              <div className="card">
                <img src={Image7} />
                <h4>Our projects on the map</h4>
              </div>
            </div>
          </Container>
        </ProjectSection>
      </React.Fragment>
    );
  }
}

export default ProjectPage;
