import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = "EXAMPLE_TOKEN";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: AUTH_TOKEN,
  },
});
