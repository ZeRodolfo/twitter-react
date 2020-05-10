import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

import history from "../services/history";

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: null });
const _routerMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, _routerMiddleware];

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
