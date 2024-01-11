import axios from 'axios';

// const baseURL = process.env.REACT_APP_BASE_SERVER ??'https://weak-tan-bighorn-sheep.cyclic.app';

const baseURL = 'http://127.0.0.1:5000';

const apiInstance = axios.create({
  baseURL,
});

export default apiInstance;
