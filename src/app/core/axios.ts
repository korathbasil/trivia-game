import Axios from "axios";

const API_BASE_URL = "https://opentdb.com";

const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
});

export { axiosInstance as axios };
