/**
 * @format
 */
import axios from 'axios';
import { baseUrl } from './endpoints';
import queryString from 'query-string';

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: params => queryString.stringify(params),
});

apiClient.interceptors.request.use(
  value => {
    return value;
  },
  error => {
    throw error;
  },
);

apiClient.interceptors.response.use(
  value => {
    if (value && value.data) {
      return value.data;
    }

    return value;
  },
  error => {
    throw error;
  },
);

export default apiClient;
