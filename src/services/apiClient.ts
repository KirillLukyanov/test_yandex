import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL,
  });

  return apiClient;
};

export const apiClient = createApiClient();
