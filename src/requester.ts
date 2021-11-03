import axios from "axios";
import config from "./config";
const { baseURL } = config;

const requester = axios.create({
  baseURL,
  responseType: "json",
  validateStatus: (status) => status === 200,
});

export default requester;
