import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/task/engines",
    method: "post",
    response: () => {
      return {
        code: 0,
        data: {
          list: [
            {
              engine: "qdrant",
              tag: "local",
              connection_params: {
                host: "xx",
                port: 6333,
                grpc_port: 6334,
                prefer_grpc: false,
                api_key: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  branch: "mqdb-dev",
                  commit: "cdwsmoidjweodjweodewjdikk",
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message:
                    "v2.0.0's commit message, hello, I'm a robot, do you know my name? my name is CAI XU KUN , I'm IKUN",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.9.9",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.9.9: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "qdrant",
              tag: "cloud",
              connection_params: {
                host: "xx",
                port: 6333,
                grpc_port: 6334,
                prefer_grpc: false,
                api_key: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "myscale",
              tag: "local",
              connection_params: {
                host: "xx",
                port: 8443,
                http_type: "http",
                user: "xx",
                password: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "myscale",
              tag: "cloud_dev",
              connection_params: {
                host: "xx",
                port: 8443,
                http_type: "http",
                user: "xx",
                password: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "myscale",
              tag: "cloud_prod",
              connection_params: {
                host: "xx",
                port: 8443,
                http_type: "http",
                user: "xx",
                password: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "weaviate",
              tag: "local",
              connection_params: {
                host: "",
                end_point: ""
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "weaviate",
              tag: "cloud",
              connection_params: {
                host: "xx",
                port: 8090,
                timeout_config: 2000,
                api_key: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "weaviate",
              tag: "cloud",
              connection_params: {
                host: "xx",
                port: 8090,
                timeout_config: 2000,
                api_key: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "weaviate",
              tag: "cloud",
              connection_params: {
                host: "xx",
                port: 8090,
                timeout_config: 2000,
                api_key: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            },
            {
              engine: "weaviate",
              tag: "cloud",
              connection_params: {
                host: "xx",
                port: 8090,
                timeout_config: 2000,
                api_key: "xx"
              },
              released: [
                {
                  released_at: 1676715306000,
                  version: "v2.0.0",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags1",
                  message: "v2.0.0's commit message",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1673777706000,
                  version: "v1.2.2",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags2",
                  message: "v1.2.2: fix some bugs, xx",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                },
                {
                  released_at: 1682072106000,
                  version: "v2.0.1",
                  link: "https://git.moqi.ai/mqdb/ClickHouse/-/tags3",
                  message: "new features, some small fix, some bug fixs",
                  image: {
                    docker_hub: "mochix/vector-db-benchmark-k8s:latest",
                    harbor:
                      "harbor.internal.moqi.ai/mochix/mqdb-container:latest"
                  }
                }
              ]
            }
          ],
          total: 7
        }
      };
    }
  }
] as MockMethod[];
