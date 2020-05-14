/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { LastLocationProvider } from "react-router-last-location";

import Frame from "./frame";

import Main from "../pages/main";
import ProfilerEdit from "../pages/profilerEdit";

function Routes({ history }) {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Frame history={history}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" history={history} component={Main} />
              <Route exact path="/users/:key" history={history} component={Main} />
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
