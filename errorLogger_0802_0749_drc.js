// 代码生成时间: 2025-08-02 07:49:28
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义PropTypes
const propTypes = {
  onError: PropTypes.func.isRequired
};

// 使用TypeScript时，可以定义如下类型
// interface ErrorLoggerProps {
//   onError: (error: Error) => void;
// }

// 错误日志收集器组件
const ErrorLogger = ({ onError }) => {
  const [errorLogs, setErrorLogs] = useState([]);

  // 捕获错误并添加到日志中
  const captureError = (error) => {
    setErrorLogs(prevLogs => [...prevLogs, error.message]);
    if (onError) {
      onError(error);
    }
  };

  // 渲染错误日志列表
  const renderErrorLogs = () => {
    return errorLogs.map((log, index) => {
      return (
        <div key={index}>
          {log}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Error Logs</h2>
      {renderErrorLogs()}
    </div>
  );
};

ErrorLogger.propTypes = propTypes;

export default ErrorLogger;
