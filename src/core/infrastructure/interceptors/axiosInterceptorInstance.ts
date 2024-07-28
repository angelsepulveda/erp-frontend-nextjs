import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: "",
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
