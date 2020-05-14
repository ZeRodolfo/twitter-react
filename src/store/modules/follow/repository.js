import ENVIROMENT_SETUP from "../../../config/API";

export const follows = async () => {
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.get(`/follows`)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
