import ENVIROMENT_SETUP from "../../../config/API";

export const userPage = async id => {
  console.log("id", id);
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.get(`/profilers`, { params: { id } })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
