import { AxiosResponse } from "axios";
import { request } from "../base.service";
import { apiConfig } from "../../config/api";

export function fetchRamenProducts(
  name: string
): Promise<AxiosResponse<API.ApiResponse>> {

  console.log(apiConfig);
  return request().get("", {
    params: {
      key: apiConfig.keyAPI,
      large_area: 'Z011',
      format: 'json',
      count: 12,
      name:name
    }
  });
}