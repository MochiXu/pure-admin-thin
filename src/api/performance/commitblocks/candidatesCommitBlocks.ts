import { http } from "@/utils/http";

type Result = {
  data?: {
    list: Array<any>;
    total: number;
  };
  code?: number;
  msg?: string;
};

export const getPerformanceCandidatesCommitBlocks = (data?: object) => {
  // data = {run_date_timestamp: [timestamp0, timestamp1], release_date_timestamp: [timestamp0, timestamp1]}
  return http.request<Result>("post", "/performance/candidates_commitblock", {
    data
  });
};
