import { store } from "@/store";
import { defineStore } from "pinia";
import { storageSession } from "@pureadmin/utils";
import {
  CommitBlockStoreConfigs,
  CommitBlockStoreConfigName
} from "@/views/performance/commitblock/common/commitBlockTypes";

// pinia 只有 state, getter, action, 简称状态管理库
export const useCommitBlockStatusStore = defineStore({
  id: "performance_commitblocks_status",
  state: (): CommitBlockStoreConfigs => ({
    // 最终用来对比的 CommitBlocks 列表
    candidates_cb_ids:
      storageSession().getItem<CommitBlockStoreConfigs>(
        CommitBlockStoreConfigName
      )?.candidates_cb_ids ?? [],
    // 当前暂时选中的 CommitBlocks 列表
    current_selected_cb_ids:
      storageSession().getItem<CommitBlockStoreConfigs>(
        CommitBlockStoreConfigName
      )?.current_selected_cb_ids ?? []
  }),
  getters: {},
  actions: {}
});

export function useCommitBlockStatusStoreHook() {
  return useCommitBlockStatusStore(store);
}
