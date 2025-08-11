// 代码生成时间: 2025-08-12 01:58:13
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 如果使用TypeScript，可以导入 TypeScript 类型

// JSON数据格式转换器组件
const JsonFormatterComponent = ({ data }) => {
  // 使用useState管理state
  const [formattedData, setFormattedData] = useState(JSON.stringify(data, null, 2));
  
  // 格式化JSON数据的函数
  const formatJson = () => {
    try {
      const parsed = JSON.parse(formattedData);
      setFormattedData(JSON.stringify(parsed, null, 2));
    } catch (error) {
      // 处理JSON解析错误
      console.error('Invalid JSON:', error);
    }
  };
# NOTE: 重要实现细节

  return (
    <div>
      <textarea
        rows="20"
# 改进用户体验
        cols="50"
        value={formattedData}
        onChange={(e) => setFormattedData(e.target.value)}
      />
      <button onClick={formatJson}>Format JSON</button>
    </div>
  );
};

// 使用PropTypes或TypeScript进行类型检查
JsonFormatterComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default JsonFormatterComponent;