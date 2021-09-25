import axios from "axios";

const setToken = (token) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const apiClient = axios.create({
  baseURL: "http://0.0.0.0:80/",
  headers: {
    // withCredentials: true,
    // xsrfCookieName: "XSRF-TOKEN",
    // xsrfHeaderName: "X-XSRF-TOKEN",
  },
});

export default apiClient;
export { setToken };
