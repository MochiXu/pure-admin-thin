// 局部定义 topbtn 面板, 定义具体类型, 避免 v-model 异常提醒
export interface TopBtnStoreConfigs {
  // 测试任务运行的时间范围
  run_date_range: [Date, Date];
  // 测试的 engine 版本发布时间范围
  release_date_range: [Date, Date];
  // 选中的测试平台
  selected_platform: string | any[];
  // 选中的数据集
  selected_dataset_group: string | any[];
  // 选中的 engines 列表
  selected_engines: string[];
}

export const TopBtnStoreConfigName = "performance_commitblocks_topbtn_data";
