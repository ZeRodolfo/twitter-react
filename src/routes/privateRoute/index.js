import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  history,
  token,
  component: Component,
  types = [],
  path,
  ...rest
}) => {
  const privateVerify = () => {
    if (!!token === false) {
      return <Redirect to="/" />;
    } else {
      return (
        <Route
          path={path}
          {...rest}
          render={() => <Component history={history} />}
        />
      );
    }
  };

  return privateVerify();
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
