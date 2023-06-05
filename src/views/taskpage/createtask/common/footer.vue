<script setup lang="ts">
import EpDArrowRight from "@iconify-icons/ep/d-arrow-right";
import EpDArrowLeft from "@iconify-icons/ep/d-arrow-left";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, defineEmits, watch } from "vue";

defineOptions({
  name: "TaskContainerFooter"
});
// ts的用法
interface PropsType {
  activated_step: number;
  total_steps: number;
}
const props = withDefaults(defineProps<PropsType>(), {
  activated_step: 1, // 默认值
  total_steps: 1 // 默认值
});

const emit_activated_step = defineEmits(["update_activated_step"]);

// 定义左右按钮的状态
// const left_btn_is_loading = ref(false);
const left_btn_is_disabled = ref(props.activated_step === 1);
// const right_btn_is_loading = ref(false);
const right_btn_is_disabled = ref(props.activated_step === props.total_steps);

watch(
  () => props.activated_step,
  newValue => {
    left_btn_is_disabled.value = newValue === 1;
    right_btn_is_disabled.value = newValue === props.total_steps;
  }
);

function clickNextPage() {
  console.log("before click next page", props.activated_step);
  emit_activated_step("update_activated_step", props.activated_step + 1);
  console.log("after click next page", props.activated_step);
}
function clickPreviousPage() {
  console.log("before click pre page", props.activated_step);
  emit_activated_step("update_activated_step", props.activated_step - 1);
  console.log("after click pre page", props.activated_step);
}
</script>

<template>
  <div class="footer_panel">
    <el-button
      class="ml-56"
      type="primary"
      :icon="useRenderIcon(EpDArrowLeft)"
      :disabled="left_btn_is_disabled"
      @click="clickPreviousPage"
    >
      上一步
    </el-button>
    🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 . 🌵 .
    🌵 . 🌵 . 🌵
    <el-button
      class="mr-56"
      type="primary"
      :icon="useRenderIcon(EpDArrowRight)"
      :disabled="right_btn_is_disabled"
      @click="clickNextPage"
    >
      下一步
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.footer_panel {
  display: flex;
  justify-content: space-between;
}
</style>
