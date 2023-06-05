import { getPerformanceTopBtnList } from "@/api/performance/commitblocks/topbtn";
import { storageSession } from "@pureadmin/utils";
import { ref, onMounted, reactive, watch } from "vue";
import { TopBtnStoreConfigs, TopBtnStoreConfigName } from "./topBtnTypes";
import { message } from "@/utils/message";
import { TopBtnStoreDefaultData } from "../common/commitBlockTypes";

export function useTopBtn() {
  /** 初始化面板数据 */
  const top_btn_form = reactive({
    // 日期范围
    run_date_range: storageSession().getItem<TopBtnStoreConfigs>(
      TopBtnStoreConfigName
    )?.run_date_range ?? [new Date(), new Date()],

    release_date_range: storageSession().getItem<TopBtnStoreConfigs>(
      TopBtnStoreConfigName
    )?.release_date_range ?? [new Date(), new Date()],

    // 选定的测试平台 测试平台列表
    selected_platform:
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
        ?.selected_platform ?? "",

    current_platform_list: [],

    // 选定的数据集 数据集列表
    selected_dataset_group:
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
        ?.selected_dataset_group ?? [],

    current_dataset_group_list: [],

    // 选定的数据库 数据库列表
    selected_engines_list:
      storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
        ?.selected_engines ?? [],

    current_engines_list: []
  });

  const backend_data = ref([]);

  function restore_to_default() {
    top_btn_form.run_date_range = [new Date(), new Date()];
    top_btn_form.release_date_range = [new Date(), new Date()];
    top_btn_form.selected_platform = "";
    top_btn_form.current_platform_list = [""];
    top_btn_form.selected_dataset_group = "";
    top_btn_form.current_dataset_group_list = [""];
    top_btn_form.selected_engines_list = [""];
    top_btn_form.current_engines_list = [""];
  }

  function refresh_btns_from_backend() {
    /** 获得当前 platform 列表 */
    const new_platform_list = [];
    backend_data.value.forEach(dict => {
      new_platform_list.push(dict["platform"]);
    });
    top_btn_form.current_platform_list.splice(
      0,
      top_btn_form.current_platform_list.length
    );
    top_btn_form.current_platform_list.push(...new_platform_list);
    // 判断是否需要改变 platform
    if (!new_platform_list.includes(top_btn_form.selected_platform)) {
      // Fixme 此处可以自定义展示的 platform 优先级
      top_btn_form.selected_platform = new_platform_list[0];
    }

    /** 获得当前 datasets 列表 */
    let item: {}; // item 表示回传结果的一个 list 元素, {platform: xx datasets: {list:[x,x,x], total:3}}
    backend_data.value.forEach(dict => {
      if (dict["platform"] == top_btn_form.selected_platform) {
        item = dict;
        return;
      }
    });
    if (Object.keys(item ?? {}).length == 0) {
      message("未找到 platform", { type: "error" });
      restore_to_default();
      return;
    }
    const new_dataset_group_list = [];
    item["datasets"]["list"].forEach(dict => {
      if (!new_dataset_group_list.includes(dict["dataset_group"])) {
        new_dataset_group_list.push(dict["dataset_group"]);
      }
    });
    top_btn_form.current_dataset_group_list.splice(
      0,
      top_btn_form.current_dataset_group_list.length
    );
    top_btn_form.current_dataset_group_list.push(...new_dataset_group_list);
    // 判断是否需要改变 datasets
    if (!new_dataset_group_list.includes(top_btn_form.selected_dataset_group)) {
      // Fixme 此处可以自定义展示的 dataset 优先级
      top_btn_form.selected_dataset_group = new_dataset_group_list[0];
    }

    /** 获得当前 engines 列表 */
    const engines = [];
    // 遍历 datasets, 更新 engines
    (item["datasets"]["list"] ?? {}).forEach(dict => {
      if (dict["dataset_group"] == top_btn_form.selected_dataset_group) {
        dict["engines"].forEach(dict_engine => {
          if (!engines.includes(dict_engine)) {
            engines.push(dict_engine);
          }
        });
      }
    });
    // 更新当前选中的 engines 列表
    top_btn_form.current_engines_list = engines;
    top_btn_form.selected_engines_list = engines;
  }

  /** selected_engines_list */
  watch(backend_data.value, new_backend_data => {
    // 边界判断
    if (new_backend_data.length == 0) {
      message("backend_data 无数据", { type: "error" });
      restore_to_default();
      return;
    }
    refresh_btns_from_backend();
  });

  async function load_backend_data(): Promise<boolean> {
    const new_backend_data = await getPerformanceTopBtnList({
      run_date_timestamp: [
        new Date(top_btn_form.run_date_range[0]).getTime(),
        new Date(top_btn_form.run_date_range[1]).getTime()
      ],
      release_date_timestamp: [
        new Date(top_btn_form.release_date_range[0]).getTime(),
        new Date(top_btn_form.release_date_range[1]).getTime()
      ]
    });
    if (new_backend_data.data.list.length == 0) {
      return false;
    } else {
      backend_data.value.splice(0, backend_data.value.length);
      backend_data.value.push(...new_backend_data.data.list);
      return true;
    }
  }
  /** 刷新测试平台 */
  function refreshPlatform() {
    refresh_btns_from_backend();
  }

  /** 刷新数据集 */
  function refreshDatasetGroup() {
    console.log(top_btn_form.selected_dataset_group);
    refresh_btns_from_backend();
  }

  /** 刷新选中的 engines */
  function refreshEngines() {
    console.log(
      "current select engines is ",
      top_btn_form.selected_engines_list
    );
  }

  /** 重置 搜索面板 */
  const resetTopBtn = formEl => {
    console.log("reset top Btn");
    if (!formEl) return;
    formEl.resetFields();

    // 清除session存储
    // storageSession().removeItem(TopBtnStoreConfigName);
    // 恢复初始状态
    // delay(400).then(() => {
    // nextTick(() => {
    restore_to_default();
    // });
    // });
    // 加载后端数据
    // load_backend_data();
  };

  // 组件初始化
  onMounted(async () => {
    console.log("onMounted, trying refresh_btns_from_backend();");
    // 重新加载后端数据
    load_backend_data();
    // console.log("var", top_btn_form.run_date_range);
    // console.log(
    //   "session",
    //   storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName)
    //     ?.run_date_range
    // );
    // refresh_btns_from_backend();
  });

  /** WATCH 监听写入 session */

  /** run_date_range */
  watch(
    // 监听 reactive 内部属性值需要使用 ()=> XX.xx 的形式, 因为 watch 方法要求传递一个 getter 的函数, 而不是直接的属性值
    () => top_btn_form.run_date_range,
    async newValue => {
      // console.log("watch before run_date_range", newValue, oldValue);

      let final_run_date_range = newValue;
      if (!newValue) {
        message("不可清空, 已重新填充为当前月份", { type: "warning" });
        top_btn_form.run_date_range = [new Date(), new Date()];
        final_run_date_range = [new Date(), new Date()];
      } else {
        // 重新加载后端数据
        const has_value = await load_backend_data();
        if (!has_value) {
          top_btn_form.run_date_range = [new Date(), new Date()];
          final_run_date_range = [new Date(), new Date()];
          message("该时段内无数据, 已切换为当月", { type: "warning" });
        }
      }
      // console.log("change run_date_range in session", newValue, oldValue);
      const top_btn_store_data =
        storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName) ??
        TopBtnStoreDefaultData;
      top_btn_store_data.run_date_range = final_run_date_range;
      storageSession().setItem(TopBtnStoreConfigName, top_btn_store_data);
    }
  );

  /** release_date_range */
  watch(
    () => top_btn_form.release_date_range,
    async newValue => {
      // console.log("watch before release_date_range", newValue, oldValue);

      let final_release_date_range = newValue;
      if (!newValue) {
        message("不可清空, 已重新填充为当前月份", { type: "warning" });
        top_btn_form.release_date_range = [new Date(), new Date()];
        final_release_date_range = [new Date(), new Date()];
      } else {
        // 重新加载后端数据
        const has_value = await load_backend_data();
        if (!has_value) {
          top_btn_form.release_date_range = [new Date(), new Date()];
          final_release_date_range = [new Date(), new Date()];
          message("该时段内无数据, 已切换为当月", { type: "warning" });
        }
      }
      // console.log("change release_date_range in session", newValue, oldValue);
      const top_btn_store_data =
        storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName) ??
        TopBtnStoreDefaultData;
      top_btn_store_data.release_date_range = final_release_date_range;
      storageSession().setItem(TopBtnStoreConfigName, top_btn_store_data);
    }
  );

  /** selected_platform */
  watch(
    () => top_btn_form.selected_platform,
    (newValue, oldValue) => {
      // console.log("watch before selected_platform", newValue, oldValue);

      if (!newValue) {
        // message("platform 不可清空", { type: "warning" });
        top_btn_form.selected_platform = oldValue;
        return;
      }
      // console.log("change selected_platform in session", newValue, oldValue);
      const top_btn_store_data =
        storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName) ??
        TopBtnStoreDefaultData;
      top_btn_store_data.selected_platform = newValue;
      storageSession().setItem(TopBtnStoreConfigName, top_btn_store_data);
    }
  );

  /** selected_dataset_group */
  watch(
    () => top_btn_form.selected_dataset_group,
    (newValue, oldValue) => {
      // console.log("watch before selected_dataset_group", newValue);
      if (!newValue) {
        // message("dataset 不可清空", { type: "warning" });
        top_btn_form.selected_platform = oldValue;
        return;
      }
      // console.log(
      //   "change selected_dataset_group in session",
      //   newValue,
      //   oldValue
      // );
      const top_btn_store_data =
        storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName) ??
        TopBtnStoreDefaultData;
      top_btn_store_data.selected_dataset_group = newValue;
      storageSession().setItem(TopBtnStoreConfigName, top_btn_store_data);
    }
  );

  /** selected_engines_list */
  watch(
    () => top_btn_form.selected_engines_list,
    (newValue, oldValue) => {
      // console.log("watch before selected_engines_list");

      if (!newValue) {
        return;
      }
      if (newValue.length == 0) {
        message("engines 应至少保留一项", { type: "warning" });
        top_btn_form.selected_engines_list = oldValue;
        return;
      }
      // console.log(
      //   "change selected_engines_list in session",
      //   newValue,
      //   oldValue
      // );
      const top_btn_store_data =
        storageSession().getItem<TopBtnStoreConfigs>(TopBtnStoreConfigName) ??
        TopBtnStoreDefaultData;
      top_btn_store_data.selected_engines = newValue;
      storageSession().setItem(TopBtnStoreConfigName, top_btn_store_data);
    }
  );

  return {
    top_btn_form,
    refreshPlatform,
    refreshDatasetGroup,
    refreshEngines,
    resetTopBtn
  };
}
