import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: "https://localhost:7144/api/",
});

//response internceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
