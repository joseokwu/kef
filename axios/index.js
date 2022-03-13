import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
});
