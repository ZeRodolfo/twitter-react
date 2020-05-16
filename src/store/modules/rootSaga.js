import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import userPage from "./userPage/sagas";
import tweets from "./tweets/sagas";
import trends from "./trends/sagas";
import follow from "./follow/sagas";
import followers from "./followers/sagas";
import utilities from "./utilities/sagas";

export default function* rootSaga() {
  return yield all([
    auth,
    userPage,
    tweets,
    trends,
    follow,
    followers,
    utilities,
  ]);
}
