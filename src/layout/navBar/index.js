import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Container, Sidebar, Dropdown } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
          <NavItem>
            <Link to="home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="foundation">Foundation</Link>
          </NavItem>
          <NavItem
            onMouseOver={this.MouseOverItem}
            onMouseOut={this.MouseOutItem}
          >
            <Link to="projects">Projects</Link>

            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ fontSize: "12px", marginLeft: "5px", marginTop: "2px" }}
            />
            <DropDownMenu open={visibleDropdown}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="">Our projects on the map</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="">Aarya Tara Pre-School</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="">Surya Vinayak School</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="">Cerebral Palsy Nepal</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="">Sama Nepal</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="">Specific actions</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="">Chez Caroline</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </DropDownMenu>
          </NavItem>
          <NavItem>
            <Link to="events">Events</Link>
          </NavItem>
          <NavItem>
            <Link to="news">News</Link>
          </NavItem>
          <NavItem>
            <Link to="contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link to="donation">Help us</Link>
          </NavItem>
          <NavItem style={{ paddingRight: "5px" }}>FR</NavItem>
          <NavDivider>|</NavDivider>
          <NavItem style={{ paddingLeft: "5px" }}>EN</NavItem>
        </Menu.Menu>
      </React.Fragment>
    );
  };
  DopdownNavMenu = () => {
    const { handleNavbarVisible } = this.props;
    return (
      <React.Fragment>
        <Link to="home" onClick={() => handleNavbarVisible(false)}>
          <NavItem>Home</NavItem>
        </Link>
        <Link to="foundation" onClick={() => handleNavbarVisible(false)}>
          <NavItem>Foundation</NavItem>
        </Link>
        <Link to="projects" onClick={() => handleNavbarVisible(false)}>
          <NavItem>Projects</NavItem>
        </Link>
        <div style={{ paddingLeft: "5%" }}>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Our projects on the map</NavItem>
          </Link>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Aarya Tara Pre-School</NavItem>
          </Link>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Surya Vinayak School</NavItem>
          </Link>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Cerebral Palsy Nepal</NavItem>
          </Link>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Sama Nepal</NavItem>
          </Link>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Specific actions</NavItem>
          </Link>
          <Link to="" onClick={() => handleNavbarVisible(false)}>
            <NavItem>Chez Caroline</NavItem>
          </Link>
        </div>
        <Link to="events" onClick={() => handleNavbarVisible(false)}>
          <NavItem>Events</NavItem>
        </Link>
        <Link to="news" onClick={() => handleNavbarVisible(false)}>
          <NavItem>News</NavItem>
        </Link>
        <Link to="contact" onClick={() => handleNavbarVisible(false)}>
          <NavItem>Contact</NavItem>
        </Link>
        <Link to="donation" onClick={() => handleNavbarVisible(false)}>
          <NavItem>Help us</NavItem>
        </Link>
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
