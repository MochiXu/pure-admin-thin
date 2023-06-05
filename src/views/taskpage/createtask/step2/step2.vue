<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "TaskCreaterStep2"
});
const cloud_mode = ref(false);
</script>

<template>
  <div class="step2">
    <div class="config-header">
      <el-tag size="large" effect="dark"> 配置修改状态 Client Server </el-tag>
      <el-tag class="ml-2" type="success">Tag 2</el-tag>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        striped
        striped-flow
        :duration="10"
        status="exception"
      >
        <span>Content</span>
      </el-progress>
    </div>

    <el-tabs type="border-card" tab-position="top">
      <el-tab-pane label="Client">Client</el-tab-pane>
      <el-tab-pane label="Server" :disabled="cloud_mode">Server</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.config-header {
  // display: flex;
  // justify-content: center;
  align-items: center;
}

.el-progress--line {
  width: 200px;
}
</style>
