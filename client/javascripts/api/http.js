import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8090/app',
  headers: {
    Accept: 'application/json',
  },
});

export default http;
