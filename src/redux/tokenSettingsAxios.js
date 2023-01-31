import axios from 'axios';

export const baseURL = 'https://leaopards-team.onrender.com/api';

export const axiosBaseUrl = axios.create({ baseURL });

export const token = {
  set(token) {
    axiosBaseUrl.defaults.headers.common['Authorization'] = token
      ? `Bearer ${token}`
      : '';
  },
  unset() {
    this.set();
  },
};
