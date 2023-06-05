import { MockMethod } from "vite-plugin-mock";
import { task_detail_list } from "./taskList";

export default [
  {
    url: "/performance/candidates_commitblock",
    method: "post",
    response: params => {
      console.log(params.body);
      const list: any[] = [];
      task_detail_list.forEach(element => {
        if (params.body["ids"].includes(element["task_id"])) {
          list.push(element);
        }
      });
      return {
        code: 0,
        data: {
          list: list,
          total: list.length
        }
      };
    }
  }
] as MockMethod[];
