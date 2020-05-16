export function signIn(username, password) {
  return { type: "@auth/SIGN_IN", payload: { username, password } };
}

export function signUp(payload) {
  return { type: "@auth/SIGN_UP", payload };
}

export function logout() {
  return { type: "@auth/LOGOUT" };
}

export function savePersonalData(payload) {
  return { type: "@auth/SAVE_PERSONAL_DATA", payload };
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
