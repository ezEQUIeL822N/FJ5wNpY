// 代码生成时间: 2025-08-05 05:54:10
// InteractiveChartGenerator.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 如果使用TypeScript，将PropTypes替换为interface

// 定义图表类型
const ChartType = {
  LINE: 'line',
  BAR: 'bar',
  PIE: 'pie',
};

// 定义图表配置类型
const ChartConfigProps = {
  type: PropTypes.oneOf(Object.values(ChartType)).isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object,
};

// 交互式图表生成器组件
const InteractiveChartGenerator = ({ type, data, options }) => {
  // state管理
  const [chartType, setChartType] = useState(type);

  // 根据图表类型选择不同的图表组件
  const renderChart = () => {
    switch (chartType) {
      case ChartType.LINE:
        return <LineChart data={data} options={options} />;
      case ChartType.BAR:
        return <BarChart data={data} options={options} />;
      case ChartType.PIE:
        return <PieChart data={data} options={options} />;
      default:
        return <p>Unknown chart type</p>;
    }
  };

  return (
    <div>
      <h2>Interactive Chart Generator</h2>
      <select value={chartType} onChange={(e) => setChartType(e.target.value)} >
        <option value={ChartType.LINE}>Line Chart</option>
        <option value={ChartType.BAR}>Bar Chart</option>
        <option value={ChartType.PIE}>Pie Chart</option>
      </select>
      {renderChart()}
    </div>
  );
};

// 组件propTypes定义
InteractiveChartGenerator.propTypes = ChartConfigProps;

// 如果使用TypeScript，可以定义组件的类型
// interface InteractiveChartGeneratorProps {
//   type: keyof typeof ChartType;
//   data: any[];
//   options?: Record<string, any>;
// }

// const InteractiveChartGenerator: React.FC<InteractiveChartGeneratorProps> = (props) => {
//   ...
// };

export default InteractiveChartGenerator;
