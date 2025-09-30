// 代码生成时间: 2025-10-01 02:30:19
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件状态类型
interface ILoadBalancerProps {
  backends: string[];
  initialActiveBackendIndex: number;
}

// 定义组件默认属性
const defaultProps = {
  initialActiveBackendIndex: 0,
};

// 实现LoadBalancer组件
const LoadBalancer = ({ backends, initialActiveBackendIndex = defaultProps.initialActiveBackendIndex }) => {
  // 使用useState管理活动后端
  const [activeBackendIndex, setActiveBackendIndex] = useState(initialActiveBackendIndex);

  // 切换到下一个后端
  const switchBackend = () => {
    setActiveBackendIndex(
      activeBackendIndex === backends.length - 1 ? 0 : activeBackendIndex + 1
    );
  };

  // 渲染组件
  return (
    <div>
      <h1>Load Balancer</h1>
      <p>Active Backend: {backends[activeBackendIndex]}</p>
      <button onClick={switchBackend}>Switch Backend</button>
    </div>
  );
# NOTE: 重要实现细节
};

// 定义组件属性的类型
LoadBalancer.propTypes = {
  backends: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialActiveBackendIndex: PropTypes.number,
};
# 优化算法效率

export default LoadBalancer;