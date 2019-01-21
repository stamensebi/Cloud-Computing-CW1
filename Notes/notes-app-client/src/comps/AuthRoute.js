import React from "react";
import { Route, Redirect } from "react-router-dom";

//ROUTE THAT TAKES INTO ACCOUNT WHETHER OR NOT A USER IS LOGGED IN
export default ({ component: C, props: cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated
        ? <C {...props} {...cProps} />
        : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location
              .search}`}
          />}
  />;
