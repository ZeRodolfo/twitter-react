import { put, all, takeLatest } from "redux-saga/effects";

function* getTweetsListSaga() {
  yield put({
    type: "@tweets/SET_TWEETS_LIST_SUCCESS",
    payload: [
      {
        id: 3,
        avatar: "https://cdnb.artstation.com/p/assets/images/images/021/082/417/large/emma-alvarez-piccolo-01.jpg?1570332168",
        name: "Piccolo",
        verifiedAccount: true,
        key: "piccolo",
        published_at: "2m",
        content: "Os limites só existem se você os deixar existir.",
        totalComments: 10,
        totalRetweets: 15,
        totalLikes: 40,
      },
      {
        id: 2,
        avatar: "https://i.pinimg.com/originals/f3/fd/a0/f3fda0fd5a499f0e6b1b27cfd9702114.jpg",
        name: "Vegeta",
        verifiedAccount: true,
        key: "vegeta",
        published_at: "2m",
        content:
          "O melhor guerreiro não é http://user:pass@example.com:8080 aquele que sempre ganha, mas o que mantem o seu orgulho mesmo na derrota",
        totalComments: 10,
        totalRetweets: 15,
        totalLikes: 40,
      },
      {
        id: 2,
        avatar: "https://i.pinimg.com/originals/f3/fd/a0/f3fda0fd5a499f0e6b1b27cfd9702114.jpg",
        name: "Vegeta",
        verifiedAccount: true,
        key: "vegeta",
        published_at: "2m",
        content: "O miserável é um gênio!",
        totalComments: 10,
        totalRetweets: 15,
        totalLikes: 40,
      },
      {
        id: 1,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSz-vO3FBQiptdRsUPZpHo_piPpqRPAhBqfemgpZZBjiXWh1vR&usqp=CAU",
        name: "Goku",
        verifiedAccount: true,
        key: "kakaroto",
        published_at: "2m",
        content: `vegeta...
        
        Você pode ser mau mas eu sinto que no fundo mais bem lá no fundo tem um sayanjin puro,bondoso e heroi`,
        totalComments: 10,
        totalRetweets: 15,
        totalLikes: 40,
      },
    ],
  });
}

export default all([takeLatest("@tweets/GET_TWEETS_LIST", getTweetsListSaga)]);
