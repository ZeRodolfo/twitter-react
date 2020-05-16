import { put, call, all, takeLatest } from "redux-saga/effects";
import history from "../../../services/history";

import * as repository from "./repository";

function* getDataUserPageSaga({ payload }) {
  const { data: user } = yield call(repository.userPage, payload.username);

  yield put({
    type: "@userPage/SET_DATA_USER_PAGE_SUCCESS",
    payload: user,
  });

  if (!!payload.username) {
    history.push(`/users/${payload.username}`);
  }
}

export default all([
  takeLatest("@userPage/GET_DATA_USER_PAGE", getDataUserPageSaga),
]);
