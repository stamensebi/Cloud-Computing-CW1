import React from "react";
import { Route } from "react-router-dom";
//ROUTE THAT TAKES IN AN EXTRA PARAM 
export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
