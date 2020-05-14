export function getCurrentUser() {
  return { type: "@auth/GET_CURRENT_USER" };
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
