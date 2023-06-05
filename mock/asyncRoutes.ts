// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "menus.permissionPage",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "menus.permissionButton",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};
// 任务投递模块
// 性能测试结果
const taskManagerRouter = {
  path: "/taskmanager",
  meta: {
    icon: "taskline",
    title: "menus.hsTask",
    rank: 10
  },
  children: [
    {
      path: "/taskpage/createtask/index",
      name: "TaskCreater",
      meta: {
        // icon: "performance",
        title: "menus.hsTaskCreater",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/taskpage/taskstatus/index",
      name: "TaskStatus",
      meta: {
        // icon: "performance",
        title: "menus.hsTaskStatus",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/taskpage/taskmanager/index",
      name: "TaskManager",
      meta: {
        // icon: "performance",
        title: "menus.hsTaskManager",
        roles: ["admin"]
      }
    }
  ]
};

// 性能测试结果
const performanceRouter = {
  path: "/performance",
  meta: {
    icon: "performance",
    title: "menus.hsPerformance",
    rank: 12
  },
  children: [
    {
      path: "/performance/commitblock/index",
      name: "CommitBlock",
      meta: {
        // icon: "performance",
        title: "menus.hsCommitBlock",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/performance/visualization/index",
      name: "Charts",
      meta: {
        // icon: "performance",
        title: "menus.hsCharts",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/performance/manager/index",
      name: "Manager",
      meta: {
        // icon: "performance",
        title: "menus.hsManager",
        roles: ["admin"]
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter, performanceRouter, taskManagerRouter]
      };
    }
  }
] as MockMethod[];
