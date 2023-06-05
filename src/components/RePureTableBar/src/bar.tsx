import { delay } from "@pureadmin/utils";
import { useEpThemeStoreHook } from "@/store/modules/epTheme";
import { defineComponent, ref, computed, watch } from "vue";
import RefreshIcon from "./svg/refresh.svg?component";
import SettingIcon from "./svg/settings.svg?component";
import CollapseIcon from "./svg/collapse.svg?component";

// 子组件 props, 由父组件传递参数
const props = {
  /** 头部最左边的标题 */
  title: {
    type: String,
    default: "列表"
  }
};

export default defineComponent({
  name: "PureTableBar",
  props,
  emits: ["refresh"],
  setup(props, { emit, slots, attrs }) {
    const buttonRef = ref();
    const checkList = ref(["勾选列"]);
    const size = ref("small");
    const loading = ref(false);
    // 监听 ref 对象的变化
    watch(checkList, (newValue, oldValue) => {
      console.log("checkList 对象的值已更改：", newValue, oldValue);
    });

    // 用来调整表格内容的紧凑程度, 此处提供样式
    const getDropdownItemStyle = computed(() => {
      return s => {
        return {
          background:
            s === size.value ? useEpThemeStoreHook().epThemeColor : "",
          color: s === size.value ? "#fff" : "var(--el-text-color-primary)"
        };
      };
    });

    const iconClass = computed(() => {
      return [
        "text-black",
        "dark:text-white",
        "duration-100",
        "hover:!text-primary",
        "cursor-pointer",
        "outline-none"
      ];
    });

    // 刷新表格数据
    function onReFresh() {
      console.log("refresh in PureTableBar");
      loading.value = true;
      // emit 之后父组件会触发 @refresh
      emit("refresh");
      delay(500).then(() => (loading.value = false));
    }

    const dropdown = {
      dropdown: () => (
        <el-dropdown-menu class="translation">
          <el-dropdown-item
            style={getDropdownItemStyle.value("large")}
            // 箭头函数的作用非常简洁，不用额外写 onClick 实现
            onClick={() => (size.value = "large")}
          >
            宽松
          </el-dropdown-item>
          <el-dropdown-item
            style={getDropdownItemStyle.value("default")}
            onClick={() => (size.value = "default")}
          >
            默认
          </el-dropdown-item>
          <el-dropdown-item
            style={getDropdownItemStyle.value("small")}
            onClick={() => (size.value = "small")}
          >
            紧凑
          </el-dropdown-item>
        </el-dropdown-menu>
      )
    };

    const reference = {
      reference: () => (
        <SettingIcon
          class={["w-[16px]", iconClass.value]}
          onMouseover={e => (buttonRef.value = e.currentTarget)}
        />
      )
    };

    return () => (
      <>
        <div {...attrs} class="w-[99/100] mt-6 p-2 bg-bg_color">
          <div class="flex justify-between w-full h-[60px] p-4">
            <p class="font-bold truncate">{props.title}</p>
            {/* 列表右上角操作面板 */}
            <div class="flex items-center justify-around">
              {/* 如果 buttons 插槽存在, 则对 buttons 进行样式限制 */}
              {slots?.buttons ? (
                <div class="flex mr-4">{slots.buttons()}</div>
              ) : null}
              <el-tooltip effect="dark" content="刷新" placement="top">
                <RefreshIcon
                  class={[
                    "w-[16px]",
                    iconClass.value,
                    loading.value ? "animate-spin" : ""
                  ]}
                  onClick={() => onReFresh()}
                />
              </el-tooltip>
              <el-divider direction="vertical" />

              <el-tooltip effect="dark" content="密度" placement="top">
                <el-dropdown v-slots={dropdown} trigger="click">
                  {/* 密度 icon */}
                  <CollapseIcon class={["w-[16px]", iconClass.value]} />
                </el-dropdown>
              </el-tooltip>
              <el-divider direction="vertical" />

              <el-popover v-slots={reference} width="200" trigger="click">
                <el-checkbox-group v-model={checkList.value}>
                  <el-checkbox label="序号列" />
                  <el-checkbox label="勾选列" />
                </el-checkbox-group>
              </el-popover>
            </div>

            <el-tooltip
              popper-options={{
                modifiers: [
                  {
                    name: "computeStyles",
                    options: {
                      adaptive: false,
                      enabled: false
                    }
                  }
                ]
              }}
              placement="top"
              virtual-ref={buttonRef.value}
              virtual-triggering
              trigger="hover"
              content="列设置"
            />
          </div>
          {/* TODO 这里的 slots 作用, 参考 https://cn.vuejs.org/guide/components/slots.html#scoped-slots*/}
          {/* 本组件(子组件) 绑定了 size 和 checkList 两个属性，用来向插槽出口传递数据 */}
          {slots.default({ size: size.value, checkList: checkList.value })}
        </div>
      </>
    );
  }
});
