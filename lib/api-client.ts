// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Send cookies with each request
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
