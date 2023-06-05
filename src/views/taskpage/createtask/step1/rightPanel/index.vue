<script setup lang="ts">
import { reactive, watch } from "vue";
// import Search from "@iconify-icons/ep/search";
// import { useRenderIcon } from "@/components/ReIcon/src/hooks";
// import dayjs from "dayjs";
import { onMounted } from "vue";

defineOptions({
  name: "rightPanel"
});

const current_date = new Date();
// ts的用法
interface PropsType {
  selected_name: string;
  selected_tag: string;
  selected_version: any;
  selected_link: string;
  selected_message: string;
  selected_docker: string;
  released_items: any;
}
const props = withDefaults(defineProps<PropsType>(), {
  selected_name: "🌵",
  selected_tag: "🏜️",
  selected_version: "🚀",
  selected_link: "🌳",
  selected_message: "🌲",
  selected_docker: "🍀",
  released_items: []
});
interface formType {
  selected_name: string;
  selected_tag: string;
  use_latested: boolean;
  release_date_range: [Date, Date];
  selected_version: string;
  selected_link: string;
  selected_message: string;
  selected_docker: string;
  version_dropdown: string[];
  docker_dropdown: string[];
}
const form: formType = reactive({
  selected_name: props.selected_name,
  selected_tag: props.selected_tag,
  use_latested: false,
  release_date_range: [
    new Date(current_date.getFullYear(), current_date.getMonth() - 1),
    new Date()
  ],
  selected_version: props.selected_version,
  selected_link: props.selected_link,
  selected_message: props.selected_message,
  selected_docker: props.selected_docker,
  version_dropdown: [],
  docker_dropdown: []
});

// 监听 props 数据, 实时更新 form 表单数据
watch(
  () => [
    props.selected_name,
    props.selected_tag,
    props.selected_version,
    props.selected_link,
    props.selected_message,
    props.selected_docker,
    props.released_items
  ],
  newVal => {
    form.selected_name = newVal[0] as string;
    form.selected_tag = newVal[1] as string;
    form.selected_version = newVal[2] as string;
    form.selected_link = newVal[3] as string;
    form.selected_message = newVal[4] as string;
    form.selected_docker = newVal[5] as string;
    // 更新 version dropdown
    const version_dropdown_data = [];
    newVal[6].forEach(element => {
      if (!version_dropdown_data.includes(element["version"])) {
        version_dropdown_data.push(element["version"]);
      }
    });
    form.version_dropdown.splice(0, form.version_dropdown.length);
    form.version_dropdown.push(...version_dropdown_data);
    // 更新 docker dropdown
    const images = newVal[6].find(item => item.version === newVal[2]).image;
    form.docker_dropdown = Object.values(images);
    // 更新 link
    form.selected_link = props.released_items.find(
      item => item.version === newVal[2]
    ).link;
    // 更新 message
    form.selected_message = props.released_items.find(
      item => item.version === newVal[2]
    ).message;
    // console.log("update activate", Object.values(images));
  }
);

// 监听 selected version, 更新 link、version、message
watch(
  () => form.selected_version,
  newVal => {
    // 更新 docker dropdown
    const images = props.released_items.find(
      item => item.version === newVal
    ).image;
    form.docker_dropdown = Object.values(images);
    // 更新 link
    form.selected_link = props.released_items.find(
      item => item.version === newVal
    ).link;
    // 更新 message
    form.selected_message = props.released_items.find(
      item => item.version === newVal
    ).message;
    console.log(
      "version updated: ",
      newVal,
      "form.selected_message: ",
      form.selected_message
    );
  }
);
// 相当于父组件将自己的函数暴露给/传递给子组件，这样子组件可以在自己的作用域调用父组件的函数
const emit_edit_info = defineEmits(["emit_edit_info"]);
watch(
  () => [
    form.selected_name,
    form.selected_tag,
    form.selected_version,
    form.selected_message,
    form.selected_link,
    form.selected_docker
  ],
  newVal => {
    emit_edit_info("emit_edit_info", newVal);
  }
);
// const test = ref(props.selected_name);

onMounted(() => {
  // console.log(props);
});
</script>

<template>
  <div class="right-panel">
    <el-form :model="form" label-width="auto" label-position="left">
      <el-form-item label="engine">
        <el-input v-model="form.selected_name" disabled />
      </el-form-item>
      <el-form-item label="tag">
        <!-- 添加v-if进行判断 -->
        <el-tag color="#E8F9FD" round> ● {{ form.selected_tag }}</el-tag>
      </el-form-item>

      <el-form-item label="use latest">
        <el-switch v-model="form.use_latested" />
      </el-form-item>

      <el-divider border-style="dashed" />

      <el-form-item label="date range">
        <el-date-picker
          v-model="form.release_date_range"
          type="monthrange"
          range-separator="🐟"
          start-placeholder="month begin"
          end-placeholder="month end"
          size="default"
        />
      </el-form-item>

      <el-form-item label="version">
        <el-select
          v-model="form.selected_version"
          placeholder="Select"
          size="default"
        >
          <el-option
            v-for="(item, index) in form.version_dropdown"
            :key="index"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="link">
        <el-link :href="`${form.selected_link}`"> click me </el-link>
      </el-form-item>

      <el-form-item label="message">
        <el-input
          v-model="form.selected_message"
          resize="none"
          type="textarea"
        />
      </el-form-item>

      <el-form-item label="image">
        <el-select
          v-model="form.selected_docker"
          placeholder="Select"
          size="default"
        >
          <el-option
            v-for="(item, index) in form.docker_dropdown"
            :key="index"
            :value="item"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.right-panel {
  height: 100%;
  padding: 10px;
  width: 270px;
}
</style>
