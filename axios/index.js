import axios from "axios";

export const baseInstanceAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL,
  headers: { "Content-Type": "application/json" },
  origin: true,
});
