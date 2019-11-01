import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import HeaderImage from "assets/images/contact/header.jpg";

const Header = styled.div`
  & {
    background: url(${HeaderImage});
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
  }
`;

const ContactSection = styled.div`
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
`;

class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ContactSection></ContactSection>
      </React.Fragment>
    );
  }
}

export default ContactPage;
