import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { routes, RouteWithSubRoutes } from "./routes.config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          {routes && (
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          )}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
