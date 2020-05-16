import { put, select, call, all, takeLatest } from "redux-saga/effects";

import * as repository from "./repository";

function* getFollowListSaga() {
  const { data: follows } = yield call(repository.follows);

  yield put({
    type: "@follow/SET_FOLLOW_LIST_SUCCESS",
    payload: follows,
  });
}

function* followUserSaga() {
  const { data: userPage } = yield select(state => state.userPage);
  const { data: currentUser } = yield call(repository.follow, userPage._id);

  yield put({
    type: "@auth/SET_CURRENT_USER_SUCCESS",
    payload: currentUser,
  });
}

export default all([
  takeLatest("@follow/GET_FOLLOW_LIST", getFollowListSaga),
  takeLatest("@follow/FOLLOW_USER", followUserSaga),
]);
