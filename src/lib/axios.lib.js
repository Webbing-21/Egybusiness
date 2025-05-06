import axios from "axios";

export const baseURL = process.env.REACT_APP_BACKEND_URL
export const customAxios = axios.create({
	baseURL: `${baseURL}/api`,
	timeout: 8000,
	headers: {
		Accept: 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`
	},
});
