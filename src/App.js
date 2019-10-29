import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { routes, RouteWithSubRoutes } from "./routes.config";

let DevTools;
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  DevTools = require("./_helpers/DevTools").default;
}

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
    const { isMounted } = this.state;
    return (
      <React.Fragment>
        {isMounted &&
          !window.devToolsExtension &&
          process.env.NODE_ENV === "development" && <DevTools />}
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
