import ENVIROMENT_SETUP from "../../../config/API";

export const tweets = async id => {
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.get(`/tweets`)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
