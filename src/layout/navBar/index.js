import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

import { Icon } from "components";

import {
  NavItem,
  NavLogo,
  NavBar,
  NavContainer,
  NavHamburger
} from "./components";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  NavMenu = () => {
    return (
      <React.Fragment>
        <Menu.Menu position="left">
          <NavItem>
            <NavLogo />
          </NavItem>
        </Menu.Menu>
        <Menu.Menu position="right">
          <NavItem>Home</NavItem>
          <NavItem>Foundation</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Events</NavItem>
          <NavItem>News</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Help us</NavItem>
        </Menu.Menu>
      </React.Fragment>
    );
  };

  MobileNav = visibleNavbar => {
    const { handleNavbarVisible } = this.props;

    return (
      <React.Fragment>
        <NavBar fixed={"top"} mobile="true" size="large">
          <NavContainer>
            <NavItem>
              <NavLogo />
            </NavItem>
            <NavItem onClick={() => handleNavbarVisible(!visibleNavbar)}>
              <NavHamburger />
            </NavItem>
          </NavContainer>
        </NavBar>
      </React.Fragment>
    );
  };

  DesktopNav = () => {
    return (
      <NavBar fixed={"top"}>
        <NavContainer>{this.NavMenu()}</NavContainer>
      </NavBar>
    );
  };

  render() {
    const { isMobileSize, visibleNavbar } = this.props;

    return (
      <React.Fragment>
        {isMobileSize ? this.MobileNav(visibleNavbar) : this.DesktopNav()}
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  isMobileSize: PropTypes.bool.isRequired,
  visibleNavbar: PropTypes.bool.isRequired,
  handleNavbarVisible: PropTypes.func.isRequired
};

export default Navbar;
