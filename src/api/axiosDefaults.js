import axios from "axios";

axios.defaults.baseURL = "https://moments-pp5-4e7d3f875a72.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = false;

export const axiosReq = axios.create();
export const axiosRes = axios.create();