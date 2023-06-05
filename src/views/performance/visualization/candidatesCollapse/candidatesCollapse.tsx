import { getPerformanceCandidatesCommitBlocks } from "@/api/performance/commitblocks/candidatesCommitBlocks";
import { useCommitBlockStatusStoreHook } from "@/store/modules/performance/commitBlockStatus";
import { delay } from "@pureadmin/utils";
import { nextTick, onMounted, ref, watch } from "vue";
import { selected_table_columns } from "./tableConfigs";

export function useCandidatesCollapseTable() {
  /** table data */
  const candidates_table_data = ref([]);

  /** table data ids */
  const current_candidates_cb_ids = ref(
    useCommitBlockStatusStoreHook().candidates_cb_ids
  );

  /** table 引用对象 */
  const selectedTableRef = ref();

  /** 根据 session 存储的 candidates id 刷新 candidates table */
  async function reloadCandidatesTable() {
    // 清空当前 candidate table data
    candidates_table_data.value = [];
    // 需要加载的 ids
    const loading_ids_from_backend = [];
    current_candidates_cb_ids.value.forEach(candidate_id => {
      loading_ids_from_backend.push(candidate_id);
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
  watch(current_candidates_cb_ids.value, async () => {
    await reloadCandidatesTable();
    console.log("watch => reloadCandidatesTable");
  });

  onMounted(() => {
    // 等待页面渲染完成, 进行预处理
    delay(400).then(() => {
      nextTick(async () => {
        await reloadCandidatesTable();
      });
    });
  });

  return {
    // table 引用对象
    selectedTableRef,
    // table 列
    selected_table_columns,
    // table 数据
    candidates_table_data
  };
}
