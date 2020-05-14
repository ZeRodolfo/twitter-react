import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../../services/history";

import auth from "./auth/reducers";
import userPage from "./userPage/reducers";
import tweets from "./tweets/reducers";
import trends from "./trends/reducers";
import follow from "./follow/reducers";
import followers from "./followers/reducers";

export default combineReducers({
  auth,
  userPage,
  tweets,
  trends,
  follow,
  followers,
  router: connectRouter(history),
});
