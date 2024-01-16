import axios from "axios";

const SERVER_API_URL = "http://18.216.116.204:8080/api/v1/bank";
// const SERVER_API_URL = "http://localhost:8080/api/v1/bank";

const api = axios.create({
  baseURL: SERVER_API_URL,
  withCredentials: true,
});

export const transferMoney = async (transferDetails, token) => {
  try {
    const response = await api.post("/transfer", transferDetails, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Transfer Money API Error:");
    console.error(error);
    throw error;
  }
};
