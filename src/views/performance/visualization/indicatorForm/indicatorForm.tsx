import { delay } from "@pureadmin/utils";
import { nextTick, onMounted, reactive, ref, watch } from "vue";

export function useIndicatorForm() {
  /** 定义表单引用 */
  const formRef = ref();

  /** 初始化面板数据 */
  // indicator 指示器
  const indicator_rg = ref("rps");
  // parallel 并发量
  const parallels_cb = ref(["1", "2", "4", "8"]);
  // 搜索 topk
  const topk = ref("10");
  // dataset tag
  const dataset_tag = ref(["filter", "no-filter"]);
  const dataset_tag_selected = ref(["filter", "no-filter"]);

  // 筛选 item key 的文字
  const item_blur_search = ref("");

  const candidates_form_data = reactive({
    indicator_rg: indicator_rg,
    parallels_cb: parallels_cb,
    topk: topk,
    dataset_tag: dataset_tag,
    dataset_tag_selected: dataset_tag_selected,
    item_blur_search: item_blur_search
  });

  /** 监听 current selected ids */
  watch(candidates_form_data, newValue => {
    console.log("watch => candidates_form_data", newValue);
  });

  onMounted(() => {
    // 等待页面渲染完成, 进行预处理
    delay(400).then(() => {
      nextTick(async () => {});
    });
  });

  return {
    // 表单引用
    formRef,
    // 表单数据
    candidates_form_data
  };
}
