/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { LastLocationProvider } from "react-router-last-location";

import Frame from "./frame";
import PrivateRoute from "./privateRoute";

import Explore from "../pages/explore";
import Login from "../pages/login";
import Register from "../pages/register";
import UserPage from "../pages/userPage";
import ProfilerEdit from "../pages/profilerEdit";

function Routes({ history, currentUser, token }) {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Frame history={history}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route
                exact
                path="/login"
                history={history}
                component={() =>
                  token === "" ? (
                    <Login />
                  ) : (
                    <Redirect
                      to={{
                        pathname: `/users/${currentUser.username}`,
                      }}
                    />
                  )
                }
              />

              <Route
                exact
                path="/register"
                history={history}
                component={() =>
                  token === "" ? (
                    <Register />
                  ) : (
                    <Redirect
                      to={{
                        pathname: `/users/${currentUser.username}`,
                      }}
                    />
                  )
                }
              />
              <Route exact path="/" history={history} component={Explore} />
              <Route
                exact
                path="/users/:username"
                history={history}
                component={UserPage}
              />

              <PrivateRoute
                exact
                path="/profiler/edit"
                history={history}
                component={ProfilerEdit}
              />
            </Switch>
          </ConnectedRouter>
        </Frame>
      </LastLocationProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  token: state.auth.token,
});

export default connect(mapStateToProps)(Routes);
