import { App } from "vue";
import axios from "axios";

let config: object = {};
const { VITE_PUBLIC_PATH } = import.meta.env;

// 设置配置
const setConfig = (cfg?: unknown) => {
  config = Object.assign(config, cfg);
};

// 获取对应配置项结果
const getConfig = (key?: string): ServerConfigs => {
  if (typeof key === "string") {
    // key 根据 . 进行分割
    const arr = key.split(".");
    if (arr && arr.length) {
      let data = config;
      arr.forEach(v => {
        if (data && typeof data[v] !== "undefined") {
          data = data[v];
        } else {
          data = null;
        }
      });
      return data;
    }
  }
  return config;
};

/** 获取项目动态全局配置 */
export const getServerConfig = async (app: App): Promise<undefined> => {
  app.config.globalProperties.$config = getConfig();
  return axios({
    method: "get",
    url: `${VITE_PUBLIC_PATH}serverConfig.json`
  })
    .then(({ data: config }) => {
      let $config = app.config.globalProperties.$config;
      // 自动注入项目配置
      if (app && $config && typeof config === "object") {
        $config = Object.assign($config, config);
        app.config.globalProperties.$config = $config;
        // 设置全局配置
        setConfig($config);
      }
      return $config;
    })
    .catch(() => {
      // 实际上通过 public 下 ServerConfig.json 文件进行配置获取
      throw "请在public文件夹下添加serverConfig.json配置文件";
    });
};

export { getConfig, setConfig };
