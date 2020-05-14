import { put, all, takeLatest } from "redux-saga/effects";

function* getCurrentUserSaga() {
  /*yield put({
    type: "@auth/SET_CURRENT_USER_SUCCESS",
    payload: {
      id: 1,
      cover:
        "https://i2.wp.com/www.tudogeek.com.br/wp-content/uploads/2015/04/dragon-ball-z-21-Cool-Wallpapers.jpg?fit=1200%2C480&ssl=1",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSz-vO3FBQiptdRsUPZpHo_piPpqRPAhBqfemgpZZBjiXWh1vR&usqp=CAU",
      name: "Goku",
      verifiedAccount: true,
      key: "kakaroto",
      description:
        "He is one of the survivors of the extinct Saiyan race. When he arrived he was a violent kid, due to his warrior nature.",
      followers: [
        {
          id: 3,
          cover: "https://images3.alphacoders.com/888/thumb-1920-888361.png",
          avatar:
            "https://cdnb.artstation.com/p/assets/images/images/021/082/417/large/emma-alvarez-piccolo-01.jpg?1570332168",
          name: "Piccolo",
          verifiedAccount: true,
          key: "piccolo",
        },
        {
          id: 2,
          cover: "https://i.ytimg.com/vi/fiNFTqO6ZVI/maxresdefault.jpg",
          avatar:
            "https://i.pinimg.com/originals/f3/fd/a0/f3fda0fd5a499f0e6b1b27cfd9702114.jpg",
          name: "Vegeta",
          verifiedAccount: true,
          key: "vegeta",
        },
      ],
    },
  });*/
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
  takeLatest("@auth/GET_CURRENT_USER", getCurrentUserSaga),
  takeLatest("@auth/CHANGE_COVER", getChangeCoverSaga),
  takeLatest("@auth/CHANGE_AVATAR", getChangeAvatarSaga),
]);
