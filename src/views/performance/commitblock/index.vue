<script setup lang="ts">
import { ref } from "vue";
import { useCommitBlockTable } from "./commitBlockTables/commitBlockTableHook";
import { useTopBtn } from "./topbtn/topBtnHook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Search from "@iconify-icons/ep/search";
import Refresh from "@iconify-icons/ep/refresh";
import ArrowUp from "@iconify-icons/ri/arrow-up-circle-line";
import Multiselect from "vue-multiselect";
import { useTags } from "@/layout/hooks/useTag";

defineOptions({
  name: "CommitBlocks"
});

// 定义表单引用
const formRef = ref();

const { router } = useTags();
// 声明顶部面板
const {
  top_btn_form,
  refreshPlatform,
  refreshDatasetGroup,
  // refreshEngines,
  resetTopBtn
} = useTopBtn();

// 声明 CommitBlocks Table
const {
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
  // buttonClass,
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
} = useCommitBlockTable();

function resetTopBnAndTable(val) {
  // 重置顶部面板
  resetTopBtn(val);
  // 重置 CommitBlocks 搜索结果
  resetForm(val);
}

function gotoVisualization() {
  router.push({ name: "Charts", path: "/performance/visualization/index" });
  console.log("openCollapse");
}

const activeNames = ref(["0"]);
const handleChange = (val: string[]) => {
  console.log("handleChange", val);
};
</script>

<template>
  <div class="main">
    <!-- form 表单 -->
    <el-form
      ref="formRef"
      :inline="true"
      :model="top_btn_form"
      class="bg-bg_color w-[99/100] pl-8 pt-4 pb-5 mb-5"
    >
      <!-- 版本发布日期 / 运行日期 / 平台 / 数据集 -->
      <el-row class="max-w-7xl">
        <el-col :span="6">
          <div class="grid-content ep-bg-purple">
            <el-form-item
              label="版本发布"
              prop="release_date_range"
              class="font-bold"
            >
              <el-date-picker
                v-model="top_btn_form.release_date_range"
                type="monthrange"
                range-separator="➡️"
                start-placeholder="Start month"
                end-placeholder="End month"
                class="!w-[180px]"
              />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple-light">
            <el-form-item
              label="运行日期"
              prop="run_date_range"
              class="font-bold"
            >
              <el-date-picker
                v-model="top_btn_form.run_date_range"
                type="monthrange"
                range-separator="➡️"
                start-placeholder="Start month"
                end-placeholder="End month"
                class="!w-[180px]"
              />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple">
            <el-form-item label="运行平台:" prop="selected_platform">
              <el-select
                v-model="top_btn_form.selected_platform"
                placeholder="选择平台"
                clearable
                class="!w-[200px]"
                @change="refreshPlatform"
              >
                <el-option
                  v-for="(
                    platform, index
                  ) in top_btn_form.current_platform_list"
                  :key="index"
                  :label="platform"
                  :value="platform"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple-light">
            <el-form-item label="数据集:" prop="selected_dataset_group">
              <el-select
                v-model="top_btn_form.selected_dataset_group"
                placeholder="选择数据集"
                clearable
                class="!w-[200px]"
                @change="refreshDatasetGroup"
              >
                <el-option
                  v-for="(
                    dataset_group, index
                  ) in top_btn_form.current_dataset_group_list"
                  :key="index"
                  :label="dataset_group"
                  :value="dataset_group"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <!-- 第二行筛选数据 -->
      <el-row class="max-w-7xl">
        <el-col :span="18">
          <el-row>
            <label
              class="pr-3 font-mono"
              style="
                font-size: var(--el-form-label-font-size);
                color: var(--el-text-color-regular);
                padding-top: 0.6em;
              "
            >
              数据库引擎
            </label>
            <div class="grid-content ep-bg-purple inline-block">
              <multiselect
                v-model="top_btn_form.selected_engines_list"
                :placeholder="'select engines'"
                :close-on-select="false"
                :hide-selected="true"
                :preselect-first="true"
                :options="top_btn_form.current_engines_list"
                :multiple="true"
                :collapse-tags="true"
                :searchable="false"
                :select-label="''"
              />
            </div>
          </el-row>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple">
            <el-form-item>
              <el-button
                type="primary"
                :icon="useRenderIcon(Search)"
                :loading="loading"
                @click="onSearch"
              >
                搜索
              </el-button>
              <el-button
                :icon="useRenderIcon(Refresh)"
                @click="resetTopBnAndTable(formRef)"
              >
                重置
              </el-button>
            </el-form-item>
          </div></el-col
        >

        <!-- </div> -->
      </el-row>
    </el-form>

    <!-- 已选中的 CommitBlocks -->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1" :active="false">
        <template #title>
          <div class="w-full">
            <el-row class="max-w-7xl">
              <el-col :span="18" class="pl-8">
                <div class="grid-content ep-bg-purple">
                  <span class="font-bold">
                    You have choosed
                    {{ candidates_table_data.length }} CommitBlocks 🚀🚀🚀
                  </span>
                </div>
              </el-col>
              <el-col :span="6" class="pl-6">
                <div class="grid-content ep-bg-purple-light">
                  <el-button
                    type="primary"
                    :icon="useRenderIcon(ArrowUp)"
                    @click.stop.prevent="gotoVisualization()"
                  >
                    查看对比结果
                  </el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </template>
        <pure-table
          border
          align-whole="center"
          showOverflowTooltip
          ref="selectedTableRef"
          :height="250"
          :size="'small'"
          :data="candidates_table_data"
          :columns="selected_table_columns"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
        />
        <div style="margin-top: 20px">
          <el-button @click="removeSelected()">清除已勾选</el-button>
          <el-button @click="removeAll()">清除全部</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>

    <!-- @refresh 会接收到子组件发出的 emit, 从而实现点击 refresh 刷新 table 数据 -->
    <PureTableBar title="CommitBlocks" @refresh="onRefresh">
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(ArrowUp)"
          @click="addToCandidate"
        >
          添加至候选列表
        </el-button>
      </template>
      <template v-slot="{ size, checkList }">
        <pure-table
          border
          align-whole="center"
          showOverflowTooltip
          table-layout="auto"
          ref="searchedTableRef"
          :loading="loading"
          :loading-config="loadingConfig"
          :size="size"
          :data="
            searched_table_computed_data.value.slice(
              (pagination.currentPage - 1) * pagination.pageSize,
              pagination.currentPage * pagination.pageSize
            )
          "
          :columns="searched_table_columns"
          :checkList="checkList"
          :pagination="pagination"
          :paginationSmall="size === 'small' ? true : false"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
          @select-all="handleSelectAll"
          @select="handleSelectOne"
          @page-size-change="handleSizeChange"
          @page-current-change="handleCurrentChange"
        />
      </template>
    </PureTableBar>
  </div>
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
</style>
