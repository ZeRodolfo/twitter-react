import { put, all, takeLatest } from "redux-saga/effects";

function* getTrendsListSaga() {
  yield put({
    type: "@trends/SET_TRENDS_LIST_SUCCESS",
    payload: [
      {
        category: "Trending in Namekusei",
        text: "Piccolo",
        tweets: 34,
      },
      {
        category: "Power · Trending",
        text: "Piccolo",
        tweets: "5K",
      },
      {
        category: "Technique · Trending",
        text: "Tenshinhan",
        tweets: "50K",
      },
      {
        category: "Death · Trending",
        text: "Kuririn",
        tweets: "1M",
      },
    ],
  });
}

export default all([takeLatest("@trends/GET_TRENDS_LIST", getTrendsListSaga)]);
