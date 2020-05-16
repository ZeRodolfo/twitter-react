import { put, call, select, all, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

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
  } catch (err) {
    notification.success({
      message: "Attention",
      description: err.message,
    });
  }
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
  } catch (err) {
    notification.success({
      message: "Attention",
      description: err.message,
    });
  }
}

function logoutSaga() {
  localStorage.clear();
  history.push("/")
}

function* savePersonalDataSaga({ payload }) {
  try {
    const { currentUser } = yield select(state => state.auth);
    const { data: user } = yield call(repository.savePersonalData, payload);

    yield put({
      type: "@auth/SET_CURRENT_USER_SUCCESS",
      payload: {
        ...currentUser,
        name: user.name,
        description: user.description,
      },
    });

    notification.success({
      message: "Attention",
      description: "The data has been saved successfully.",
    });
  } catch (err) {
    notification.error({
      message: "Attention",
      description: err.message,
    });
  }
}

function* getChangeCoverSaga({ payload }) {
  try {
    const { data: user } = yield call(repository.saveCover, payload);

    yield put({
      type: "@auth/CHANGE_COVER_SUCCESS",
      payload: user.cover,
    });

    notification.success({
      message: "Attention",
      description: "Cover has been saved successfully.",
    });
  } catch (err) {
    const url = URL.createObjectURL(payload.cover);
    yield put({
      type: "@auth/CHANGE_COVER_SUCCESS",
      payload: url,
    });

    notification.error({
      message: "Attention",
      description: err.message,
    });
  }
}

function* getChangeAvatarSaga({ payload }) {
  try {
    const { data: user } = yield call(repository.saveAvatar, payload);

    yield put({
      type: "@auth/CHANGE_AVATAR_SUCCESS",
      payload: user.avatar,
    });

    notification.success({
      message: "Attention",
      description: "Avatar has been saved successfully.",
    });
  } catch (err) {
    notification.error({
      message: "Attention",
      description: err.message,
    });
  }
}

export default all([
  takeLatest("@auth/SIGN_IN", getSignInSaga),
  takeLatest("@auth/SIGN_UP", getSignUpSaga),
  takeLatest("@auth/LOGOUT", logoutSaga),
  takeLatest("@auth/SAVE_PERSONAL_DATA", savePersonalDataSaga),
  takeLatest("@auth/CHANGE_COVER", getChangeCoverSaga),
  takeLatest("@auth/CHANGE_AVATAR", getChangeAvatarSaga),
]);
