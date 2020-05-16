import { put, call, select, take, all, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import * as repository from "./repository";

import history from "../../../services/history";

function* getSignInSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

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

    if (!!payload.follow) {
      yield put({
        type: "@userPage/SET_DATA_USER_PAGE_SUCCESS",
        payload: payload.follow,
      });

      yield put({ type: "@follow/FOLLOW_USER" });
      yield take("@auth/SET_CURRENT_USER_SUCCESS");

      history.push(`/users/${payload.follow.username}`);
    } else {
      history.push(`/users/${user.username}`);
    }
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

function* getSignUpSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

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

    if (!!payload.follow) {
      yield put({
        type: "@userPage/SET_DATA_USER_PAGE_SUCCESS",
        payload: payload.follow,
      });

      yield put({ type: "@follow/FOLLOW_USER" });
      yield take("@auth/SET_CURRENT_USER_SUCCESS");

      history.push(`/users/${payload.follow.username}`);
    } else {
      history.push(`/users/${user.username}`);
    }
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

function logoutSaga() {
  localStorage.clear();
  document.location.reload(true);
}

function* savePersonalDataSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

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

  yield put({
    type: "@utilities/LOADING",
    payload: { loading: false },
  });
}

function* getChangeCoverSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

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

  yield put({
    type: "@utilities/LOADING",
    payload: { loading: false },
  });
}

function* getChangeAvatarSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

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

  yield put({
    type: "@utilities/LOADING",
    payload: { loading: false },
  });
}

export default all([
  takeLatest("@auth/SIGN_IN", getSignInSaga),
  takeLatest("@auth/SIGN_UP", getSignUpSaga),
  takeLatest("@auth/LOGOUT", logoutSaga),
  takeLatest("@auth/SAVE_PERSONAL_DATA", savePersonalDataSaga),
  takeLatest("@auth/CHANGE_COVER", getChangeCoverSaga),
  takeLatest("@auth/CHANGE_AVATAR", getChangeAvatarSaga),
]);
