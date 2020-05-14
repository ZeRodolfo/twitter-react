const INITIAL_STATE = {
  currentUser: {
    id: null,
    cover: "",
    avatar: "",
    name: "Goku",
    verifiedAccount: true,
    key: "kakaroto",
    description:
      "He is one of the survivors of the extinct Saiyan race. When he arrived he was a violent kid, due to his warrior nature.",
    followers: [],
  },
  token: "",
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SET_CURRENT_USER_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "@auth/CHANGE_COVER_SUCCESS":
      return {
        ...state,
        cover: action.payload,
      };

    case "@auth/CHANGE_AVATAR_SUCCESS":
      return {
        ...state,
        avatar: action.payload,
      };

    default:
      return state;
  }
}
