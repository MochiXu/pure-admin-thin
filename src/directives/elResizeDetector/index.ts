import { Directive, type DirectiveBinding, type VNode } from "vue";
import elementResizeDetectorMaker from "element-resize-detector";
import type { Erd } from "element-resize-detector";
import { emitter } from "@/utils/mitt";

const erd: Erd = elementResizeDetectorMaker({
  strategy: "scroll"
});

export const resize: Directive = {
  // 在绑定元素的父组件，以及他自己的所有子节点都挂载完成后调用
  mounted(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode) {
    // 实现对 dom 元素大小改变进行监听 https://blog.csdn.net/weixin_44490109/article/details/114636364
    erd.listenTo(el, elem => {
      const width = elem.offsetWidth;
      const height = elem.offsetHeight;
      // binding.instance 表示使用该指令的组件实例
      if (binding?.instance) {
        emitter.emit("resize", { detail: { width, height } });
      } else {
        // dispatchEvent 派发自定义事件 https://juejin.cn/post/6844903833227771917
        vnode.el.dispatchEvent(
          new CustomEvent("resize", { detail: { width, height } })
        );
      }
    });
  },
  unmounted(el: HTMLElement) {
    erd.uninstall(el);
  }
};
