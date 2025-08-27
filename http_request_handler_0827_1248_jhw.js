// 代码生成时间: 2025-08-27 12:48:45
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 定义类型（如果使用TypeScript，则替换为interface）
const propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
};

// 函数组件实现
const HttpRequestHandler = ({ url, method = 'GET', onSuccess, onFail }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 执行HTTP请求
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (onSuccess) {
          onSuccess(result);
        }
        setData(result);
      } catch (e) {
        if (onFail) {
          onFail(e);
        }
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]); // 依赖项变化时重新执行

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null;
};

HttpRequestHandler.propTypes = propTypes;

export default HttpRequestHandler;