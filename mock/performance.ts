import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/performance/s",
    method: "post",
    response: () => {
      return {
        code: 0,
        data: {
          list: [
            {
              // 任务运行时间
              runTime: 1609837428000,
              // Commit Release 时间
              releaseTime: 1645477701000,
              result_group: "single_search",
              engine: "MyScale",
              index_type: "HNSWFLAT",
              index_config: "fake config",
              version: "v1.0.0",
              branch: "master",
              commit: "commit1",
              remarks: "fix some bug",
              other: "client resource",

              createTime: 1609837428000,
              updateTime: 1609837428000,
              creator: "admin",
              updater: "",
              deleted: false,
              tenantId: 1,
              id: 1,
              name: "超级管理员",
              code: "super_admin",
              sort: 1,
              status: 0,
              type: 1,
              remark: "超级管理员",
              dataScope: 1,
              dataScopeDeptIds: null
            },
            {
              // 任务运行时间
              runTime: 1609837428000,
              // Commit Release 时间
              releaseTime: 1645477701000,
              result_group: "single_search",
              engine: "Qdrant",
              index_type: "HNSWFLAT",
              index_config: "fake config",
              version: "v1.1.0",
              branch: "master",
              commit: "commit2",
              remarks: "fix 2 bug",
              other: "client resource",
              //
              createTime: 1609837428000,
              updateTime: 1645477700000,
              creator: "admin",
              updater: "",
              deleted: false,
              tenantId: 1,
              id: 2,
              name: "普通角色",
              code: "common",
              sort: 2,
              status: 0,
              type: 1,
              remark: "普通角色",
              dataScope: 2,
              dataScopeDeptIds: null
            },
            {
              // 任务运行时间
              runTime: 1609837428000,
              // Commit Release 时间
              releaseTime: 1645477701000,
              result_group: "single_search",
              engine: "Milvus",
              index_type: "HNSWFLAT",
              index_config: "fake config",
              version: "v1.11.0",
              branch: "master",
              commit: "commit3",
              remarks: "fix 4 bug",
              other: "client resource",
              //
              createTime: 1609912175000,
              updateTime: 1647698441000,
              creator: "",
              updater: "1",
              deleted: false,
              tenantId: 1,
              id: 101,
              name: "测试账号",
              code: "test",
              sort: 0,
              status: 0,
              type: 2,
              remark: "132",
              dataScope: 1,
              dataScopeDeptIds: []
            },
            {
              // 任务运行时间
              runTime: 1609837428000,
              // Commit Release 时间
              releaseTime: 1645477701000,
              result_group: "single_search",
              engine: "MyScale",
              index_type: "HNSWFLAT",
              index_config: "fake config",
              version: "v1.0.0",
              branch: "master",
              commit: "commit1",
              remarks: "fix some bug",
              other: "client resource",

              createTime: 1609837428000,
              updateTime: 1609837428000,
              creator: "admin",
              updater: "",
              deleted: false,
              tenantId: 1,
              id: 1,
              name: "超级管理员",
              code: "super_admin",
              sort: 1,
              status: 0,
              type: 1,
              remark: "超级管理员",
              dataScope: 1,
              dataScopeDeptIds: null
            },
            {
              // 任务运行时间
              runTime: 1609837428000,
              // Commit Release 时间
              releaseTime: 1645477701000,
              result_group: "single_search",
              engine: "Qdrant",
              index_type: "HNSWFLAT",
              index_config: "fake config",
              version: "v1.1.0",
              branch: "master",
              commit: "commit2",
              remarks: "fix 2 bug",
              other: "client resource",
              //
              createTime: 1609837428000,
              updateTime: 1645477700000,
              creator: "admin",
              updater: "",
              deleted: false,
              tenantId: 1,
              id: 2,
              name: "普通角色",
              code: "common",
              sort: 2,
              status: 0,
              type: 1,
              remark: "普通角色",
              dataScope: 2,
              dataScopeDeptIds: null
            },
            {
              // 任务运行时间
              runTime: 1609837428000,
              // Commit Release 时间
              releaseTime: 1645477701000,
              result_group: "single_search",
              engine: "Milvus",
              index_type: "HNSWFLAT",
              index_config: "fake config",
              version: "v1.11.0",
              branch: "master",
              commit: "commit3",
              remarks: "fix 4 bug",
              other: "client resource",
              //
              createTime: 1609912175000,
              updateTime: 1647698441000,
              creator: "",
              updater: "1",
              deleted: false,
              tenantId: 1,
              id: 101,
              name: "测试账号",
              code: "test",
              sort: 0,
              status: 0,
              type: 2,
              remark: "132",
              dataScope: 1,
              dataScopeDeptIds: []
            }
          ],
          total: 6
        }
      };
    }
  }
] as MockMethod[];
