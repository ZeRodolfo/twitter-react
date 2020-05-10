import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";

import history from "./services/history";

import Routes from "./routes";

import Globals from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes history={history} />
        <Globals />
      </PersistGate>
    </Provider>
  );
}

export default App;
