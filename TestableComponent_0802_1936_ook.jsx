// 代码生成时间: 2025-08-02 19:36:53
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript则可以替换PropTypes为接口
// interface IExampleProps {
//   text: string;
// }

// 使用PropTypes或TypeScript类型
const propTypes = {
  text: PropTypes.string.isRequired,
};

const TestableComponent = ({ text }) => {
  // state管理
  const [count, setCount] = useState(0);

  // 函数处理增加计数
  const increment = () => {
    setCount(count + 1);
  };

  // 渲染组件
  return (
    <div>
      <p>{text}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

TestableComponent.propTypes = propTypes;

export default TestableComponent;
