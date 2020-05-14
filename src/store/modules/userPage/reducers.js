const INITIAL_STATE = {
  data: {
    id: null,
    cover: "",
    avatar: "",
    name: "Goku",
    verifiedAccount: true,
    key: "kakaroto",
    description:
      "He is one of the survivors of the extinct Saiyan race. When he arrived he was a violent kid, due to his warrior nature.",
  },
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@userPage/SET_DATA_USER_PAGE_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
