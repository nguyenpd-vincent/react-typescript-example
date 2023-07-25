import { AxiosResponse } from "axios";
import { request } from "../base.service";
import { apiConfig } from "../../config/api";

export function fetchRamenProducts(
  name: string
): Promise<AxiosResponse<API.ApiResponse>> {
  return request().get("", {
    params: {
      large_area: 'Z011',
      key: apiConfig.keyAPI,
      format: 'json',
      count: 12,
      name:name
    }
  });
}