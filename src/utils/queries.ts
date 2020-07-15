import axios from 'axios';
import URL from '../urls';
import { IPost } from '../interfaces';

const headers = {
  'Content-Type': 'application/json',
};
const getOne = (id: string) => {
  return axios.get(URL.base + URL.apiV + URL.recipes + id);
};
const get = () => {
  return axios.get(URL.base + URL.apiV + URL.recipes);
};
const post = (data: IPost) => {
  return axios.post(URL.base + URL.apiV + URL.recipes, JSON.stringify(data), {
    headers,
  });
};
const postEdit = (data: IPost, id: number) => {
  return axios.put(URL.base + URL.apiV + URL.recipes + id, JSON.stringify(data), {
    headers,
  });
};

export default {
  post,
  postEdit,
  get,
  getOne,
};
