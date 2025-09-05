// 代码生成时间: 2025-09-06 04:10:03
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的propTypes
const propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// 定义组件的默认props
const defaultProps = {
  data: [],
  columns: [],
};

// Excel表格自动生成器组件
const ExcelTableGenerator = ({ data, columns }) => {
  // 使用useState Hook进行状态管理
  const [selectedRow, setSelectedRow] = useState(null);
  
  // 处理行点击事件
  const handleRowClick = (row) => {
    setSelectedRow(row);
  };
  
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            onClick={() => handleRowClick(row)}
            style={{ backgroundColor: selectedRow === row ? '#e0e0e0' : 'transparent' }}
          >
            {columns.map((column) => (
              <td key={`${row.id}-${column.key}`}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// 设置propTypes和defaultProps
ExcelTableGenerator.propTypes = propTypes;
ExcelTableGenerator.defaultProps = defaultProps;

export default ExcelTableGenerator;