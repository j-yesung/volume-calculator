import axios from "axios";

export const BASE_HEADER = {
	"Access-Control-Allow-Origin": "*",
	"Content-Type": "application/json",
};

export const API = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: BASE_HEADER,
});
