import axios from "axios";
import { LocalStorage } from "./LocalStorage";

const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const jwtToken = LocalStorage.get<string>("jwtToken");
    if (jwtToken) {
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance as axios };
