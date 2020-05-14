import ENVIROMENT_SETUP from "../../../config/API";

export const userPage = async id => {
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.get(`/profilers`, { id })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
