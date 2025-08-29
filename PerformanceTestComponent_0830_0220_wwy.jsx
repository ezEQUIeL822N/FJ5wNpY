// 代码生成时间: 2025-08-30 02:20:31
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for the component
const propTypes = {
  initialCount: PropTypes.number.isRequired
};

// Define default props
const defaultProps = {
  initialCount: 0
};

// Function component that uses hooks
const PerformanceTestComponent = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Include PropTypes and defaultProps for type checking
  PerformanceTestComponent.propTypes = propTypes;
  PerformanceTestComponent.defaultProps = defaultProps;

  return (
    <div>
      <h1>Performance Test</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default PerformanceTestComponent;