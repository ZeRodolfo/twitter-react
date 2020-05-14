import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(composeWithDevTools(applyMiddleware(...middlewares)))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
