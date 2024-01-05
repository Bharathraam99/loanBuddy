import axios from "axios";

const SERVER_API_URL = "http://18.216.116.204:8080/api/v1/auth";
// const SERVER_API_URL = "http://localhost:8080/api/v1/auth";

const api = axios.create({
  baseURL: SERVER_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const login = async ({ userName, userPassword }) => {

  const response = await api.post("/signin", {
    userName,
    userPassword,
  });
  return response;
};
