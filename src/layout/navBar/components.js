import React from "react";
import { Menu, Image, Container, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import LogoImage from "assets/images/logo.png";
import HamburgerImage from "assets/images/hamburger.png";
import { Color } from "components";

export const NavItem = styled(Menu.Item)`
  .ui.menu &.item {
    border-left: none !important;
    font-size: 14px;
    color: ${Color.MenuColor};
    font-weight: 600;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
  }
  .ui.menu &.item:hover {
    color: ${Color.MenuHoverColor};
    cursor: pointer;
    transition: 1s;
    background: unset;
  }
  .ui.sidebar &.item {
    font-size: 14px;
    color: ${Color.MenuColor};
    font-weight: 600;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    padding: 10px 5%;
  }
  .ui.sidebar &.item:hover {
    color: ${Color.MenuHoverColor};
    cursor: pointer;
    transition: 1s;
    background-color: rgba(0, 0, 0, 0.03);
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
  &.ui.menu {
    border-bottom: none;
    background-color: ${Color.Header};
    height: ${props => (props.mobile ? "80px" : "64px")};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  width: 100%;
  /* flex-wrap: wrap; */
  /* padding: 0 10px; */
  justify-content: space-between;
`;
export const NavDivider = styled(Menu.Item)`
  .ui.menu &.item {
    border-left: none !important;
    font-size: 14px;
    color: ${Color.MenuColor};
    font-weight: 600;
    padding: 0px;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
  }

  .ui.menu &.item.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.menu &.item:before {
    width: 0px;
  }
`;
export const DropDownMenu = styled(Dropdown)`
  /* .ui .dropdown & .dropdown.icon {
    display: none;
  } */
  &.ui.dropdown > .dropdown.icon {
    display: none;
  }
  &.ui.dropdown .menu {
    top: 38px;
    left: -75px !important;
    border-radius: 0px;
    border-top: 3px solid ${Color.Red};
    background-color: ${Color.Header};
    padding: 20px 20px;
  }
  .ui.menu &.ui.dropdown .menu > .item {
    font-size: 14px !important;
    color: ${Color.MenuColor} !important;
    font-weight: 600 !important;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif !important;
    padding: 6px 20px !important;
    line-height: 2em;
  }
  .ui.menu &.ui.dropdown .menu > .item:hover {
    color: ${Color.MenuHoverColor} !important;
    cursor: pointer !important;
    transition: 1s !important;
    background-color: rgba(0, 0, 0, 0.03) !important;
  }
`;
