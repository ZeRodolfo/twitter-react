import API from "../../../config/API";
import changeJsonToFormData from "../../../utils/functions/changeJsonToFormData";

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

export const signUp = async json => {
  return new Promise((resolve, reject) => {
    const api = API(true);
    api
      .post("/register", json)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const savePersonalData = async json => {
  return new Promise((resolve, reject) => {
    const api = API(true);
    api
      .put("/users/me/update", json)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const saveCover = async file => {
  const formData = new FormData();
  changeJsonToFormData(formData, file);

  return new Promise((resolve, reject) => {
    const api = API(true);
    api
      .put("/users/me/update-cover", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const saveAvatar = async file => {
  const formData = new FormData();
  changeJsonToFormData(formData, file);

  return new Promise((resolve, reject) => {
    const api = API(true);
    api
      .put("/users/me/update-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
