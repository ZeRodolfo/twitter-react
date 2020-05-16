import { put, call, select, all, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import * as repository from "./repository";

function* getTweetsListSaga() {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

  try {
    const { data: tweets } = yield call(repository.tweets);

    yield put({
      type: "@tweets/SET_TWEETS_LIST_SUCCESS",
      payload: tweets,
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

function* postTweetSaga({ payload }) {
  yield put({
    type: "@utilities/LOADING",
    payload: { loading: true },
  });

  try {
    yield put({
      type: "@tweets/SET_CLEAR_TWEET_SUCCESS",
      payload: false,
    });

    const { list: tweets } = yield select(state => state.tweets);
    const { data: tweet } = yield call(repository.postTweet, payload.content);

    yield put({
      type: "@tweets/SET_TWEETS_LIST_SUCCESS",
      payload: [tweet, ...tweets],
    });

    if (!!tweet.content) {
      yield put({
        type: "@tweets/SET_CLEAR_TWEET_SUCCESS",
        payload: true,
      });
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
  takeLatest("@tweets/GET_TWEETS_LIST", getTweetsListSaga),
  takeLatest("@tweets/POST_TWEET", postTweetSaga),
]);
