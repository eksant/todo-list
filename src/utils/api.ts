import axios from 'axios';
import { IApiResponse } from '@/models';

const instance = axios.create({
  baseURL: 'https://todo.api.devcode.gethired.id/',
});

const getAxios = async (url: string): Promise<IApiResponse> => {
  return instance
    .get(url)
    .then((resp: any) => ({
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText,
    }))
    .catch((error) => ({
      ...error.response?.data,
      meta: { status: error.response.status },
    }));
};

const postAxios = async (url: string, data?: any): Promise<IApiResponse> => {
  return instance
    .post(url, data)
    .then((resp: any) => ({ data: resp.data }))
    .catch((error) => ({
      ...error.response?.data,
      meta: { status: error.response.status },
    }));
};

const delAxios = async (url: string): Promise<IApiResponse> => {
  return instance
    .delete(url)
    .then((resp: any) => ({ data: resp.data }))
    .catch((error) => ({
      ...error.response?.data,
      meta: { status: error.response.status },
    }));
};

const api = { getAxios, postAxios, delAxios };

export default api;
