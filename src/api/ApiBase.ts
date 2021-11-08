import axios from 'axios';
import config from '../config';

export const baseUrl = config.baseURL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
});

export default axiosInstance;
