import { put, call, all, takeLatest } from "redux-saga/effects";

import * as repository from "./repository";

import history from "../../../services/history";

function* getSignInSaga({ payload }) {
  try {
    const { headers, data: user } = yield call(repository.signIn, payload);
    const token = headers["access-token"];

    yield put({
      type: "@auth/SET_TOKEN_USER",
      payload: token,
    });

    yield put({
      type: "@auth/SET_CURRENT_USER_SUCCESS",
      payload: user,
    });

    history.push(`/users/${user.username}`);
  } catch (err) {}
}

function* getSignUpSaga({ payload }) {
  try {
    const { headers, data: user } = yield call(repository.signUp, payload);
    const token = headers["access-token"];

    yield put({
      type: "@auth/SET_TOKEN_USER",
      payload: token,
    });

    yield put({
      type: "@auth/SET_CURRENT_USER_SUCCESS",
      payload: user,
    });

    history.push("/");
  } catch (err) {}
}

function* getChangeCoverSaga({ payload }) {
  yield put({
    type: "@auth/CHANGE_COVER_SUCCESS",
    payload: payload.cover,
  });
}

function* getChangeAvatarSaga({ payload }) {
  yield put({
    type: "@auth/CHANGE_AVATAR_SUCCESS",
    payload: payload.avatar,
  });
}

export default all([
  takeLatest("@auth/SIGN_IN", getSignInSaga),
  takeLatest("@auth/SIGN_UP", getSignUpSaga),
  takeLatest("@auth/CHANGE_COVER", getChangeCoverSaga),
  takeLatest("@auth/CHANGE_AVATAR", getChangeAvatarSaga),
]);
