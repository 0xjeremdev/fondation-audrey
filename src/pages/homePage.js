import React, { Component } from "react";
import styled from "styled-components";
import { Container, Image } from "semantic-ui-react";
import { Fade } from "react-slideshow-image";

import img1 from "assets/images/home/slide1.jpg";
import img2 from "assets/images/home/slide2.jpg";
import img3 from "assets/images/home/slide3.jpg";
import img4 from "assets/images/home/slide4.jpg";
import MarkImage from "assets/images/mark.png";
const images = [img1, img2, img3, img4];

const FadeSlider = styled(Fade)`
  & .react-slideshow-container + div.indicators {
  }
  & .react-slideshow-container .nav {
    background: transparent;
  }
  & .react-slideshow-container .nav:hover {
    background: transparent;
  }
  & .react-slideshow-container .nav span {
    width: 15px;
    height: 15px;
    border-color: #fff;
  }
  & .react-slideshow-container + div.indicators > div {
    background: rgba(200, 200, 200, 0.6);
  }
  & .react-slideshow-container + div.indicators > div.active {
    background: #fff;
  }
  & .react-slideshow-container + div.indicators {
    /* margin-top: -20px; */
    position: absolute;
    top: 395px;
    width: 100%;
    z-index: 10000;
    margin-left: auto;
    margin-right: auto;
  }
`;
const SlideItem = styled.div`
  & {
    /* background-image: ${props => props.imgUrl}; */
    height: 395px;
    text-align: center;
  }
  & img {
    margin: 0 -50%;
    /* height: 100%; */
  }
`;

const YellowContainer = styled.div`
  & {
    background: #fef1df;
    padding: 30px 0;
  }
  & .image-container,
  & .header-container {
    margin-bottom: 30px;
    text-align: center;
  }
  & .image-container img {
    width: 120px;
  }
  & .header-container h1 {
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
    font-size: 30px;
  }
  & .content-container {
    padding-bottom: 100px;
    text-align: center;
  }
  & .content-container .italic-text {
    margin: 0px;
    font-style: italic;
  }
  & .content-container .name-text {
    padding-top: 1em;
    font-weight: 700;
  }
`;
class HomePage extends Component {
  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    };
    return (
      <React.Fragment>
        <FadeSlider {...properties}>
          {images.map((item, i) => (
            <SlideItem key={i}>
              <img src={item} />
            </SlideItem>
          ))}
        </FadeSlider>
        <YellowContainer>
          <Container className="image-container">
            <img src={MarkImage} />
          </Container>
          <Container className="header-container">
            <h1>Audrey Jacobs Foundation</h1>
          </Container>
          <Container className="content-container">
            <p className="italic-text">“BE THE CHANGE YOU WISH</p>
            <p className="italic-text">TO SEE IN THE WORLD“</p>
            <p className="name-text">Gandhi</p>
          </Container>
        </YellowContainer>
      </React.Fragment>
    );
  }
}

export default HomePage;
