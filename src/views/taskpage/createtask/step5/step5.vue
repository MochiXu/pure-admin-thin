<script setup lang="ts">
defineOptions({
  name: "TaskCreaterStep5"
});
</script>

<template>
  <div class="main">TaskCreaterStep5</div>
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
