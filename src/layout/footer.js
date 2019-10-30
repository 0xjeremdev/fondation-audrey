import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Segment, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
const FooterContainer = styled(Segment)`
  &.ui.segment {
    border: none;
    margin: 0px;
    border-radius: 0px;
    box-shadow: unset;
    background-color: #26221a;
    padding: 80px 0;
  }
`;
const FootBar = styled(Segment)`
  &.ui.segment {
    border: none;
    margin: 0px;
    border-radius: 0px;
    box-shadow: unset;
    background-color: #1c1711;
    padding: 15px 0;
    text-align: center;
  }
  & p {
    color: #666;
    font-size: 14px;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
    display: inline;
  }
  & a {
    color: #666;
    font-weight: 700;
    font-size: 14px;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
  }
`;
const Subset = styled.div`
  & {
    font-size: 16px;
    color: #fff;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    font-weight: 500;
    line-height: 1em;
    /* margin-left: 5%; */
    width: ${props => (props.isMobileSize ? "100%" : "30%")};
    margin-bottom: ${props => (props.isMobileSize ? "30px" : "0px")};
  }
  & h5,
  & a {
    font-size: 16px;
    color: #fff;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    font-weight: 500;
    line-height: 1em;
    padding-bottom: 10px;
    margin: 0px;
    display: block;
  }
  &.contact-subset {
    margin-bottom: 0px;
  }
  &.contact-subset p,
  &.contact-subset a {
    font-weight: 700;
    font-size: 14px;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
    margin: 0px;
    display: block;
    line-height: 23px;
  }
  & span {
    margin-right: 10px;
    font-size: 12px;
    color: #777;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
  }
`;

const Footer = ({ isMobileSize }) => {
  return (
    <React.Fragment>
      <FooterContainer>
        <Container
          style={{
            display: isMobileSize ? "block" : "flex",
            justifyContent: isMobileSize ? "unset" : "space-between"
          }}
        >
          <Subset isMobileSize={isMobileSize}>
            <h5>Audrey Jacobs Foundation</h5>
            <Link to="">
              <span>{">"}</span>
              Home
            </Link>
            <Link to="">
              <span>{">"}</span>
              Foundation
            </Link>
            <Link to="">
              <span>{">"}</span>
              Projects
            </Link>
            <Link to="">
              <span>{">"}</span>
              Events
            </Link>
            <Link to="">
              <span>{">"}</span>
              News
            </Link>
            <Link to="">
              <span>{">"}</span>
              Contact
            </Link>
          </Subset>
          <Subset isMobileSize={isMobileSize}>
            <h5>How to help us</h5>
            <Link to="">
              <span>{">"}</span>
              Donate
            </Link>
            <Link to="">
              <span>{">"}</span>
              Other ways to help
            </Link>
            <Link to="">
              <span>{">"}</span>
              Where does your money go?
            </Link>
          </Subset>
          <Subset className="contact-subset" isMobileSize={isMobileSize}>
            <h5>Contact</h5>
            <p>Audrey Jacobs Foundation</p>
            <p>Chemin du Bois-de-Menton,12</p>
            <p>1066 Epalinges</p>
            <p>Switzerland</p>
            <a>info@fondationaudreyjacobs.org</a>
          </Subset>
        </Container>
      </FooterContainer>
      <FootBar>
        <Container>
          <p>Designed & Created by </p>
          <a>ink</a>
          <p> | Audrey Jacobs Foundation®</p>
        </Container>
      </FootBar>
    </React.Fragment>
  );
};

Footer.propTypes = {
  isMobileSize: PropTypes.bool.isRequired
};
export default Footer;
