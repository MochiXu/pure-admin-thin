import { http } from "../../utils/http";

type Result = {
  data?: {
    list: Array<any>;
    // total 记录的list长度，用于前台进行分页
    total: number;
  };
  code?: number;
  msg?: string;
};

export const getRoleList = (data?: object) => {
  return http.request<Result>("post", "/performance/s", { data });
};
