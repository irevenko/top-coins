import React, {useRef, useEffect} from 'react';
import Chartjs from 'chart.js';
import {chartOptions} from '../chartConfig';

function Chart({chartData}) {
  const chartRef = useRef();

  useEffect(() => {
    const newChart = new Chartjs(chartRef.current,
      {
        type: 'line',
        data: {
          datasets: [{
            label: 'coin price',
            data: chartData,
            borderWidth: 1,
            backgroundColor: "rgba(0, 128, 255, 0.3)",
            borderColor: "rgba(0, 146, 255, 0.5)",
          }]
        },
         options: chartOptions,
      });
  });
  return (
    <div className="Chart">
      <canvas ref={chartRef} width={300} height={300}></canvas>
    </div>
  )
}

export default Chart;
