import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/performance/searched_commitblock",
    method: "post",
    response: params => {
      console.log(params.body);
      // const post = JSON.parse(params.body);
      // console.log(post);
      console.log(params.body["selected_platform"]);
      if (
        params.body["selected_platform"] ===
        "TencentCloud_16c_32g_SA2.4XLARGE32"
      ) {
        return {
          code: 0,
          data: {
            list: [
              {
                /** 任务标签 */
                task_id: 1, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 2, // 任务属性
                task_search_group: "hybrid_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注2",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.12.1",
                engine_branch: "master",
                engine_commit: "dwedqweo21w",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWSQ",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 3, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注3",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "qdrant",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 4, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注4",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "milvus",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 5, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 6, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注6",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "milvus",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 7, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "qdrant",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 8, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注8",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 9, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 10, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注10",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "qdrant",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              }
            ],
            total: 10
          }
        };
      } else {
        return {
          code: 0,
          data: {
            list: [
              {
                /** 任务标签 */
                task_id: 11, // 任务属性
                task_search_group: "single_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.1.1",
                engine_branch: "master",
                engine_commit: "1234567890",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWFLAT",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "AWS_4c_8g_c5d.xlarge",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              },
              {
                /** 任务标签 */
                task_id: 12, // 任务属性
                task_search_group: "hybrid_search",
                task_run_by: "bot",
                task_run_at: 1609837428000,
                task_finish_at: 1609837428000,
                task_status: "Finish",
                task_need_cancel: false,
                task_root_config_name:
                  "qdrant_HNSW_single_node_laion-768-5m-ip",
                task_sub_count: 5,
                task_remark: "我是任务备注2",
                task_sub_list: [
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  },
                  {
                    sub_task_name:
                      "qdrant-v1.1.1-single_node-HNSW-m-16-efc-256-dataset-laion-768-5m-ip-upload_parallel-16-batch_size-64",
                    sub_task_run_at: 1609837428000,
                    sub_task_finish_at: 1609837428000,
                    sub_task_status: "Finish"
                  }
                ],

                /** engine 信息 */
                engine_id: 1,
                engine_name: "myscale",
                engine_release_at: 1609837428000,
                engine_version: "v0.12.1",
                engine_branch: "master",
                engine_commit: "dwedqweo21w",
                engine_message: "Enable LWD",
                engine_link:
                  "https://cloud.qdrant.io/accounts/e4cea167-157e-4d31-a8a3-124977141a61/clusters/ccb8f3dd-d647-4288-bf6e-17db100b983d#metrics",

                /** 索引信息 */
                index_type: "HNSWSQ",
                index_general_config: "{'optimizer':{'optimize':true}}",

                /** 平台信息 */
                platform: "AWS_4c_8g_c5d.xlarge",
                cpu_name: "AMD",
                cores: 4,
                memory: 8192,
                disk_type: "cbs",
                disk_capacity: 200,
                remark: "腾讯云 200GB 云盘",

                /** 数据集信息 */
                dataset: "laion-768-5m-ip",
                dataset_group: "laion-768-5m-ip",
                dataset_tag: "no-filter"
              }
            ],
            total: 2
          }
        };
      }
    }
  }
] as MockMethod[];
