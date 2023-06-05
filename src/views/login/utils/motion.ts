import { h, defineComponent, withDirectives, resolveDirective } from "vue";

/** 封装@vueuse/motion动画库中的自定义指令v-motion */
export default defineComponent({
  name: "Motion",
  // props 用于子组件接受父组件数据传参 https://developer.aliyun.com/article/1181627
  props: {
    delay: {
      type: Number,
      default: 50
    }
  },
  render() {
    const { delay } = this;
    const motion = resolveDirective("motion");
    // 允许将指令应用于VNode,返回一个包含应用指令的VNode。 https://blog.csdn.net/weixin_43294560/article/details/117337934
    return withDirectives(
      h(
        "div",
        {},
        {
          default: () => [this.$slots.default()]
        }
      ),
      [
        [
          motion,
          {
            initial: { opacity: 0, y: 100 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                delay
              }
            }
          }
        ]
      ]
    );
  }
});
