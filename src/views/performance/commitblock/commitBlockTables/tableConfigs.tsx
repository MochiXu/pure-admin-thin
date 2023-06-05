import dayjs from "dayjs";
import { reactive, ref, computed } from "vue";
import type { PaginationProps, LoadingConfig } from "@pureadmin/table";

/** 搜索到的 commit block table column */
export const searched_table_columns: TableColumnList = [
  {
    type: "selection",
    width: 20,
    align: "left",
    hide: ({ checkList }) => !checkList.includes("勾选列")
  },
  {
    label: "序号",
    type: "index",
    width: 70,
    hide: ({ checkList }) => !checkList.includes("序号列")
  },
  {
    label: "数据库",
    prop: "engine_name",
    minWidth: 80
  },
  {
    label: "版本",
    prop: "engine_version",
    minWidth: 80
  },
  {
    label: "分支",
    prop: "engine_branch",
    minWidth: 80
  },
  {
    label: "commit",
    prop: "engine_commit",
    minWidth: 80
  },
  {
    label: "message",
    prop: "engine_message",
    minWidth: 120
  },
  {
    label: "查询类别",
    prop: "task_search_group",
    minWidth: 100
  },
  {
    label: "测试日期",
    prop: "task_run_at",
    formatter: ({ runTime }) => dayjs(runTime).format("YYYY-MM-DD HH:mm:ss"),
    minWidth: 135
  },
  // {
  //   label: "完成日期",
  //   prop: "task_finish_at",
  //   minWidth: 80
  // },
  {
    label: "发版时间",
    prop: "engine_release_at",
    formatter: ({ releaseTime }) =>
      dayjs(releaseTime).format("YYYY-MM-DD HH:mm:ss"),
    minWidth: 135
  },
  // {
  //   label: "任务类型",
  //   prop: "type",
  //   minWidth: 150,
  //   cellRenderer: ({ row, props }) => (
  //     <el-tag
  //       size={props.size}
  //       type={row.type === 1 ? "danger" : ""}
  //       effect="plain"
  //     >
  //       {row.type === 1 ? "CI bot" : "手动"}
  //     </el-tag>
  //   )
  // },
  {
    label: "索引类型",
    prop: "index_type",
    minWidth: 100
  },
  {
    label: "索引通用参数",
    prop: "index_general_config",
    minWidth: 100
  }
  // {
  //   label: "发版时间",
  //   minWidth: 180,
  //   prop: "releaseTime",
  //   formatter: ({ releaseTime }) =>
  //     dayjs(releaseTime).format("YYYY-MM-DD HH:mm:ss")
  // },
  // {
  //   label: "运行时间",
  //   minWidth: 180,
  //   prop: "runTime",
  //   formatter: ({ runTime }) => dayjs(runTime).format("YYYY-MM-DD HH:mm:ss")
  // }
];

/** 用于比对的 commit block table column */
export const selected_table_columns: TableColumnList = [
  {
    type: "selection",
    width: 30,
    align: "left"
  },
  {
    label: "平台",
    prop: "platform",
    minWidth: 80
  },
  {
    label: "数据集",
    prop: "dataset",
    minWidth: 80
  },
  {
    label: "数据库",
    prop: "engine_name",
    minWidth: 80
  },
  {
    label: "版本",
    prop: "engine_version",
    minWidth: 80
  },
  {
    label: "分支",
    prop: "engine_branch",
    minWidth: 80
  },
  {
    label: "commit",
    prop: "engine_commit",
    minWidth: 80
  },
  {
    label: "message",
    prop: "engine_message",
    minWidth: 120
  },
  {
    label: "查询类别",
    prop: "task_search_group",
    minWidth: 100
  },
  {
    label: "测试日期",
    prop: "task_run_at",
    formatter: ({ runTime }) => dayjs(runTime).format("YYYY-MM-DD HH:mm:ss"),
    minWidth: 135
  },
  // {
  //   label: "完成日期",
  //   prop: "task_finish_at",
  //   minWidth: 80
  // },
  {
    label: "发版时间",
    prop: "engine_release_at",
    formatter: ({ releaseTime }) =>
      dayjs(releaseTime).format("YYYY-MM-DD HH:mm:ss"),
    minWidth: 135
  },
  // {
  //   label: "任务类型",
  //   prop: "type",
  //   minWidth: 150,
  //   cellRenderer: ({ row, props }) => (
  //     <el-tag
  //       size={props.size}
  //       type={row.type === 1 ? "danger" : ""}
  //       effect="plain"
  //     >
  //       {row.type === 1 ? "CI bot" : "手动"}
  //     </el-tag>
  //   )
  // },
  {
    label: "索引类型",
    prop: "index_type",
    minWidth: 100
  },
  {
    label: "索引通用参数",
    prop: "index_general_config",
    minWidth: 100
  }
  // {
  //   label: "发版时间",
  //   minWidth: 180,
  //   prop: "releaseTime",
  //   formatter: ({ releaseTime }) =>
  //     dayjs(releaseTime).format("YYYY-MM-DD HH:mm:ss")
  // },
  // {
  //   label: "运行时间",
  //   minWidth: 180,
  //   prop: "runTime",
  //   formatter: ({ runTime }) => dayjs(runTime).format("YYYY-MM-DD HH:mm:ss")
  // }
];

/** 加载动画 */
export const loading = ref(true);

/** 分页参数 */
export const pagination = reactive<PaginationProps>({
  total: 0,
  pageSize: 4,
  currentPage: 1,
  align: "right",
  pageSizes: [4, 8, 12, 16],
  background: true
});

/** 分页加载动画 */
export const loadingConfig = reactive<LoadingConfig>({
  text: "Loading Page 1 🐔 🏀 ...",
  viewBox: "-10, -10, 50, 50",
  spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
});

/** button 动态样式 */
export const buttonClass = computed(() => {
  return [
    "!h-[20px]",
    "reset-margin",
    "!text-gray-500",
    "dark:!text-white",
    "dark:hover:!text-primary"
  ];
});
