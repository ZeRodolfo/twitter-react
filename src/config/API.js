import axios from "axios";
import { notification } from "antd";

import { store } from "../store";

const ENVIROMENT_SETUP = (isLogin = false) => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
  });

  api.interceptors.request.use(async config => {
    const { token } = store.getState().auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    response => {
      return Promise.resolve(response);
    },
    error => {
      if (!!error && error.response === undefined) {
        if (error.message === "Network Error") {
          notification.error({
            message: "Erro",
            description:
              "Algo de errado aconteceu. Entre em contato com a nossa equipe de suporte.",
          });

          return Promise.reject(error);
        }
      } else {
        const { status } = error.response;

        if (status === 401) {
          notification.warn({
            message: "Alerta",
            description: isLogin
              ? "Usuário ou senha incorretos. Por favor, tente novamente."
              : "Sua sessão expirou. Por favor, faça o login novamente.",
          });

          localStorage.clear();
          setTimeout(() => {
            document.location.reload(true);
          }, 2000);
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
};

export default ENVIROMENT_SETUP;
