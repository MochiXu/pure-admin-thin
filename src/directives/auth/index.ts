import { hasAuth } from "@/router/utils";
import { Directive, type DirectiveBinding } from "vue";

export const auth: Directive = {
  // el 指定绑定的元素 dom，binding 是传参对象，具体参考 https://juejin.cn/post/7088122861302317093
  // 在绑定元素的父组件，以及他自己的所有子节点都挂载完成后调用
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // 解构出 binding 里面的 value，表示传递给指令的值。例如：v-focus="1",获取到的值就是 1
    const { value } = binding;
    if (value) {
      if (!hasAuth(value)) {
        console.log("doesn't have auth, trying removeChild el ", el);
      }
      !hasAuth(value) && el.parentNode?.removeChild(el);
    } else {
      throw new Error("need auths! Like v-auth=\"['btn.add','btn.edit']\"");
    }
  }
};
