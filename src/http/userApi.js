import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "USER",
  });
  localStorage.setItem("token", data.accessToken);
  return jwt_decode(data.refreshToken);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.accessToken);
  return jwt_decode(data.refreshToken);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/refresh");
  localStorage.setItem("token", data.accessToken);
  return { user: jwt_decode(data.refreshToken), basket: data.basket };
};

export const logout = async () => {
  localStorage.removeItem("token");
  return $authHost.post("api/user/logout");
};
