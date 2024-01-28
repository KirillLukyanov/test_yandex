import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

export const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL,
  });

  return apiClient;
};
