export function getDataUserPage(username) {
  return { type: "@userPage/GET_DATA_USER_PAGE", payload: { username } };
}
