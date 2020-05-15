import { put, select, call, all, takeLatest } from "redux-saga/effects";

import * as repository from "./repository";

function* getFollowListSaga() {
  const { data: follows } = yield call(repository.follows);
  // yield put({
  //   type: "@follow/SET_FOLLOW_LIST_SUCCESS",
  //   payload: [
  //     {
  //       id: 3,
  //       avatar:
  //         "https://cdnb.artstation.com/p/assets/images/images/021/082/417/large/emma-alvarez-piccolo-01.jpg?1570332168",
  //       name: "Piccolo",
  //       verifiedAccount: true,
  //       key: "piccolo",
  //     },
  //     {
  //       id: 2,
  //       avatar:
  //         "https://i.pinimg.com/originals/f3/fd/a0/f3fda0fd5a499f0e6b1b27cfd9702114.jpg",
  //       name: "Vegeta",
  //       verifiedAccount: true,
  //       key: "vegeta",
  //     },
  //     {
  //       id: 1,
  //       avatar:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSz-vO3FBQiptdRsUPZpHo_piPpqRPAhBqfemgpZZBjiXWh1vR&usqp=CAU",
  //       name: "Goku",
  //       verifiedAccount: true,
  //       key: "kakaroto",
  //     },
  //   ],
  // });

  yield put({
    type: "@follow/SET_FOLLOW_LIST_SUCCESS",
    payload: follows,
  });
}

function* followUserSaga() {
  const { data: userPage } = yield select(state => state.userPage);
  const { data: currentUser } = yield call(repository.follow, userPage._id);

  console.log("userPage", userPage);
  console.log("currentUser", currentUser);

  yield put({
    type: "@auth/SET_CURRENT_USER_SUCCESS",
    payload: currentUser,
  });
}

export default all([
  takeLatest("@follow/GET_FOLLOW_LIST", getFollowListSaga),
  takeLatest("@follow/FOLLOW_USER", followUserSaga),
]);
