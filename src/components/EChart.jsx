import React, { useState, useRef, useEffect } from "react";
import echarts from "echarts";

export default function EChart({ config, resize }) {
  const chart = useRef(null);
  const [chartElement, setChartElement] = useState(chart);

  //   useEffect(() => {
  //     console.log(chartElement.current);
  //     if (resize) {
  //       chartElement.resize();
  //     }
  //     if (!chartElement.current) {
  //       chartElement.setOption(config);
  //     } else {
  //       setChartElement(echarts.init(chart.current));
  //     }
  //   }, [config, chartElement, resize]);

  useEffect(() => {
    if (chartElement.current) {
      setChartElement(echarts.init(chartElement.current));
    } else {
      chartElement.setOption(config);
    }
  }, [resize, config, chartElement]);

  return <div ref={chart} style={{ height: "100%", width: "100%" }} />;
}
