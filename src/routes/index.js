/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { LastLocationProvider } from "react-router-last-location";

import Frame from "./frame";

import Explore from "../pages/explore";
import Login from "../pages/login";
import Register from "../pages/register";
import UserPage from "../pages/userPage";
import ProfilerEdit from "../pages/profilerEdit";
 
function Routes({ history }) {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Frame history={history}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/login" history={history} component={Login} />
              <Route
                exact
                path="/register"
                history={history}
                component={Register}
              />
              <Route exact path="/" history={history} component={Explore} />
              <Route
                exact
                path="/users/:username"
                history={history}
                component={UserPage}
              />
              <Route
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

export default Routes;
