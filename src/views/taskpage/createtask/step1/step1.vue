<script setup lang="ts">
import { nextTick, onMounted, ref, reactive, watch } from "vue";
import leftPanelHeader from "./leftPanelHeader/index.vue";
import leftSingleBoxInner from "./leftSingleBoxInner/index.vue";
import VueJsonPretty from "vue-json-pretty";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import EpDArrowRight from "@iconify-icons/ep/d-arrow-right";

import rightPanel from "./rightPanel/index.vue";
import { getEnginesList } from "@/api/task/taskCreater/step1/engines";
import { delay } from "@pureadmin/utils";
defineOptions({
  name: "TaskCreaterStep1"
});
const is_loading = ref(true);
const engines_data = ref([]);
const activeInnerIndex = ref(0); // 当前活动的 div 的索引，开始时没有活动的 div

const current_selected = reactive({
  // right pannel
  selected_name: "",
  selected_tag: "",
  selected_version: "",
  connection_params: {},
  released_items: [],
  selected_link: "",
  selected_message: "",
  selected_docker: ""
});
// json data 不能使用计算属性，因为我们需要编辑它, json data 最后会作为配置文件发送出去
const jsonData = ref({
  engine_config: {
    name: current_selected.selected_name,
    tag: current_selected.selected_tag,
    version: current_selected.selected_version,
    link: current_selected.selected_link,
    message: current_selected.selected_message,
    docker: current_selected.selected_docker,
    connection_params: current_selected.connection_params
  }
});
// 对 current_selected 监听, 更新 json data
watch(
  () => [
    current_selected.selected_name,
    current_selected.selected_tag,
    current_selected.selected_version,
    current_selected.selected_link,
    current_selected.selected_message,
    current_selected.selected_docker,
    current_selected.connection_params,
    current_selected.released_items
  ],
  newVal => {
    jsonData.value.engine_config.name = newVal[0] as string;
    jsonData.value.engine_config.tag = newVal[1] as string;
    jsonData.value.engine_config.version = newVal[2] as string;
    jsonData.value.engine_config.link = newVal[3] as string;
    jsonData.value.engine_config.message = newVal[4] as string;
    jsonData.value.engine_config.docker = newVal[5] as string;
    jsonData.value.engine_config.connection_params = newVal[6];
  }
);

const setActiveInnerDiv = index => {
  activeInnerIndex.value = index;
  current_selected.selected_name = engines_data.value[index]["engine"];
  current_selected.selected_tag = engines_data.value[index].tag;
  current_selected.selected_version = engines_data.value[index].latest_version;
  current_selected.connection_params =
    engines_data.value[index].connection_params;
  current_selected.released_items = engines_data.value[index].released;

  // 找到被选中的 latest-version 所在的 released item
  const selected_released_item = engines_data.value[index].released.find(
    item => item.version === engines_data.value[index].latest_version
  );
  current_selected.selected_link = selected_released_item?.link;
  current_selected.selected_message = selected_released_item?.message;
  current_selected.selected_docker = selected_released_item?.image?.harbor;
};
function refreshRightCard(val) {
  setActiveInnerDiv(val);
}

/** 加载 engines list 数据 */
async function initEnginesList() {
  // 异步请求后端返回所有的 engines list 数据
  const { data } = await getEnginesList();
  // 处理 engines list
  const origin_data = data.list;
  origin_data.forEach(row => {
    // 计算 latest version
    let latest_version = "none";
    let latest_released_at = 0; // 默认是 1970 年 1 月 1 日 UTC 的协调时间戳
    // 根据 release 的时间戳进行排序
    row.released.sort((a, b) => b.released_at - a.released_at);
    latest_version = row.released[0].version;
    latest_released_at = row.released[0].released_at;
    engines_data.value.push({
      engine: row.engine,
      tag: row.tag,
      connection_params: row.connection_params,
      latest_version: latest_version,
      latest_released_at: latest_released_at,
      released: row.released
    });
  });
  setTimeout(() => {}, 200);
}

const emit_edit_info = (newForm: any) => {
  console.log("emit_edit_info get val", newForm);
  jsonData.value.engine_config.name = newForm[0];
  jsonData.value.engine_config.tag = newForm[1];
  jsonData.value.engine_config.version = newForm[2];
  jsonData.value.engine_config.message = newForm[3];
  jsonData.value.engine_config.link = newForm[4];
  jsonData.value.engine_config.docker = newForm[5];
};

watch(
  () => jsonData.value,
  newVal => {
    console.log("new json data", newVal);
  }
);

onMounted(() => {
  is_loading.value = true;
  // 等待页面渲染完成, 从后端获得数据
  delay(500).then(() => {
    nextTick(async () => {
      await initEnginesList();
      is_loading.value = false;
      setActiveInnerDiv(0);
    });
  });
});
</script>

<template>
  <div v-if="is_loading" class="loading-spinner" />
  <div v-else>
    <!-- 主要内容 -->
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="card_container">
          <div class="left-panel">
            <div class="left-panel-header">
              <leftPanelHeader />
            </div>
            <div class="left-multi-cards">
              <div
                :class="{
                  'left-single-box': true,
                  active: activeInnerIndex == index
                }"
                v-for="(item, index) in engines_data"
                :key="index"
                @click="refreshRightCard(index)"
              >
                <!-- 左侧 el-card 内容 -->
                <div
                  :class="{
                    'inner-div': true,
                    active: activeInnerIndex === index
                  }"
                >
                  <!-- {{ card.id }} -->
                  <leftSingleBoxInner
                    :engine_name="item.engine"
                    :engine_tag="item.tag"
                    :latest_version="item.latest_version"
                    :released_at="item.latest_released_at"
                    :is_editing="activeInnerIndex === index"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="right-card">
            <rightPanel
              :selected_name="current_selected.selected_name"
              :selected_tag="current_selected.selected_tag"
              :selected_version="current_selected.selected_version"
              :selected_link="current_selected.selected_link"
              :selected_message="current_selected.selected_message"
              :selected_docker="current_selected.selected_docker"
              :released_items="current_selected.released_items"
              @emit_edit_info="emit_edit_info"
            />
            <!-- 右侧 el-card 内容 -->
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <span style="color: var(--el-color-warning)">
          You may need edit your connection info 🌵..
        </span>
        <div class="preview_json">
          <div class="preview_json_inner">
            <vue-json-pretty v-model:data="jsonData" editable />
          </div>
        </div>
        <div class="btn-next">
          <el-button
            class="mt-12"
            type="primary"
            :icon="useRenderIcon(EpDArrowRight)"
            :disabled="false"
          >
            下一步
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>

  <!-- <div class="main"> -->

  <!-- </div> -->
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.second-row {
  position: relative;
  z-index: 1;
}

.vue-multiselect {
  position: absolute;
  z-index: 2;
}

.card_container {
  height: 520px;
  max-height: 520px;
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  background-color: #90b4ce94;
  padding: 10px;
}

.left-panel {
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 500px;
}
// .left-panel-header {
//   height: 60px;
//   margin-right: 3px;
//   border-radius: 8px;
// }
.left-multi-cards {
  height: 500px;
  overflow-y: auto;
  // flex: 3;
  // 使用 margin 可以覆盖掉 border
  z-index: 1;
  // 隐藏滚动条
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.left-multi-cards::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

// 左侧 engines 列表外框
.left-single-box {
  height: 38px;
  // border: 3px solid #64dfdf; /* 设置 div 的边框 */
  display: flex;
  justify-content: left; // 水平局中
  align-items: center; //垂直居中
  margin-bottom: 16px;
}

.left-single-box.active {
  border-right: none;
  padding-right: 0px;
  justify-content: right; // 水平局中
}
// 左侧面板顶部工具栏
.left-panel-header {
  background-color: var(--el-fill-color-light);
  border-radius: 8px;
  height: 35px;
  margin-right: 8px;
  margin-bottom: 8px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.right-card {
  // flex: 1;
  height: 500px;
  // background-color: #457b9d;
  background-color: var(--el-fill-color-light);

  border: 3px solid #64dfdf; /* 设置 div 的边框 */
  margin-left: -3px;
  border-radius: 8px;
}

.inner-div {
  height: 100%;
  width: 95%;
  border: 3px solid #f1faee; /* 设置 div 的边框 */
  border-radius: 8px;
  background-color: var(--el-fill-color-light);
  // display: flex;
  // justify-content: center; // 水平局中
  // align-items: center; //垂直居中
  // background-color: #457b9d;
}

// .inner-div 激活的状态
.inner-div.active {
  width: 100%;
  height: 100%;
  border: 3px solid #64dfdf; /* 设置 div 的边框 */
  border-radius: 8px 0 0 8px;
  // margin-right: 0;
  // border-right: none;
  margin-right: -3px;
  // z-index: 4;
}

.loading-spinner {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.preview_json {
  height: 350px;
  // background-color: #90b4ce94;
  background-color: var(--el-fill-color-light);
  border: 3px solid #64dfdf; /* 设置 div 的边框 */
  border-radius: 8px;
  overflow-y: auto;
}

.preview_json_inner {
  padding: 8px;
  // background-color: var(--el-fill-color-light);
}

.btn-next {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
