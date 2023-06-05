import { store } from "@/store";
import { defineStore } from "pinia";
import { storageSession } from "@pureadmin/utils";
import {
  TopBtnStoreConfigs,
  TopBtnStoreConfigName
} from "@/views/performance/commitblock/topbtn/topBtnTypes";

// pinia 只有 state, getter, action, 简称状态管理库
export const useTopBtnStore = defineStore({
  id: "performance_topbtn_status",
  state: (): TopBtnStoreConfigs => ({
    // 当前筛选的日期数据
    run_date_range: storageSession().getItem<TopBtnStoreConfigs>(
      TopBtnStoreConfigName
    )?.run_date_range ?? [new Date(), new Date()],
    release_date_range: storageSession().getItem<TopBtnStoreConfigs>(
      TopBtnStoreConfigName
    )?.release_date_range ?? [new Date(), new Date()],
    // 当前选中的测试平台 platform
    selected_platform:
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
        ?.selected_platform ?? "",
    // 当前选中的数据集 dataset_group
    selected_dataset_group:
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
        ?.selected_dataset_group ?? "",
    // 当前选中的引擎列表
    selected_engines:
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
        ?.selected_engines ?? []
  }),
  getters: {},
  actions: {}
});

export function useTopBtnStoreHook() {
  return useTopBtnStore(store);
}
