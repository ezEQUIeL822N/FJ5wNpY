// 代码生成时间: 2025-09-05 02:50:37
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 使用PropTypes进行类型检查

// 定义组件的Props类型
const propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']).isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

// 使用函数组件和Hooks实现HTTP请求处理器
const HttpRequestHandler = ({ url, method, onSuccess, onError }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 发送HTTP请求
  const fetchRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, { method });
      const result = await response.json();
      if (response.ok) {
        setData(result);
        setIsLoading(false);
        if (onSuccess) onSuccess(result);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      if (onError) onError(err);
    }
  };

  return (
    <div>
      <button onClick={fetchRequest}>Fetch Data</button>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error}</p> : null}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
    </div>
  );
};

// 设置组件的默认Props
HttpRequestHandler.defaultProps = {
  method: 'GET',
  onSuccess: () => {},
  onError: () => {},
};

// 设置组件的PropTypes
HttpRequestHandler.propTypes = propTypes;

export default HttpRequestHandler;
