import { put, call, all, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import history from "../../../services/history";

import * as repository from "./repository";

function* getDataUserPageSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

  try {
    const { data: user } = yield call(repository.userPage, payload.username);

    yield put({
      type: "@userPage/SET_DATA_USER_PAGE_SUCCESS",
      payload: user,
    });

    if (!!payload.username) {
      history.push(`/users/${payload.username}`);
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

export default all([
  takeLatest("@userPage/GET_DATA_USER_PAGE", getDataUserPageSaga),
]);
