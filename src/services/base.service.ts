import axios from "axios";
import { apiConfig } from "../config/api";

export const request = () => {

  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
  });


  return instance;
};
