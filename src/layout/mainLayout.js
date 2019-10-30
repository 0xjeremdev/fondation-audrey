import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import { Responsive, Segment, Menu, Sidebar } from "semantic-ui-react";

import { RouteWithSubRoutes } from "routes.config";

import Navbar from "./navBar";
import Footer from "./footer";
class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileSize: false,
      visibleNavbar: false
    };
  }

  updateWidth = () => {
    const isSSR = typeof window === "undefined";
    const width = isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
    // const minWidth = Responsive.onlyTablet.minWidth;
    const minWidth = 1000;
    if (width < minWidth) this.setState({ isMobileSize: true });
    else this.setState({ isMobileSize: false });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  handleNavbarVisible = visible => {
    this.setState({ visibleNavbar: visible });
  };

  render() {
    const { isMobileSize, visibleNavbar } = this.state;
    const { routes } = this.props;
    return (
      <React.Fragment>
        <Navbar
          isMobileSize={isMobileSize}
          visibleNavbar={visibleNavbar}
          handleNavbarVisible={this.handleNavbarVisible}
        />
        {/* {routes && (
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        )} */}
        <Footer isMobileSize={isMobileSize} />
      </React.Fragment>
    );
  }
}

MainLayout.propTypes = {
  routes: PropTypes.array,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default MainLayout;
