<script setup lang="ts">
import { ref } from "vue";
import Step1 from "./step1/step1.vue";
import Step2 from "./step2/step2.vue";
import Step3 from "./step3/step3.vue";
import Step4 from "./step4/step4.vue";
import Step5 from "./step5/step5.vue";
import Footer from "./common/footer.vue";
defineOptions({
  name: "TaskCreater"
});

const current_step = ref(1);
// 此处是子 div huihui
const update_activated_step = (newNum: number) => {
  current_step.value = newNum;
};
</script>

<template>
  <div class="main">
    <el-space
      class="main_el_space"
      direction="vertical"
      :fill="true"
      :size="30"
    >
      <el-steps :active="current_step">
        <el-step title="Step 1" description="选择数据库版本" />
        <el-step title="Step 2" description="配置客户端和服务端" />
        <el-step title="Step 3" description="选择索引和索引参数" />
        <el-step title="Step 4" description="任务配置" />
        <el-step title="Step 5" description="任务预览" />
      </el-steps>
      <el-card class="main_card" shadow="hover">
        <div v-if="current_step === 1">
          <Step1 />
        </div>

        <div v-if="current_step === 2">
          <Step2 />
        </div>

        <div v-if="current_step === 3">
          <Step3 />
        </div>

        <div v-if="current_step === 4">
          <Step4 />
        </div>

        <div v-if="current_step === 5">
          <Step5 />
        </div>
      </el-card>
    </el-space>
    <el-card class="footer_card mt-2" shadow="hover">
      <Footer
        :activated_step="current_step"
        :total_steps="5"
        @update_activated_step="update_activated_step"
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

.main_card {
  border-radius: 10px;
}

.main_el_space {
  display: inherit;
}

.footer_card {
  border-radius: 10px;
  background-color: rgba(var(--el-fill-color-blank), 0.5);
  border: none;
}
</style>
