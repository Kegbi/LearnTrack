import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";

const ProtectedRoute = ({ children, redirectTo, ...rest }) => {
  const user = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  return (
    <Route
      {...rest}
      render={(props) => (user ? children : <Redirect to={redirectTo} />)}
    />
  );
};

export default ProtectedRoute;
