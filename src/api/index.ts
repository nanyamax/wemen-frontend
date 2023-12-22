import axios from 'axios';

// const baseURL = process.env.REACT_APP_BASE_SERVER ?? '';
const baseURL = 'https://weak-tan-bighorn-sheep.cyclic.app';

const apiInstance = axios.create({
  baseURL,
});

export default apiInstance;
