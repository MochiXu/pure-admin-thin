// 局部定义 commitblock 存储类型
export interface CommitBlockStoreConfigs {
  // 最终用来对比的 CommitBlocks ids 列表
  candidates_cb_ids: number[];
  // 当前暂时选中的 CommitBlocks ids 列表
  current_selected_cb_ids: number[];
}
export const CommitBlockStoreDefaultData = {
  candidates_cb_ids: [],
  current_selected_cb_ids: []
};

export const TopBtnStoreDefaultData = {
  run_date_range: [new Date(), new Date()],
  release_date_range: [new Date(), new Date()],
  selected_platform: "",
  selected_dataset_group: "",
  selected_engines: ""
};

export const CommitBlockStoreConfigName = "performance_commitblocks_status_ids";
