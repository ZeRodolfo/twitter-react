const INITIAL_STATE = {
  list: [],
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@tweets/SET_TWEETS_LIST_SUCCESS":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
