import axios from "axios";
import { userStore } from "../types";

const config = { headers: { "Content-Type": "application/json" } };

export const login = (user: userStore) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
