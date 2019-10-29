import React from "react";
import { Menu, Image } from "semantic-ui-react";
import styled from "styled-components";
import LogoImage from "assets/images/logo.png";
import HamburgerImage from "assets/images/hamburger.png";

export const NavItem = styled(Menu.Item)`
  .ui.menu &.item {
    border-left: none !important;
  }

  .ui.menu.vertical &.item {
    display: flex;
    align-items: center;
  }

  .ui.menu &.item.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.menu &.item:before {
    width: 0px;
  }
`;

export const NavHamburger = () => (
  <Image src={HamburgerImage} style={{ height: "20px" }} />
);
const LogoComponent = styled.img`
  .ui.menu .item > &:not(.ui) {
    width: unset;
    height: 80%;
  }
  @media (max-width: 550px) {
    .ui.menu .item > &:not(.ui) {
      height: 7vw;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

export const NavLogo = () => <LogoComponent src={LogoImage} />;

export const NavBar = styled(Menu)`
  box-shadow: unset !important;
  border-bottom: none;
  height: ${props => (props.mobile ? "80px" : "64px")};
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  /* flex-wrap: wrap; */
  padding: 0 10px;
  justify-content: space-between;
`;
