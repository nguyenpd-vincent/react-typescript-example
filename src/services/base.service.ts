import axios from "axios";
import { apiConfig } from "../config/api";

export const request = () => {
  console.log('apiConfig.baseUrl :>> ', apiConfig.baseUrl);
  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
  });


  return instance;
};
