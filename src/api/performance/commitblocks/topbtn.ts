import { http } from "@/utils/http";

type Result = {
  data?: {
    list: Array<any>;
    // total 记录的list长度，用于前台进行分页
    total: number;
  };
  code?: number;
  msg?: string;
};

export const getPerformanceTopBtnList = (data?: object) => {
  // data = {run_date_timestamp: [timestamp0, timestamp1], release_date_timestamp: [timestamp0, timestamp1]}
  return http.request<Result>("post", "/performance/topbtn", { data });
};
