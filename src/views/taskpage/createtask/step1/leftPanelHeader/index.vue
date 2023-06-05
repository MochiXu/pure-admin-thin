<script setup lang="ts">
import { ref } from "vue";
import Search from "@iconify-icons/ep/search";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

defineOptions({
  name: "leftPanelHeader"
});

const checkedAll = ref(true);
const radioBtns = ref("");
const searchText = ref("");
function changeSelected() {
  console.log(checkedAll.value);
}
function changeRadio() {
  console.log(radioBtns);
}
</script>

<template>
  <div class="centered">
    <el-row>
      <el-col :span="12">
        <div class="btns">
          <el-checkbox
            v-model="checkedAll"
            label="全选"
            class="pr-4 pl-4"
            size="default"
            @change="changeSelected"
          />
          ⭐️
          <el-radio-group
            v-model="radioBtns"
            size="small"
            class="pl-4"
            @change="changeRadio"
          >
            <el-radio-button label="Cloud" />
            <el-radio-button label="Local" />
          </el-radio-group>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="blank">🌵🌵</div>
      </el-col>
      <el-col :span="5">
        <div class="search">
          <el-input
            v-model="searchText"
            class="m-2"
            size="small"
            placeholder="type engine"
            :suffix-icon="useRenderIcon(Search)"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.btns,
.search,
.blank {
  height: 35px;
  // width: 270px;
  // background-color: bisque;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>
