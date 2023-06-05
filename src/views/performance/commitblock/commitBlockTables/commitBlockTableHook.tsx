import { delay } from "@pureadmin/utils";
import { getPerformanceSearchedCommitBlocks } from "@/api/performance/commitblocks/searchedCommitBlocks";
import { getPerformanceCandidatesCommitBlocks } from "@/api/performance/commitblocks/candidatesCommitBlocks";
import { ref, onMounted, watch, nextTick, computed, Ref } from "vue";
import {
  searched_table_columns,
  selected_table_columns,
  loading,
  pagination,
  loadingConfig,
  buttonClass
} from "./tableConfigs";
import { storageSession } from "@pureadmin/utils";
import {
  CommitBlockStoreConfigs,
  CommitBlockStoreConfigName,
  CommitBlockStoreDefaultData,
  TopBtnStoreDefaultData
} from "@/views/performance/commitblock/common/commitBlockTypes";
import { useCommitBlockStatusStoreHook } from "@/store/modules/performance/commitBlockStatus";
import {
  TopBtnStoreConfigName,
  TopBtnStoreConfigs
} from "../topbtn/topBtnTypes";

export function useCommitBlockTable() {
  /** table raw data */
  const searched_table_data = ref([]);
  const candidates_table_data = ref([]);

  /** table data ids */
  const current_selected_cb_ids = ref(
    useCommitBlockStatusStoreHook().current_selected_cb_ids
  );
  const current_candidates_cb_ids = ref(
    useCommitBlockStatusStoreHook().candidates_cb_ids
  );

  /** table 引用对象 */
  const searchedTableRef = ref();
  const selectedTableRef = ref();

  /** searched_table_data 计算属性 */
  const searched_table_computed_data = computed((): Ref<any[]> => {
    // candicates ids 发生变化时修改 searched_table_data, 防止在 searched table 中出现已经成为 candidates 的 rows
    const searched_table_remove_candidates_data = ref([]);
    searched_table_data.value.forEach(row => {
      if (!current_candidates_cb_ids.value.includes(row.task_id)) {
        searched_table_remove_candidates_data.value.push(row);
      }
    });
    pagination.total = searched_table_remove_candidates_data.value.length;
    return searched_table_remove_candidates_data;
  });

  /** 根据 session 存储的 candidates id 刷新 candidates table */
  async function reloadCandidatesTable() {
    // 清空当前 candidate table data
    candidates_table_data.value = [];
    // 无法从当前 table 直接获取的 row, 需要从后端加载
    const loading_ids_from_backend = [];
    // 从 searched_table_data 直接加载数据到 candidates_table_data
    current_candidates_cb_ids.value.forEach(candidate_id => {
      if (searched_table_data.value.find(row => row.task_id === candidate_id)) {
        candidates_table_data.value.push(
          // 当 task_id 唯一时, 此处返回的是仅包含 1 个 item 的 list
          ...searched_table_data.value.filter(
            row => row.task_id === candidate_id
          )
        );
      } else {
        loading_ids_from_backend.push(candidate_id);
      }
    });
    // 从后端加载未完成的 rows
    if (loading_ids_from_backend.length != 0) {
      const { data } = await getPerformanceCandidatesCommitBlocks({
        ids: loading_ids_from_backend
      });
      // 更新后端返回结果 data list
      candidates_table_data.value.push(...data.list);
    }
    // 对数据进行排序
    candidates_table_data.value.sort(
      (left, right) => right.task_id - left.task_id
    );
  }

  /** 监听 current candidates ids */
  watch(current_candidates_cb_ids.value, async newValue => {
    const commit_block_in_session =
      storageSession().getItem<CommitBlockStoreConfigs>(
        CommitBlockStoreConfigName
      ) ?? CommitBlockStoreDefaultData;
    commit_block_in_session.candidates_cb_ids = newValue;
    storageSession().setItem(
      CommitBlockStoreConfigName,
      commit_block_in_session
    );
    await reloadCandidatesTable();
    // console.log("watch => current_candidates_cb_ids", newValue);
  });

  /** 监听 current selected ids */
  watch(current_selected_cb_ids.value, newValue => {
    const commit_block_in_session =
      storageSession().getItem<CommitBlockStoreConfigs>(
        CommitBlockStoreConfigName
      ) ?? CommitBlockStoreDefaultData;
    commit_block_in_session.current_selected_cb_ids = newValue;
    storageSession().setItem(
      CommitBlockStoreConfigName,
      commit_block_in_session
    );
    // console.log("watch => current_selected_cb_ids", newValue);
  });

  /******** Searched Table 回调函数 ************/

  /** 在 search table 上, 重新勾选需要选中的 rows */
  function reToggleSearchedTable() {
    // 遍历 Table 所有行，若存在属于 current_selected_cb_ids 的行，则将其置于勾选状态
    const { toggleRowSelection } = searchedTableRef.value.getTableRef();
    searched_table_data.value.forEach(row => {
      if (current_selected_cb_ids.value.includes(row.task_id)) {
        toggleRowSelection(row, true);
      }
    });
  }
  /** 修改分页大小 */
  function handleSizeChange(val: number) {
    console.log(`searched Table: ${val} items per page`);
    nextTick(() => {
      reToggleSearchedTable();
    });
  }

  /** 处理分页跳转 */
  function handleCurrentChange(val: number) {
    loadingConfig.text = `Loading Page ${val} 🐔 🏀 ...`;
    loading.value = true;
    delay(20).then(() => {
      loading.value = false;
      nextTick(() => {
        reToggleSearchedTable();
      });
    });
  }

  /** 触发 search table 全选状态 */
  function handleSelectAll(selection) {
    // selection 表示目前整张 table 内所有选中的行
    // 获取当前页所有行
    const current_page_data = searched_table_computed_data.value.value.slice(
      (pagination.currentPage - 1) * pagination.pageSize,
      pagination.currentPage * pagination.pageSize
    );
    if (selection.includes(current_page_data[0])) {
      // 处理全部加入勾选
      selection.forEach(element => {
        if (!current_selected_cb_ids.value.includes(element.task_id)) {
          current_selected_cb_ids.value.push(element.task_id);
        }
      });
    } else {
      // 处理全部移除勾选
      current_page_data.forEach(element => {
        if (current_selected_cb_ids.value.includes(element.task_id)) {
          const index = current_selected_cb_ids.value.indexOf(element.task_id);
          if (index > -1) {
            current_selected_cb_ids.value.splice(index, 1);
          }
        }
      });
    }
  }

  /** 触发 search table 单选状态 */
  function handleSelectOne(selection, row) {
    if (selection.includes(row)) {
      // 处理加入勾选
      if (!current_selected_cb_ids.value.includes(row.task_id)) {
        current_selected_cb_ids.value.push(row.task_id);
      }
    } else {
      // 处理移除勾选
      if (current_selected_cb_ids.value.includes(row.task_id)) {
        const index = current_selected_cb_ids.value.indexOf(row.task_id);
        if (index > -1) {
          current_selected_cb_ids.value.splice(index, 1);
        }
      }
    }
  }

  /** 加载 search table 表格数据 */
  async function onSearch() {
    loading.value = true;
    // 封装请求消息体
    const top_btn_store_data =
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName) ??
      TopBtnStoreDefaultData;
    const request_params = {
      release_date_range: top_btn_store_data.release_date_range,
      run_date_range: top_btn_store_data.run_date_range,
      selected_dataset_group: top_btn_store_data.selected_dataset_group,
      selected_engines: top_btn_store_data.selected_engines,
      selected_platform: top_btn_store_data.selected_platform
    };

    // 异步请求后端返回 searched commit blocks 数据
    const { data } = await getPerformanceSearchedCommitBlocks(request_params);
    // 更新后端返回结果 data list
    searched_table_data.value = data.list;
    // 对 searched table 进行排序
    searched_table_data.value.sort(
      (left, right) => right.task_id - left.task_id
    );
    // 获得列表总长度
    pagination.total = data.total;
    // 清空已勾选
    current_selected_cb_ids.value.splice(
      0,
      current_selected_cb_ids.value.length
    );
    setTimeout(() => {
      loading.value = false;
    }, 200);
  }

  /** 刷新 search table 表格数据 */
  async function onRefresh() {
    // 从后端重新获取 search table 数据
    await onSearch();
    // 刷新 candidates table 数据
    await reloadCandidatesTable();
  }

  /******** Candidates Table 回调函数 ************/

  /** 添加至候选列表 */
  function addToCandidate() {
    // 将当前 searched table 处于勾选状态的 rows 添加到候选列表
    current_candidates_cb_ids.value.push(...current_selected_cb_ids.value);
    pagination.total -= current_selected_cb_ids.value.length;
    // 取消所有勾选的状态
    current_selected_cb_ids.value.splice(
      0,
      current_selected_cb_ids.value.length
    );
    nextTick(() => {
      const { clearSelection } = searchedTableRef.value.getTableRef();
      clearSelection();
    });
  }

  /** 移除候选列表内选中的 rows */
  function removeSelected() {
    const { getSelectionRows, clearSelection } =
      selectedTableRef.value.getTableRef();
    const need_delete_ids = [];
    getSelectionRows().forEach(row => {
      need_delete_ids.push(row.task_id);
    });
    clearSelection();
    const remain_ids = current_candidates_cb_ids.value.filter(
      id => !need_delete_ids.includes(id)
    );
    current_candidates_cb_ids.value.splice(
      0,
      current_candidates_cb_ids.value.length
    );
    current_candidates_cb_ids.value.push(...remain_ids);
  }

  function removeAll() {
    current_candidates_cb_ids.value.splice(
      0,
      current_candidates_cb_ids.value.length
    );
    // console.log("removeAll");
  }

  // 重置 TopBtn 搜索面板
  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  onMounted(() => {
    loading.value = true;
    // 等待页面渲染完成, 进行预处理
    delay(400).then(() => {
      nextTick(async () => {
        await onSearch();
        await reloadCandidatesTable();
        // 遍历 Table 所有行，若存在属于 current_selected_commit_blocks 的行，则将其置于勾选状态
        const { toggleRowSelection } = searchedTableRef.value.getTableRef();
        searched_table_data.value.forEach(row => {
          if (current_selected_cb_ids.value.includes(row.task_id)) {
            toggleRowSelection(row, true);
          }
        });
        loading.value = false;
      });
    });
  });

  return {
    // table 引用对象
    searchedTableRef,
    selectedTableRef,
    // table 列
    searched_table_columns,
    selected_table_columns,
    // table 数据
    candidates_table_data,
    searched_table_computed_data,
    // 分页配置
    loading,
    pagination,
    loadingConfig,
    buttonClass,
    // 回调函数
    removeSelected,
    removeAll,
    onSearch,
    onRefresh,
    resetForm,
    addToCandidate,
    handleSizeChange,
    handleCurrentChange,
    handleSelectOne,
    handleSelectAll
  };
}
