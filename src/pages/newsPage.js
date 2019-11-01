import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import HeaderImage from "assets/images/news/header.jpg";
import NepalImage from "assets/images/news/nepal.jpg";

const Header = styled.div`
  & {
    background: url(${HeaderImage});
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
  }
`;
const FirstSection = styled.div`
  & {
    background-color: #fce1bc;
    padding: 50px 0;
  }
  & .content {
    margin: 20px auto;
    padding: 10px;
    text-align: center;
    width: 80%;
    font-size: 18px;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
    line-height: 1.2em;
    font-weight: 500;
  }
`;

const CardSection = styled.div`
  & {
    padding: 50px 0;
    background-color: #fef1df;
  }

  & .card {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #d8d8d8;
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
    max-width: 1080px;
    display: flex;
  }
  & .card img {
    width: 400px !important;
    max-height: 154px;
    object-fit: cover;
    max-width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }
  & .card .image-container {
    width: 20.875%;
    margin-right: 5.5%;
  }
  & .card .text-container {
    width: 73.625%;
  }
  @media (max-width: 980px) {
    & .card {
      display: block;
    }
    & .card .image-container {
      width: 100%;
      margin-bottom: 30px;
      margin-right: 0px;
    }
    & .card .text-container {
      width: 100%;
    }
  }
  & p {
    word-wrap: break-word !important;
    height: 90px !important;
    overflow: hidden !important;
  }
`;

class NewsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FirstSection>
          <Container>
            <div className="content">
              « We make a living by what we get, but we make a life by what we
              give » — W. Churchill
            </div>
          </Container>
        </FirstSection>
        <CardSection>
          <div className="card">
            <div className="image-container">
              <img src={NepalImage} />
            </div>
            <div className="text-container">
              <h1>Latest news from Nepal</h1>
              <p>
                Sorry only available in french please refer to the link
                <a> http://fondationaudreyjacobs.org/news/</a>
              </p>
            </div>
          </div>
        </CardSection>
      </React.Fragment>
    );
  }
}

export default NewsPage;
