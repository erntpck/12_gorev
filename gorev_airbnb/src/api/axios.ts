import axios from "axios";
import type { Home } from "../types/home";


export const api = axios.create({
  baseURL: "http://localhost:5174/" 
});

export const HomesAPI = {
  list: async (): Promise<Home[]> => {
    const res = await api.get("homes");
    return res.data;
  },
  get: async (id: string | number): Promise<Home> => {
    const res = await api.get(`homes/${id}`);
    return res.data;
  },
  create: async (data: Home): Promise<Home> => {
    const res = await api.post("homes", data);
    return res.data;
  },
  update: async (id: string | number, data: Home): Promise<Home> => {
    const res = await api.put(`homes/${id}`, data);
    return res.data;
  },
  remove: async (id: string | number): Promise<void> => {
    await api.delete(`homes/${id}`);
  }
};