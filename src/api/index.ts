import axios from 'axios';

const baseURL =
  import.meta.env.VITE_REACT_APP_BASE_SERVER ?? 'https://127.0.0.1:5000';

const apiInstance = axios.create({
  baseURL,
});

export default apiInstance;
