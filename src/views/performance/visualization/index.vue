<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCandidatesCollapseTable } from "./candidatesCollapse/candidatesCollapse";
import { useIndicatorForm } from "./indicatorForm/indicatorForm";
import { usePlotlyCharts } from "./plotlyCharts/plotlyChartsHook";

defineOptions({
  name: "Charts"
});
// 声明顶部 candidates collapse
const {
  // table 引用对象
  selectedTableRef,
  // table 列
  selected_table_columns,
  // table 数据
  candidates_table_data
} = useCandidatesCollapseTable();

const {
  // 表单引用
  formRef,
  // 表单数据
  candidates_form_data
} = useIndicatorForm();

const { plotlyChartsRef } = usePlotlyCharts();
const collapse_ref_value = ref();
onMounted(() => {});
</script>

<template>
  <div class="main">
    <!-- candidates table collapse -->
    <el-collapse v-model="collapse_ref_value">
      <el-collapse-item name="1" :active="false">
        <template #title>
          <div class="grid-content ep-bg-purple-light">
            <el-row class="max-w-7xl">
              <div class="grid-content ep-bg-purple">
                <span class="font-bold pl-3">
                  The comparison involves a total of
                  {{ candidates_table_data.length }} items.
                </span>
              </div>
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
      </el-collapse-item>
    </el-collapse>
    <!-- form 表单 -->
    <el-form
      ref="formRef"
      :inline="true"
      :model="candidates_form_data"
      class="bg-bg_color w-[99/100] pl-8 pt-4 mb-5 mt-5"
    >
      <!-- Indicator 🌵 性能指标 -->
      <el-row class="max-w-7xl">
        <div class="grid-content ep-bg-purple-light">
          <el-form-item label="Indicator 🌵" class="font-bold">
            <el-radio-group v-model="candidates_form_data.indicator_rg">
              <el-radio label="rps" class="!w-[25px]">rps</el-radio>
              <el-radio label="total_time" class="!w-[70px]">
                total_time
              </el-radio>
              <el-radio label="mean_time" class="!w-[75px]">mean_time</el-radio>
              <el-radio label="std_time" class="!w-[65px]">std_time</el-radio>
              <el-radio label="min_time" class="!w-[65px]">min_time</el-radio>
              <el-radio label="max_time" class="!w-[65px]">max_time</el-radio>
              <el-radio label="p95_time" class="!w-[65px]">p95_time</el-radio>
              <el-radio label="p99_time" class="!w-[65px]">p99_time</el-radio>
              <el-radio label="post_upload" class="!w-[85px]">
                post_upload
              </el-radio>
              <el-radio label="data_upload" class="!w-[85px]">
                data_upload
              </el-radio>
              <el-radio label="total_upload" class="!w-[85px]">
                total_upload
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-row>
      <!-- parallel 🌵 / topk 🌵 / dataset-tag 🌵 / blur-search 🌵 -->
      <el-row class="max-w-8xl">
        <el-col :span="7">
          <div class="grid-content ep-bg-purple">
            <el-form-item label="Parallel 🌵" class="font-bold">
              <el-checkbox-group v-model="candidates_form_data.parallels_cb">
                <el-checkbox label="1" class="!w-[15px]" />
                <el-checkbox label="2" class="!w-[15px]" />
                <el-checkbox label="4" class="!w-[15px]" />
                <el-checkbox label="8" class="!w-[15px]" disabled />
                <el-checkbox label="16" class="!w-[15px]" disabled />
                <el-checkbox label="32" class="!w-[15px]" disabled />
              </el-checkbox-group>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content ep-bg-purple">
            <el-form-item label="TopK 🌵" class="font-bold">
              <el-radio-group v-model="candidates_form_data.topk">
                <el-radio label="10" class="!w-[25px]">10</el-radio>
                <el-radio label="100" class="!w-[25px]">100</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content ep-bg-purple">
            <el-form-item label="Dataset tag 🌵" class="font-bold">
              <el-select
                v-model="candidates_form_data.dataset_tag_selected"
                multiple
              >
                <el-option
                  v-for="(tag, index) in candidates_form_data.dataset_tag"
                  :key="index"
                  :label="tag"
                  :value="tag"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple">
            <el-form-item label="Item search 🌵" class="font-bold">
              <el-input
                v-model="candidates_form_data.item_blur_search"
                placeholder="filter item"
              />
            </el-form-item>
          </div>
        </el-col>

        <!-- </div> -->
      </el-row>
    </el-form>
    <el-card shadow="hover">
      <div
        class="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"
        ref="plotlyChartsRef"
      />
    </el-card>
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
