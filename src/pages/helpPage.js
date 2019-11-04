import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import HeaderImage from "assets/images/help/header.jpg";

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
    padding: 0 6%;
  }
  & .container {
    padding: 50px 0;
    display: flex;
    align-items: center;
  }
  & img {
    width: 100%;
    padding-right: 20px;
    max-height: 346.4px;
  }
  & h2 {
    margin: 0px;
    font-size: 28px;
    font-weight: 300;
    padding-bottom: 10px;
    color: #333;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
  }
  & p {
    margin: 0px;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
    color: #333;
    line-height: 1.7em;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
  }
  @media (max-width: 981px) {
    & p {
      font-size: 13px;
    }
  }
  & .column {
    width: 45%;
    padding-left: 20px;
  }
  & .button {
    color: #c01700;
    margin-top: 20px;
    text-shadow: none;
    text-decoration: none;
    position: relative;
    padding: 10px 20px;
    border: 2px solid;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.7em !important;
    transition: all 0.2s;
    border-radius: 3px;
    display: block;
    width: fit-content;
  }
  & .button:after {
    content: "5";
    font-family: ETmodules !important;
    font-size: 32px;
    margin-left: -1em;
    opacity: 0;
    transition: all 0.2s;
    position: absolute;
  }
  & .button:hover:after {
    margin-left: -0.2em;
    opacity: 1;
  }
  & .button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border: 2px solid transparent;
    padding: 10px 30px 10px 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & p,
    & .button,
    & img {
      display: none;
    }
    & h2 {
      font-size: 20px;
      text-align: center;
    }
    & .column {
      width: 100%;
      padding-left: 0px;
    }
    & .container {
      display: block;
    }
  }
`;

const CardSection = styled.div`
  & {
    padding: 4% 0;
    background-color: #fef1df;
  }
  & .container {
    padding: 2% 0;
    width: 89%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  & .column {
    width: 29.667%;
    margin-right: 5.5%;
  }
  & .column:nth-child(3) {
    margin-right: 0px;
  }
  @media (max-width: 981px) {
    & .column {
      width: 100%;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    & .container {
      display: block;
    }
  }
  & .card {
    margin-bottom: 18.539%;
    border: 1px solid #d8d8d8;
    background-color: #fff;
    word-wrap: break-word;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  & .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  & .card:hover {
    cursor: pointer;
  }
  & .card:hover span {
    z-index: 3;
  }
  & .card span {
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    width: 100%;
    height: 180px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s;
    color: #b72411 !important;
    top: 0;
    left: 0;
    z-index: -1;
  }
  & .card span:hover:before {
    top: 50%;
  }
  & .card span:before {
    position: absolute;
    top: 55%;
    left: 50%;
    margin: -16px 0 0 -16px;
    font-size: 32px;
    content: "";
    font-family: ETmodules !important;
    transition: all 0.4s;
  }
  & .card .content {
    padding: 19px;
  }
  & .card h2 {
    margin: 0px;
    min-height: 80px;
    line-height: 1.5em;
    font-size: 20px;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
  }
  & .card p {
    color: #666;
    margin-bottom: 6px;
    font-size: 14px;
  }
  & .card .read-more {
    color: #c01700;
    font-weight: 500;
  }
`;

class HelpPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default HelpPage;
