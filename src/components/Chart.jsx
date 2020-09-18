import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js';
import { chartOptions } from '../utils/chartConfig';
import PropTypes from 'prop-types';

function Chart({ chartData }) {
  const chartRef = useRef();

  useEffect(() => {
    new Chartjs(chartRef.current,
      {
        type: 'line',
        data: {
          datasets: [{
            label: 'coin price',
            data: chartData,
            borderWidth: 1,
            backgroundColor: 'rgba(0, 128, 255, 0.3)',
            borderColor: 'rgba(0, 146, 255, 0.5)',
          }],
        },
        options: chartOptions,
      });
  });
  return (
    <div className="Chart">
      <canvas ref={chartRef} width={300} height={300} />
    </div>
  );
}

Chart.propTypes = { 
  chartData: PropTypes.arrayOf(PropTypes.object)
}

Chart.defaultProps = { 
  chartData: [{t: 1598587468388, y: "14341.80" },{t: 1598598402043, y: "15341.80"}]
}

export default Chart;
