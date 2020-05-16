export function getTweetsList() {
  return { type: "@tweets/GET_TWEETS_LIST" };
}

export function postTweet(content) {
  return { type: "@tweets/POST_TWEET", payload: { content } };
}
