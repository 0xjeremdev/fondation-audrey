import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Container, Sidebar, Dropdown } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import {
  NavItem,
  NavLogo,
  NavBar,
  NavContainer,
  NavHamburger,
  NavDivider,
  DropDownMenu
} from "./components";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDropdown: false
    };
  }
  MouseOverItem = () => {
    this.setState({ visibleDropdown: true });
  };
  MouseOutItem = () => {
    this.setState({ visibleDropdown: false });
  };
  NavMenu = () => {
    const { visibleDropdown } = this.state;
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
          <NavItem
            onMouseOver={this.MouseOverItem}
            onMouseOut={this.MouseOutItem}
          >
            Projects
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ fontSize: "12px", marginLeft: "5px", marginTop: "2px" }}
            />
            <DropDownMenu open={visibleDropdown}>
              <Dropdown.Menu>
                <Dropdown.Item>Our projects on the map</Dropdown.Item>
                <Dropdown.Item>Aarya Tara Pre-School</Dropdown.Item>
                <Dropdown.Item>Surya Vinayak School</Dropdown.Item>
                <Dropdown.Item>Cerebral Palsy Nepal</Dropdown.Item>
                <Dropdown.Item>Sama Nepal</Dropdown.Item>
                <Dropdown.Item>Specific actions</Dropdown.Item>
                <Dropdown.Item>Chez Caroline</Dropdown.Item>
              </Dropdown.Menu>
            </DropDownMenu>
          </NavItem>
          <NavItem>Events</NavItem>
          <NavItem>News</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Help us</NavItem>
          <NavItem style={{ paddingRight: "5px" }}>FR</NavItem>
          <NavDivider>|</NavDivider>
          <NavItem style={{ paddingLeft: "5px" }}>EN</NavItem>
        </Menu.Menu>
      </React.Fragment>
    );
  };
  DopdownNavMenu = () => {
    return (
      <React.Fragment>
        <NavItem>Home</NavItem>
        <NavItem>Foundation</NavItem>
        <NavItem>Projects</NavItem>
        <div style={{ paddingLeft: "5%" }}>
          <NavItem>Our projects on the map</NavItem>
          <NavItem>Aarya Tara Pre-School</NavItem>
          <NavItem>Surya Vinayak School</NavItem>
          <NavItem>Cerebral Palsy Nepal</NavItem>
          <NavItem>Sama Nepal</NavItem>
          <NavItem>Specific actions</NavItem>
          <NavItem>Chez Caroline</NavItem>
        </div>
        <NavItem>Events</NavItem>
        <NavItem>News</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Help us</NavItem>
        <NavItem>FR</NavItem>
        <NavItem>EN</NavItem>
      </React.Fragment>
    );
  };
  MobileNav = () => {
    const { handleNavbarVisible, visibleNavbar } = this.props;

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
        <Sidebar
          as={Container}
          direction="top"
          animation="overlay"
          onHide={() => handleNavbarVisible(false)}
          visible={visibleNavbar}
          className="navbar"
        >
          {this.DopdownNavMenu()}
        </Sidebar>
      </React.Fragment>
    );
  };

  DesktopNav = () => {
    return (
      <NavBar fixed={"top"}>
        <Container>{this.NavMenu()}</Container>
      </NavBar>
    );
  };

  render() {
    const { isMobileSize } = this.props;

    return (
      <React.Fragment>
        {isMobileSize ? this.MobileNav() : this.DesktopNav()}
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
