import { delay } from "@pureadmin/utils";
import { nextTick, onMounted, ref } from "vue";
import Plotly from "plotly.js-dist";

export function usePlotlyCharts() {
  /** 定义 Charts 引用 */
  const plotlyChartsRef = ref();

  onMounted(() => {
    // 等待页面渲染完成, 进行预处理
    delay(400).then(() => {
      nextTick(async () => {
        const data = [
          {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 77],
            type: "scatter"
          }
        ];
        const layout = {
          title: "Line chart example"
        };
        Plotly.newPlot(plotlyChartsRef.value, data, layout);
      });
    });
  });

  return {
    // Charts 引用
    plotlyChartsRef
  };
}
