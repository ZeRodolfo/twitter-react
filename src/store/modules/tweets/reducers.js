const INITIAL_STATE = {
  list: [],
  clearTweetContent: false,
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@tweets/SET_TWEETS_LIST_SUCCESS":
      return {
        ...state,
        list: action.payload,
      };

    case "@tweets/SET_CLEAR_TWEET_SUCCESS":
      return {
        ...state,
        clearTweetContent: action.payload
      };

    default:
      return state;
  }
}
