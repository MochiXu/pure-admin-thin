<script setup lang="ts">
import dayjs from "dayjs";

defineOptions({
  name: "leftSingleBoxInner"
});

// ts的用法
interface PropsType {
  engine_name: string;
  engine_tag: string;
  latest_version: string;
  released_at: number;
  is_editing: boolean;
}
const props = withDefaults(defineProps<PropsType>(), {
  engine_name: "myscale",
  engine_tag: "local",
  latest_version: "v1.0.2",
  released_at: 0,
  is_editing: false
});

// const emit_activated_step = defineEmits(["update_activated_step"]);
</script>

<template>
  <div class="single-box-inner">
    <el-row>
      <el-col :span="3">
        <div class="engine-name pl-2">{{ props.engine_name }}</div>
      </el-col>
      <el-col :span="4">
        <div class="engine-tag">
          <div v-if="props.engine_tag === 'cloud'">
            <el-tag color="#E8F9FD" round>● Cloud</el-tag>
          </div>
          <div v-else-if="props.engine_tag === 'local'">
            <el-tag color="#E8F9FD" round>● Local</el-tag>
          </div>
          <div v-else>
            <el-tag color="#E8F9FD" round>● {{ props.engine_tag }}</el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="latest-version">
          latest version: {{ props.latest_version }}
        </div>
      </el-col>
      <el-col :span="7">
        <div class="released-at">
          released_at:
          {{ dayjs(props.released_at).format("YYYY-MM-DD") }}
        </div>
      </el-col>
      <el-col :span="3">
        <div v-if="props.is_editing">
          <div class="edit-tag">
            <div>editing... 🌵</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.single-box-inner {
  height: 100%;
}

.edit-tag {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 32px;
  color: #3da9fc;
  font-size: 12px;
}

.latest-version,
.released-at {
  height: 32px;
  font-size: 12px;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
}

.engine-tag {
  height: 24px;
  padding-top: 3px;
}

.engine-name {
  height: 32px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>
