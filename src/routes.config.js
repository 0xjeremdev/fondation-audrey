import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { MainLayout } from "layout";
import { HomePage, FoundationPage } from "pages";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    routes: [
      {
        path: "/",
        exact: true,
        Component: HomePage
      },
      {
        path: "/home",
        exact: true,
        Component: HomePage
      },
      {
        path: "/foundation",
        exact: true,
        Component: FoundationPage
      },
      {
        RedirectTo: "/"
      }
    ]
  },
  {
    RedirectTo: "/"
  }
];

export const RouteWithSubRoutes = ({
  path,
  Component,
  routes,
  exact,
  RedirectTo
}) => {
  return (
    <Route
      path={path}
      exact={exact ? true : false}
      render={props =>
        // pass the sub-routes down to keep nesting
        RedirectTo ? (
          <Redirect
            to={{
              pathname: RedirectTo,
              // eslint-disable-next-line react/prop-types
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} routes={routes} />
        )
      }
    />
  );
};

RouteWithSubRoutes.propTypes = {
  path: PropTypes.string,
  Component: PropTypes.any,
  routes: PropTypes.array,
  exact: PropTypes.bool,
  RedirectTo: PropTypes.string
};
