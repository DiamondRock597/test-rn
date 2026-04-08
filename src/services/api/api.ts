import axios, { AxiosPromise } from 'axios';

const REQUEST_TIMEOUT = 60000;

export const axiosInstance = axios.create({
  baseURL: 'https://artjoms-spole.fly.dev',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: REQUEST_TIMEOUT
});

export class API {
  static post = <T = any>(
    url: string,
    data?: Record<string, any>,
    headers?: Record<string, any>
  ): AxiosPromise<T> => axiosInstance.post(url, data, { headers });

  static get = <T = any>(url: string, config?: Record<string, any>): AxiosPromise<T> =>
    axiosInstance.get(url, config);

  static put = <T = any>(
    url: string,
    data?: Record<string, any>,
    headers?: Record<string, any>
  ): AxiosPromise<T> => axiosInstance.put(url, data, { headers });
}
