const INITIAL_STATE = {
  currentUser: {
    _id: null,
    cover: "",
    avatar: "",
    name: "",
    verifiedAccount: false,
    username: "",
    description: "",
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

    case "@auth/SET_TOKEN_USER":
      return {
        ...state,
        token: action.payload,
      };

    case "@auth/CHANGE_COVER_SUCCESS":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cover: action.payload,
        },
      };

    case "@auth/CHANGE_AVATAR_SUCCESS":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          avatar: action.payload,
        },
      };

    default:
      return state;
  }
}
