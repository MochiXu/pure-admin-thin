import { http } from "@/utils/http";

type Result = {
  data?: {
    list: Array<any>;
    total: number;
  };
  code?: number;
  msg?: string;
};

export const getEnginesList = (data?: object) => {
  return http.request<Result>("post", "/task/engines", { data });
};
