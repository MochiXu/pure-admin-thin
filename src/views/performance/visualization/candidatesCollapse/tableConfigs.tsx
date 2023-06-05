import dayjs from "dayjs";

/** 用于比对的 commit block table column */
export const selected_table_columns: TableColumnList = [
  // {
  //   type: "selection",
  //   width: 30,
  //   align: "left"
  // },
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
