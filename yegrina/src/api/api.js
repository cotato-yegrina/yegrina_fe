import axios from "axios";

// const token = localStorage.getItem(TOKEN);

const api = axios.create({
  baseURL: '서버',
  headers: {
    Authorization: `Bearer ${JSON.parse('')}`,
  },
});

export default api;
