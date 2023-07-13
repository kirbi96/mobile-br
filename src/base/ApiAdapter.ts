import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {appConfig} from '../appConfig';
import {Platform} from 'react-native';

export const api = axios.create();

const SUCCESS_STATUSES = [200, 201];
const SERVER_ERROR = 500;

api.defaults.baseURL = appConfig.BASE_URL;

api.interceptors.request.use(
  async config => {
    const newConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'App-Platform': Platform.OS,
        ...config.headers,
      },
    };
    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    // console.log('response', response);

    return response;
  },
  error => {
    // global showing error messages
    // console.log('response error', error?.response);

    return Promise.reject(error);
  },
);

export const setAccessToken = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearAccessToken = () => {
  api.defaults.headers.Authorization = null;
};

export interface IConfig {
  url: string;
  data?: Object;
  config?: AxiosRequestConfig;
}

export interface IResponseCommon<T> {
  success: boolean;
  errors: {
    [key: string]: string[];
  } | null;
  message: string | null;
  data: T | T[];
}
