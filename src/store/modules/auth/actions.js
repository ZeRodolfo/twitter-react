export function signIn(username, password) {
  return { type: "@auth/SIGN_IN", payload: { username, password } };
}

export function changeCover(cover) {
  return {
    type: "@auth/CHANGE_COVER",
    payload: { cover },
  };
}

export function changeAvatar(avatar) {
  return {
    type: "@auth/CHANGE_AVATAR",
    payload: { avatar },
  };
}
