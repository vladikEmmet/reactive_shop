import axios from "axios";

const $host = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
// $host.interceptors.response.use(
//   function (config) {
//     return config;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !originalRequest._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const { data } = await $authHost.get("api/user/refresh");
//         localStorage.setItem("token", data.accessToken);
//         return $host.request(originalRequest);
//       } catch (err) {
//         console.log("Not authorized");
//       }
//     }
//     throw error;
//   }
// );

export { $host, $authHost };
