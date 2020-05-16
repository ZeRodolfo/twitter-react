import { put, select, call, all, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import * as repository from "./repository";

function* getFollowListSaga() {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

  try {
    const { data: follows } = yield call(repository.follows);

    yield put({
      type: "@follow/SET_FOLLOW_LIST_SUCCESS",
      payload: follows,
    });
  } catch (err) {
    notification.error({
      message: "Attention",
      description: err.message,
    });
  }

  yield put({
    type: "@utilities/LOADING",
    payload: { loading: false },
  });
}

function* followUserSaga() {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

  try {
    const { data: userPage } = yield select(state => state.userPage);
    const { data: currentUser } = yield call(repository.follow, userPage._id);

    yield put({
      type: "@auth/SET_CURRENT_USER_SUCCESS",
      payload: currentUser,
    });
  } catch (err) {
    notification.error({
      message: "Attention",
      description: err.message,
    });
  }

  yield put({
    type: "@utilities/LOADING",
    payload: { loading: false },
  });
}

export default all([
  takeLatest("@follow/GET_FOLLOW_LIST", getFollowListSaga),
  takeLatest("@follow/FOLLOW_USER", followUserSaga),
]);
