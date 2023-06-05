import type { Emitter } from "mitt";
import mitt from "mitt";

// 自定义事件类型，这些都是和页面操作相关的事件
type Events = {
  resize: {
    detail: {
      width: number;
      height: number;
    };
  };
  openPanel: string;
  tagViewsChange: string;
  tagViewsShowModel: string;
  logoChange: boolean;
  changLayoutRoute: {
    indexPath: string;
    parentPath: string;
  };
};

export const emitter: Emitter<Events> = mitt<Events>();
