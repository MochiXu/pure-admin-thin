import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/performance/topbtn",
    method: "post",
    response: () => {
      return {
        code: 0,
        data: {
          list: [
            {
              platform: "TencentCloud_16c_32g_SA2.4XLARGE32",
              datasets: {
                list: [
                  {
                    dataset_name: "laion-768-cosine-5m",
                    dataset_group: "laion-768-cosine-5m",
                    dataset_tag: "no-filter",
                    engines: ["myscale", "milvus", "qdrant"]
                  },
                  {
                    dataset_name: "arxiv-titles-384-angular-filter",
                    dataset_group: "arxiv-titles-384-angular",
                    dataset_tag: "filter",
                    engines: ["weaviate", "pinecone", "qdrant"]
                  },
                  {
                    dataset_name: "gist-960-euclidean-l2",
                    dataset_group: "gist-960-euclidean",
                    dataset_tag: "no-filter",
                    engines: ["zilliz", "proxima", "redis"]
                  },
                  {
                    dataset_name: "h-and-m-2048-angular-filter",
                    dataset_group: "h-and-m-2048-angular",
                    dataset_tag: "filter",
                    engines: ["elasticsearch", "redis", "myscale"]
                  }
                ],
                total: 4
              }
            },
            {
              platform: "AWS_4c_8g_c5d.xlarge",
              datasets: {
                list: [
                  {
                    dataset_name: "laion-768-cosine-5m",
                    dataset_group: "laion-768-cosine-5m",
                    dataset_tag: "no-filter",
                    engines: [
                      "myscale",
                      "milvus",
                      "qdrant",
                      "elasticsearch",
                      "redis"
                    ]
                  },
                  {
                    dataset_name: "gist-960-euclidean-l2",
                    dataset_group: "gist-960-euclidean",
                    dataset_tag: "no-filter",
                    engines: [
                      "weaviate",
                      "pinecone",
                      "qdrant",
                      "zilliz",
                      "proxima",
                      "redis"
                    ]
                  }
                ],
                total: 2
              }
            },
            {
              platform: "K8S_4c_8g_Tencent",
              datasets: {
                list: [
                  {
                    dataset_name: "random-geo-radius-100-angular-filter",
                    dataset_group: "random-geo-radius-100-angular",
                    dataset_tag: "filter",
                    engines: [
                      "weaviate",
                      "proxima",
                      "milvus",
                      "myscale",
                      "qdrant"
                    ]
                  },
                  {
                    dataset_name: "arxiv-titles-384-angular-no-filter",
                    dataset_group: "arxiv-titles-384-angular",
                    dataset_tag: "no-filter",
                    engines: ["weaviate", "pinecone", "qdrant"]
                  },
                  {
                    dataset_name: "gist-960-euclidean",
                    dataset_group: "gist-960-euclidean",
                    dataset_tag: "no-filter",
                    engines: ["zilliz", "proxima", "redis"]
                  }
                ],
                total: 3
              }
            }
          ],
          total: 3
        }
      };
    }
  }
] as MockMethod[];
