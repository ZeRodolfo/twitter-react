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

export const follow = async id => {
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.put(`/follows/${id}`)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
