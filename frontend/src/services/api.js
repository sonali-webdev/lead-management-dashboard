import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchLeads = (params) => API.get("/api/leads", { params });

export const fetchLeadById = (id) => API.get(`/api/leads/${id}`);

export const fetchAnalytics = () => API.get("/api/analytics");

export default API;
