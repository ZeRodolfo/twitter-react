import API from "../../../config/API";

export const signIn = async json => {
  return new Promise((resolve, reject) => {
    const api = API(true);
    api
      .post("/login", json)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
