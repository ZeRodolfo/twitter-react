export function getFollowList() {
  return { type: "@follow/GET_FOLLOW_LIST" };
}

export function followUser() {
  return {
    type: "@follow/FOLLOW_USER"
  }
}